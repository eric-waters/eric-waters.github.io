var lastScrollPosition = window.pageYOffset;
let hasScrolledYet = false;
if(lastScrollPosition == 0 && !hasScrolledYet) {
    document.getElementById('myNavbar').style.top = '-50%';
}
document.addEventListener('scroll', () => {
    hasScrolledYet = true;
    let offset = window.pageYOffset;
    if(offset <= 500) {
        document.getElementById('myNavbar').style.top = '0%';
        lastScrollPosition = offset;
    }
    if(lastScrollPosition < offset) {
        document.getElementById('myNavbar').style.top = '-50%';
        $('.navbar-collapse').collapse('hide');
        lastScrollPosition = offset;
    } else {
        document.getElementById('myNavbar').style.top = '0%';
        lastScrollPosition = offset;
    }
});

var navItems = document.getElementsByClassName("nav-item");
var hideNavBar = function() {
    document.getElementById('myNavbar').style.top = '-50%';
};

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        setTimeout(hideNavBar, 800);
    });
}

function sendEmail(nameInput, orgInput, emailInput, messageInput) {
    console.log("sending email");
    if(nameInput!= "" && messageInput!= "") {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ericwaters2019@gmail.com",
            Password : "9CF5F50F482B54C125BED0979C4EB1A1A3A9",
            Port: "2525",
            To : "ericwaters2019@gmail.com",
            From : "ericwaters2019@gmail.com",
            Subject : "Message from Personal Website",
            Body : `${nameInput} (${emailInput}) from ${orgInput} has sent the following message:
            ${messageInput}`
        }).then(
        message => alert('Thanks! I will get back to you as soon as I can.')
        ).catch(message => 
            alert(message)
        );
    }
    else {
         alert('Please enter your name and a message in order to submit.');
    }
}

//Text animation function at top of screen
//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = false; //set this to true if deleting is desired
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
