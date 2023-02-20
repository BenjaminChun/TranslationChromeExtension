// Made 2 changes from chee koon and ricson's edition as of 24/8/22
// 1. change the rules regarding free and new
// 2. added header and footer rules

// -------global definitions------- 
// DOMAIN
const EN_DOMAIN_REGEX = new RegExp("en.creative.com","ig"); //i for case and g is for global search
const UK_DOMAIN = "uk.creative.com";
const GR_DOMAIN = "gr.creative.com";
const NORDIC_DOMAIN = "nordic.creative.com";
const ES_DOMAIN = "es.creative.com";
const IT_DOMAIN = "it.creative.com";
const DE_DOMAIN = "de.creative.com";
const FR_DOMAIN = "fr.creative.com";
const PL_DOMAIN = "pl.creative.com";
// DOLLAR
const EN_DOLLAR_REGEX = new RegExp("(&euro;|€)(\\w*)[.]?(\\w*)","g");
const EN_TO_UK_DOLLAR = '&#163;$2.$3';
const EN_TO_GR_DOLLAR = "$2,$3$1";
const EN_TO_IT_DOLLAR = "$1$2,$3";
const EN_TO_ES_DE_FR_DOLLAR = "$2,$3$1";
const EN_TO_PL_DOLLAR = "$2$3,00zł";
// FREE SHIPPING
const EN_SHIP_REGEX = new RegExp("FREE SHIPPING","ig");
const EN_TO_ES_SHIP = "ENV&Iacute;O GRATU&Iacute;TO";
const EN_TO_IT_SHIP = "SPEDIZIONE GRATUITA";
const EN_TO_DE_SHIP = "KOSTENLOSE LIEFERUNG";
const EN_TO_FR_SHIP = "LIVRAISON GRATUITE";
const EN_TO_PL_SHIP = "BEZPŁATNA DOSTAWA";
// SHOP NOW BUY NOW
const EN_SHOP_NOW_BUY_NOW_REGEX = new RegExp("(SHOP NOW|BUY NOW)","ig");
const EN_TO_ES_SHOP_NOW_BUY_NOW = "COMPRAR AHORA";
const EN_TO_IT_SHOP_NOW_BUY_NOW = "ACQUISTA ORA";
// SHOP NOW
const EN_SHOP_NOW_REGEX = new RegExp("SHOP NOW","ig");
const EN_TO_DE_SHOP_NOW = "JETZT EINKAUFEN"
const EN_TO_FR_SHOP_NOW = "ACHETEZ MAINTENANT"
const EN_TO_PL_SHOP_NOW = "KUPUJ TERAZ";
// BUY NOW
const EN_BUY_NOW_REGEX = new RegExp("BUY NOW","ig");
const EN_TO_DE_BUY_NOW = "JETZT KAUFEN";
const EN_TO_FR_BUY_NOW = "ACHETER MAINTENANT";
const EN_TO_PL_BUY_NOW = "KUP TERAZ";
// LEARN MORE
const EN_LEARN_MORE_REGEX = new RegExp("LEARN MORE","ig");
const EN_TO_ES_LEARN_MORE = "M&Aacute;S INFORMACI&Oacute;N"
const EN_TO_IT_LEARN_MORE = "PER SAPERNE DI PI&Ugrave;"
const EN_TO_DE_LEARN_MORE = "ERFAHREN SIE MEHR";
const EN_TO_FR_LEARN_MORE = "EN SAVOIR PLUS";
const EN_TO_PL_LEARN_MORE = "DOWIEDZ SIĘ WIĘCEJ";
// NEW
const EN_NEW_REGEX = new RegExp("NEW\\b","ig");
const EN_TO_ES_NEW = "NUEVO";
const EN_TO_IT_NEW = "NUOVO";
const EN_TO_DE_NEW = "NEU";
const EN_TO_FR_NEW = "NOUVEAU";
const EN_TO_PL_NEW = "NOWOŚĆ";
// FREE WORTH
const EN_FREE_WORTH_REGEX = new RegExp("FREE(.*?)worth","ig");
const EN_TO_ES_FREE_WORTH = "GRATIS el$1valorado en";
const EN_TO_IT_FREE_WORTH = "GRATIS il$1dal valore di";
const EN_TO_DE_FREE_WORTH = "KOSTENLOSES$1im Wert von";
const EN_TO_FR_FREE_WORTH = "GRATUIT$1d&rsquo;une valeur de";
const EN_TO_PL_FREE_WORTH = "DARMOWY$1wart";
// FREE
const EN_FREE_REGEX = new RegExp("FREE\\b","ig");
const EN_TO_ES_FREE = "GRATUITO";
const EN_TO_IT_FREE = "GRATUITO";
const EN_TO_DE_FREE = "KOSTENLOS";
const EN_TO_FR_FREE = "GRATUIT";
const EN_TO_PL_FREE = "BEZPŁATNE";
// PROMO CODE
const EN_PROMO_CODE_REGEX = new RegExp("(/help/)ordering(.*?)#i-have-a-promo-code-how-do-i-redeem","ig");
const EN_TO_ES_PROMO_CODE =  "$1pedidos$2#tengo-un-c-digo-de-promoci-n-c-mo-lo";
const EN_TO_IT_PROMO_CODE =  "$1ordine$2#ho-un-codice-promozionale-come-posso";
const EN_TO_DE_PROMO_CODE = "$1bestellung$2#ich-habe-einen-aktionscode-wie-l-se-ich";
const EN_TO_FR_PROMO_CODE =  "$1commande$2#j-39-ai-un-code-promo-comment-puis-je";
const EN_TO_PL_PROMO_CODE =  "$1ordering$2#i-have-a-promo-code-how-do-i-redeem";
// BROWSER VIEW
const EN_BROWSER_VIEW_REGEX = new RegExp("((alt|title)(.*?))VIEW ALL DEALS\\s*>\\s*","ig");
const EN_TO_FR_BROWSER_VIEW = "$1VOIR TOUTES LES OFFRES >";
const EN_TO_IT_BROWSER_VIEW = "$1VISUALIZZA TUTTE LE OFFERTE>";
const EN_TO_DE_BROWSER_VIEW = "$1ALLE ANGEBOTE ANZEIGEN>";
const EN_TO_ES_BROWSER_VIEW = "$1VEA TODAS LAS OFERTAS >";
const EN_TO_PL_BROWSER_VIEW = "$1ZOBACZ CAŁĄ OFERTĘ >";
// WHITE
const EN_WHITE_REGEX = new RegExp("\\(WHITE\\)","ig");
const EN_TO_FR_WHITE = "(BLANC)";
const EN_TO_DE_WHITE = "(WEIß)";
const EN_TO_IT_WHITE = "(BIANCO)";
const EN_TO_ES_WHITE = "(BLANCO)";
const EN_TO_PL_WHITE = "(BIAŁY)";

// HEADER
// HEADER DISPLAY
const EN_HEADER_DISPLAY_REGEX = new RegExp("If this email does not display correctly(.*)view its full version","ig");
const EN_TO_IT_HEADER_DISPLAY = "Se non riesci a visualizzare correttamente questa email$1seleziona la versione completa";
const EN_TO_DE_HEADER_DISPLAY = "Wenn diese E-mail nicht korrekt angezeigt wird$1wechseln Sie die Ansicht zur Vollversion";
const EN_TO_ES_HEADER_DISPLAY = "Si este e-mail no se muestra correctamente$1vea su versión completa";
const EN_TO_FR_HEADER_DISPLAY = "Si cet email ne s'affiche pas correctement$1regardez-le dans sa version complète"
const EN_TO_PL_HEADER_DISPLAY = "Jeśli ta wiadomość nie wyświetla się poprawnie$1wyświetl w pełnej wersji"
// FOOTER
// FOOTER EXPLORE MORE
const EN_FOOTER_EXPLORE_MORE_REGEX = new RegExp("EXPLORE MORE","ig");
const EN_TO_IT_FOOTER_EXPLORE_MORE = "SCOPRI DI PIÙ SU";
const EN_TO_DE_FOOTER_EXPLORE_MORE = "MEHR ERFAHREN";
const EN_TO_ES_FOOTER_EXPLORE_MORE = "EXPLORE MÁS";
const EN_TO_FR_FOOTER_EXPLORE_MORE = "EN SAVOIR PLUS";
const EN_TO_PL_FOOTER_EXPLORE_MORE = "DOWIEDZ SIĘ WIĘCEJ";
// FOOTER SPEAKERS
const EN_FOOTER_SPEAKERS_REGEX = new RegExp("SPEAKERS(?=\b|<)","ig");
const EN_TO_IT_FOOTER_SPEAKERS = "ALTOPARLANTI";
const EN_TO_DE_FOOTER_SPEAKERS = "LAUTSPRECHER";
const EN_TO_ES_FOOTER_SPEAKERS = "ALTAVOCES";
const EN_TO_FR_FOOTER_SPEAKERS = "ENCEINTES";
const EN_TO_PL_FOOTER_SPEAKERS = "GŁOŚNIKI";
// FOOTER HEADPHONES
const EN_FOOTER_HEADPHONES_REGEX = new RegExp("HEADPHONES(?=<)(.*?\\|)","ig");
const EN_TO_IT_FOOTER_HEADPHONES = "CUFFIE$1&nbsp;<br class='esd-mobile-hidden'>";
const EN_TO_DE_FOOTER_HEADPHONES = "KOPFHÖRER$1&nbsp;<br class='esd-mobile-hidden'>";
const EN_TO_ES_FOOTER_HEADPHONES = "AURICULARES$1&nbsp;<br class='esd-mobile-hidden'>";
const EN_TO_FR_FOOTER_HEADPHONES = "CASQUES / ÉCOUTEURS$1&nbsp;<br class='esd-mobile-hidden'>";
const EN_TO_PL_FOOTER_HEADPHONES = "SŁUCHAWKI$1&nbsp;<br class='esd-mobile-hidden'>";
// FOOTER WORK SOLUTIONS
const EN_FOOTER_WORK_SOLUTIONS_REGEX = new RegExp("WORK SOLUTIONS(?=\b|<)","ig");
const EN_TO_IT_FOOTER_WORK_SOLUTIONS = "SOLUZIONI LAVORATIVE";
const EN_TO_DE_FOOTER_WORK_SOLUTIONS = "FÜR DIE ARBEIT";
const EN_TO_ES_FOOTER_WORK_SOLUTIONS = "SOLUCIONES DE TRABAJO";
const EN_TO_FR_FOOTER_WORK_SOLUTIONS = "SOLUTIONS POUR LE TRAVAIL";
const EN_TO_PL_FOOTER_WORK_SOLUTIONS = "ROZWIĄZANIA DO PRACY";
// FOOTER AUDIO ENTHUSIASTS
const EN_FOOTER_AUDIO_ENTHUSIASTS_REGEX = new RegExp("AUDIO ENTHUSIASTS(?=\b|<)","ig");
const EN_TO_IT_FOOTER_AUDIO_ENTHUSIASTS = "APPASSIONATI DI AUDIO";
const EN_TO_DE_FOOTER_AUDIO_ENTHUSIASTS = "AUDIO-ENTHUSIASTEN";
const EN_TO_ES_FOOTER_AUDIO_ENTHUSIASTS = "ENTUSIASTAS DEL SONIDO";
const EN_TO_FR_FOOTER_AUDIO_ENTHUSIASTS = "PASSIONNÉS D'AUDIO";
const EN_TO_PL_FOOTER_AUDIO_ENTHUSIASTS = "ENTUZJAŚCI AUDIO";
// FOOTER CREATIVE SAVER SHIPPING
const EN_FOOTER_DELIVERY_METHODS_REGEX = new RegExp("https://en.creative.com/help/delivery#what-are-the-shipping-methods-available","ig");
const EN_TO_IT_FOOTER_DELIVERY_METHODS = "https://it.creative.com/help/consegna#quali-sono-i-metodi-di-spedizione-disponibili-e-come-posso-usufruire-della-spedizione-gratuita";
const EN_TO_DE_FOOTER_DELIVERY_METHODS = "https://de.creative.com/help/lieferung#welche-versandmethoden-stehen-zur-auswahl-und-wie-nehme-ich-kostenlosen-versand-in-anspruch";
const EN_TO_ES_FOOTER_DELIVERY_METHODS = "https://es.creative.com/help/entrega#-cu-les-son-los-m-todos-de-env-o-disponibles-y-c-mo-opto-al-env-o-gratuito"
const EN_TO_FR_FOOTER_DELIVERY_METHODS = "https://fr.creative.com/help/livraison#quels-sont-les-modes-de-livraison-propos-s-et-comment-b-n-ficier-de-la-livraison-gratuite";
const EN_TO_PL_FOOTER_DELIVERY_METHODS = "https://pl.creative.com/help/delivery#what-are-the-shipping-methods-available"

const EN_FOOTER_CREATIVE_SAVER_REGEX = new RegExp("Free Creative Saver Shipping on orders over EUR 79.00.","ig");
const EN_TO_IT_FOOTER_CREATIVE_SAVER = "Consegna gratuita per ordini di importo superiore a €79,00.";
const EN_TO_DE_FOOTER_CREATIVE_SAVER = "KOSTENLOSE Lieferung ab einem Bestellwert von 79,00€.";
const EN_TO_ES_FOOTER_CREATIVE_SAVER = "Envío gratuito en pedidos superiores a 79,00€.";
const EN_TO_FR_FOOTER_CREATIVE_SAVER = "Livraison Creative Saver gratuite pour les commandes d'un montant supérieur à 79,00€.";
const EN_TO_PL_FOOTER_CREATIVE_SAVER = "Bezpłatna dostawa Creative Saver Shipping przy zamówieniu o wartości powyżej 329,00zł."
// FOOTER COMMUNICATION PARAGRAPH
const EN_FOOTER_COMMUNICATION_PARA_REGEX = new RegExp("This communication was sent to you as a Creative subscriber.<br>You are subscribed as: {{UserAttribute\\['Email']}}.<br>To ensure delivery of future emails, please add info@mailers.europe.creative.com to your address book.","ig");
const EN_TO_IT_FOOTER_COMMUNICATION_PARA = "Questa comunicazione ti è stata inviata perché sei iscritto alla newsletter Creative.<br>Il tuo indirizzo di iscrizione è: {{UserAttribute['Email']}}.<br>Per essere sicuro/a di ricevere i nostri messaggi e-mail aggiungi il seguente indirizzo info@mailers.europe.creative.com alla tua rubrica.";
const EN_TO_DE_FOOTER_COMMUNICATION_PARA = "Sie erhalten diese Informationen als registrierter Kunde von Creative.<br>Sie sind angemeldet als: {{UserAttribute['Email']}}.<br>Damit unsere E-Mails zuverlässig bei Ihnen ankommen, empfehlen wir Ihnen, die Adresse info@mailers.europe.creative.com in Ihr Adressbuch aufzunehmen."
const EN_TO_ES_FOOTER_COMMUNICATION_PARA = "Este mensaje ha sido enviado a todos los suscriptores de Creative.<br>Te has suscrito como: {{UserAttribute['Email']}}.<br>Para garantizar que recibes nuestros mensajes, agrega info@mailers.europe.creative.com a tu libreta de direcciones."
const EN_TO_FR_FOOTER_COMMUNICATION_PARA = "Vous avez reçu ce message en tant qu'abonné Creative.<br>Vous êtes abonné avec l'adresse : {{UserAttribute['Email']}}.<br>Pour vous assurer que votre e-mail est envoyé, veuillez ajouter info@mailers.europe.creative.com à votre carnet d'adresses."
const EN_TO_PL_FOOTER_COMMUNICATION_PARA = "Otrzymales te wiadomosc, poniewaz jestes subskrybentem Creative.<br>Twój adres subskrypcji: {{UserAttribute['Email']}}.<br>Aby upewnic sie, ze twoja wiadomosc do nas dotrze, dodaj adres info@mailers.europe.creative.com do twojej ksiazki adresowej."
// FOOTER UNSUB_PRIVACY_CONTACT
const EN_FOOTER_UNSUB_REGEX = new RegExp("Unsubscribe","g");
const EN_FOOTER_PRIVACY_REGEX = new RegExp("Privacy Policy","ig");
const EN_FOOTER_CONTACT_REGEX = new RegExp("Contact us","ig");
const EN_TO_IT_FOOTER_UNSUB = "Annulla iscrizione";
const EN_TO_IT_FOOTER_PRIVACY = "Regole sulla riservatezza";
const EN_TO_IT_FOOTER_CONTACT = "Contatti";
const EN_TO_DE_FOOTER_UNSUB = "Abmelden";
const EN_TO_DE_FOOTER_PRIVACY = "Datenschutzrichtlinien";
const EN_TO_DE_FOOTER_CONTACT = "Kontakt";
const EN_TO_ES_FOOTER_UNSUB = "Cancelar suscripción";
const EN_TO_ES_FOOTER_PRIVACY = "Política de confidencialidad";
const EN_TO_ES_FOOTER_CONTACT = "Contacto";
const EN_TO_FR_FOOTER_UNSUB = "Désabonner";
const EN_TO_FR_FOOTER_PRIVACY = "Règles de confidentialité";
const EN_TO_FR_FOOTER_CONTACT = "Nous contacter";
const EN_TO_PL_FOOTER_UNSUB = "Wypisz sie";
const EN_TO_PL_FOOTER_PRIVACY = "Polityka prywatnosci";
const EN_TO_PL_FOOTER_CONTACT = "Skontaktuj sie z nami";
// FOOTER COPYRIGHT
const EN_FOOTER_COPYRIGHT_REGEX = new RegExp("Copyright © 2022. All rights reserved Creative Labs \\(Europe\\) Limited, Reg No: 580841<br>Unit Q2, North Ring Business Park, Santry, Dublin, D09 EV70, Ireland<br>Savings based on price of full retail product.<br>Whilst Creative endeavours to keep the information up-to-date and accurate Creative makes no representations or warranties of any kind, express or implied about the completeness, accuracy, reliability, suitability or availability with respect to the information, products, services or offers contained in this email for any purpose. The price and availability of products, services and offers are country specific and subject to change without prior notice.","ig");
const EN_TO_IT_FOOTER_COPYRIGHT = "Copyright © 2022. Tutti i diritti riservati a Creative Labs (Europe) Limited, N. reg: 580841<br>Unit Q2, North Ring Business Park, Santry, Dublin, D09 EV70, Ireland.<br>I risparmi sono calcolati in base al prezzo completo del prodotto di vendita.<br>Pur impegnandosi per fornire informazioni precise e aggiornate, Creative non dichiara alcunché né offre alcuna garanzia, espressa o implicita, relativamente alla completezza, accuratezza, affidabilità, idoneità o disponibilità in merito a informazioni, prodotti, servizi o offerte contenuti nel presente messaggio e-mail per alcun motivo. Prezzo e disponibilità dei prodotti, dei servizi e delle offerte variano in base al Paese e sono soggetti a modifiche senza preavviso."
const EN_TO_DE_FOOTER_COPYRIGHT = "Copyright © 2022. Alle Rechte vorbehalten. Creative Labs (Europe) Limited, Reg No: 580841<br>Unit Q2, North Ring Business Park, Santry, Dublin, D09 EV70, Ireland.<br>Die Nachlässe basieren auf dem Preis für das vollständige Einzelhandelsprodukt.<br>Obwohl Creative sich stets um die Bereitstellung aktueller, korrekter Informationen bemüht, übernimmt Creative keinerlei Haftung oder Garantie, weder ausdrücklich noch stillschweigend, für die Vollständigkeit, Korrektheit, Zuverlässigkeit, Eignung oder Verfügbarkeit der in dieser E-Mail aufgeführten Informationen, Produkte, Dienstleistungen oder Angebote für irgendeinen Zweck. Die Preise und Verfügbarkeit der Produkte, Dienstleistungen und Angebote sind länderspezifisch und Änderungen vorbehalten.";
const EN_TO_ES_FOOTER_COPYRIGHT = "Copyright © 2022. Todos los derechos reservados Creative Labs (Europe) Limited, n.º de reg.: 580841<br>Unit Q2, North Ring Business Park, Santry, Dublin, D09 EV70, Ireland<br>Ahorro basado en el precio total del producto.<br>Aunque Creative adopta todas las medidas razonables para mantener la precisión y actualidad de la información, Creative no se responsabiliza ni ofrece garantías de ningún tipo, expresas ni implícitas, de la integridad, precisión, fiabilidad, adecuación ni disponibilidad en relación con la información, productos, servicios u ofertas incluidos en este mensaje de correo electrónico en caso alguno. El precio y la disponibilidad de los productos, servicios y ofertas pueden variar en función del país y están sujetos a modificaciones sin previo aviso."
const EN_TO_FR_FOOTER_COPYRIGHT = "Copyright © 2022. Tous droits réservés Creative Labs (Europe) Limited, Reg No: 580841<br>Unit Q2, North Ring Business Park, Santry, Dublin, D09 EV70, Ireland.<br>Réductions sur la base du prix du produit vendu au détail.<br>Bien que nous nous efforcions de fournir toujours des informations à jour et exactes, Creative exclut toute représentation ou garantie, expresse ou implicite, quant à l'exhaustivité, l'exactitude, la fiabilité, la pertinence ou la disponibilité des informations, produits, services ou offres contenus dans ce courrier électronique pour quelque but que ce soit. Le prix et la disponibilité des produits, des services et des offres sont spécifiques à chaque pays et susceptibles d'être modifiés sans avis préalable."
const EN_TO_PL_FOOTER_COPYRIGHT = "Copyright © 2022. Wszelkie prawa zastrzezone, Creative Labs (Europe) Ltd, Nr rej.: Ireland 580841<br>Unit Q2, North Ring Business Park, Santry, Dublin, D09 EV70, Ireland.<br>Rabaty obliczone na podstawie pelnej ceny sklepowej produktu.<br>Firma Creative doklada wszelkich staran, aby prezentowane informacje byly aktualne. Firma Creative nie gwarantuje jednak w zaden sposób, jawny badz dorozumiany, kompletnosci, dokladnosci, aktualnosci, przydatnosci lub dostepnosci wzgledem informacji, produktów, uslug i ofert zawartych w niniejszej wiadomosci e-mail. Ceny i dostepnosc produktów, uslug i ofert zaleza od kraju i moga ulec zmianie bez powiadomienia."
// HEADER FOOTER FACEBOOK
const EN_HEADER_FACEBOOK_REGEX = new RegExp("https://www.facebook.com/CreativeLabs","ig");
const EN_TO_IT_HEADER_FACEBOOK = "https://www.facebook.com/creativeitalia";
const EN_TO_DE_HEADER_FACEBOOK = "https://www.facebook.com/CreativeLabsDeutschland";
const EN_TO_ES_HEADER_FACEBOOK = "https://www.facebook.com/CreativeEspana";
const EN_TO_FR_HEADER_FACEBOOK = "https://www.facebook.com/CreativeFrance";
const EN_TO_PL_HEADER_FACEBOOK = "https://www.facebook.com/CreativePolska";

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
    else if (selection_input == "fr"){
        return en_to_fr(text_input);
    }
    else if (selection_input == "it"){
        return en_to_it(text_input);
    }
    else if (selection_input == "de"){
        return en_to_de(text_input);
    }
    else if (selection_input == "es"){
        return en_to_es(text_input);
    }
    else if (selection_input == "pl"){
        return en_to_pl(text_input);
    }
}

// translate en to uk
function en_to_uk(text_input) { 
    //domain 
    var result = text_input.replace(EN_DOMAIN_REGEX,UK_DOMAIN); 
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_UK_DOLLAR);
    //copysign
    result = copysign_encode(result);
    //eur to gbp
    result = eur_to_gbp(result);
    return result;
}
// translate en to gr
function en_to_gr(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,GR_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_GR_DOLLAR);
    return result;
}
// translate en to gr
function en_to_nordic(text_input) { 
    //domain
    var result = text_input.replace(EN_DOMAIN_REGEX,NORDIC_DOMAIN);
    return result;
}
// translate en to it
function en_to_it(text_input) { 
    //footer
    var result = text_input.replace(EN_FOOTER_CREATIVE_SAVER_REGEX,EN_TO_IT_FOOTER_CREATIVE_SAVER);
    result = result.replace(EN_FOOTER_DELIVERY_METHODS_REGEX,EN_TO_IT_FOOTER_DELIVERY_METHODS)
    result = result.replace(EN_FOOTER_COMMUNICATION_PARA_REGEX,EN_TO_IT_FOOTER_COMMUNICATION_PARA);
    result = result.replace(EN_FOOTER_UNSUB_REGEX,EN_TO_IT_FOOTER_UNSUB);
    result = result.replace(EN_FOOTER_PRIVACY_REGEX,EN_TO_IT_FOOTER_PRIVACY);
    result = result.replace(EN_FOOTER_CONTACT_REGEX,EN_TO_IT_FOOTER_CONTACT);
    result = result.replace(EN_FOOTER_COPYRIGHT_REGEX,EN_TO_IT_FOOTER_COPYRIGHT);
    //domain
    result = result.replace(EN_DOMAIN_REGEX,IT_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_IT_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_IT_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_BUY_NOW_REGEX,EN_TO_IT_SHOP_NOW_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_IT_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_IT_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_IT_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_IT_FREE);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_IT_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_IT_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_IT_WHITE);
    //header
    result = result.replace(EN_HEADER_DISPLAY_REGEX,EN_TO_IT_HEADER_DISPLAY);
    result = result.replace(EN_HEADER_FACEBOOK_REGEX,EN_TO_IT_HEADER_FACEBOOK);
    //footer
    result = result.replace(EN_FOOTER_EXPLORE_MORE_REGEX,EN_TO_IT_FOOTER_EXPLORE_MORE);
    result = result.replace(EN_FOOTER_SPEAKERS_REGEX,EN_TO_IT_FOOTER_SPEAKERS);
    result = result.replace(EN_FOOTER_HEADPHONES_REGEX,EN_TO_IT_FOOTER_HEADPHONES);
    result = result.replace(EN_FOOTER_WORK_SOLUTIONS_REGEX,EN_TO_IT_FOOTER_WORK_SOLUTIONS);
    result = result.replace(EN_FOOTER_AUDIO_ENTHUSIASTS_REGEX,EN_TO_IT_FOOTER_AUDIO_ENTHUSIASTS);
    result = en_to_it_footer_line_height(result);
    return result;
}
// translate en to es
function en_to_es(text_input) { 
    //footer
    var result = text_input.replace(EN_FOOTER_CREATIVE_SAVER_REGEX,EN_TO_ES_FOOTER_CREATIVE_SAVER);
    result = result.replace(EN_FOOTER_DELIVERY_METHODS_REGEX,EN_TO_ES_FOOTER_DELIVERY_METHODS)
    result = result.replace(EN_FOOTER_COMMUNICATION_PARA_REGEX,EN_TO_ES_FOOTER_COMMUNICATION_PARA);
    result = result.replace(EN_FOOTER_UNSUB_REGEX,EN_TO_ES_FOOTER_UNSUB);
    result = result.replace(EN_FOOTER_PRIVACY_REGEX,EN_TO_ES_FOOTER_PRIVACY);
    result = result.replace(EN_FOOTER_CONTACT_REGEX,EN_TO_ES_FOOTER_CONTACT);
    result = result.replace(EN_FOOTER_COPYRIGHT_REGEX,EN_TO_ES_FOOTER_COPYRIGHT);
    //domain
    result = result.replace(EN_DOMAIN_REGEX,ES_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_ES_DE_FR_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_ES_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_BUY_NOW_REGEX,EN_TO_ES_SHOP_NOW_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_ES_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_ES_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_ES_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_ES_FREE);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_ES_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_ES_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_ES_WHITE);
    //header
    result = result.replace(EN_HEADER_DISPLAY_REGEX,EN_TO_ES_HEADER_DISPLAY);
    result = result.replace(EN_HEADER_FACEBOOK_REGEX,EN_TO_ES_HEADER_FACEBOOK);
    //footer
    result = result.replace(EN_FOOTER_EXPLORE_MORE_REGEX,EN_TO_ES_FOOTER_EXPLORE_MORE);
    result = result.replace(EN_FOOTER_SPEAKERS_REGEX,EN_TO_ES_FOOTER_SPEAKERS);
    result = result.replace(EN_FOOTER_HEADPHONES_REGEX,EN_TO_ES_FOOTER_HEADPHONES);
    result = result.replace(EN_FOOTER_WORK_SOLUTIONS_REGEX,EN_TO_ES_FOOTER_WORK_SOLUTIONS);
    result = result.replace(EN_FOOTER_AUDIO_ENTHUSIASTS_REGEX,EN_TO_ES_FOOTER_AUDIO_ENTHUSIASTS);
    result = en_to_es_footer_line_height(result);
    return result;
}
function en_to_de(text_input) { 
    //footer
    var result = text_input.replace(EN_FOOTER_CREATIVE_SAVER_REGEX,EN_TO_DE_FOOTER_CREATIVE_SAVER);
    result = result.replace(EN_FOOTER_DELIVERY_METHODS_REGEX,EN_TO_DE_FOOTER_DELIVERY_METHODS)
    result = result.replace(EN_FOOTER_COMMUNICATION_PARA_REGEX,EN_TO_DE_FOOTER_COMMUNICATION_PARA);
    result = result.replace(EN_FOOTER_UNSUB_REGEX,EN_TO_DE_FOOTER_UNSUB);
    result = result.replace(EN_FOOTER_PRIVACY_REGEX,EN_TO_DE_FOOTER_PRIVACY);
    result = result.replace(EN_FOOTER_CONTACT_REGEX,EN_TO_DE_FOOTER_CONTACT);
    result = result.replace(EN_FOOTER_COPYRIGHT_REGEX,EN_TO_DE_FOOTER_COPYRIGHT);
    //domain
    result = result.replace(EN_DOMAIN_REGEX,DE_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_ES_DE_FR_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_DE_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_REGEX,EN_TO_DE_SHOP_NOW);
    result = result.replace(EN_BUY_NOW_REGEX,EN_TO_DE_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_DE_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_DE_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_DE_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_DE_FREE);
    //free male update (custom to de)
    result = en_to_de_free_male_update(result);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_DE_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_DE_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_DE_WHITE);
    //header
    result = result.replace(EN_HEADER_DISPLAY_REGEX,EN_TO_DE_HEADER_DISPLAY);
    result = result.replace(EN_HEADER_FACEBOOK_REGEX,EN_TO_DE_HEADER_FACEBOOK);
    //footer
    result = result.replace(EN_FOOTER_EXPLORE_MORE_REGEX,EN_TO_DE_FOOTER_EXPLORE_MORE);
    result = result.replace(EN_FOOTER_SPEAKERS_REGEX,EN_TO_DE_FOOTER_SPEAKERS);
    result = result.replace(EN_FOOTER_HEADPHONES_REGEX,EN_TO_DE_FOOTER_HEADPHONES);
    result = result.replace(EN_FOOTER_WORK_SOLUTIONS_REGEX,EN_TO_DE_FOOTER_WORK_SOLUTIONS);
    result = result.replace(EN_FOOTER_AUDIO_ENTHUSIASTS_REGEX,EN_TO_DE_FOOTER_AUDIO_ENTHUSIASTS);
    result = en_to_de_footer_line_height(result);
    return result;
}
function en_to_fr(text_input) { 
    //footer
    var result = text_input.replace(EN_FOOTER_CREATIVE_SAVER_REGEX,EN_TO_FR_FOOTER_CREATIVE_SAVER);
    result = result.replace(EN_FOOTER_DELIVERY_METHODS_REGEX,EN_TO_FR_FOOTER_DELIVERY_METHODS)
    result = result.replace(EN_FOOTER_COMMUNICATION_PARA_REGEX,EN_TO_FR_FOOTER_COMMUNICATION_PARA);
    result = result.replace(EN_FOOTER_UNSUB_REGEX,EN_TO_FR_FOOTER_UNSUB);
    result = result.replace(EN_FOOTER_PRIVACY_REGEX,EN_TO_FR_FOOTER_PRIVACY);
    result = result.replace(EN_FOOTER_CONTACT_REGEX,EN_TO_FR_FOOTER_CONTACT);
    result = result.replace(EN_FOOTER_COPYRIGHT_REGEX,EN_TO_FR_FOOTER_COPYRIGHT);
    //domain
    result = result.replace(EN_DOMAIN_REGEX,FR_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_ES_DE_FR_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_FR_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_REGEX,EN_TO_FR_SHOP_NOW);
    result = result.replace(EN_BUY_NOW_REGEX,EN_TO_FR_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_FR_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_FR_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_FR_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_FR_FREE);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_FR_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_FR_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_FR_WHITE);
    //header
    result = result.replace(EN_HEADER_DISPLAY_REGEX,EN_TO_FR_HEADER_DISPLAY);
    result = result.replace(EN_HEADER_FACEBOOK_REGEX,EN_TO_FR_HEADER_FACEBOOK);
    //footer
    result = result.replace(EN_FOOTER_EXPLORE_MORE_REGEX,EN_TO_FR_FOOTER_EXPLORE_MORE);
    result = result.replace(EN_FOOTER_SPEAKERS_REGEX,EN_TO_FR_FOOTER_SPEAKERS);
    result = result.replace(EN_FOOTER_HEADPHONES_REGEX,EN_TO_FR_FOOTER_HEADPHONES);
    result = result.replace(EN_FOOTER_WORK_SOLUTIONS_REGEX,EN_TO_FR_FOOTER_WORK_SOLUTIONS);
    result = result.replace(EN_FOOTER_AUDIO_ENTHUSIASTS_REGEX,EN_TO_FR_FOOTER_AUDIO_ENTHUSIASTS);
    result = en_to_fr_footer_line_height(result);
    return result;
}
function en_to_pl(text_input) { 
    //footer
    var result = text_input.replace(EN_FOOTER_CREATIVE_SAVER_REGEX,EN_TO_PL_FOOTER_CREATIVE_SAVER);
    result = result.replace(EN_FOOTER_DELIVERY_METHODS_REGEX,EN_TO_PL_FOOTER_DELIVERY_METHODS)
    result = result.replace(EN_FOOTER_COMMUNICATION_PARA_REGEX,EN_TO_PL_FOOTER_COMMUNICATION_PARA);
    result = result.replace(EN_FOOTER_UNSUB_REGEX,EN_TO_PL_FOOTER_UNSUB);
    result = result.replace(EN_FOOTER_PRIVACY_REGEX,EN_TO_PL_FOOTER_PRIVACY);
    result = result.replace(EN_FOOTER_CONTACT_REGEX,EN_TO_PL_FOOTER_CONTACT);
    result = result.replace(EN_FOOTER_COPYRIGHT_REGEX,EN_TO_PL_FOOTER_COPYRIGHT);
    //domain
    result = result.replace(EN_DOMAIN_REGEX,PL_DOMAIN);
    //dollar
    result = result.replace(EN_DOLLAR_REGEX,EN_TO_PL_DOLLAR);
    //free shipping
    result = result.replace(EN_SHIP_REGEX,EN_TO_PL_SHIP);
    //shopnow, buynow or both tgt
    result = result.replace(EN_SHOP_NOW_REGEX,EN_TO_PL_SHOP_NOW);
    result = result.replace(EN_BUY_NOW_REGEX,EN_TO_PL_BUY_NOW);
    //learn more
    result = result.replace(EN_LEARN_MORE_REGEX,EN_TO_PL_LEARN_MORE);
    //new
    result = result.replace(EN_NEW_REGEX,EN_TO_PL_NEW);
    //free worth..
    result = result.replace(EN_FREE_WORTH_REGEX,EN_TO_PL_FREE_WORTH);
    //free
    result = result.replace(EN_FREE_REGEX,EN_TO_PL_FREE);
    //promocode
    result = result.replace(EN_PROMO_CODE_REGEX,EN_TO_PL_PROMO_CODE);
    //browser view
    result = result.replace(EN_BROWSER_VIEW_REGEX,EN_TO_PL_BROWSER_VIEW);
    //white
    result = result.replace(EN_WHITE_REGEX,EN_TO_PL_WHITE);
    //header
    result = result.replace(EN_HEADER_DISPLAY_REGEX,EN_TO_PL_HEADER_DISPLAY);
    result = result.replace(EN_HEADER_FACEBOOK_REGEX,EN_TO_PL_HEADER_FACEBOOK);
    //footer
    result = result.replace(EN_FOOTER_EXPLORE_MORE_REGEX,EN_TO_PL_FOOTER_EXPLORE_MORE);
    result = result.replace(EN_FOOTER_SPEAKERS_REGEX,EN_TO_PL_FOOTER_SPEAKERS);
    result = result.replace(EN_FOOTER_HEADPHONES_REGEX,EN_TO_PL_FOOTER_HEADPHONES);
    result = result.replace(EN_FOOTER_WORK_SOLUTIONS_REGEX,EN_TO_PL_FOOTER_WORK_SOLUTIONS);
    result = result.replace(EN_FOOTER_AUDIO_ENTHUSIASTS_REGEX,EN_TO_PL_FOOTER_AUDIO_ENTHUSIASTS);
    result = en_to_pl_footer_line_height(result);
    return result;
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


// --------run time code--------

// call manage_translation button
var selection = document.getElementById("target-country"); 
selection.addEventListener("change",manage_translate);

// listen for btn click
let btn = document.getElementById("translate");
btn.addEventListener('click', event => { //this is an anonymous function
    // const text_input = document.getElementById("editor");
    const text_input = editor.getValue();
    var text_output = translate(text_input,selection.value);
    populate(text_output);
});
let copy = document.getElementById("copy");
copy.addEventListener('click',event => {
    copy_output();
});
