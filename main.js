canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 150;
rover_height = 90;

background_image ="https://i.postimg.cc/bv5d35nK/racing.jpg",
rover_img = "https://i.postimg.cc/YqdnnNX1/car1.png";
rover_2_img = "ClipartKey_116784.png";

rover_x = 10;
rover_y = 10;
rover_2_x = 10;
rover_2_y = 120;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;

    rover_2_imgTag = new Image();
    rover_2_imgTag.onload = uploadrover2;
    rover_2_imgTag.src = rover_2_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
 }
 function uploadrover2(){
    ctx.drawImage(rover_2_imgTag, rover_2_x, rover_2_y, rover_width, rover_height);
 }
 
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up(){
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = "+ rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function down(){
    if (rover_y <= 500){
        rover_y = rover_y +10;
        console.log("When down arrow is pressed, x = "+ rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function right(){
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = "+ rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function left(){
    if (rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = "+ rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}

window.addEventListener("keydown2",my_keydown2);

function my_keydown2(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '87') {
        up1();
        console.log("up1");
    }
    if (keyPressed == '83') {
        down1();
        console.log("down1");
    }
    if (keyPressed == '65') {
        left1();
        console.log("left1");
    }
    if (keyPressed == '68') {
        right1();
        console.log("right1");
    }
}

function up1(){
    if (rover_2_y >= 0) {
        rover_2_y = rover_2_y - 10;
        console.log("When up arrow is pressed, x = "+ rover_2_x + " | y = " + rover_2_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function down1(){
    if (rover_2_y <= 500){
        rover_2_y = rover_2_y +10;
        console.log("When down arrow is pressed, x = "+ rover_2_x + " | y = " + rover_2_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function right1(){
    if (rover_2_x <= 700) {
        rover_2_x = rover_2_x + 10;
        console.log("When right arrow is pressed, x = "+ rover_2_x + " | y = " + rover_2_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}
function left1(){
    if (rover_2_x >= 0){
        rover_2_x = rover_2_x - 10;
        console.log("When left arrow is pressed, x = "+ rover_2_x + " | y = " + rover_2_y);
        uploadBackground();
        uploadrover();
        uploadrover2();
    }
}