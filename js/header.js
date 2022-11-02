let ubicacionPrincipal = window.pageYOffset;

let $header = document.querySelector('#header');

window.addEventListener('scroll', function(){
    let ubicacionActual = window.pageYOffset

    if (ubicacionPrincipal >= ubicacionActual){
        $header.style.top = "0px"
    } else{
        $header.style.top = "-80px"
    }
    ubicacionPrincipal = ubicacionActual

})