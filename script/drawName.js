document.getElementById('drawName').addEventListener('click', drawName);
function drawName() {
    let names = document.getElementById('namesInput').value.split('\n');
    let randomName = names[Math.floor(Math.random() * names.length)];
    localStorage.setItem('drawnName', randomName);
    window.open('../pages/peao.html', '_self');
    }