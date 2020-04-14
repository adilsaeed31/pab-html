function changec1() {
  document.getElementById("catcardbody1").style.background = "#dbb354";
  document.getElementById("catcardbody1").style.borderRadius = "58px";
  document.getElementById("catcap1").style.color = " #dbb354";
  document.getElementById("catimg1").src = "assets/images/s2b.png";
}
function change1c1() {
  document.getElementById("catcardbody1").style.borderRadius = "25px";
  document.getElementById("catcardbody1").style.background = "#f5f5f5";
  document.getElementById("catcap1").style.color = "#f5f5f5";
  document.getElementById("catimg1").src = "assets/images/s2g.png";
}

function changec2() {
  document.getElementById("catcardbody2").style.background = "#dbb354";
  document.getElementById("catcardbody2").style.borderRadius = "58px";
  document.getElementById("catcap2").style.color = " #dbb354";
  document.getElementById("catimg2").src = "assets/images/s1b.png";
}
function change1c2() {
  document.getElementById("catcardbody2").style.borderRadius = "25px";
  document.getElementById("catcardbody2").style.background = "#f5f5f5";
  document.getElementById("catcap2").style.color = "#f5f5f5";
  document.getElementById("catimg2").src = "assets/images/s1g.png";
}

function changec3() {
  document.getElementById("catcardbody3").style.background = "#dbb354";
  document.getElementById("catcardbody3").style.borderRadius = "58px";
  document.getElementById("catcap3").style.color = " #dbb354";
  document.getElementById("catimg3").src = "assets/images/s3b.png";
}
function change1c3() {
  document.getElementById("catcardbody3").style.borderRadius = "25px";
  document.getElementById("catcardbody3").style.background = "#f5f5f5";
  document.getElementById("catcap3").style.color = "#f5f5f5";
  document.getElementById("catimg3").src = "assets/images/s3g.png";
}

function changec4() {
  document.getElementById("catcardbody4").style.background = "#dbb354";
  document.getElementById("catcardbody4").style.borderRadius = "58px";
  document.getElementById("catcap4").style.color = " #dbb354";
  document.getElementById("catimg4").src = "assets/images/s4b.png";
}
function change1c4() {
  document.getElementById("catcardbody4").style.borderRadius = "25px";
  document.getElementById("catcardbody4").style.background = "#f5f5f5";
  document.getElementById("catcap4").style.color = "#f5f5f5";
  document.getElementById("catimg4").src = "assets/images/s4g.png";
}

function changec5() {
  document.getElementById("catcardbody5").style.background = "#dbb354";
  document.getElementById("catcardbody5").style.borderRadius = "58px";
  document.getElementById("catcap5").style.color = " #dbb354";
  document.getElementById("catimg5").src = "assets/images/s5b.png";
}
function change1c5() {
  document.getElementById("catcardbody5").style.borderRadius = "25px";
  document.getElementById("catcardbody5").style.background = "#f5f5f5";
  document.getElementById("catcap5").style.color = "#f5f5f5";
  document.getElementById("catimg5").src = "assets/images/s5g.png";
}

function changec6() {
  document.getElementById("catcardbody6").style.background = "#dbb354";
  document.getElementById("catcardbody6").style.borderRadius = "58px";
  document.getElementById("catcap6").style.color = " #dbb354";
  document.getElementById("catimg6").src = "assets/images/s6b.png";
}
function change1c6() {
  document.getElementById("catcardbody6").style.borderRadius = "25px";
  document.getElementById("catcardbody6").style.background = "#f5f5f5";
  document.getElementById("catcap6").style.color = "#f5f5f5";
  document.getElementById("catimg6").src = "assets/images/s6g.png";
}

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
