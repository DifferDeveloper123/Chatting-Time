var welcome;

function preload(){


}

function setup() {
  createCanvas(windowWidth - 500, windowHeight);

  welcome = new WelcomeScreen();

}

function draw() {
  background("EEFCF4");  

  welcome.display();

  drawSprites();
}