// hide menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
    closeMenu();
  }
  prevScrollpos = currentScrollPos;
};

//export pdf
function generatPDF() {
  var doc = new jsPDF();
  var elementHTML = $(".canvas").html();
  var specialElementHandlers = {
    "#elementH": function (element, renderer) {
      return true;
    },
  };
  doc.fromHTML(elementHTML, 15, 15, {
    width: 170,
    elementHandlers: specialElementHandlers,
  });

  // Save the PDF
  doc.save("Arshad-Resume.pdf");
}

//responsive menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
