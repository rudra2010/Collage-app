var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";

    recognition.start();
}



recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {

        speak_pc();

    }
}

function speak_pc() {
var synth = window.speechSynthesis;
speak_data = "taking selfie in 5 seconds"
var speakThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(speakThis);
Webcam.attach(camera);

    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000)
}

camera = document.getElementById("camera");

Webcam.set({
    width: 460,
    height: 350,
    image_format: "jpg",
    jpg_quality: 100,
    crop_width: 400,
    crop_height: 350
})

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '">';
    });
}

function save() {
    
    link = document.getElementById("anchor_link");
    image_src = document.getElementById("selfie_image").src;
    link.href = image_src;
    link.click();
}