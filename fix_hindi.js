(function() {
    window.fixHindiText = function(text, options) {
        if (!text) return "";

        options = options || {};

        // 1. Remove Honorifics
        if (options.removeHonors) {
            if (options.hShri)      text = text.replace(/\s+श्री(?=[^\w\u0900-\u097F]|$)/g, '');
            if (options.hShriman)   text = text.replace(/श्रीमान\s+/g, '');
            if (options.hMahoday)   text = text.replace(/महोदय\s+/g, '');
            if (options.hMananiya)  text = text.replace(/माननीय\s+/g, '');
            if (options.hAadarniya) text = text.replace(/आदरणीय\s+/g, '');
            if (options.hJi)        text = text.replace(/\s+जी(?=[^\w\u0900-\u097F]|$)/g, '');
        }

        // 2. Fix Punctuation
        if (options.fixPunctuation) {
            if (options.pCommon) {
                text = text.replace(/['"‘’“”]/g, '');
                text = text.replace(/,,+/g, ',');
                text = text.replace(/–/g, '-');
            }
            if (options.pPipe) {
                text = text.replace(/\|/g, '।');
            }
            if (options.pWa) {
                text = text.replace(/[*_#]/g, '');
            }
            if (options.pDots) {
                text = text.replace(/।।+/g, '।');
                text = text.replace(/\.{4,}/g, '...');
                text = text.replace(/(?<!\.)\.\.(?!\.)/g, '.');
            }
        }

        // 3. Fix Spaces (Includes Tabs & Smart Enters)
        if (options.fixSpaces) {
            
            // --- Remove Tabs ---
            if (options.sRemoveTabs) {
                 text = text.replace(/\t/g, ' '); 
            }

            // --- Remove Single Enters (Join Broken Lines) ---
            if (options.sRemoveSingleEnters) {
                // 1. पैराग्राफ (2+ एंटर) को सुरक्षित करें
                text = text.replace(/\n\s*\n/g, '###PARAGRAPH###');
                // 2. '।' (पूर्णविराम) के बाद एंटर को सुरक्षित करें
                text = text.replace(/।\s*\n/g, '।###KEEP_NEWLINE###');
                // 3. सिंगल एंटर को स्पेस बनाएं
                text = text.replace(/\n/g, ' ');
                // 4. सुरक्षित चीजों को वापस लाएं
                text = text.replace(/###PARAGRAPH###/g, '\n\n');
                text = text.replace(/###KEEP_NEWLINE###/g, '\n');
            }

            // --- IMPROVED START OF LINE CLEANING (CORRECTED) ---
            // पहले \s था, अब [ \t\u00A0] है। यह सिर्फ स्पेस/टैब हटाएगा, एंटर को नहीं।
            text = text.replace(/^[ \t\u00A0]+/gm, ""); 
            
            // डबल स्पेस हटाएं
            text = text.replace(/[ \t\u00A0]{2,}/g, ' '); 
            
            // टेक्स्ट के शुरू और अंत से कचरा साफ करें
            text = text.trim();
            
            // ब्रैकेट के आसपास स्पेस फिक्स
            text = text.replace(/([^\s])\(/g, '$1 (');
            text = text.replace(/\(\s+/g, '(');
            text = text.replace(/\s+\)/g, ')');
            text = text.replace(/\)(?=[^\s।?!,;])/g, ') ');

            // विराम चिह्नों के पास स्पेस फिक्स
            text = text.replace(/[ \t]+([।?!,;])/g, '$1'); 
            text = text.replace(/([।?!;])(?=[^ \t\n])/g, '$1 ');
            text = text.replace(/(^|[^0-9]),(?=[^ \t\n])/g, '$1, ');
            text = text.replace(/([0-9]),(?=[^0-9 \t\n])/g, '$1, ');
        }

        // 4. Fix Enters (Max 2)
        if (options.fixEnters) {
            // 3 या उससे ज्यादा एंटर को 2 एंटर में बदलो
            text = text.replace(/\n{3,}/g, '\n\n');
        }

        // 5. Word Corrections
        if (options.fixWords) {
            var corrections = [
                { wrong: 'आशिर्वाद', right: 'आशीर्वाद' },
                { wrong: 'आव्हान',   right: 'आह्वान', mode: 'part' },
                { wrong: 'उन्होने',  right: 'उन्होंने' },
                { wrong: 'बच्चो',    right: 'बच्चों' },
                { wrong: 'बच्चें',   right: 'बच्चे' },
                { wrong: 'ब्राहमण',  right: 'ब्राह्मण' },
                { wrong: 'भुमि',     right: 'भूमि' },
                { wrong: 'भुमी',     right: 'भूमि' },
                { wrong: 'भूमी',     right: 'भूमि' },
                { wrong: 'दिनो',     right: 'दिनों' },
                { wrong: 'दुसरी',    right: 'दूसरी' },
                { wrong: 'दोनो',     right: 'दोनों' },
                { wrong: 'द्धारा',   right: 'द्वारा' },
                { wrong: 'घटनाओ',    right: 'घटनाओं' },
                { wrong: 'हस',       right: 'हँस' },
                { wrong: 'हसी',      right: 'हँसी' },
                { wrong: 'हितो',     right: 'हितों' },
                { wrong: 'हु',       right: 'हूँ' },
                { wrong: 'हे',       right: 'है' },
                { wrong: 'होंगा',    right: 'होगा' },
                { wrong: 'ह्र',      right: 'हृ' },
                { wrong: 'जेसे',     right: 'जैसे' },
                { wrong: 'जोरो',     right: 'जोरों' },
                { wrong: 'जिन्होने', right: 'जिन्होंने' },
                { wrong: 'कार्यो',   right: 'कार्यों' },
                { wrong: 'क्यो',     right: 'क्यों' },
                { wrong: 'क्योकि',   right: 'क्योंकि' },
                { wrong: 'लोटाया',   right: 'लौटाया' },
                { wrong: 'मुल',      right: 'मूल' },
                { wrong: 'मे',       right: 'में' },
                { wrong: 'मै',       right: 'मैं' },
                { wrong: 'नही',      right: 'नहीं' },
                { wrong: 'पुजन',     right: 'पूजन' },
                { wrong: 'पहुच',     right: 'पहुंच' },
                { wrong: 'जाहीर',    right: 'जाहिर' },
                { wrong: 'सुचित',    right: 'सूचित' },
                { wrong: 'सोपा',     right: 'सौंपा' },
                { wrong: 'सौपा',     right: 'सौंपा' },
                { wrong: 'तेसे',     right: 'तैसे' },
                { wrong: 'वसुल',     right: 'वसूल', mode: 'part' },
                { wrong: 'विधार्थी', right: 'विद्यार्थी' },
                { wrong: 'व्दारा',   right: 'द्वारा' },
                { wrong: 'भुल',      right: 'भूल' },
                { wrong: 'पुरे',     right: 'पूरे' },
                { wrong: 'पुजा',     right: 'पूजा' },
                { wrong: 'चोंट',     right: 'चोट' },
                { wrong: 'पुर्व',     right: 'पूर्व' },
                { wrong: 'पहुंचेगें', right: 'पहुंचेंगे' },
                { wrong: 'जिसमे', right: 'जिसमें' },

            ];

            for (var i = 0; i < corrections.length; i++) {
                var item = corrections[i];
                var flags = item.ignoreCase ? "gi" : "g";
                if (item.mode === 'part') {
                    text = text.split(item.wrong).join(item.right);
                } else {
                    var regex = new RegExp("(^|[\\s।?!,;-])" + item.wrong + "(?=[\\s।?!,;-]|$)", flags);
                    text = text.replace(regex, "$1" + item.right);
                }
            }
        }
        return text;
    };
})();