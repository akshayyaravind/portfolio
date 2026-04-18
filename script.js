document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with fade-in and fade-up classes
    const observerElements = document.querySelectorAll('.fade-in, .fade-up');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class when the element comes into view
                entry.target.classList.add('visible');
                // Unobserve so it only animates once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly trigger before it hits the bottom
    });

    // Observe each element
    observerElements.forEach(element => {
        observer.observe(element);
    });
});
