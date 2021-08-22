var NoseX = 0;
var NoseY = 0;
var LeftX = 0;
var RightX = 0;
var Difference = 0;

function setup(){
    canvas = createCanvas(475, 450);
    canvas.position(560, 125);
    video = createCapture(VIDEO);
    video.size(540, 500);
    video.position(10, 100);

    //Initializing Posenet
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotResult);
}

function modelLoaded(){
    console.log('PoseNet is Intialised');
}

function draw(){
    background('#f2bdff');
    fill('#00eeff');
    stroke('#00eeff');
    text("Live Life", NoseX, NoseY)
    textSize(Difference);
}

function gotResult(results){
    if (results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX = " + NoseX);
        console.log("NoseY = " + NoseY);
        LeftX = results[0].pose.leftWrist.x;
        RightX = results[0].pose.rightWrist.x;
        Difference = floor(LeftX - RightX);
        console.log(Difference);
    }
}