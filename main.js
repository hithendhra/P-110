Webcam.set({
    width:350,
    height:300,
    iamge_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
 Webcam.snap(function(data_uri)
 {
     document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
 });
}


console.log('ml5 version;',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ELHD-oYLn/model.json',modelloaded);

function modelloaded()
{
 console.log('modelloaded');
}

prediction_1="";
prediction_2="";

function speak()
{
 var synth=window.speechSynthesis;
 speak_data1="the first prediction is "+prediction_1;
 speak_data2="and the second prediction is "+prediction_2;
 var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
 synth.speak(utterthis);
}