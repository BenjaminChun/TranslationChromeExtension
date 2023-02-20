// import json file
import myJson from '../translations.json' assert {type: 'json'};


// specific helper functions cannot be converted to json since json requires double quotes
// FOOTER IT DE ES FR PL
// only differences is line height
// if copy paste, just change the country name
function en_to_it_footer_line_height(text_input) {
    return text_input.replace(/(<p style="font-size: 10px;font-family: verdana, geneva, sans-serif;">)(?=<a target="_blank" style="font-size: 10px; font-family: verdana, geneva, sans-serif; text-decoration: none; color: #333333;" href="https:\/\/it\.creative\.com\/sxfi\/">SUPER X-FI<\/a>)/,'<p style="font-size: 10px; line-height: 200%; font-family: verdana, geneva, sans-serif;">');
}
function en_to_de_footer_line_height(text_input) {
    return text_input.replace(/(<p style="font-size: 10px;font-family: verdana, geneva, sans-serif;">)(?=<a target="_blank" style="font-size: 10px; font-family: verdana, geneva, sans-serif; text-decoration: none; color: #333333;" href="https:\/\/de\.creative\.com\/sxfi\/">SUPER X-FI<\/a>)/,'<p style="font-size: 10px; line-height: 200%; font-family: verdana, geneva, sans-serif;">');
}
function en_to_es_footer_line_height(text_input) {
    return text_input.replace(/(<p style="font-size: 10px;font-family: verdana, geneva, sans-serif;">)(?=<a target="_blank" style="font-size: 10px; font-family: verdana, geneva, sans-serif; text-decoration: none; color: #333333;" href="https:\/\/es\.creative\.com\/sxfi\/">SUPER X-FI<\/a>)/,'<p style="font-size: 10px; line-height: 200%; font-family: verdana, geneva, sans-serif;">');
}
function en_to_fr_footer_line_height(text_input) {
    return text_input.replace(/(<p style="font-size: 10px;font-family: verdana, geneva, sans-serif;">)(?=<a target="_blank" style="font-size: 10px; font-family: verdana, geneva, sans-serif; text-decoration: none; color: #333333;" href="https:\/\/fr\.creative\.com\/sxfi\/">SUPER X-FI<\/a>)/,'<p style="font-size: 10px; line-height: 200%; font-family: verdana, geneva, sans-serif;">');
}
function en_to_pl_footer_line_height(text_input) {
    return text_input.replace(/(<p style="font-size: 10px;font-family: verdana, geneva, sans-serif;">)(?=<a target="_blank" style="font-size: 10px; font-family: verdana, geneva, sans-serif; text-decoration: none; color: #333333;" href="https:\/\/pl\.creative\.com\/sxfi\/">SUPER X-FI<\/a>)/,'<p style="font-size: 10px; line-height: 200%; font-family: verdana, geneva, sans-serif;">');
}

// -------function definitions-------
// manages the translate btn state
 async function manage_translate(){
  var selection = document.getElementById("target-country").value;
  var translation_btn = document.getElementById("translate");
  if (selection !== 'none'){
      translation_btn.disabled = false;
  }
};

// comms with content script, saves current copy in local storage for undo, manages the undo button, performs the translation
async function translateAndSend(){
    new_json = await chrome.storage.local.get(['json']); //await
    console.log(new_json);
    if (new_json['json']==undefined || new_json['json']=='undefined'){
        new_json = myJson //checks json is alr populated or not cleared
    }
    else{
        new_json = new_json['json']
    }
    console.log(new_json);
    var selection = document.getElementById("target-country").value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {selection: String(selection)}, function(response) {
            if (response == undefined){
                alert("Error, extension not able to communicate with webpage. Refresh and try again!");
            }
            else{
                let result = response.html; //html code from contentscript/stripo page
                chrome.storage.local.set({'en':result}, function(){
                    console.log("setting en in localstorage"); //set the en html into local storage for UNDO function
                });
                document.getElementById("undo").disabled=false; //enable undo for them
                if (confirm("Converted from EN to "+selection.toUpperCase()+"\r\n"+"NOTE: Please wait for the page to refresh ↻")) {
                    for (const key in new_json[selection.toUpperCase()]){
                        console.log(`${key}: ${new_json[selection.toUpperCase()][key]}`);
                        result = result.replace(new RegExp(new_json['EN'][key],"igs"),new_json[selection.toUpperCase()][key]);
                    }
                    switch(selection.toUpperCase()){
                        case 'DE':
                            result = en_to_de_footer_line_height(result);
                        case 'IT':
                            result = en_to_it_footer_line_height(result);
                        case 'FR':
                            result = en_to_fr_footer_line_height(result);
                        case 'ES':
                            result = en_to_es_footer_line_height(result);
                        case 'PL':
                            result = en_to_pl_footer_line_height(result);
                    }    
                    console.log(result);
                    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
                      
                      chrome.tabs.sendMessage(tabs[0].id, {html: String(result)}, function(response) { //send message when button pressed
                          console.log(response.farewell);
                    });
                  });
                }
            }   
        });
    });
}
// retrieve from localstorage, reset button and localstorage and comms with content script
async function undo(){
    let en_html = await chrome.storage.local.get(['en']); //get en html from localstorage
    en_html = en_html['en'] //weird quirk where getting 'en' does not return json['en'] but just json
    // console.log(en_html)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {selection: "undo"}, function(response) {
            if (response == undefined){
                alert("Error, extension not able to communicate with webpage. Refresh and try again!");
            }
            else{
                document.getElementById("undo").disabled=true; //disable undo
                chrome.storage.local.set({'en':'undefined'}, function(){
                    console.log("setting undefined in localstorage");
                }); //set undefined for en html in localstorage
                if (confirm("Converting back to EN "+"\r\n"+"NOTE: Please wait for the page to refresh ↻")) {
                    chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
                      chrome.tabs.sendMessage(tabs[0].id, {html: String(en_html)}, function(response) { //send message when button pressed
                          console.log(response.farewell);
                    });
                  });
                }
            }
        });
    });
}
// self-explanatory
async function clearLocalStorage(){
    chrome.storage.local.set({'json':'undefined'}, function(){
        // console.log("setting to undefined : json");
    });
    await refreshOptions()
    alert("Reseted to local storage, will now read from installation folder's translations.json");
}
// retrieves from latest json
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
// dynamically populates the countries' options in select
async function refreshOptions(){
    let trans_json = await getJSON()
    var target = document.getElementById('target-country')
    target.innerHTML = '<option value="none" selected hidden>Select an Option</option>'
    for (var lang in trans_json){
        if (lang.toUpperCase()=='EN'){
            continue
        }
        var option = document.createElement('option')
        option.value = lang.toUpperCase()
        option.innerHTML = 'EN TO ' + lang.toUpperCase()
        target.appendChild(option)
    }
}

// RUN TIME
let new_json = {};
console.log("hello from popup");
let undobtn = document.getElementById("undo");
document.getElementById('clear-localstorage').addEventListener('click',clearLocalStorage)
document.addEventListener("DOMContentLoaded", async function(){
    refreshOptions()
  var selection = document.getElementById("target-country"); 
  let x = await chrome.storage.local.get(['en']); //async part wait for x to populate before continuing
  console.log(x['en'])
  if (x['en']==undefined || x['en']=='undefined'){ //checks if x['en'] is populated alr, en = html code of before translation
    undobtn.disabled=true; //if lack then disable undo since nth to undo to
  }
  else{
    undobtn.disabled=false;
  }
  selection.addEventListener("change",manage_translate); //manage translate button
  document.getElementById("translate").addEventListener("click", translateAndSend); //translate and send => takes care of all the communication
  document.getElementById("undo").addEventListener('click',undo) //undo only 1 step back
});