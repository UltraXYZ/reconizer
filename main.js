Webcam.set({
    width:350, height:300, image_format:"png", png_quality:100
})

camera = document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capturedImage' src='" + data_uri + "'>";
    });
}

console.log("ml5 version:", ml5.verson);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XHXrmomN7/model.json",modelLoaded);



function modelLoaded() {
    console.log("model loaded")
}