const data = [
  { entry: "B", total: 46, award: "🥇 First Place", scores: [9,10,9,9,9] },
  { entry: "A", total: 40, award: "🥈 Second (Joint)", scores: [8,8,8,8,8] },
  { entry: "C", total: 40, award: "🥈 Second (Joint)", scores: [9,9,8,8,6] },
  { entry: "E", total: 37, award: "🥉 Third (Joint)", scores: [8,8,7,7,7] },
  { entry: "H", total: 37, award: "🥉 Third (Joint)", scores: [8,8,7,7,7] },
];

const criteria = [
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

const container = document.getElementById("cards");

data.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="top">
      <div>
        <div class="entry">Entry ${item.entry}</div>
        <div class="badge">${item.award}</div>
      </div>
      <div class="score">${item.total}/50</div>
    </div>
    <div class="details">
      ${criteria.map((c,i)=>`
        <div class="row"><span>${c}</span><span>${item.scores[i]}/10</span></div>
      `).join("")}
    </div>
  `;

  card.onclick = () => {
    card.querySelector(".details").classList.toggle("open");
  };

  container.appendChild(card);
});