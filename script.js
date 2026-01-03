// ⏰ Reloj
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText =
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// 🎥 Videos recientes (pon TU ID de canal)
const videos = [
    "VIDEO_ID_1",
    "VIDEO_ID_2",
    "VIDEO_ID_3"
];

const ytDiv = document.getElementById("youtube");
ytDiv.innerHTML = "";

videos.forEach(id => {
    ytDiv.innerHTML += `
        <iframe src="https://www.youtube.com/embed/${id}"
        allowfullscreen></iframe>
    `;
});
