canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_X=10;
rover_Y=10;

randomno=Math.floor(Math.random()*4);
console.log(randomno);

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;

}


function uploadbackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadrover()
{
    ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_width,rover_width);
}


window.addEventListener("keydown",my_keyDown);

function my_keyDown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38');
    {
        up();
        console.log("up")
    }

    if (keyPressed=='40');
    {
        down();
        console.log("down")
    }

    if (keyPressed=='37');
    {
        left();
        console.log("left")
    }

    if (keyPressed=='39');
    {
        right();
        console.log("right")
    }
    

}


function up()
{
if (rover_Y>=0)
{
  rover_Y=rover_Y-10;
  console.log("when up arrow is pressed,   x ="  +  rover_X  +  " | y = "  +  rover_Y);
    uploadbackground();
    uploadrover();
}
}


function down()
{
    if (rover_Y<=800)
    {
         rover_Y=rover_Y +10;
         console.log("when down arrow is pressed,  x = "  +  rover_X  +  " | y = "  +  rover_Y );
         uploadbackground();
         uploadrover();
    }
}


function left()
{
if (rover_X>=0)
{
  rover_X=rover_X -10;
  console.log("when left arrow is pressed,   x="  +  rover_X  +  "| y = "  +  rover_Y);
    uploadbackground();
    uploadrover();
}
}


function right()
{
if (rover_X<=800)
{
  rover_X=rover_X +10;
  console.log("when right arrow is pressed,   x="  +  rover_X  +  "| y = "  +  rover_Y);
    uploadbackground();
    uploadrover();
}
}