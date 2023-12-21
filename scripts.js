let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        document.getElementById("navbar").classList.add("hidden");
    } else if (currentScrollTop <= 50) {
        document.getElementById("navbar").classList.remove("hidden");
    }

    lastScrollTop = currentScrollTop;
});

document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll('section[id]');
    let navbarLinks = document.querySelectorAll('#navbar ul li a');

    function makeActive() {
        sections.forEach((section, index) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (window.pageYOffset >= top && window.pageYOffset < (top + height)) {
                navbarLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`#navbar ul li a[href="#${id}"]`).classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', makeActive);

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById("navbar").classList.add("hidden");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.random-rotate');

    images.forEach(function(img) {
        img.addEventListener('mouseenter', function() {
            let rotation = Math.random() < 0.5 ? '-5deg' : '5deg'; 
            img.style.transform = `rotate(${rotation})`;
        });

        img.addEventListener('mouseleave', function() {
            img.style.transform = 'rotate(0deg)'; 
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });


    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function toggleWorkingHours(dayId) {
    var timeDiv = document.getElementById(dayId);
    if (timeDiv.style.display === "none" || timeDiv.style.display === "") {
        timeDiv.style.display = "block";
    } else {
        timeDiv.style.display = "none";
    }
}

