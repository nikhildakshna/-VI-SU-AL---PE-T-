//Create variables here
var dog;
var food;
var Food;
function preload()
{
  //load images here
  dogIMG = loadImage("dogImg.png");
  happydogIMG = loadImage("dogImg1.png");
  milkIMG = loadImage("Milk.png");
}

function setup() {
  createCanvas(800, 800);
  database = firebase.database();
  dog = createSprite(650,500,10,10);
  dog.addImage(dogIMG);
  dog.scale = 0.2;

  food = database.ref('food');
  food.on("value",readstock);

  milk = new Foodtype();

  Food = 20;

  for(var N = 20;N < 520;N += 50){
  milkspr = createSprite(N,400,10,30);
  milkspr.addImage(milkIMG);
  milkspr.scale = 0.1;
  }

}


function draw() {  
background("teal");
  drawSprites();
  //add styles here

textSize(20);
fill("black");
text("food remaining:" + Food,400,dog.y - 50);

milk.draw();
milk.feed();

}

function readstock(data){
Food = data.val();
}

function writeStock(number){
database.ref('/').update({
food: number
})
}
