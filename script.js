document.addEventListener('DOMContentLoaded', function () {

    const img = document.querySelectorAll('.parallax-img');
    const main = document.querySelector('.parallax');


    function parallax(event) {
        
        let coordX = event.clientX;
        let coordY = event.clientY
        

        img.forEach(item => {
            const speedX = item.getAttribute('data-speed');
            const speedY = item.getAttribute('data-y');
            item.style.transform = "translate(" + coordX / speedX + "px, "+ coordY / speedY +"px)"
        })
    }

    document.addEventListener('mousemove', parallax)

})