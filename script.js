const data = [
  { entry:"B", total:46, award:"🥇 First Place", badge:"gold", winner:true, scores:[9,10,9,9,9], image:"B.png" },

  { entry:"A", total:40, award:"🥈 Second (Joint)", badge:"silver", winner:true, scores:[8,8,8,8,8], image:"A.png" },
  { entry:"C", total:40, award:"🥈 Second (Joint)", badge:"silver", winner:true, scores:[9,9,8,8,6], image:"C.png" },

  { entry:"E", total:37, award:"🥉 Third (Joint)", badge:"bronze", winner:true, scores:[8,8,7,7,7], image:"E.png" },
  { entry:"H", total:37, award:"🥉 Third (Joint)", badge:"bronze", winner:true, scores:[8,8,7,7,7], image:"H.png" },

  { entry:"J", total:38, award:"", badge:"", winner:false, scores:[8,8,8,7,7], image:"J.png" },
  { entry:"I", total:35, award:"", badge:"", winner:false, scores:[7,7,8,6,7], image:"I.png" },
  { entry:"M", total:34, award:"", badge:"", winner:false, scores:[7,7,6,7,7], image:"M.png" },
  { entry:"F", total:33, award:"", badge:"", winner:false, scores:[7,7,6,7,6], image:"F.png" },
  { entry:"L", total:33, award:"", badge:"", winner:false, scores:[7,7,6,7,6], image:"L.png" },
  { entry:"K", total:32, award:"", badge:"", winner:false, scores:[7,6,6,7,6], image:"K.png" },
  { entry:"N", total:32, award:"", badge:"", winner:false, scores:[6,7,6,7,6], image:"N.png" },
  { entry:"D", total:30, award:"", badge:"", winner:false, scores:[6,6,7,5,6], image:"D.png" },
  { entry:"G", total:31, award:"", badge:"", winner:false, scores:[6,6,7,6,6], image:"G.png" }
];

const criteria = [
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

const cards = document.getElementById("cards");

/* Render cards */
function render(filter) {
  cards.innerHTML = "";

  data.filter(d => filter === "all" || d.winner)
      .forEach(item => {

    const card = document.createElement("div");
    card.className = "card" + (item.winner ? " winner" : "");

    card.innerHTML = `
      <div class="top">
        <div>
          <div class="entry">Entry ${item.entry}</div>
          ${item.award ? `<div class="badge ${item.badge}">${item.award}</div>` : ""}
        </div>
        <div class="score">${item.total}</div>
      </div>

      <div class="artwork">
        <img src="${item.image}" alt="Calligraphy Entry ${item.entry}" loading="lazy">
      </div>

      <button class="view">View details</button>

      <div class="details">
        ${criteria.map((c,i)=>`
          <div class="row">
            <span>${c}</span>
            <span>${item.scores[i]} / 10</span>
          </div>
        `).join("")}
      </div>
    `;

    const btn = card.querySelector(".view");
    const details = card.querySelector(".details");

    btn.onclick = () => {
      details.classList.toggle("open");
      btn.textContent = details.classList.contains("open")
        ? "Hide details"
        : "View details";
    };

    cards.appendChild(card);
  });
}

/* Default tab */
render("winners");

/* Tabs */
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    render(tab.dataset.tab);
  };
});

/* Dark / Light toggle */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("dark") ? "🌙 Dark" : "☀️ Light";
};