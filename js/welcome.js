class WelcomeScreen{
    constructor(){
        this.start = createButton("Start");
        this.start.class("button");

        this.customise = createButton("Customise");
        this.customise.class("button");
    }

    display(){
        this.start.position(windowWidth/2 - 150,windowHeight/2);
        this.customise.position(windowWidth/2 - 150,windowHeight/2 + 100);

        this.start.mousePressed(() =>{
              this.start.hide();
              this.customise.hide();
              
              var header_of_chat = createSprite(windowWidth/2 - 240, windowHeight/2 - 260, windowWidth, windowHeight/6);
              header_of_chat.shapeColor = "red";

              drawSprites();
        })

    }
}