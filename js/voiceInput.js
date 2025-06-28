// Ensure the browser supports SpeechRecognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true; // Keep listening after user stops speaking
    recognition.lang = 'en-US'; // Set the language (you can change it to your preferred language)
    recognition.interimResults = true; // Show partial results

    const noteInput = document.getElementById("noteInput");
    const transcriptionResult = document.getElementById("transcriptionResult");
    const voiceInputBtn = document.getElementById("voiceInputBtn");

    let isRecording = false;

    // Start and Stop voice recognition when the button is clicked
    voiceInputBtn.addEventListener("click", function() {
        if (isRecording) {
            recognition.stop();
            voiceInputBtn.textContent = "🎤 Start Recording";
        } else {
            recognition.start();
            voiceInputBtn.textContent = "🛑 Stop Recording";
        }
        isRecording = !isRecording;
    });

    // When the speech is recognized, update the textarea and transcription result
    recognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }

        // Display the result in the textarea and as a separate transcription result
        noteInput.value = transcript;
        transcriptionResult.textContent = transcript;
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error", event.error);
    };

} else {
    console.error("Speech Recognition API is not supported in this browser.");
}
