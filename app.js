
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/*const btn = document.querySelector('#submit');
const inputs = document.querySelector('form');

btn.addEventListener('cilck',() =>{
Email.send({
  Host : "ssmtp@gmail.com",
  Username : "c1ec814c1bd300",
  Password : "b970a59c5dd46a",
  To : 'them@website.com',
  From : inputs.elements["email"].value,
  Subject : "Contact us",
  Body : inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["surname"].value
}).then(msg=> alert("We received your message"))
message => alert(message)
);
});

*/

function sendEmail (argument){

  Email.send({
Host : "smtp.mailtrap.io",
Username : "c1ec814c1bd300",
Password : "b970a59c5dd46a",
To : 'dummythicdata@gmail.com',
From : "rayaan.karlie@younglings.africa",
Subject : "Contact user",
Body : "The user would like to get in touch"
}).then(
message => alert(message)
);
}