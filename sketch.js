var balloon;
var database, pos;

function preload() {
  bg = loadImage("qq.png");
  b111 = loadAnimation("q.png", "q2.png", "q3.png");
}
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    balloon = createSprite(250,250,10,10);
    balloon.addAnimation(b111);
    var balloonposition = database.ref('balloon/position');
    balloonposition.on("value", rpos, err);
}

function draw(){
    background(bg);

     if(keyDown(UP_ARROW)) {

        changePosition(0,-1);
    }

    drawSprites();
}

function changePosition(x,y) {
    
    database.ref('balloon/position').set(
        {x: pos.x + x, y: pos.y + y}
    );
}

function rpos(data) {

    pos = data.val();
    balloon.x = pos.x;
    balloon.y = pos.y;

}

function err() {

    console.log("error")
}