document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('experience-years').textContent = new Date().getFullYear() - 2021;

    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Update button text
        const btnText = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        this.textContent = btnText;
    });               
})