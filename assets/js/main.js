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

    var navItems = document.querySelectorAll(".nav-item");
    let lastActive = document.querySelector('li.active');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function () {
            console.log(lastActive)
            this.classList.add("active");
            lastActive.classList.remove("active");
            lastActive = this;
            console.log(this)
        });
    }

})