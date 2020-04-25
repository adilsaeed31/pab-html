$(".owl-carousel1").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  items: 3,
  slideBy: 3,
  dots: true,
  autoplay: false,
  autoplayTimeout: 5000,

  responsive: {
    0: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
$(".owl-carousel2").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  items: 5,
  slideBy: 5,
  dots: true,
  autoplay: false,
  autoplayTimeout: 5000,

  responsive: {
    0: {
      items: 2,
    },
    992: {
      items: 5,
    },
  },
});



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function nextVideo(obj) {
  let elems = document.getElementsByClassName("customLabel");
  let forLabel = parseInt(obj.getAttribute("for").replace("s", ""));

  if (forLabel !== 3) {
    for (elm of elems) {
      elm.setAttribute("for", `s${forLabel + 1}`);
    }
  }
}

function prevVideo(obj) {
  let elems = document.getElementsByClassName("customLabel");
  let forLabel = parseInt(obj.getAttribute("for").replace("s", ""));

  if (forLabel !== 1) {
    for (elm of elems) {
      elm.setAttribute("for", `s${forLabel - 1}`);
    }
  }
}

$(document).ready(function () {
  $("select").SumoSelect();
});
