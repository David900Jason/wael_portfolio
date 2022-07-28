const filterButtons = document.querySelectorAll(".gallery .navigation button");
const aboutHeadings = document.querySelectorAll(".about .card h3");
const aboutLinks = document.querySelectorAll(".about .card a");

// Click on Link
aboutLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link.parentElement.dataset.about);
    matchFilter(link.parentElement.dataset.about);
  });
});

// Match Heading InnerText with the filter Button's
function matchFilter(e) {
  filterButtons.forEach((button) => {
    if (e === button.innerText) {
      console.log("Matched");
      button.click();
    }
  });
}

// Click on found button
const footerSpan = document.querySelector(".footer .copyright span");

(function () {
  let date = new Date();
  footerSpan.innerText = `${date.getFullYear()}`;
})();
const galleryContainer = document.querySelector(".gallery .container");
const galleryImgs = document.querySelectorAll(".gallery .col-3");
const galleryPlusIcon = document.querySelectorAll(".gallery .image i");
const images = Array.from(galleryImgs);
let orderRange = [...images.keys()];

console.log(filterButtons);

shuffleImgs(orderRange);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterImgs(button.innerText);
  });
});

galleryPlusIcon.forEach((icon) => {
  icon.addEventListener("click", function () {
    if (document.querySelector(".screen")) {
      return;
    } else {
      let screen = document.createElement("div");
      screen.className = `screen`;
      screen.appendChild(icon.nextElementSibling.cloneNode(true));
      screen.querySelector("img").classList.add("collapse");
      setTimeout(() => {
        screen.querySelector("img").classList.remove("collapse");
      }, 500);
      document.body.appendChild(screen);
    }
  });
});

function shuffleImgs(arr) {
  let count = arr.length,
    rand;
  while (count > 0) {
    rand = Math.floor(Math.random() * arr.length);
    count--;

    [arr[rand], arr[count]] = [arr[count], arr[rand]];
  }
  galleryImgs.forEach((img, index) => {
    img.style.order = arr[index];
  });
  return galleryImgs;
}

function filterImgs(filterText) {
  if (filterText == "All") {
    galleryImgs.forEach((img) => {
      if (img.classList.contains("hidden")) {
        img.classList.remove("hidden");
        setTimeout(() => {
          img.style.display = "block";
          img.classList.add("show");
        }, 600);
      }
    });
  } else {
    galleryImgs.forEach((img) => {
      if (img.dataset.image == filterText.toLowerCase()) {
        img.classList.remove("hidden");
        setTimeout(() => {
          img.style.display = "block";
          img.classList.add("show");
        }, 600);
      } else {
        img.classList.add("hidden");
        setTimeout(() => {
          img.style.display = "none";
          img.classList.remove("show");
        }, 600);
      }
    });
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("screen")) {
    e.target.querySelector("img").classList.add("collapse");
    setTimeout(() => {
      e.target.remove();
    }, 600);
  }
});

const text = "Quality Assurance Manager";
const typeElement = document.querySelector(".landing .text h2");
let count = 0;

typeElement.innerHTML = "";

function typeWriter(t) {
  if (typeElement.innerHTML.length == 0) {
    typeElement.innerHTML += t[count];
    count++;
  }
  typeElement.innerHTML += t[count];
  count++;
  if (count == t.length) {
    clearInterval(writer);
    document.querySelector(".landing .text h2").classList.add("start");
  }
}

const writer = setInterval(typeWriter, 100, text);
const dropDownButton = document.getElementById("dropdown-icon");
const dropDownMenu = document.querySelector(".dropdown-menu");
const header = document.querySelector("header");
const logoImg = document.querySelector("header nav .logo img");

dropDownButton.addEventListener("click", function () {
  dropDownMenu.classList.toggle("active");
});
const progressBar = document.querySelector(".skills .skill .progress");
const progressSpan = document.querySelectorAll(".skills .skill .progress > span");

window.onscroll = function () {
  if (window.scrollY >= 3135) {
    progressSpan.forEach((span) => {
      span.style.width = span.dataset.progress
    });
  }
}
let cards = document.querySelectorAll(".clients .client");
let cardBulletsList = document.querySelector(".clients .bullets");
let cardsArray = [...cards];

console.log(cardsArray);

// Set Starting Point
window.onload = function() {
  toggleActiveClass();
}

// Set Main Variables
let cardsCount = cardsArray.length;
let start = 0;
let current = Math.floor(cardsCount / 2);
let end = cardsArray.length;

// Create Bullets
for (let i = 0; i < cardsCount; i++) {
  let bullet = document.createElement("li");
  bullet.dataset.client = `${i + 1}`;
  cardBulletsList.appendChild(bullet);
}

// Toggle Class Active
function toggleActiveClass() {
  current++;
  cards.forEach(card => {
    if (card.dataset.client == current) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
  let cardBullets = document.querySelectorAll(".clients .bullets li").forEach(bullet => {
    if (bullet.dataset.client == current) {
      bullet.classList.add("active");
    } else {
      bullet.classList.remove("active");
    }
  });
  if (current == end) {
    current = start;
  }
}

// Set A slide Show
let sliderShow = setInterval(() => {
  toggleActiveClass();
}, 5000);