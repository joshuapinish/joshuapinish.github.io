// 🍖 Loadouts (simulados / se puede enlazar API real)
const loadouts = [
    { juego: "Warzone 3 Mobile", arma: "M4 + Optic X", accesorios: "Silenciador, Grip" },
    { juego: "COD Mobile", arma: "AK-47 + Quickdraw", accesorios: "Laser, Ext Mags" },
    { juego: "Black Ops 6 Mobile", arma: "TAQ-VR + Stock", accesorios: "Compensador, Laser" },
];

function mostrarLoadouts(){
    const div = document.getElementById("loadoutList");
    div.innerHTML = "";
    loadouts.forEach(l => {
        div.innerHTML += `
            <div class="loadout">
                <b>${l.juego}</b>: ${l.arma} — ${l.accesorios}
            </div>
        `;
    });
}

// 🎥 Clips destacados
const clips = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ"
];

function mostrarClips(){
    const div = document.getElementById("clipList");
    div.innerHTML = "";
    clips.forEach(url => {
        div.innerHTML += `<iframe width="260" height="150" src="${url}" frameborder="0" allowfullscreen></iframe>`;
    });
}

// 🗓 Calendario de eventos
const eventos = [
    "Evento 1 – 05/01/2026",
    "Evento 2 – 10/01/2026",
    "Evento 3 – 15/01/2026"
];

function mostrarCalendar(){
    const ul = document.getElementById("calendarList");
    ul.innerHTML = "";
    eventos.forEach(ev => {
        ul.innerHTML += `<li>${ev}</li>`;
    });
}

// 🎲 Ruleta de armas
const armasRuleta = ["M4", "AK-47", "MP5", "Krig 6", "FFAR"];

function girarRuleta(){
    const index = Math.floor(Math.random()*armasRuleta.length);
    document.getElementById("ruletaResult").innerText = `Te tocó: ${armasRuleta[index]}`;
}

// 📊 Tier list
const tierData = {
    "S+": ["M4", "Krig 6"],
    "A": ["MP5", "FFAR"],
    "B": ["Fennec"]
};

function mostrarTier(){
    const div = document.getElementById("tierListContainer");
    div.innerHTML = "";
    for(const tier in tierData){
        div.innerHTML += `<h4>${tier}</h4><p>${tierData[tier].join(", ")}</p>`;
    }
}

// 💬 Comentarios con localStorage
function guardarComentario(){
    const texto = document.getElementById("comInput").value;
    if(!texto) return;
    let arr = JSON.parse(localStorage.getItem("coms") || "[]");
    arr.push(texto);
    localStorage.setItem("coms", JSON.stringify(arr));
    mostrarComs();
}

function mostrarComs(){
    const div = document.getElementById("comList");
    div.innerHTML = "";
    const arr = JSON.parse(localStorage.getItem("coms") || "[]");
    arr.forEach(c => {
        div.innerHTML += `<p>💬 ${c}</p>`;
    });
}

// 👇 Cargar todo al inicio
window.onload = () => {
    mostrarLoadouts();
    mostrarClips();
    mostrarCalendar();
    mostrarTier();
    mostrarComs();
}
