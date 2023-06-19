function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HsuJd5hD5/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}