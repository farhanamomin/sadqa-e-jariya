// app.js
let personalCounter = 0;
let globalCounter = 0;

function showZikr( zikr ) {
    const zikrText = {
        astaghfirullah: 'Astaghfirullah',
        awal_kalima: 'La ilaha illallah, Muhammadur Rasulullah',
        bismillah: 'Bismillah ir-Rahman ir-Rahim'
    };
    document.getElementById('zikr-text').innerText = zikrText[zikr];
    updateCounters();
    vibrateFeedback();
}

function updateCounters() {
    personalCounter++;
    globalCounter++;
    document.getElementById('personal-counter').innerText = personalCounter;
    document.getElementById('global-counter').innerText = globalCounter;
}

function vibrateFeedback() {
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
}

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});