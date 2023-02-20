// import json file
import myJson from '../translations.json' assert {type: 'json'};


// specific helper functions
// FOOTER IT DE ES FR PL
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
// EUR TO GBP
function eur_to_gbp(text_input){
    return text_input.replace(/EUR 79/gi,"GBP 79");
}
// UNSTRUCTURED
function en_to_de_free_male_update(text_input){
    return text_input.replace(/KOSTENLOSES (Sound Blaster Headset Stand|Creative BT-W2)(?= im Wert von)/,"KOSTENLOSER $1");
}

//COPYSIGN
function copysign_encode(text_input){
    return text_input.replace(/&copy;|Ⓒ|©/,"&#9400;");
}

// -------function definitions-------
// switch case for selection to function
function translate(text_input, selection_input){
    if (selection_input =="nordic"){
        return en_to_nordic(text_input);
    }
    else if (selection_input == "gr"){
        return en_to_gr(text_input);
    }
    else if (selection_input == "uk"){
        return en_to_uk(text_input);
    }
    else {
        return en_to_it_fr_es_pl_de(text_input,selection_input);
    }
}

// translate en to uk
function en_to_uk(text_input) { 
    //domain 
    var result = text_input.replace(new RegExp(myJson.EN.domain,"ig"),myJson.UK.domain);
    //dollar
    result = result.replace(new RegExp(myJson.EN.dollar,"ig"),myJson.UK.dollar);
    //copysign
    result = copysign_encode(result);
    //eur to gbp
    result = eur_to_gbp(result);
    return result;
}
// translate en to gr
function en_to_gr(text_input) { 
    //domain
    var result = text_input.replace(new RegExp(myJson.EN.domain,"ig"),myJson.GR.domain);
    //dollar
    result = result.replace(new RegExp(myJson.EN.dollar,"ig"),myJson.GR.dollar);
    return result;
}
// translate en to gr
function en_to_nordic(text_input) { 
    //domain
    var result = text_input.replace(new RegExp(myJson.EN.domain,"ig"),myJson.NORDIC.domain);
    return result;
}
// translate en to it,fr,es,pl,de
function en_to_it_fr_es_pl_de(text_input,language){
    var uppercase_lang = language.toUpperCase();
    //footer
    var result = text_input.replace(new RegExp(myJson.EN.footer_creative_saver,"ig"),myJson[uppercase_lang].footer_creative_saver);
    result = result.replace(new RegExp(myJson.EN.footer_delivery_methods,"ig"),myJson[uppercase_lang].footer_delivery_methods);
    result = result.replace(new RegExp(myJson.EN.footer_communication_para,"ig"),myJson[uppercase_lang].footer_communication_para);
    result = result.replace(new RegExp(myJson.EN.footer_unsub,"ig"),myJson[uppercase_lang].footer_unsub);
    result = result.replace(new RegExp(myJson.EN.footer_privacy,"ig"),myJson[uppercase_lang].footer_privacy);
    result = result.replace(new RegExp(myJson.EN.footer_contact,"ig"),myJson[uppercase_lang].footer_contact);
    result = result.replace(new RegExp(myJson.EN.footer_copyright,"ig"),myJson[uppercase_lang].footer_copyright);
    //domain
    result = result.replace(new RegExp(myJson.EN.domain,"ig"),myJson[uppercase_lang].domain);
    //dollar
    result = result.replace(new RegExp(myJson.EN.dollar,"ig"),myJson[uppercase_lang].dollar);
    //free shipping
    result = result.replace(new RegExp(myJson.EN.free_shipping,"ig"),myJson[uppercase_lang].free_shipping);
    //shopnow, buynow or both tgt
    if (uppercase_lang === 'IT' || uppercase_lang === 'ES'){
        result = result.replace(new RegExp(myJson.EN.shop_now_buy_now,"ig"),myJson[uppercase_lang].shop_now_buy_now);
    }
    else{
        result = result.replace(new RegExp(myJson.EN.shop_now,"ig"),myJson[uppercase_lang].shop_now);
        result = result.replace(new RegExp(myJson.EN.buy_now,"ig"),myJson[uppercase_lang].buy_now);
    }
    //learn more
    result = result.replace(new RegExp(myJson.EN.learn_more,"ig"),myJson[uppercase_lang].learn_more);
    //new
    result = result.replace(new RegExp(myJson.EN.new,"ig"),myJson[uppercase_lang].new);
    //free worth..
    result = result.replace(new RegExp(myJson.EN.free_worth,"ig"),myJson[uppercase_lang].free_worth);
    //free
    result = result.replace(new RegExp(myJson.EN.free,"ig"),myJson[uppercase_lang].free);
    //promocode
    result = result.replace(new RegExp(myJson.EN.promo_code,"ig"),myJson[uppercase_lang].promo_code);
    //browser view
    result = result.replace(new RegExp(myJson.EN.browser_view,"ig"),myJson[uppercase_lang].browser_view);
    //white
    result = result.replace(new RegExp(myJson.EN.white,"ig"),myJson[uppercase_lang].white);
    //header
    result = result.replace(new RegExp(myJson.EN.header_display,"ig"),myJson[uppercase_lang].header_display);
    result = result.replace(new RegExp(myJson.EN.header_facebook,"ig"),myJson[uppercase_lang].header_facebook);
    //footer
    result = result.replace(new RegExp(myJson.EN.footer_explore_more,"ig"),myJson[uppercase_lang].footer_explore_more);
    result = result.replace(new RegExp(myJson.EN.footer_speakers,"ig"),myJson[uppercase_lang].footer_speakers);
    result = result.replace(new RegExp(myJson.EN.footer_headphones,"ig"),myJson[uppercase_lang].footer_headphones);
    result = result.replace(new RegExp(myJson.EN.footer_work_solutions,"ig"),myJson[uppercase_lang].footer_work_solutions);
    result = result.replace(new RegExp(myJson.EN.footer_audio_enthusiasts,"ig"),myJson[uppercase_lang].footer_audio_enthusiasts);
    //free male update (custom to de)
    if (uppercase_lang === 'DE'){
        result = en_to_de_free_male_update(result);
    }
    switch(uppercase_lang){
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
    return result
}

// populates output text field
function populate(text_output){
    editor2.setValue(text_output,0);
}
// manage translate button
function manage_translate(){
    var selection = document.getElementById("target-country").value;
    var translation_btn = document.getElementById("translate");
    if (selection !== 'none'){
        translation_btn.disabled = false;
    }
}
// copy text from output
function copy_output() {
    /* Get the text field */
    const copyText = editor2.getValue();
    console.log(copyText);
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
  
    /* Alert the copied text */
    alert("Copied output text");
}
function workthemagic(d){
    console.log(d[0]);
}

function setPageBackgroundColor(selection) {
    //send from page to extension
    document.body.style.backgroundColor = 'orange';
    let y = document.getElementsByClassName("stripo-preview-frame");
    console.log(selection);
    window.postMessage({ type: "FROM_PAGE", text: "Hello from the webpage!" }, "*");
    // let ans = translate(y,selection)
}
// old version
// btn.addEventListener('click', event => { //this is an anonymous function
//     // CHANGE BELOW
//     let d = document.getElementsByClassName("esd-email-paddings");
//     console.log(d[0]);
//     let text_input = d[0].innerHTML;
//     let text_output = translate(text_input,selection.value);
//     console.log(text_output);
//     d[0].innerHTML = text_output;
// });
