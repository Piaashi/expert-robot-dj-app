song="";
LEFTWRISTx=0;
LEFTWRISTy=0;
RIGHTWRISTx=0;
RIGHTWRISTy=0;

function setup()
{
   canvas=createCanvas(400,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on("pose",gotPoses);

}


function draw()
{
 image(video,0,0,400,300);
}


function preload()
{
    song=loadSound("song1.mp3");
}


function play()
{
    song.play();
    console.log("song1 is playing");
    song.setVolume(1)
    song.rate(1)
}

function stop()
{
    song.stop();
}


function modelLoaded()
{
 console.log("poseNet is loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
      console.log(results);
      LEFTWRISTx=results[0].pose.leftWrist.x;
      LEFTWRISTy=results[0].pose.leftWrist.y;

       console.log("LEFTWRISTx= "+LEFTWRISTx);
       console.log("LEFTWRISTy= "+LEFTWRISTy);
    

       RIGHTWRISTx=results[0].pose.rightWrist.x;
       RIGHTWRISTy=results[0].pose.rightWrist.y;
 
        console.log("RIGHTWRISTx= "+RIGHTWRISTx);
        console.log("RIGHTWRISTy= "+RIGHTWRISTy);
    }
}