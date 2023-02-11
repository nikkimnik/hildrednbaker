$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
    } else {
      $(".item").addClass("active");
    }
  });
});

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

function autoSlider() {
  newIndex++;
  if (newIndex === 3) newIndex = 0;
  const activeSlide = document.querySelector("[data-active]");
  const slides = document
    .querySelector("[data-carousel]")
    .querySelector("[data-slides]");

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

setInterval(autoSlider, 3000);

let map;
const staywellLatLong = { lat: 38.68237, lng: -84.59051 };
const arkEncounterLatLong = { lat: 38.62273, lng: -84.58446 };
const midpointLatLong = { lat: 38.66268, lng: -84.5752 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: midpointLatLong,
    zoom: 12,
    mapId: "5f1e5c6e5019b5f9",
  });

  window.initMap = initMap;

  let marker1 = new google.maps.Marker({
    position: arkEncounterLatLong,
    label: "Ark Encounter",
    map: map,
  });

  let marker2 = new google.maps.Marker({
    position: staywellLatLong,
    label: "The Staywell",
    map: map,
  });
}
