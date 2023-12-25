function sendMessage() {
    // form data 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
}


document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed(".subtitle-content",
        {
            strings: ['Software Developer.', 'Frontend Developer (Angular).', ' Data Analytics.'],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true
        }
    );

})