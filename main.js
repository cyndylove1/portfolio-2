


window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
    });


 
   
 const sr = ScrollReveal ({
    distance: '60px',
    duration: 2000,
    reset: true

 })
 sr.reveal('.content-main',{delay:350, origin:'left'})
 sr.reveal('.content-img,.content-service,.skill-main,.contact,.footer-container,.portfolio-item,.portfolio-item1,.container-3', {delay:350, origin:'bottom'})

       