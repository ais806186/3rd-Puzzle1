// canvas 1 variables
var corridor;

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
 
corridor = loadImage('https://dl.dropboxusercontent.com/s/i3tlqxrhqo0vdpl/Corridor.png');
corridor2 = loadImage('https://dl.dropboxusercontent.com/s/6b18nc0dyqa15m7/Screen%20Shot%202017-05-22%20at%2012.12.50%20PM.png')
corridor3 = loadImage('https://dl.dropboxusercontent.com/s/5o3hhb22zkz0r85/Screen%20Shot%202017-05-22%20at%2012.13.07%20PM.png')
street = loadImage('https://dl.dropboxusercontent.com/s/f876jkepty464wf/street%20view.jpg')


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

  background(corridor,800,600);
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

}
  
function canvas2()
{
  background(corridor2,800,600);
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

     text("MouseX"+mouseX,10,330);
  text("MouseY"+mouseY,10,290);
  fill(0,0,0,0);
stroke(0,0,0);
  rect(265,263,39,30);

}

function canvas3()
{
  background(corridor3,800,600);
  fill(255,255,255);
  text("MouseX"+mouseX,10,330);
  text("MouseY"+mouseY,10,290);

if(mouseX> 299 && mouseX< 497 && mouseY > 93 && mouseY < 520 && mouseIsPressed == true)

{
canvas = 4
}

}

function canvas4()
{
 
  background(street,800,600);
    text("MouseX"+mouseX,10,330);
    text("MouseY"+mouseY,10,290);
  
fill(255,255,255);
stroke(0,0,0)
textSize(50);
text('Congratulations,',200,200);
text('YOU WON',210,250);

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



