
const boxContainer = document.querySelector(".boxContainer")
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")

const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelectorAll(".phone")
const laptops = document.querySelectorAll(".laptop")


window.addEventListener("scroll", ()=>{
  let offsetY = window.scrollY
  projectsTitle.style.transform = `translateY(calc(75vh - ${offsetY}px))`
  phones[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
  laptops[0].style.transform = `translateX(calc(325vh - ${offsetY}px))`
  phones[1].style.transform = `translateX(calc(475vh - ${offsetY}px))`
  laptops[1].style.transform = `translateX(calc(600vh - ${offsetY}px))`
})

var parkEaseImages = new Array()
parkEaseImages[0]="img/parkease0.jpg"
parkEaseImages[1]="img/parkease1.jpg"
parkEaseImages[2]="img/parkease2.jpg"
parkEaseImages[3]="img/parkease3.jpg"
parkEaseImages[4]="img/parkease4.jpg"
parkEaseImages[5]="img/parkease5.jpg"
var i=0
function swapImage(){
  document.getElementById("parkEase").src=parkEaseImages[i];
  if(i<parkEaseImages.length-1)i++;
  else i=0;
  setTimeout("swapImage()",3000);
}
window.onload=swapImage;
