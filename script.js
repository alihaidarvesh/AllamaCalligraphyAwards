const data = [
  {
    entry: "B",
    total: 46,
    image: "B.png",
    marks: {
      "Letter Formation": 9,
      "Composition & Balance": 10,
      "Readability": 9,
      "Creativity & Expression": 9,
      "Overall Finish": 9
    },
    comment: "Outstanding balance and depth. A mature and spiritually resonant composition."
  },
  {
    entry: "A",
    total: 40,
    image: "A.png",
    marks: {
      "Letter Formation": 8,
      "Composition & Balance": 8,
      "Readability": 8,
      "Creativity & Expression": 8,
      "Overall Finish": 8
    },
    comment: "Elegant structure with disciplined strokes and harmonious spacing."
  },
  {
    entry: "C",
    total: 40,
    image: "C.png",
    marks: {
      "Letter Formation": 9,
      "Composition & Balance": 9,
      "Readability": 8,
      "Creativity & Expression": 8,
      "Overall Finish": 6
    },
    comment: "Strong movement and confidence, slightly reduced finish consistency."
  }
];

const cards = document.getElementById("cards");

data.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  const marksHTML = Object.entries(item.marks)
    .map(([k,v]) => `${k}: <strong>${v}/10</strong>`)
    .join("<br>");

  card.innerHTML = `
    <h3>Entry ${item.entry} · <span class="total">${item.total}/50</span></h3>
    <img src="${item.image}">
    <button>View detailed marking</button>
    <div class="details">
      ${marksHTML}
      <p><strong>Jury Comment:</strong> ${item.comment}</p>
    </div>
  `;

  const btn = card.querySelector("button");
  const details = card.querySelector(".details");

  btn.onclick = () => {
    const open = details.style.display === "block";
    details.style.display = open ? "none" : "block";
    btn.textContent = open ? "View detailed marking" : "Hide details";
  };

  cards.appendChild(card);
});

function goToResults() {
  document.querySelector(".landing").style.display = "none";
  document.getElementById("results").classList.remove("hidden");
  document.querySelector(".jury").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
