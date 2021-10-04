const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York")

 
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json();
    

    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;    
    

    // slice the datetime to extract hour
    hour = datetime.slice(11, 13);

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}

/*
 fetch() is a function that extracts the data from the API
 response is a variable that stores the data fetched from the API
 await() is a funciton that delays in order to get the data from the API which contains large amount of data 
    and it takes a time interval to get all the data

Async function can wait for the process to complete but sync function has zero delay state. 
*/