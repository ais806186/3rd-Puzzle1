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
  text("reversed time: "+reversedTime,90,200);


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
}
  
function canvas2()
{
  background(corridor2,600,600);
  fill(0,0,0);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)
  itemGrid(); 

  fill(255,255,255);
    stroke(255,255,255);
    //right arrow
   rect(430,310,60,25);
    triangle(490,300,515,325,490,350)

      if(mouseX>430 && mouseX<513 && mouseY > 311 && mouseY<338 && mouseIsPressed == true)
    {

      canvas = 1;
    }
//left arrow
    rect(310,310,60,25);
    triangle(310,300,280,325,310,350)

    if(mouseX > 280 && mouseX < 370 &&  mouseY>310 && mouseY <338 && mouseIsPressed == true)
{
  canvas = 1;

}
  


}

function canvas3()
{
  background(255,255,255);
  itemGrid();


  
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



