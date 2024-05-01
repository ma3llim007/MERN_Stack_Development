const TargetDate =  new Date("2025-01-01T00:00:00");
const DateElement = document.getElementById("DateElement");

function UpdateTime() {
    const CurrentTime = new Date();
    const LiveTime = TargetDate - CurrentTime;
    const Days = Math.floor(LiveTime / (1000 * 60 * 60 * 24));
    const Hours = Math.floor(LiveTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const Minutes = Math.floor((LiveTime % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((LiveTime % (1000 * 60)) / 1000);
    DateElement.innerText = `${Days}d ${Hours}h ${Minutes}m ${second}s`;

    setInterval(UpdateTime, 1000);
}

UpdateTime();