const textField = document.getElementById('text-field')
textField.defaultValue = "This is a Text Speech Converter App. It's created by Rubel Islam."
const icons = document.getElementById("icons")
const handleListenSpeech = () => {
    let speech = new SpeechSynthesisUtterance;
    speech.text = textField.value;
    window.speechSynthesis.speak(speech);
    icons.classList.remove("fa-circle-play");
    icons.classList.add("fa-circle-pause");
}