noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
} 

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    //posenet

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
image(video, 0, 0, 300, 300);
image(mustache, noseX - 25, noseY +10, 40, 20);
image(lipstick, noseX - 25, noseY + 20, 40, 20);
}

function take_snapshot() {
    save("filtered.png");
}

function modelLoaded() {
    console.log("Initialised posenet");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X: " + noseX + ", Y: " + noseY);
        
    }
}