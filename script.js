function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculate() {
    let result = eval(document.getElementById('screen').value);
    document.getElementById('screen').value = result;
}

function toggleSign() {
    let screen = document.getElementById('screen');
    if (screen.value.startsWith('-')) {
        screen.value = screen.value.substring(1);
    } else {
        screen.value = '-' + screen.value;
    }
}
