(function() {
    // 1. ओरिजिनल फंक्शन को सुरक्षित रखें
    var originalChanakya = window.convert_Unicode_to_Chanakya;

    // 2. चाणक्य फंक्शन को ओवरराइड (Override) करें
    window.convert_Unicode_to_Chanakya = function() {
        
        // पहले ओरिजिनल कनवर्टर को अपना काम करने दें
        if(originalChanakya) originalChanakya();

        // ध्यान दें: यह ID उस बॉक्स की होनी चाहिए जिसमें चाणक्य का रिजल्ट आता है
        var outputBox = document.getElementById('unicode_text'); 
        if (!outputBox) return;

        var output = outputBox.value;

        // ============================================
        // Step A: सुपर क्लीनिंग (Super Cleaning)
        // ============================================
        
        // स्पेस क्लीनर: डबल स्पेस को सिंगल करें
        output = output.replace(/  +/g, ' ');
        // लाइन के शुरू और अंत के फालतू स्पेस हटाएं
        output = output.trim();
        
        // उल्टा स्पेस फिक्सर: पूर्णविराम 'Ð' से *पहले* अगर स्पेस है, तो उसे हटा दो
        output = output.replace(/\s+Ð/g, 'Ð');

        // ============================================
        // Step B: स्मार्ट स्पेसिंग (Smart Spacing)
        // ============================================

        // पूर्णविराम 'Ð' के *बाद* अगर स्पेस नहीं है, तो स्पेस डालो
        output = output.replace(/Ð(?=[^\s])/g, 'Ð ');

        // ============================================
        // Step C: शब्द सुधार (Word Corrections) - UPDATED
        // ============================================
        var corrections = [
            { wrong: '·¤ë', right: '·ë¤' },
            { wrong: '·¤é', right: '·é¤' },
            { wrong: 'È¤é', right: 'Èé¤' },
            { wrong: 'È¤ê', right: 'Èê¤' },
            { wrong: 'È¤ë', right: 'Èë¤' }

        ];

        // अब यह लूप सभी गलत शब्दों को सही से बदल देगा
        for (var i = 0; i < corrections.length; i++) {
            // split और join का उपयोग करके सभी जगह (all occurrences) रिप्लेस होगा
            output = output.split(corrections[i].wrong).join(corrections[i].right);
        }

        // ============================================
        // Step D: कोट्स हटाना (Quote Removal)
        // ============================================
        
        // शुरुआत से हटाएं
        output = output.replace(/(^|[\s])['"]+/g, '$1');

        // अंत से हटाएं
        output = output.replace(/['"]+([\s\.,;:\?!।Ð]|$)/g, '$1');

        // सुधरा हुआ टेक्स्ट वापस बॉक्स में डाल दें
        outputBox.value = output;
    };
})();