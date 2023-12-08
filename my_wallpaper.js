//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(185, 222, 120); //light honeydew green colour
  


}

function my_symbol() { strokeWeight(6)
  push()
  scale(0.5)
  stroke(26,30,50)
  fill(255, 235, 156)
  ellipse(350,150,50,150)
  ellipse(250,150,50,150)
  ellipse(300,250,200,200) //head

  strokeWeight(6)
  stroke(26,30,50)
  fill(235, 232, 223)
  ellipse(335,245,50,50) //eyes
  ellipse(265,245,50,50)
  
  fill(26,30,50)
  ellipse(265,245,20,20) //eyes(pupil)
  ellipse(335,245,20,20)
  ellipse(300,280,15,10)

  stroke(230, 115, 208)
  fill(230, 115, 208)
  ellipse(345,280,15,10) //cheeks r l
  ellipse(255,280,15,10)

  stroke(26,30,50)
  beginShape();
  vertex(280,310)
  vertex(320,310)
  endShape(CLOSE)

  fill(255, 235, 156) //legs
  ellipse(270,450,30,70)
  ellipse(330,450,30,70)

  beginShape(); //arms probably do outside of the body
  vertex(500,380)
  vertex(460,340)
  vertex(460,380)
  vertex(500,380)
  endShape(close)


  beginShape(); // arms but better
  curveVertex(410,520)
  curveVertex(440,520)
  curveVertex(445,450) //cruved
  curveVertex(405,450)
  endShape(CLOSE)

  rect(250,340,100,100) //body

  ellipse(375,380,40,40) //hands r l
  ellipse(230,380,40,40) // do not rename this function. Treat this similarly to a Draw function
  pop()
}
