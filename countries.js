const header = document.querySelector("header");
header.style.textAlign = "center";
header.style.marginTop = "2rem";
const div = document.querySelector(".container");
for (let i = 0; i <= 101; i++) {
  title = document.createElement("div");
  title.className = "title";
  title.style.fontSize = "3rem";
  title.textContent = i;
  title.style.color = "white";
  title.style.width = "3rem";
  title.style.padding = "1rem 2rem";
  title.style.display = "inline";
  title.style.margin = "3px";
  div.appendChild(title);
}
