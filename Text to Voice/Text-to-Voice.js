let speech = new SpeechSynthesisUtterance();
        let voices = [];
        let voiceSelect = document.querySelector('select');

        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            speech.voice = voices[0]; // Set default voice

            voices.forEach((voice, i) => {
                voiceSelect.options[i] = new Option(voice.name, i);
            });
        };

        voiceSelect.addEventListener('change', () => {
            speech.voice = voices[voiceSelect.value]; // Update selected voice
        });

        document.querySelector('button').addEventListener('click', () => {
            const text = document.querySelector('textarea').value.trim();
            if (text) { // Check if text is not empty
                speech.text = text;
                window.speechSynthesis.speak(speech);
            } else {
                console.warn("Textarea is empty. Please enter text.");
            }
        });