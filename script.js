const entries = [
  {e:"B",t:46,m:"🥇 First Place",w:true,c:"Outstanding balance and spiritual depth."},
  {e:"A",t:40,m:"🥈 Second Place",w:true,c:"Elegant structure and disciplined strokes."},
  {e:"C",t:40,m:"🥈 Second Place",w:true,c:"Strong movement with confident flow."},
  {e:"E",t:37,m:"🥉 Third Place",w:true,c:"Balanced form with expressive clarity."},
  {e:"H",t:37,m:"🥉 Third Place",w:true,c:"Creative use of space and rhythm."},

  {e:"J",t:38,c:"Graceful execution with refined control."},
  {e:"I",t:35,c:"Clear readability with calm composition."},
  {e:"M",t:34,c:"Energetic strokes, needs consistency."},
  {e:"F",t:33,c:"Dynamic form with scope for balance."},
  {e:"L",t:33,c:"Dense structure, expressive intent."},
  {e:"K",t:32,c:"Bold strokes, needs proportion control."},
  {e:"N",t:32,c:"Modern feel with decorative quality."},
  {e:"D",t:30,c:"Simple and sincere execution."},
  {e:"G",t:31,c:"Minimalist approach with elegance."}
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
  entries
    .filter(x => filter === "all" || x.w)
    .forEach(x => {
      const c = document.createElement("div");
      c.className = "card" + (x.w ? " winner" : "");
      c.innerHTML = `
        <h3>${x.m ? `<span class="medal">${x.m}</span><br>` : ""}
        Entry ${x.e} · ${x.t}/50</h3>

        <img src="${x.e}.png">

        <button>View marking</button>

        <div class="details">
          ${criteria.map(k=>`${k}: <strong>/10</strong>`).join("<br>")}
          <p><strong>Jury note:</strong> ${x.c}</p>
        </div>
      `;

      const btn = c.querySelector("button");
      const d = c.querySelector(".details");

      btn.onclick = () => {
        d.style.display = d.style.display === "block" ? "none" : "block";
        btn.textContent = d.style.display === "block" ? "Hide marking" : "View marking";
      };

      cards.appendChild(c);
    });
}

function showResults() {
  document.querySelector(".landing").style.display = "none";
  document.getElementById("nav").classList.remove("hidden");
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("jury").classList.remove("hidden");
  render("winners");
}

function switchTab(t) {
  document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
  event.target.classList.add("active");
  render(t);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
