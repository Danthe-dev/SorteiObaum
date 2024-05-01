
document.getElementById('randomizeNames').addEventListener('click', randomizeNames);
function randomizeNames() {
    let names = document.getElementById('namesInput').value.split('\n');
    for(let i = names.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = names[i]
        names[i] = names[j]
        names[j] = temp
    }
    document.getElementById('namesInput').value = names.join('\n');
}