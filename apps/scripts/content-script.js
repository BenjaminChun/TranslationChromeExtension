console.log("CONTENT here");
// global scope variables
let iframeDocument; 
let language_chosen;
let to_send;
// event listener waits on any messages sent using chrome.runtime
chrome.runtime.onMessage.addListener( 
    async function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        // enter this when there is selection parameter in msg sent from combine.js
        if (request.selection){ 
            language_chosen = request.selection;
            var iframe = document.getElementsByClassName("stripo-preview-frame");
            iframeDocument = iframe[0].contentDocument || iframe[0].contentWindow.document;
            to_send = iframeDocument.getElementsByClassName("esd-email-paddings ui-droppable")[0].innerHTML
            sendResponse({html: to_send,selection:String(request.selection)});
            console.log("success");
        }
        // enter when selection parameter is not set in msg from combine.js
        else{
            console.log("in else of listener");
            // error catching -> html parameter will be present for all translation / testing tasks
            if (request.html == undefined) {
                alert("Error has occurred, unable to receive html from extension.");
            }
            // html parameter is present -> need to change the html of the doc
            else{
                // change the html 
                // IF CLASS NAME CHANGE, EDIT LINE BELOW
                iframeDocument.getElementsByClassName("esd-email-paddings ui-droppable")[0].innerHTML=request.html;
                // enter if testing
                if (request.testing==true){
                    // to_send is a global variable that stores the initial html before changes
                    console.log(to_send)
                    // set pre-highlight in local storage for later reference
                    chrome.storage.local.set({'pre-highlight':to_send}, function(){
                        console.log("setting pre-highlight in localstorage"); 
                    });
                    // change the body and add a clear button to body
                    document.getElementsByTagName("body")[0].style.opacity="50%";
                    var btn = document.createElement("button");
                    btn.innerHTML = "Clear"
                    btn.className = "button-clear"
                    btn.addEventListener("click",function(){
                        iframeDocument.getElementsByClassName("esd-email-paddings ui-droppable")[0].innerHTML=to_send;
                        document.getElementsByTagName("body")[0].style.opacity="100%";
                        btn.remove();
                    })
                    btn.style.position = "absolute"
                    btn.style.backgroundColor="#333"
                    btn.style.border = 'black solid 2px'
                    btn.style.color="#fff"
                    btn.style.padding="10px 20px"
                    btn.style.right="400px"
                    btn.style.top="100px"
                    btn.style.zIndex="100"
                    btn.style.fontFamily = 'akrobat, sans-serif'
                    btn.style.fontSize = 'larger'
                    document.getElementsByTagName("body")[0].appendChild(btn)
                }
                // enter if undoing testing changes
                // remove the clear button
                else if (request.testing==false){
                    console.log("received testing = false")
                    let pre_highlight = await chrome.storage.local.get(['pre-highlight']); //get en html from localstorage
                    iframeDocument.getElementsByClassName("esd-email-paddings ui-droppable")[0].innerHTML=pre_highlight['pre-highlight'];
                    document.getElementsByTagName("body")[0].style.opacity="100%";
                    document.querySelector('.button-clear').remove()
                }
                else{
                    // console.log(language_chosen.toUpperCase());
                    if (language_chosen.toUpperCase() == 'GR'){
                        var y = iframeDocument.getElementsByClassName("ui-droppable")[1];
                        var x = document.createElement('tr');
                        x.className = 'ui-draggable';
                        x.innerHTML = '<tr class="ui-draggable"><td class="esd-block-text es-p10 esd-frame esd-hover esd-draggable esd-block esdev-disable-select" align="center" esd-custom-block-id="357933" bgcolor="#efefef" esd-links-color="#000000" esd-handler-name="textElementHandler" contenteditable="true"><div class="esd-block-btn esd-no-block-library" contenteditable="false"><div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div><div class="esd-move ui-draggable-handle" title="Move"><a><span class="es-icon-move"></span></a></div><div class="esd-copy ui-draggable-handle" title="Copy"><a><span class="es-icon-copy"></span></a></div><div class="esd-delete" title="Delete"><a><span class="es-icon-delete"></span></a></div></div><p style="color: #000000; line-height: 22px; font-size: 14px; font-family: \'trebuchet ms\', \'lucida grande\', \'lucida sans unicode\', \'lucida sans\', tahoma, sans-serif;"><strong>Please <a target="_blank" style="line-height: 22px; font-size: 14px; font-family: \'trebuchet ms\', \'lucida grande\', \'lucida sans unicode\', \'lucida sans\', tahoma, sans-serif; color: #000000;" href="https://gr.creative.com/account/signup">log in</a> or <a target="_blank" style="line-height: 22px; font-size: 14px; font-family: \'trebuchet ms\', \'lucida grande\', \'lucida sans unicode\', \'lucida sans\', tahoma, sans-serif; color: #000000;" href="https://gr.creative.com/account/signup">sign up</a>&nbsp;as a member to enjoy member prices.</strong></p></td></tr>'
                        y.appendChild(x);
                    }
                    
                    // var doc_name_element = document.getElementsByClassName("email-name-input");
                    // doc_name_element[0].click();
                    // doc_name_element[0].value = language_chosen.toUpperCase();
                    // clicks on the save btn
                    document.getElementById("headerSaveButton").click();
                    // reload is a hotfix to the error where the stripo elements are not working

                    // adds a DOM to show loading
                    document.getElementsByTagName("body")[0].style.opacity="50%";
                    var tag = document.createElement("div");
                    tag.className="loader"
                    var style = document.createElement("style");
                    style.type='text/css';
                    var keyframes = ".loader {position: fixed;top: 50vh;left: 50vw;display: flex;align-items: center;justify-content: center;border: 16px solid #f3f3f3;border-top: 16px solid #2c974b;border-radius: 50%;width: 120px;height: 120px; animation: spin 2s linear infinite;}  @keyframes spin {0% { transform: rotate(0deg); }100% { transform: rotate(360deg); }}"
                    style.innerHTML = keyframes;
                    document.getElementsByTagName('head')[0].appendChild(style);
                    document.getElementsByTagName("html")[0].appendChild(tag);

                    setTimeout(function(){
                        location.reload();
                    }, 1500);
                }
            }
        }
    }
  );