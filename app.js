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

var slides=document.querySelectorAll(".logosSlide")
document.querySelectorAll(".logosRow").forEach ((row,i)=>{
  if(i<slides.length){
    var copy= slides[i].cloneNode(true);
    row.appendChild(copy);
  } 
});

const phoneObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showPhone')
    }else{
      entry.target.classList.remove('showPhone')
    }
  })
})

const laptopObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('showLaptop')
    }else{
      entry.target.classList.remove('showLaptop')
    }
  })
})

const hiddenPhones = document.querySelectorAll('.hiddenPhone')
hiddenPhones.forEach((el)=>phoneObserver.observe(el))

const hiddenLaptops = document.querySelectorAll('.hiddenLaptop')
hiddenLaptops.forEach((el)=>laptopObserver.observe(el))