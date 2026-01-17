(function() {
    // 1. ओरिजिनल फंक्शन को सुरक्षित रखें
    var originalConverter = window.unicodeTo4CGandhi;

    // 2. नया फंक्शन बनाएं जो ओरिजिनल को कॉल करे और फिर "जादू" करे
    window.unicodeTo4CGandhi = function(inputText) {
        
        // Step A: पहले ओरिजिनल कनवर्टर से कन्वर्ट करें
        var output = originalConverter(inputText);

        // ============================================
        // Step B: सुपर क्लीनिंग (Super Cleaning) - भाग 1
        // ============================================
        
        // 1. डंडा फिक्सर: अगर गलती से '|' (Pipe) आ गया है, तो उसे 4C का पूर्णविराम 'Ü' बना दो
        output = output.replace(/\|/g, 'Ü');

        // 2. स्पेस क्लीनर:
        // डबल स्पेस को सिंगल करें
        output = output.replace(/  +/g, ' ');
        // लाइन के शुरू और अंत के फालतू स्पेस हटाएं
        output = output.trim();
        
        // 3. उल्टा स्पेस फिक्सर: पूर्णविराम (Ü) से *पहले* अगर स्पेस है, तो उसे हटा दो
        // (जैसे: "है ।" -> "है।")
        output = output.replace(/\s+Ü/g, 'Ü');

        // ============================================
        // Step C: स्मार्ट स्पेसिंग (Smart Spacing)
        // ============================================

        // 4. पूर्णविराम के *बाद* स्पेस:
        // लॉजिक: अगर 'Ü' (बड़ा) के ठीक बाद कोई शब्द चिपका है (स्पेस नहीं है), तो वहां स्पेस डालो।
        output = output.replace(/Ü(?=[^\s])/g, 'Ü ');

        // ============================================
        // Step D: शब्द सुधार (Word Corrections)
        // ============================================
        var corrections = [
            // --- रेफ (Reph) सुधार ---
            { wrong: 'IY°ffAûÊÔ', right: 'IY°ffÊAûÔ' }, // कर्ताओं
            { wrong: 'RYf¸fc»ffÊ',      right: 'RYf¸fcÊ»ff' },      // फार्मूला
            { wrong: 'MXc³ff¸fZÊÔMX', right: 'McX³ffÊ¸fZÔMX' }, // टूर्नामेंट
            // --- वर्तनी सुधार ---
            { wrong: '¢¹fûÔdIY', right: '¢¹fûÔdIY' }, 
            { wrong: '¢¹fûdIY',  right: '¢¹fûÔdIY' }, 
            { wrong: 'QVff°ffÊ',  right: 'QVffÊ°ff' }, 
            { wrong: 'À´f²ffAûÊÔ',  right: 'À´f²ffÊAûÔ' }, 
            { wrong: '¨f¨ffAûÊÔ',  right: '¨f¨ffÊAûÔ' }, 
            { wrong: 'd³fQZVffÊ³fbÀffSX',  right: 'd³fQZÊVff³fbÀffSX' }, 
            { wrong: 'd³f¸ff¯ffÊ²fe³f', right: 'd³f¸ffÊ¯ff²fe³f' }, 
            { wrong: 'QVff°feÊ', right: 'QVffÊ°fe' }, 
            { wrong: '¨f°fbUZQeÊ', right: '¨f°fbUÊZQe' }, 
            { wrong: 'd³f¸ff°ffÊ', right: 'd³f¸ffÊ°ff' }, 
            { wrong: '¸fbQf¶ffÊQ', right: '¸fbQfÊ¶ffQ' }, 
            { wrong: 'QVff¹ffÊ', right: 'QVffÊ¹ff' }, 
            { wrong: 'þb¸ff³ffÊ', right: 'ªfb¸ffÊ³ff' }, 
            { wrong: '´fc¯ffWXÊbd°f', right: '´fc¯ffÊWbXd°f' }, 
            { wrong: 'ÀfÔ´fIYÊ', right: 'Àfa´fIÊY' }, 
            { wrong: 'd³fQZVfûÊÔ', right: 'd³fQZÊVfûÔ' }, 

            // --- छोटे शब्द ---
            { wrong: ' ¢¹fû ',   right: ' ¢¹fûa ' },  // क्यो -> क्यों
            { wrong: ' ¸fZ ',    right: ' ¸fZÔ ' },   // मे -> में
            { wrong: '¸f` ',     right: '¸f`Ô ' }     // मै -> मैं
        ];

        // सुधार लागू करें
        for (var i = 0; i < corrections.length; i++) {
            output = output.split(corrections[i].wrong).join(corrections[i].right);
        }

        // ============================================
        // Step E: कोट्स हटाना (Quote Removal)
        // ============================================
        
        // शुरुआत से हटाएं (Start of word)
        output = output.replace(/(^|[\s])['"]+/g, '$1');

        // अंत से हटाएं (End of word)
        output = output.replace(/['"]+([\s\.,;:\?!।\|Ü]|$)/g, '$1');

        return output;
    };
})();