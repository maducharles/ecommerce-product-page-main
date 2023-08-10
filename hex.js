const review = [{
  img: "images/image-product-1.jpg", 
  name: "Sneaker Company",
  acts: "$130.20",
  part: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
}, 
{
  img: "images/image-product-2.jpg", 
  name: "Lurking Company",
  acts: "$150.30",
  part: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.Collection  Men Women"
}, 
{
  img: "images/image-product-3.jpg",
    name: "Sneaker Company",
    acts: "$125.00",
    part: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.Collections Men women"
}, 
{
  img: "images/image-product-4.jpg",
    name: "Kinbrace Company",
    acts: "$250.40",
    part: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. Fall Limited Edition Sneakers"
}]


let image = document.getElementById("image1")
let names = document.querySelector("#name");
let act = document.querySelector("#acts");
let  text = document.querySelector(".part");
let btns1 = document.querySelector(".intro1");
let btns2 = document.querySelector(".intro2");
let btns3 = document.querySelector("#random");

//index of the array
let currentItem = 0;

window.addEventListener("DomContentLoaded", function() {
  alert("welcome to guys");
  getItems();
})

//main access
function getItems() {
  image.src = review[currentItem].img;
  names.innerHTML = review[currentItem].name;
  act.innerHTML = review[currentItem].acts;
  text.innerText = review[currentItem].part;
 }

btns2.addEventListener("click" , function() {
  currentItem++;
  if (currentItem > review.length-1) {
    currentItem = 0;
  }
  getItems();
})

btns1.addEventListener("click" , function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length-1;
  }
  getItems();
})


btns3.addEventListener("click" , function() {
  let randomgen = Math.floor(Math.random() * review.length);
  currentItem = randomgen;
  console.log(currentItem)
  getItems();
})