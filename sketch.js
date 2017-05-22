// canvas 1 variables
var corridor;
var go;
var wall;
var lock; 
// canvas 2 variables
var initialTime = 0;
var newSecond = 0;
var q = 0;
var minuteMultiplier = 0;
var reversedTime = 0;
var recordTime = false;
var nextMinute = true;


function preload() {
 
  corridor = loadImage('https://dl.dropboxusercontent.com/s/7kpwqvgdb0pv3oi/corridor%201.jpg');
  go = loadImage('https://dl.dropboxusercontent.com/s/85gq73i2oh1908e/arrow%20go.png');
corridor2 = loadImage('https://dl.dropboxusercontent.com/s/4kvu4fvrbfe114u/Screen%20Shot%202017-05-09%20at%2012.56.56%20PM.png')
doors = loadImage('https://dl.dropboxusercontent.com/s/zoacf4po2jkhjgj/3%20doors.jpg')
doorsopen = loadImage('https://dl.dropboxusercontent.com/s/mfsxxf652gjivjo/doors%20open.jpg')
darkroom = loadImage('https://dl.dropboxusercontent.com/s/zecowevhj1f9kku/dark%20empty%20room.jpg')
alarm= loadImage('https://dl.dropboxusercontent.com/s/denaylpsul64xm4/alarm.png')
up = loadImage('https://dl.dropboxusercontent.com/s/ex6jms0hjxfolhm/uparrow.png')
down = loadImage('https://dl.dropboxusercontent.com/s/j1yoo58wrf6vvb7/downarrow.png')
right = loadImage('https://dl.dropboxusercontent.com/s/6sokst42abacjzz/leftarrow.png')
left = loadImage('https://dl.dropboxusercontent.com/s/8oxz8bwm49cgiws/rightarrow.png')

}


function setup()
{
  createCanvas(800,600);

canvas = 1;  // canvas 1 variables
  
}

function draw()

{


  if (canvas == 1)
  {
  canvas1();
  }
else if (canvas == 2)
{

  canvas2();
}
else if (canvas == 3)
  {
    canvas3()
  }

  else if (canvas == 4)

  {
    canvas4()
  }

  else if (canvas = 5)
  {
    canvas5()
  }




   if (second() == 0)
  {
    if (q == 0)
    {
      minuteMultiplier = minuteMultiplier + 1;
      q = 5;
    }
  }


  if (recordTime == false)
  {
    recordTime = true;
    initialTime = second();
  }
  //                                 25..59   - 25
  newSecond = minuteMultiplier*60 + second() - initialTime;
  reversedTime = 200 - newSecond;

textSize(20);
  text("Time Remaining: "+reversedTime,60,40);

   image(alarm,10,10,50,50);

}

// Canvas 1 demonstrates a moving rectangle controlled by a button
function canvas1()
{

  background(corridor,100,100);
fill(255,255,255);
textSize(15);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)

    
 fill(255,255,255);
    stroke(255,255,255);
   rect(356,490,47,110);
    triangle(330,500,380,445,430,500)

  if(mouseX > 345 && mouseX< 412 && mouseY> 447 && mouseY< 600 && mouseIsPressed == true)
  
 
{
canvas = 2;


}

rect(430,310,60,25);
    triangle(490,300,515,325,490,350)

      if(mouseX>430 && mouseX<513 && mouseY > 311 && mouseY<338 && mouseIsPressed == true)
    {

      canvas = 2;
    }
//left arrow
    rect(310,310,60,25);
    triangle(310,300,280,325,310,350)

    if(mouseX > 280 && mouseX < 370 &&  mouseY>310 && mouseY <338 && mouseIsPressed == true)
{
  canvas = 3;

}

}
  
function canvas2()
{
  background(corridor2,600,600);
  fill(0,0,0);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)

  fill(255,255,255);
    stroke(255,255,255);
   rect(380,450,40,90);
  triangle(370,540,400,570,430,540);

  if(mouseX> 378 && mouseX< 424 && 453 && 568 && mouseIsPressed == true)
  {

canvas = 3; 

  }


  itemGrid(); 


   


}

function canvas3()
{
  background(doors,800,600);
  fill(255,255,255);
   text("MouseX"+mouseX,10,330);
  text("MouseY"+mouseY,10,290);
  fill(0,0,0,0);
stroke(0,0,0);
  rect(265,263,39,30);

fill(0,0,0);
rect(100,200,600,100);
fill(255,255,255);
text('What belongs to you but others use it more than you do?',150,250)

rect(200,350,100,50);
if(mouseX> 202 && mouseX< 300 && mouseY >  350 && mouseY < 400 && mouseIsPressed == true)

{

}


  if (mouseX>267 && mouseX<304 && mouseY > 266 && mouseY<296 && mouseIsPressed == true)
  {
    canvas = 4;
  }
}

function canvas4()
{
 
  background(doorsopen,800,600);
    text("MouseX"+mouseX,10,330);
    text("MouseY"+mouseY,10,290);

   fill(255,255,255);
    stroke(255,255,255);
    //arrow on the left
   rect(192,510,25,60);
    triangle(430,520,460,500,490,520)

    if(mouseX>184 && mouseX < 226 && mouseY > 500 && mouseY <  570 && mouseIsPressed == true)
    {
      canvas = 1;
    }


    // arrow on the right
     rect(446,510,25,60);
    triangle(175,520,205,500,235,520)

if(mouseX >  440 && mouseX < 480 && mouseY > 503 && mouseY < 570 && mouseIsPressed == true)
{
  canvas = 5;
}

}
function canvas5()
{
background(darkroom,800,600);
text("MouseX"+mouseX,10,330);
text("MouseY"+mouseY,10,290);
 fill(255,255,255);
    stroke(255,255,255);
   rect(380,450,40,90);
  triangle(370,540,400,570,430,540);

  if(mouseX>377 && mouseX< 426 && mouseY > 451 && mouseY < 570 && mouseIsPressed == true)
  {

    canvas = 4;
  }


}


function itemGrid()
{
 /* // background for item grid
  fill(50,50,50);
  rect(0,600,1000,100);

  // right most box
  fill(125,125,125);
  rect(260,620,70,70);

  // left most box
  fill(125,125,125);
  rect(20+80,620,70,70);

  // middle most box
  fill(125,125,125);
  rect(20+80*2,620,70,70);
*/
}

function paintCanvasButtons()
{
 


}



