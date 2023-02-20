import myJson from '../translations.json' assert {type: 'json'};
// manages state of input fields
async function enableOtherLang(){
    // loop thru all lang in myjson and disabled = false
    for (var lang in myJson){
        if (document.getElementById(lang.toUpperCase())!=undefined){
            document.getElementById(lang.toUpperCase()).disabled = false
        }
    }
    document.getElementById("highlight").disabled=false
    let translations_json = await getJSON()
    refreshDropDown(translations_json)
}
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
async function getJSON(){
    //purely get json
    new_json = await chrome.storage.local.get(['json']); //await
    if (new_json['json']==undefined || new_json['json']=='undefined'){
        new_json = myJson //checks json is alr populated or not cleared
    }
    else{
        new_json = new_json['json']
    }
    return new_json
}
// refresh the options based on keyword search - if empty then show all else show those relevant
function refreshDropDown(translations_json_obj){
    let userData = document.getElementsByClassName('dropbtn')[0].value;
    let emptyArray = [];
    let array = translations_json_obj['EN']
    // if dropbtn target value not undefined
    if (userData!=''){
        // look thru keywords in array which is json 
        for (let keyword in array){
            // if user searched text is in any keyword or regex in json, push it in
            if (array[keyword].toLowerCase().match(new RegExp(userData.toLowerCase())) || (keyword.toLowerCase().match(new RegExp(userData.toLowerCase()))) || array[keyword].toLowerCase().startsWith(userData.toLowerCase())|| keyword.toLowerCase().startsWith(userData.toLowerCase())) {
                emptyArray.push(keyword)
            }
        }
    }
    else{
        // push all keywords into empty array for next operations
        for (let keyword in array){
            emptyArray.push(keyword)
        }
    }
    // refresh dropdown
    // remove and then insert relevant
    document.getElementById("myDropdown").remove()
    var dropdownContent = document.createElement('div');
    dropdownContent.className = 'dropdown-content';
    dropdownContent.id = 'myDropdown';
    document.getElementsByClassName("EN-select-dropdown")[0].appendChild(dropdownContent);
    for (let entry in emptyArray){
        // console.log(emptyArray[entry])
        var a = document.createElement("a");
        a.innerHTML = emptyArray[entry]
        a.className = new_json['EN'][emptyArray[entry]]
        // populate will populate the input fields
        a.addEventListener('click',populate)
        document.getElementsByClassName('dropdown-content')[0].appendChild(a);
    }
}
// populate the language fields based on selected option
function populate(){
    // populating the language fields
    // Global variable
    en_keyword = this.innerHTML;
    // place the small text of en keyword
    document.getElementById('key-name').innerHTML = en_keyword
    document.getElementsByClassName("dropbtn")[0].value = new_json['EN'][en_keyword];
    // add keyword field to become empty
    // replace value of fields with appropriate value
    for (var lang in new_json){
        if (document.getElementById(lang.toUpperCase()) == null){
            continue
        }
        else{
            document.getElementById(lang.toUpperCase()).value = new_json[lang.toUpperCase()][en_keyword];
            document.getElementById(lang.toUpperCase()).disabled = false;
            document.getElementById(lang.toUpperCase()).style.color = 'black';
            if (new_json[lang.toUpperCase()][en_keyword] == undefined){
                document.getElementById(lang.toUpperCase()).value = 'undefined';
                document.getElementById(lang.toUpperCase()).style.color = '#888';
            }
        }
    }
    // disable / enable buttons
    document.getElementById("delete").disabled = false
    document.getElementById("highlight").disabled = false;
    document.getElementById("add").disabled = true;
    document.getElementById("update").disabled = false;
}
// comms with contentscript, receives original html and sends back the highlighted html
function highlight(){
    // retrieve keyword to test and highlight them
    var testingkeyword = document.getElementsByClassName('dropbtn')[0].value
    if (testingkeyword=='' || testingkeyword==null){
        alert("Do not highlight based on empty space! This will break the stripo page!")
    }
    // send message with selection param to get html back
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {selection: "test"}, function(response) {
            if (response == undefined){
                alert("Error, extension not able to communicate with webpage. Refresh and try again!");
            }
            else{
                //html code from contentscript/stripo page
                let result = response.html; 
                //testing keyword is in str form
                testingkeyword = new RegExp(testingkeyword,'igs'); 
                // $& is the matched text
                var replacement = '<span style="background-color:#FFFF00; padding:5px">$&</span>'
                result = response.html.replace(testingkeyword,replacement);   
                // Global state variable to track state of tool, if reset from here then state testing change back to false
                state_testing = true
                // send message with highlighted html and param testing set to true
                chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {html: String(result),testing: true}, function(response) {});
                });
                // enable clear button
                document.getElementById('clear').disabled = false
            }
        });
    });
}
// comms with contentscript with message that would logically replace highlighted text with original
function clearHighlight(){
    // send message with html and testing param -> false means revert back to original
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {html: '',testing: false}, function(response) {
            console.log(response)
            // change state back to false and disable clear button
            if (state_testing==true){
                state_testing = false
                document.getElementById("clear").disabled = true
            }
        });
    });
}
// checks if there is any change from json to the input field, if there is, check and cfm if change is what they want then effect change
function updateJSON(trans_json){
    // given the translation_json, update the translation_json with the values and set 
    let changed = false;
    let message =`WARNING!!
Please confirm that you want to UPDATE the following 
FROM:
    "EN": {
        "${en_keyword}" : "${trans_json['EN'][en_keyword]}"
    }
TO:
    "EN": {
        "${en_keyword}" : "${document.getElementsByClassName('dropbtn')[0].value}"
    }`
    if (trans_json['EN'][en_keyword] != document.getElementsByClassName('dropbtn')[0].value){
        if (confirm(message)){
            changed = true;
            trans_json['EN'][en_keyword] = document.getElementsByClassName('dropbtn')[0].value}
    }
    
    for (var lang in trans_json){
        if (document.getElementById(lang.toUpperCase()) != undefined){
            // no changes
            // json = undefined, doc = undefined
            // json = smt, doc = smt

            // changes to be made
            // json = smt, doc = smt else
            // json = undefined, doc = smt

            // if json entry == document entry OR (json entry == undefined AND document entry matches 'undefined') then do nth
            if (trans_json[lang.toUpperCase()][en_keyword] == document.getElementById(lang.toUpperCase()).value || (trans_json[lang.toUpperCase()][en_keyword]==undefined && document.getElementById(lang.toUpperCase()).value.match(new RegExp('undefined'),'gi'))){}
            //else means changes to be made
            else{
                if (confirm(`WARNING!!
Please confirm that you want to UPDATE the following 
FROM:
    "${lang.toUpperCase()}": {
        "${en_keyword}" : "${trans_json[lang.toUpperCase()][en_keyword]}"
    }
TO:
    "${lang.toUpperCase()}": {
        "${en_keyword}" : "${document.getElementById(lang.toUpperCase()).value}"
    }`)){
                    changed = true;
                    trans_json[lang.toUpperCase()][en_keyword] = document.getElementById(lang.toUpperCase()).value
                }
            }
        }
    }
    // set translations_json into the local storage
    chrome.storage.local.set({'json':trans_json}, function(){
        console.log("setting");
        console.log(trans_json);
    });
    // show alert success
    if (changed==true){
        alert("Success!");
        // reset the input fields
        reset()
    }
    else{
        alert('Nothing has been changed.')
    }
}
// similarly cfm that the keyword is being deleted then effect change
async function deleteJSON(translation_json){
    // delete the entry in json based on the selected entry
    if (confirm(`WARNING\nYou are deleting: ${en_keyword}
"EN" : {
    ${en_keyword} : ...
},
"DE" : {
    ${en_keyword} : ...
},
"IT" : {
    ${en_keyword} : ...
},
...
...
...
... `)){
        for (var lang in translation_json){
            // find the relevant lang and delete
            if (document.getElementById(lang.toUpperCase())!=undefined){
                delete translation_json[lang][en_keyword]
            }
        }
        // delete the EN keyword
        delete translation_json['EN'][en_keyword]
        // set the new json in local storage
        chrome.storage.local.set({'json':translation_json}, function(){
            console.log("setting");
            console.log(translation_json);
        });
        alert("Success!");
    }
}
// reset the entire form
function reset(){
    // reset entire form
    var iterate = document.getElementsByTagName('input');
    for (var item in iterate){
        if (typeof iterate[item] != 'object'){
            continue
        }
        console.log(iterate[item])
        iterate[item].value = ''
        if (iterate[item].className == 'dropbtn'){
            continue
        }
        iterate[item].disabled = true;
        iterate[item].style.color = 'black'
    }
    // reset the buttons 
    document.getElementById("highlight").disabled = true
    document.getElementById("delete").disabled = true;
    document.getElementById("update").disabled = true;
    document.getElementById("add").disabled = true;
    document.getElementById('key-name').innerHTML = ''
}
// prompt for a new name to store it as, then ask to confirm the changes
function addkeyword(translation_json){
    var added = false
    var name = prompt('Please choose a name for the new entry:\nCannot have whitespace!')
    if (!name || name.match(new RegExp('\\s','g') || translation_json['EN'][name])){
        alert('Unable to proceed without a proper name!')
        return
    }
    var regex = document.getElementsByClassName("dropbtn")[0].value
    var input_fields = document.getElementsByTagName("input");
    //insert en into json
    // console.log(en_keyword)
    // console.log(translation_json['EN'])
    // console.log(translation_json['EN'][en_keyword])
    if (confirm(`Confirm that you want to ADD
    "EN" : {
        ... ,
        ${name} : ${regex}
    }`)){
        added = true
    }
    for (let index = 1; index < input_fields.length; index++) {
        if (input_fields[index].value == ''){
            continue
        }
        console.log(input_fields[index])
        // adding new keyword into json with input fields' value
        translation_json[input_fields[index].id.toUpperCase()][name] = input_fields[index].value
        console.log(translation_json[input_fields[index].id.toUpperCase()][name])
    }
    if (added==true){
        translation_json['EN'][name] = regex
        alert("Entries have been added! Remember to export and update json file after additions/updates!")
        // set in local storage
        chrome.storage.local.set({'json':translation_json}, function(){
            console.log("setting");
            console.log(translation_json);
        });
        // reset all fields
        reset();
    }
    else{
        alert('Nothing has been added')
    }
    // refresh dropdown
    refreshDropDown(translation_json);
    
}
// events on start up, set up the divs and the outward lines from en to other langs
async function onStartUp(){
    var replace_div = document.getElementsByClassName('replacement-div')[0]
    var trans_json = await getJSON()
    for (var lang in trans_json){
        if (lang.toUpperCase()=='EN'){
            continue
        }
        var div = document.createElement('div')
        var span = document.createElement('span')
        var input = document.createElement('input')
        div.classList.add(lang.toUpperCase(), 'block')
        span.innerHTML = lang.toUpperCase()
        input.type = 'text'
        input.id = lang.toUpperCase()
        input.disabled = true
        div.appendChild(span)
        div.appendChild(input)
        replace_div.appendChild(div)
    }
    refreshDropDown(trans_json)
    // creating lines to show connections
    // $('.EN-div').connections({to:'.block'});
    drawLines('EN-div','block')
}
// draw the lines from origin to target
function drawLines(originClassName,targetClassName){
    var array = document.getElementsByClassName(originClassName)
    var target = document.getElementsByClassName(targetClassName)
    for (var entry in array){
        if (typeof(array[entry])=='object'){
            //[top,left]
            // console.log()
            var dimenCenterCoord = [array[entry].getBoundingClientRect().top+(array[entry].getBoundingClientRect().height/2),array[entry].getBoundingClientRect().left+array[entry].getBoundingClientRect().width/2]
            for (var entry2 in target){
                if (typeof(target[entry2])=='object'){
                    var dimenCenterCoord2 = [target[entry2].getBoundingClientRect().top+(target[entry2].getBoundingClientRect().height/2),target[entry2].getBoundingClientRect().left+target[entry2].getBoundingClientRect().width/2]
                    var top = dimenCenterCoord[0] //origin 
                    var height = dimenCenterCoord[0]-dimenCenterCoord2[0] //origin - target
                    var left = dimenCenterCoord[1] // origin
                    var width = dimenCenterCoord[1] - dimenCenterCoord2[1] // origin - target
                    var div = document.createElement('div')
                    // o
                    // t
                    if (height<0){
                        height = Math.abs(height)
                        // top = top + array[entry].getBoundingClientRect().height/2
                        // height = height - array[entry].getBoundingClientRect().height/2
                        div.style.top = top.toString()
                        div.style.borderBottom = '1px solid #c62828'
                    }
                    // t
                    // o
                    else if (height>0){
                        div.style.top = (top-height).toString()
                        div.style.borderTop = '1px solid #c62828'
                        // height = height - array[entry].getBoundingClientRect().height/2
                    }
                    // o
                    //    t
                    if (width<0){
                        width = Math.abs(width)
                        div.style.left = left.toString()
                        div.style.borderLeft = '1px solid #c62828'
                    }
                    else{
                        div.style.left = left.toString()
                        div.style.borderRight = '1px solid #c62828'
                    }
                    div.style.height = height.toString()
                    div.style.width = width.toString()
                    div.style.position = 'absolute'
                    div.style.zIndex = -2
                    div.style.borderRadius = '20px 0px 0px 20px';
                    document.getElementsByClassName('combine-body')[0].appendChild(div)
                }
            }
            
        }
    }
}

// runtime
onStartUp()
// declaring global variable
let new_json = {}
let en_keyword = ''
let state_testing = false
document.getElementsByClassName("dropbtn")[0].addEventListener("click",async ()=>{
    let translation_json = await getJSON()
    refreshDropDown(translation_json)
    myFunction()
})
document.getElementById("highlight").addEventListener("click",highlight)
document.getElementById("update").addEventListener("click",async ()=>{
    let json_obj = await getJSON()
    updateJSON(json_obj)
})
document.getElementById("delete").addEventListener("click", async ()=>{
    let json_obj = await getJSON()
    deleteJSON(json_obj)
    json_obj = await getJSON()
    // refresh dropdown with new json
    refreshDropDown(json_obj)
    // reset all the fields
    reset()
})
document.getElementById("add").addEventListener("click", async ()=>{
    let translation_json = await getJSON();
    addkeyword(translation_json);
})
document.getElementById("clear").addEventListener("click",clearHighlight)
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}
// control the dropbtn dropdown
document.querySelector('.dropbtn').onkeyup = async (e)=>{
    document.getElementById('highlight').disabled = false
    var regexvalue = ''
    if (e.target.value==''){
        reset()
    }
    else{
        // add if type
        // update if select
        // update/add if edit
        enableOtherLang()
        regexvalue = await getJSON()
        regexvalue = regexvalue['EN'][en_keyword]
        if (e.target.value!=regexvalue){
            document.getElementById('update').disabled = false
            document.getElementById('add').disabled = false
        }
        // if no change then purely update
        else{
            document.getElementById('add').disabled = true
        }
    }
    // getJSON
    let new_json = await getJSON()
    refreshDropDown(new_json)
    // keep dropdown open
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        openDropdown.classList.add('show');
    }
}
