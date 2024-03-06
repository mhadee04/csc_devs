//typing animation
var typed = new Typed(".typing", {
    strings: ["Web Development", "App Development", "Web Design" ],
    typeSpeed: 20,
    loop: true,
    backDelay: 1000,
    backSpeed: 10,
});
// back to top
window.onscroll = function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  };
  
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // change active navbar color 
 // const activeNav = document.querySelector("") 
