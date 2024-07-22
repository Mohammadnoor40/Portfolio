document.addEventListener('DOMContentLoaded', function() {
    const accordionHeading = document.querySelector('.accordion-heading');
    const skillsContent = document.getElementById('skills-content');
    const skillsItems = skillsContent.querySelectorAll('h3');

    let delay = 200; 

    accordionHeading.addEventListener('click', function() {
        accordionHeading.querySelector('i').classList.toggle('fa-plus');
        accordionHeading.querySelector('i').classList.toggle('fa-minus');
        skillsContent.classList.toggle('active');

        skillsItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.toggle('visible');
            }, delay * index); 
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const resumeLink = document.querySelector('.resume-link');
    resumeLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = this.href; 
    });
});
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});