var nose_x =0;
var nose_y =0;


function preload() {
clown_image = loadImage("https://i.postimg.cc/D0Cp6X61/Untitled-design-removebg-preview.png");

}

function setup() {

    canvas = createCanvas(300,250);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,250);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
    
}

function modelLoaded()  {

    console.log("modelLoaded");
}

function getposes(result) {

    if(result.length>0){

        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        console.log(nose_x);
        console.log(nose_y);
    }
}


function draw() {

image(video,0,0,300,250);
fill(130,12,0);
image(clown_image,nose_x-165,nose_y-220,330,380);
}

function take_snapshot() {

 save("image.jpg");
}