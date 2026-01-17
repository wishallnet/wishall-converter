
function convert_Unicode_to_Chanakya(){var array_one=new Array("ज़्","फ़्","क़","ख़","ग़","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ","\‘","\’","\“","\”"," \'","\' ","\'","ं","ऑ","–","\" ","\"","त्र्","श्र्",":","…","क्र","ग्र","घ्र","छ्र","ट्र","ड्र","ढ्र","त्र","द्र","ध्र","प्र","फ्र","ब्र","भ्र","म्र","व्र","श्र","स्र","ह्र","ष्ट्र","रु","रू","क्ष्","क्ष","ज्ञ","् ","्,","्;","क़","ख़","ग़","ज़्","ज़","ड़","ढ़","फ़्","फ़","य़","ऱ","ऩ","क्च","ष्ट","ष्ठ","श्व","॥","ढ्ढ","छ्व","हृ","क्क","क्त","ञ्ज","ङ्क","ङ्ख","ङ्ग","ङ्घ","ट्ट","ट्ठ","क्व","ड्ड","ड्ढ","द्ग","द्घ","द्द","द्ध","द्ब","द्भ","द्म","द्य","द्व","ठ्ठ","श्च","ह्न","ह्म","ह्म्","ह्य","ह्ल","ह्व","त्त","त्त्","प्त","ञ्च","ल्ल","ष्ट्व","ङ्क्ष","ह्न","ह्व","द्द","।","्र","%",":-","शृ","शॄ","कॢ","ह्ण","ओ","औ","आ","अ","ईं","ई","इ","उ","ऊ","ऋ","ॠ","ऌ","ऐ","ए","के","कै","फे","फै","क्","क","ख्","ख","ग्","ग","घ्","घ","ङ","च्च्","च्","च","छ","ज्ज्","ज्","ज","झ्","झ","ञ्","ञ","ट","ठ","ड","ढ","ण्","ण","त्","त","थ्","थ","द","ध्","ध","न्न्","न्न","न्","न","प्","प","फ्","फ","ब्","ब","भ्","भ","म्","म","य्","य","र","ल्","ल","ळ","व्","व","श्","श","ष्","ष","स्","स","ह्","ह","्य","x","ॉ","ा","ी","ु","ू","ृ","ॄ","ॢ","े","ै","ो","ौ","ं","ं","ँ","ः","़","ॅ","ऽ","्","०","१","२","३","४","५","६","७","८","९","0","1","2","3","4","5","6","7","8","9")
var array_two=new Array("Ê","¸U","$·¤","¹¸","$»","Êæ","Ç¸","É¸","$È¤","Ø¸","Ú¸","Ù¸","Ò","Ó","\"","\""," Ò","Ó ","Ó","´","¥æò","-","Ó "," Ò","˜","Ÿ","Ñ","...","·ý¤","»ý","ƒæý","Àþ","Åþ","Çþ","Éþ","˜æ","Îý","Ïý","Âý","Èý¤","Õý","Öý","×ý","ßý","Ÿæ","d","O","cÅþ","L¤","M¤","ÿ","ÿæ","™æ","÷ ","÷,","÷;","$·¤","¹¸","$»","Ê","Êæ","Ç¸","É¸","¸U","$È¤","Ø¸","Ú¸","Ù¸","€¿","cÅ","cÆ","àß","H","I","J","N","€·¤","€Ì","T","V","W","X","Y","^","_","€ß","a","b","e","f","g","h","i","j","k","l","m","n","à¿","q","ræ","r","s","t","u","žæ","ž","#","@","ËÜ","¦","¨","q","u","g","Ð","ý","'","Ñ-","oë","oì","•í","ö","¥ô","¥õ","¥æ","¥","§Z","§ü","§","©","ª¤","«¤","¬¤","­","°ð","°","·Ô¤","·ñ¤","ÈÔ¤","Èñ¤","€U","·¤","","¹","‚","»","ƒ","ƒæ","¾","“","‘","¿","À","”","’","Á","Û","Ûæ","†","†æ","ÅU","Æ","Ç","É","‡","‡æ","ˆ","Ì","‰","Í","Î","Š","Ï","‹‹","‹Ù","‹","Ù","Œ","Â","U","È¤","Ž","Õ","","Ö","","×","Ä","Ø","ÚU","Ë","Ü","Ý","Ã","ß","à","àæ","c","á","S","â","±","ã","K","&","æò","æ","è","é","ê","ë","ì","í","ð","ñ","ô","õ","¢","´","¡","Ñ","¸","ò","ù","÷","0","1","2","3","4","5","6","7","8","9","®","v","w","x","y","z","{","|","}","~")
var array_one_length=array_one.length;if((document.getElementById("text_or_html")).selectedIndex==0){document.getElementById("unicode_text").value="You have chosen SIMPLE TEXT in Chanakya font to convert into Unicode. Conversion in progress..";var modified_substring=document.getElementById("legacy_text").value;var text_size=document.getElementById("legacy_text").value.length;var processed_text='';var sthiti1=0;var sthiti2=0;var chale_chalo=1;var max_text_size=6000;while(chale_chalo==1){sthiti1=sthiti2;if(sthiti2<(text_size-max_text_size)){sthiti2+=max_text_size;while(document.getElementById("legacy_text").value.charAt(sthiti2)!=' '){sthiti2--}}else{sthiti2=text_size;chale_chalo=0}
var modified_substring=document.getElementById("legacy_text").value.substring(sthiti1,sthiti2);Replace_Symbols();processed_text+=modified_substring;document.getElementById("unicode_text").value=processed_text}}else{document.getElementById("unicode_text").value="You have chosen HTML TEXT in Chanakya font to convert into Unicode. Conversion in progress..";var remaining_text=document.getElementById("legacy_text").value;var processed_text="";var position_of_current_opening_bracket=0;var position_of_next_closing_bracket=1;var idx=remaining_text.indexOf("<p ")
idx=remaining_text.indexOf("Sanskrit 99",idx)
var idx2=0
var idx3=0
var idx4=0
while(idx!=-1){idx2=remaining_text.indexOf(">",idx)
idx3=remaining_text.indexOf("/span",idx2)
idx4=remaining_text.indexOf("span",idx2)
while(idx4<idx3){idx4=remaining_text.indexOf("span",idx3+4);idx3=remaining_text.indexOf("/span",idx3+4)}
var modified_substring=remaining_text.substring(idx2,idx3);modified_substring=modified_substring.replace(/>/g,">>");processed_text=processed_text+remaining_text.substring(0,idx2)+modified_substring+"/span";remaining_text=remaining_text.substring(idx3+5);idx=remaining_text.indexOf("Sanskrit 99")}
processed_text=processed_text+remaining_text;remaining_text=processed_text;processed_text="";var position_of_start_of_paragraph=0;var position_of_end_of_paragraph=1;position_of_start_of_paragraph=remaining_text.indexOf("<p ");while(position_of_start_of_paragraph!=-1){position_of_start_of_paragraph=remaining_text.indexOf("<p ");position_of_end_of_paragraph=remaining_text.indexOf("/p>");modified_substring=remaining_text.substring(position_of_start_of_paragraph+3,position_of_end_of_paragraph);if(modified_substring.indexOf("MsoBodyText")!=-1){modified_substring=modified_substring.replace(/>/g,">>");idx=modified_substring.indexOf("font-family");idx2=0;idx3=0;idx4=0;while(idx!=-1){idx2=modified_substring.indexOf(">>",idx);idx3=modified_substring.indexOf("/span",idx2);idx4=modified_substring.indexOf("span",idx2);while(idx4<idx3){idx4=modified_substring.indexOf("span",idx3+4);idx3=modified_substring.indexOf("/span",idx3+4)}
modified_substring=modified_substring.substring(0,idx2)+(modified_substring.substring(idx2,idx3)).replace(/>>/g,">")+modified_substring.substring(idx3);idx=modified_substring.indexOf("font-family",idx3)}}
processed_text=processed_text+remaining_text.substring(0,position_of_start_of_paragraph+3)+modified_substring+"/p>";remaining_text=remaining_text.substring(position_of_end_of_paragraph+3);position_of_start_of_paragraph=remaining_text.indexOf("<p ")}
processed_text=processed_text+remaining_text;remaining_text=processed_text;processed_text="";idx2=remaining_text.indexOf(">>");while(idx2!=-1){position_of_current_opening_bracket=remaining_text.indexOf(">>",idx2)
position_of_next_closing_bracket=remaining_text.indexOf("<",position_of_current_opening_bracket)
modified_substring=remaining_text.substring(position_of_current_opening_bracket+2,position_of_next_closing_bracket);processed_text=processed_text+remaining_text.substring(0,position_of_current_opening_bracket+1);remaining_text=remaining_text.substring(position_of_next_closing_bracket+1);Replace_Symbols();processed_text=processed_text+modified_substring+"<";idx2=remaining_text.indexOf(">>")}
processed_text=processed_text+remaining_text;processed_text=processed_text.replace(/Mangal/g,"Chanakya");document.getElementById("unicode_text").value=processed_text}
function Replace_Symbols(){if(modified_substring!=""){modified_substring=modified_substring.replace(/क़/g,"क़");modified_substring=modified_substring.replace(/ख़‌/g,"ख़");modified_substring=modified_substring.replace(/ग़/g,"ग़");modified_substring=modified_substring.replace(/ज़्/g,"ज़्");modified_substring=modified_substring.replace(/ज़/g,"ज़");modified_substring=modified_substring.replace(/ड़/g,"ड़");modified_substring=modified_substring.replace(/ढ़/g,"ढ़");modified_substring=modified_substring.replace(/ऩ/g,"ऩ");modified_substring=modified_substring.replace(/फ़/g,"फ़");modified_substring=modified_substring.replace(/य़/g,"य़");modified_substring=modified_substring.replace(/ऱ/g,"ऱ");var position_of_f=modified_substring.indexOf("ि");while(position_of_f!=-1){var character_left_to_f=modified_substring.charAt(position_of_f-1);modified_substring=modified_substring.replace(character_left_to_f+"ि","ç"+character_left_to_f);position_of_f=position_of_f-1;while((modified_substring.charAt(position_of_f-1)=="्")&(position_of_f!=0)){var string_to_be_replaced=modified_substring.charAt(position_of_f-2)+"्";modified_substring=modified_substring.replace(string_to_be_replaced+"ç","ç"+string_to_be_replaced);position_of_f=position_of_f-2}
position_of_f=modified_substring.search(/ि/,position_of_f+1)}
set_of_matras="ािीुूृेैोौं:ँॅ"
modified_substring+='  ';var position_of_half_R=modified_substring.indexOf("र्");while(position_of_half_R>0){var probable_position_of_Z=position_of_half_R+2;var character_right_to_probable_position_of_Z=modified_substring.charAt(probable_position_of_Z+1)
while(set_of_matras.indexOf(character_right_to_probable_position_of_Z)!=-1){probable_position_of_Z=probable_position_of_Z+1;character_right_to_probable_position_of_Z=modified_substring.charAt(probable_position_of_Z+1)}
string_to_be_replaced=modified_substring.substr(position_of_half_R+2,(probable_position_of_Z-position_of_half_R-1));modified_substring=modified_substring.replace("र्"+string_to_be_replaced,string_to_be_replaced+"ü");position_of_half_R=modified_substring.indexOf("र्")}
modified_substring=modified_substring.substr(0,modified_substring.length-2);for(input_symbol_idx=0;input_symbol_idx<array_one_length;input_symbol_idx++){idx=0;while(idx!=-1){modified_substring=modified_substring.replace(array_one[input_symbol_idx],array_two[input_symbol_idx])
idx=modified_substring.indexOf(array_one[input_symbol_idx])}}}}}



// Hook buttons to existing functions (original function uses ids legacy_text and unicode_text)
document.getElementById('converter').addEventListener('click', function(){
  try {
    if (typeof convert_Unicode_to_Chanakya === 'function') {
      convert_Unicode_to_Chanakya();
    } else if (typeof convertUnicodeToChanakya === 'function') {
      convertUnicodeToChanakya();
    } else {
      var inp = document.getElementById('legacy_text').value || '';
      document.getElementById('unicode_text').value = inp;
      console.warn('convert_Unicode_to_Chanakya() not found.');
    }
  } catch (e) {
    alert('Conversion failed: ' + e.message);
  }
});

document.getElementById('copybtn').addEventListener('click', function(){
  var out = document.getElementById('unicode_text');
  if(!out || !out.value) return;
  var txt = out.value;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt);
  } else {
    out.select();
    try { document.execCommand('copy'); } catch(e) {}
  }
  var b = document.getElementById('copybtn');
  var old = b.textContent;
  b.textContent = 'Copied';
  setTimeout(function(){ b.textContent = old; }, 700);
});

document.getElementById('clearbtn').addEventListener('click', function(){
  document.getElementById('legacy_text').value = '';
  document.getElementById('unicode_text').value = '';
});
