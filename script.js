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

const cards = document.getElementById("cards");

function render(filter) {
  cards.innerHTML = "";
  data.filter(d => filter === "all" || d.winner).forEach(item => {
    const c = document.createElement("div");
    c.className = "card" + (item.winner ? " winner" : "");
    c.innerHTML = `
      <div class="top">
        <div>
          <div class="entry">Entry ${item.entry}</div>
          <div class="badge ${item.badge}">${item.award}</div>
        </div>
        <div class="score">${item.total}</div>
      </div>
      <button class="view">View details</button>
      <div class="details">
        ${criteria.map((k,i)=>`
          <div class="row"><span>${k}</span><span>${item.scores[i]}/10</span></div>
        `).join("")}
      </div>
    `;
    const btn = c.querySelector(".view");
    const details = c.querySelector(".details");
    btn.onclick = () => {
      details.classList.toggle("open");
      btn.textContent = details.classList.contains("open") ? "Hide details" : "View details";
    };
    cards.appendChild(c);
  });
}

render("winners");

/* Tabs */
document.querySelectorAll(".tab").forEach(t => {
  t.onclick = () => {
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    t.classList.add("active");
    render(t.dataset.tab);
  };
});

/* Dark / Light toggle */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("dark") ? "🌙 Dark" : "☀️ Light";
};