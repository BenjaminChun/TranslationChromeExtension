import myJson from '../translations.json' assert {type: 'json'};
// get the json
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

//runtime
let new_json = {}
// when clicked, ask for name of country and then add it in
document.getElementById('add-country').addEventListener('click',async ()=>{
    var trans_json = await getJSON()
    var country_name = prompt('You want to ADD a new country into the JSON\nWhat would be the name?')
    if (!country_name || country_name.match(new RegExp('\\s','g')) || trans_json[country_name.toUpperCase()]){
        alert('Unable to proceed without a proper name!')
        return
    }
    country_name = country_name.toUpperCase()
    trans_json[country_name] = {}
    chrome.storage.local.set({'json':trans_json}, function(){
        console.log("setting");
        console.log(trans_json);
    });
    alert(`Country ${country_name} has been added!`)
})
// when clicked ask for country to remove and remove it
document.getElementById('remove-country').addEventListener('click',async ()=>{
    var trans_json = await getJSON()
    var country_name = prompt('You want to REMOVE a country from the JSON\nWhat would be its name?')
    if (!country_name || country_name.match(new RegExp('\\s','g')) || !trans_json[country_name.toUpperCase()]){
        alert('Unable to proceed without a proper name!')
        return
    }
    country_name = country_name.toUpperCase()
    delete trans_json[country_name]
    chrome.storage.local.set({'json':trans_json}, function(){
        console.log("setting");
        console.log(trans_json);
    });
    alert(`Country ${country_name} has been removed!`)
})