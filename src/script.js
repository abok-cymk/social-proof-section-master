
const fiveStarEl = document.querySelectorAll(".five__star");

const iconUrl = `/social-proof-section-master/icon-star.svg`;

fiveStarEl.forEach((element) => {
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("five__star-icons");
  iconContainer.style.marginRight = "1rem";

  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");
    img.src = iconUrl;
    img.alt = "star";
    img.classList.add("five__star-icon");
    iconContainer.appendChild(img);
  }

  element.insertBefore(iconContainer, element.firstChild);
});
