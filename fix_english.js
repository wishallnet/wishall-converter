/* =====================================================
   FILE: fix_english.js
   PURPOSE: Convert Short Acronyms (MP -> एमपी)
   =====================================================
*/
(function() {
    window.fixEnglishToHindi = function(text) {
        if (!text) return "";

        const charMap = {
            'a': 'ए', 'b': 'बी', 'c': 'सी', 'd': 'डी', 'e': 'ई',
            'f': 'एफ', 'g': 'जी', 'h': 'एच', 'i': 'आई', 'j': 'जे',
            'k': 'के', 'l': 'एल', 'm': 'एम', 'n': 'एन', 'o': 'ओ',
            'p': 'पी', 'q': 'क्यू', 'r': 'आर', 's': 'एस', 't': 'टी',
            'u': 'यू', 'v': 'वी', 'w': 'डब्ल्यू', 'x': 'एक्स', 'y': 'वाय', 'z': 'जेड'
        };

        // शब्द बदलो (सिर्फ 1 से 4 अक्षर वाले)
        text = text.replace(/[a-zA-Z]+/g, function(match) {
            // 4 से ज्यादा बड़ा है तो छोड़ दो (जैसे sorry, apple)
            if (match.length > 4) return match; 

            let lower = match.toLowerCase();
            let converted = "";
            for (let i = 0; i < lower.length; i++) {
                let char = lower[i];
                converted += charMap[char] || char;
            }
            // आगे-पीछे स्पेस लगाओ
            return " " + converted + " ";
        });

        // सफाई
        text = text.replace(/[ ]{2,}/g, ' '); 
        text = text.replace(/([\u0900-\u097F])([0-9])/g, '$1 $2');
        text = text.replace(/([0-9])([\u0900-\u097F])/g, '$1 $2');

        return text.trim();
    };
})();