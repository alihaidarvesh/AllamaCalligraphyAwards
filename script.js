const data = [
  { entry:"B", total:46, award:"🥇 First Place", badge:"gold", winner:true, scores:[9,10,9,9,9]},
  { entry:"A", total:40, award:"🥈 Second (Joint)", badge:"silver", winner:true, scores:[8,8,8,8,8]},
  { entry:"C", total:40, award:"🥈 Second (Joint)", badge:"silver", winner:true, scores:[9,9,8,8,6]},
  { entry:"E", total:37, award:"🥉 Third (Joint)", badge:"bronze", winner:true, scores:[8,8,7,7,7]},
  { entry:"H", total:37, award:"🥉 Third (Joint)", badge:"bronze", winner:true, scores:[8,8,7,7,7]},
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
  card.className = "card" + (item.winner ? " winner" : "");

  card.innerHTML = `
    <div class="top">
      <div>
        <div class="entry">Entry ${item.entry}</div>
        <div class="badge ${item.badge}">${item.award}</div>
      </div>
      <div class="score">${item.total}</div>
    </div>

    <button>View detailed scores</button>

    <div class="details">
      ${criteria.map((c,i)=>`
        <div class="row">
          <span class="key">${c}</span>
          <span>${item.scores[i]} / 10</span>
        </div>
      `).join("")}
    </div>
  `;

  const btn = card.querySelector("button");
  const details = card.querySelector(".details");

  btn.onclick = () => {
    details.classList.toggle("open");
    btn.textContent = details.classList.contains("open")
      ? "Hide details"
      : "View detailed scores";
  };

  container.appendChild(card);
});