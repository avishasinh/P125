mustacheX = 0
mustacheY = 0

function preload(){
 mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
 canvas = createCanvas(300,300)
 canvas.center()
 video = createCapture(VIDEO)
 video.hide()
 poseNet = ml5.poseNet(video, modelLoaded)
 poseNet.on("pose", gotResults)
}

function draw(){
    image(video, 0,0,300,300)
    image(mustache, mustacheX, mustacheY, 40,30)
}

function modelLoaded(){
    console.log("model loaded")
}

function gotResults(results){
    console.log("nose x: " + results[0].pose.nose.x)
    console.log("nose y: " + results[0].pose.nose.y)
    mustacheX = results[0].pose.nose.x - 215
    mustacheY = results[0].pose.nose.y -110
}