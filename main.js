document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(107, 15, 43, 0.95)';
        } else {
            header.style.backgroundColor = 'var(--primary)';
        }
    });

    // Slideshow
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Form Submission (you can replace this with actual form submission logic)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });

    // Admission Form Modal
    const admissionModal = document.getElementById('admissionModal');
    const applyNowBtn = document.getElementById('applyNowBtn');
    const closeAdmissionModal = admissionModal.querySelector('.close');

    applyNowBtn.onclick = () => {
        admissionModal.style.display = 'block';
    }

    closeAdmissionModal.onclick = () => {
        admissionModal.style.display = 'none';
    }

    const admissionForm = document.getElementById('admissionForm');
    admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for submitting your application. We will contact you soon.');
        admissionForm.reset();
        admissionModal.style.display = 'none';
    });

    // Learn More Modal
    const learnMoreModal = document.getElementById('learnMoreModal');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const closeLearnMoreModal = learnMoreModal.querySelector('.close');

    learnMoreBtn.onclick = () => {
        learnMoreModal.style.display =

'block';
    }

    closeLearnMoreModal.onclick = () => {
        learnMoreModal.style.display = 'none';
    }

    // Image Gallery Modal
    const galleryModal = document.getElementById('galleryModal');
    const galleryImage = document.getElementById('galleryImage');
    const closeGalleryModal = galleryModal.querySelector('.close');
    const prevButton = galleryModal.querySelector('.prev');
    const nextButton = galleryModal.querySelector('.next');

    const activityImages = {
        cultural: ['img/activity1.jpg', 'img/cultural2.jpg', 'img/cultural3.jpg'],
        sports: ['img/activity2.jpg', 'img/sports2.jpg', 'img/sports3.jpg'],
        science: ['img/activity3.jpg', 'img/science2.jpg', 'img/science3.jpg'],
        community: ['img/activity4.jpg', 'img/community2.jpg', 'img/community3.jpg']
    };

    let currentActivity = '';
    let currentImageIndex = 0;

    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', () => {
            currentActivity = card.dataset.activity;
            currentImageIndex = 0;
            updateGalleryImage();
            galleryModal.style.display = 'block';
        });
    });

    closeGalleryModal.onclick = () => {
        galleryModal.style.display = 'none';
    }

    prevButton.onclick = () => {
        currentImageIndex = (currentImageIndex - 1 + activityImages[currentActivity].length) % activityImages[currentActivity].length;
        updateGalleryImage();
    }

    nextButton.onclick = () => {
        currentImageIndex = (currentImageIndex + 1) % activityImages[currentActivity].length;
        updateGalleryImage();
    }

    function updateGalleryImage() {
        galleryImage.src = activityImages[currentActivity][currentImageIndex];
    }

    // Close modals when clicking outside
    window.onclick = (event) => {
        if (event.target == admissionModal) {
            admissionModal.style.display = 'none';
        }
        if (event.target == learnMoreModal) {
            learnMoreModal.style.display = 'none';
        }
        if (event.target == galleryModal) {
            galleryModal.style.display = 'none';
        }
    }
});