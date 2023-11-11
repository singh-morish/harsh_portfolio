/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== Menu Show =====*/

/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  });
  /*===== Menu Hide =====*/
  
  /* Validate if constant exists */
}
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  });
}

/*=============== Remove Menu Mobile =============== */
function linkAction(){
  const navMenu = document.getElementById('nav-menu');

  //when we click on each link we remove the menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))


/*=============== Contact Form =============== */

/*=============== Style Switcher =============== */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler');
const styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.toggle('open');
});


/*=============== Background Header =============== */

function scrollHeader() {
  const header = document.getElementById("header");

  // when the scroll is greater than 50vh add the scroll header class to header tag

  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);


/*=============== Contact Form =============== */
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    // add and remove color
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    // show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    emailjs
      .sendForm(
        "service_skz1sy7",
        "template_2j22hl2",
        "#contact-form",
        "cOnTCNYXRk4GnGgo0"
      )
      .then(() => {
        // show message and add color, window + dot ro open emojis
        contactMessage.classList.add("color-light");
        contactMessage.textContent = "Message sent ✔️";

        // remove message after 5 second
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      });

      contactName.value="";
      contactEmail.value="";
      Message.value="";
  }
};

contactForm.addEventListener("submit", sendEmail);
