import {
  hoverMenData,
  hoverWomenData,
  hoverMobData,
} from "./HomePage/hoverData";

console.log(hoverMenData, hoverWomenData, hoverMobData);

const hoverH2 = document.querySelectorAll(
  "#navSecondDiv > div > span:nth-child(3) > h2"
);
const hoverDiv = document.getElementById("hoverDiv");

console.log(hoverH2);

hoverH2.forEach((ele, i) => {
  ele.addEventListener("mouseenter", () => {
    hoverDiv.innerHTML = "";
    if (i === 0) {
      hoverDiv.style.display = "block";
      hoverMenData.forEach((ele) => {
        let hoverDataCard = document.createElement("div");
        hoverDataCard.className = "hoverDataCard";
        let hoverDataCardH2 = document.createElement("h2");
        let hoverDataCardLinks = document.createElement("div");
        ele.links.forEach((name) => {
          let linkText = document.createElement("links");
          hoverDataCardLinks.className = "hoverDataCardLinks";
          linkText.textContent = name.name;
          hoverDataCardLinks.append(linkText);
        });

        hoverDataCardH2.textContent = ele.title;

        hoverDataCard.append(hoverDataCardH2, hoverDataCardLinks);
        hoverDiv.append(hoverDataCard);
      });
    } else if (i === 1) {
      hoverDiv.style.display = "block";
      hoverWomenData.forEach((ele) => {
        let hoverDataCard = document.createElement("div");
        hoverDataCard.className = "hoverDataCard";
        let hoverDataCardH2 = document.createElement("h2");
        let hoverDataCardLinks = document.createElement("div");
        hoverDataCardLinks.className = "hoverDataCardLinks";
        ele.links.forEach((name) => {
          let linkText = document.createElement("p");

          linkText.textContent = name.name;
          hoverDataCardLinks.append(linkText);
        });

        hoverDataCardH2.textContent = ele.title;

        hoverDataCard.append(hoverDataCardH2, hoverDataCardLinks);
        hoverDiv.append(hoverDataCard);
      });
    } else if (i === 2) {
      hoverDiv.style.display = "block";
      hoverMobData.forEach((ele) => {
        let hoverDataCard = document.createElement("div");
        hoverDataCard.className = "hoverDataCard";
        let hoverDataCardH2 = document.createElement("h2");
        let hoverDataCardLinks = document.createElement("div");
        hoverDataCardLinks.className = "hoverDataCardLinks";
        ele.links.forEach((name) => {
          let linkText = document.createElement("links");

          linkText.textContent = name.name;
          hoverDataCardLinks.append(linkText);
        });

        hoverDataCardH2.textContent = ele.title;

        hoverDataCard.append(hoverDataCardH2, hoverDataCardLinks);
        hoverDiv.append(hoverDataCard);
      });
    }
  });
});

hoverH2.forEach((ele) => {
  ele.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!hoverDiv.matches(":hover")) {
        hoverDiv.style.display = "none";
      }
    }, 50);
  });
});

hoverDiv.addEventListener("mouseleave", () => {
  hoverDiv.style.display = "none";
});

hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.display = "block";
});
