let parallax = document.querySelector('.figureI');
function ScrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform ='translateY('+ scrollTop * -0.1 +'px)';
}

window.addEventListener('scroll' ,ScrollParallax)