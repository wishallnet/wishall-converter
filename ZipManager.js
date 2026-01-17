/* ZipManager.js */
document.addEventListener('DOMContentLoaded', () => {
    const btnDownloadZip = document.getElementById('btnDownloadZip');
    const box = document.getElementById('english_text'); 

    if (btnDownloadZip) {
        btnDownloadZip.addEventListener('click', async () => {
            let textContent = box.value;

            if (!textContent.trim()) {
                alert("टेक्स्ट बॉक्स खाली है। कृपया पहले कुछ लिखें।");
                return;
            }

            if (typeof JSZip === 'undefined') {
                alert("JSZip लाइब्रेरी लोड नहीं हुई है।");
                return;
            }

            let activeTab = document.querySelector('.tab-btn.active');
            let currentMode = activeTab ? activeTab.dataset.mode : 'text';

            let filename = "converted_text.txt";
            if (currentMode === 'kruti') filename = "krutidev_text.txt";
            else if (currentMode === 'chanakya') filename = "chanakya_text.txt";
            else if (currentMode === '4c') filename = "4cgandhi_text.txt";

            let zip = new JSZip();
            zip.file(filename, textContent);
            zip.file("read_me.txt", "Converted using Wishall Smart Hindi Editor (wishall.net)");

            try {
                const content = await zip.generateAsync({ type: "blob" });
                if (window.saveAs) {
                    window.saveAs(content, "wishall_data.zip");
                } else {
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(content);
                    a.download = "wishall_data.zip";
                    a.click();
                }
            } catch (e) {
                console.error("Zip Error:", e);
                alert("Zip बनाने में समस्या आई: " + e.message);
            }
        });
    }
});