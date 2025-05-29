document.addEventListener("scroll", function(){
   const images = document.querySelectorAll(".hidden-image, .hidden-image-right");
 
   images.forEach((img)=>{
     let rect = img.getBoundingClientRect();
     if(rect.top < window.innerHeight && rect.bottom > 0){
       img.classList.add("show");
     }
  });
});



// let images = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.jpeg"]; // Add your image paths
//   let index = 0;
// let imageElement = document.getElementById(5)

//   function changeImage() {
//     index = (index + 1) % images.length; // Loop through images
//     document.getElementById("changingImage").src = images[index];
//   }

//   setInterval(changeImage, 3000); // Change every 2 seconds
