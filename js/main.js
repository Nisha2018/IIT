// Header
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    const navButtons = document.querySelector('.buttons');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    navButtons.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active');
})


// owlCarousel
$(document).ready(function() {
    //Tabs 
    $('.tabLabels').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })

    //popClasses Slides
    $('.popSlides').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    })
});