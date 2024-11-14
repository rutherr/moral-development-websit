
// Function to toggle visibility of content sections
function toggleContent(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = (section.style.display === 'none') ? 'block' : 'none';
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Display the back-to-top button when the user scrolls down
window.onscroll = function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};
