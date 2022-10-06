nose_x = 0;
nose_y = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/25fj4XbM/picwish-4.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if(results.length > 0) 
    {
        console.log(results)
        console.log("Nose x = " + nose_x);
        console.log("Nose y = " + nose_y);

        nose_x = results[0].pose.nose.x-20;
        nose_y = results[0].pose.nose.y-20;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_x, nose_y, 40, 40);
 
}

function take_snapshot() {
    save('myFilterImage.png')
}



