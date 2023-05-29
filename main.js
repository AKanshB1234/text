 noseX = 0;
 noseY = 0;
 difference = 0;
 lwristX = 0;
 rwristX = 0;



function setup(){


    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(60, 150);

    canvas = createCanvas(550, 416);
    background("aquamarine");
    canvas.position(870, 217);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", showresult);
} 

function modelLoaded(){
    console.log("Model linked to your device");
}
function showresult(result){
    console.log(result);

    noseX = result[0].pose.nose.x -5;
    noseY = result[0].pose.nose.y -55;
    lwristX = result[0].pose.leftWrist.x;
    rwristX = result[0].pose.rightWrist.x;
    difference = Math.floor(lwristX - rwristX);
}

function draw(){
    word = document.getElementById("drp_dwn").value;
    
    background("aquamarine");
    fill("violet");
    stroke("black");
   
    word = document.getElementById("drp_dwn").value;
    
    background("aquamarine");
    fill("violet");
    stroke("black");
    text("Akansh", noseX, noseY,);
    textSize(difference); 
}
    
/**if(word == "Square"){
    square(noseX, noseY, difference);
    document.getElementById("h5").innerHTML = "Weight and Height are:--" + difference;
}
if(word == "Circle"){
    circle(noseX, noseY, difference);
    document.getElementById("h5").innerHTML = "Radius is:--" + difference;
}
if(word == "Rectangle"){
    rect(noseX, noseY, difference, difference/2);
    document.getElementById("h5").innerHTML = "Width:--" + difference +'<br><br>' + "Height:--" + difference/2;
}**/




