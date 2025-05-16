document.addEventListener('DOMContentLoaded', function() {
    if (contactForm) {
    // Cambiar mensajes de validación a español
    const inputs = contactForm.querySelectorAll('[required]');
    inputs.forEach(input => {
        input.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.type === "email") {
                    e.target.setCustomValidity("Por favor ingresa un correo electrónico válido");
                } else {
                    e.target.setCustomValidity("Por favor completa este campo");
                }
            }
        };
        input.oninput = function(e) {
            e.target.setCustomValidity("");
        };
    });
    }


    const toggleMenuButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    if (toggleMenuButton && menu) {
        toggleMenuButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }

    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopButton.style.display = 'flex';
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
    }

    const scrollToSectionButtons = document.querySelectorAll('.scroll-to-section');
    scrollToSectionButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            }
        });
    });
});
