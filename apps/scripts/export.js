import myJson from '../translations.json' assert {type: 'json'};
let new_json = {}
// retrieve latest json
async function getJSON(){
    new_json = await chrome.storage.local.get(['json']); //await
    console.log(new_json);
    if (new_json['json']==undefined || new_json['json']=='undefined'){
        // assign to global variable
        new_json = myJson //checks json is alr populated or not cleared
    }
    else{
        new_json = new_json['json']
    }
    console.log(new_json)
    document.getElementById("json-display").textContent = JSON.stringify(new_json, undefined, 2);
}
// perform download
async function download(){
    new_json = await chrome.storage.local.get(['json']); //await
    console.log(new_json);
    if (new_json['json']==undefined || new_json['json']=='undefined'){
        new_json = myJson //checks json is alr populated or not cleared
    }
    else{
        new_json = new_json['json']
    }
    console.log(new_json)
    // document.getElementById("json-display").textContent = JSON.stringify(new_json, undefined, 2);
    // https://stackoverflow.com/questions/23160600/chrome-extension-local-storage-how-to-export
    var result = JSON.stringify(new_json);

    // Save as file
    var url = 'data:application/json;base64,' + btoa(unescape(encodeURIComponent(result)));
    chrome.downloads.download({
        url: url,
        filename: 'translations.json'
    });
}
//runtime
document.getElementById("copy").addEventListener("click",function(){
    navigator.clipboard.writeText(document.getElementById("json-display").textContent).then(()=>{
        alert("Copied to clipboard!")
    });
    
})
document.getElementById("download").addEventListener("click",download);
getJSON()