const data = [
  {
    entry:"B",
    total:46,
    image:"B.png",
    comment:"Excellent balance and depth. Strong spiritual presence.",
    scores:["Letter: 9","Composition: 10","Readability: 9","Creativity: 9","Finish: 9"]
  },
  {
    entry:"A",
    total:40,
    image:"A.png",
    comment:"Elegant structure with good control and harmony.",
    scores:["Letter: 8","Composition: 8","Readability: 8","Creativity: 8","Finish: 8"]
  }
];

const cards = document.getElementById("cards");

data.forEach(d => {
  const c = document.createElement("div");
  c.className = "card";
  c.innerHTML = `
    <h3>Entry ${d.entry} · ${d.total}/50</h3>
    <img src="${d.image}">
    <button>View Jury Marking</button>
    <div class="details">
      ${d.scores.join("<br>")}
      <p><b>Jury Note:</b> ${d.comment}</p>
    </div>
  `;
  const btn = c.querySelector("button");
  const details = c.querySelector(".details");
  btn.onclick = ()=> details.style.display =
    details.style.display === "block" ? "none" : "block";
  cards.appendChild(c);
});

function scrollToResults(){
  document.getElementById("results").scrollIntoView({behavior:"smooth"});
}