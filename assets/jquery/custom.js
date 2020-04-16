$(".owl-carousel").owlCarousel({
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
