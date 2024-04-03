// hamburger menu tutorial used: https://www.youtube.com/watch?v=flItyHiDm7E&ab_channel=WebDevTutorials
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Submit button
// 
document.getElementById("myForm").addEventListener("submit", function(event) {
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
  
    if (email.trim() === '' || description.trim() === '') {
        alert("Please fill out the empty fields.");
      event.preventDefault();
    } else {
        alert('Message request form has been submitted.')
    }
  });