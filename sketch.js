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
 
  corridor = loadImage('https://dl.dropboxusercontent.com/s/9bicgw95uurt7u7/corridor-003.jpg');
  go = loadImage('https://dl.dropboxusercontent.com/s/85gq73i2oh1908e/arrow%20go.png');
wall = loadImage('https://dl.dropboxusercontent.com/s/cx31mcmbg4icgz9/concrete%20wall.jpeg')

}


function setup()
{
  createCanvas(800,600);


  // canvas 1 variables
  
    canvas = 1;
}

function draw()
{
  canvas1();

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

textSize(30);
  text("reversed time: "+reversedTime,150,200);


}

// Canvas 1 demonstrates a moving rectangle controlled by a button
function canvas1()
{

  background(corridor,100,100);
  image(go,305,432,200,200);
fill(255,255,255);
textSize(20);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)
   
    

  if(mouseX > 373 && mouseX< 440 && mouseY> 447 && mouseY< 600)
  {
  fill(255,255,255);
    stroke(255,255,255);
   rect(380,490,47,110);
    triangle(350,500,405,445,460,500)
if(mouseIsPressed == true)
{
canvas2();
}
    

  
}




}
  
function canvas2()
{
  background(wall,800,600);
  fill(0,0,0);
  text("Mouse X "+mouseX,10,330);
  text("Mouse Y "+mouseY,10,290)
  itemGrid(); 

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



