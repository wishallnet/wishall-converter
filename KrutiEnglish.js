/* File: KrutiEnglish.js
   Function: Convert Unicode (Mangal) to Kruti Dev 010
   Author: Wishall.net Logic
*/

window.uniToKrutidev = function(text) {
    if (!text) return "";

    let array_one = [
        "‘", "’", "“", "”", "(", ")", "{", "}", "=", "।", "?", "-", "µ", "॰", ",", ".", "् ", 
        "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "x", 

        "फ़्", "क़", "ख़", "ग़", "ज़्", "ज़", "ड़", "ढ़", "फ़", "य़", "ڕ", "म्", "त्न", "ह्न", "हृ", "ह्म", "ह्र", "ह्", "द्द", "क्ष्", "क्ष", "त्र्", "त्र", "ज्ञ", 
        "छ्य", "ट्ट", "ट्ठ", "ट्म", "ठ्ठ", "ड्ड", "ड्ढ", "द्य", "द्व", "श्र", "ट्र", "ड्र", "ढ्र", "छृ", "â", "़", "ीं", "ों", "ें", " यूं", "रू", "ृ", 
        " ू", " ऊ", " ो", " ा", " ी", " ु", " ड़", " ढ़", " हे", " हो", " ह", 
        "‍", "à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï", "ð", "ñ", "ò", "ó", "ô", "õ", "ö", "÷", "ø", "ù", "ú", "û", "ü", "ý", "þ", "ÿ",
        
        "अो", "अा", "आ", "अ", "ई", "उ", "ए", "ऐ", "ओ", "औ", "अं", "अः", "ऋ", "्", "़", "ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ो", "ौ", "ं", "ः", "ँ", "ॅ", "्र", "य", "म", "त", "ज", "ल", "न", "प", "व", "च", "क", "स", "ह", "र", "श", "ष", "ग", "ब", "अ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ", "श्र", "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़"
    ];

    let array_two = [
        "^", "*", "Þ", "ß", "¼", "½", "¿", "À", "¾", "A", "\\", "&", "8", "å", ",", ".", "", 
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "x", 

        "¶~", "d¸", "[¸", "x¸", "t¸", "t", "M+", "<+", "Q", ";¸", "j", "E", "Ru", "à", "â", "ã", "º", "è", "í", "{k~", "{k", "=k~", "=", "K", 
        "N~;", "V~V", "V~B", "V~e", "B~B", "M~M", "M~<", "n~;", "}", "J", "Vª", "Mª", "<ª", "N`", "â", "¸", "ha", "ks", "sa", " ;w", ":","`", 
        " w", " Å", " ks", " k", " h", " q", " M+", " <+", " gs", " gks", " g", 
        "", "Z", "S", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "×", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß", "à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", 

        "vks", "vk", "vk", "v", "bZ", "m", ",s", ",", "vks", "vkS", "v", "v%", "_", "~", "¸", "k", "f", "l", "q", "w", "`", "s", "S", "ks", "kS", "a", "%", "¡", "W", "z", "j", "e", "r", "t", "y", "u", "i", "o", "p", "d", "l", "g", "j", "k", "" , "x", "c", "v", "V", "B", "M", "<", ".k", "r", "Fk", "n", "èk", "u", "i", "Q", "c", "Hk", "e", ";", "j", "y", "o", "'k", "k", "l", "g", "{k", "=", "K", "J", "d", "[k", "x", "t", "M", "<", "Q"
    ];

    let array_one_length = array_one.length;
    let modified_substring = text;

    modified_substring = modified_substring.replace(/‘/g, "^").replace(/’/g, "*").replace(/“/g, "Þ").replace(/”/g, "ß");
    modified_substring = modified_substring.replace(/ \(/g, " ¼").replace(/\) /g, "½ ").replace(/\(/g, "¼").replace(/\)/g, "½");

    let position_of_f = modified_substring.indexOf("ि");
    while (position_of_f != -1) {
        let character_left_to_f = modified_substring.charAt(position_of_f - 1);
        let character_to_be_replaced = "f" + character_left_to_f;
        modified_substring = modified_substring.replace(character_left_to_f + "ि", character_to_be_replaced);
        position_of_f = modified_substring.search(/ि/, position_of_f + 1);
    }

    for (let input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++) {
        let idx = 0;
        while (idx != -1) {
            modified_substring = modified_substring.replace(array_one[input_symbol_idx], array_two[input_symbol_idx]);
            idx = modified_substring.indexOf(array_one[input_symbol_idx]);
        }
    }

    let position_of_wrong_ee = modified_substring.indexOf("ि");
    while(position_of_wrong_ee != -1) {
        let cons = modified_substring.charAt(position_of_wrong_ee - 1);
        modified_substring = modified_substring.replace(cons + "ि", "f" + cons);
        position_of_wrong_ee = modified_substring.search(/ि/, position_of_wrong_ee + 1);
    }

    modified_substring = modified_substring.replace(/त/g, "r").replace(/न/g, "u").replace(/क/g, "d").replace(/म/g, "e").replace(/य/g, ";");
    modified_substring = modified_substring.replace(/ल/g, "y").replace(/प/g, "i").replace(/व/g, "o").replace(/च/g, "p").replace(/ज/g, "t");
    modified_substring = modified_substring.replace(/स/g, "l").replace(/ह/g, "g").replace(/र/g, "j").replace(/ग/g, "x").replace(/ब/g, "c");
    modified_substring = modified_substring.replace(/अ/g, "v").replace(/ट/g, "V").replace(/ठ/g, "B").replace(/ड/g, "M").replace(/ढ/g, "<");
    modified_substring = modified_substring.replace(/ण/g, ".").replace(/थ/g, "Fk").replace(/द/g, "n").replace(/ध/g, "èk").replace(/फ/g, "Q");
    modified_substring = modified_substring.replace(/भ/g, "Hk").replace(/श/g, "'k").replace(/ष/g, "k").replace(/क्ष/g, "{k").replace(/ज्ञ/g, "K");
    modified_substring = modified_substring.replace(/ा/g, "k").replace(/ि/g, "f").replace(/ी/g, "l").replace(/ु/g, "q");
    modified_substring = modified_substring.replace(/ू/g, "w").replace(/ृ/g, "`").replace(/े/g, "s").replace(/ै/g, "S");
    modified_substring = modified_substring.replace(/ो/g, "ks").replace(/ौ/g, "kS").replace(/ं/g, "a").replace(/ः/g, "%");
    modified_substring = modified_substring.replace(/ँ/g, "¡").replace(/्/g, "~").replace(/़/g, "+");

    return modified_substring;
};