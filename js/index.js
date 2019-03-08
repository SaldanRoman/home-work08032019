const display = document.querySelector('.display');
let mms;
document.querySelectorAll('.digits button, .opers button').forEach(button=>button.addEventListener('click', digitPressed));

function digitPressed(e) {
    display.value += e.target.innerHTML;
}

document.querySelectorAll('.equal').forEach(button=>button.addEventListener('click', equalPressed));

function equalPressed() {
    display.value = eval(display.value);
}

document.querySelectorAll('.clear').forEach(button=>button.addEventListener('click', clearPressed));

function clearPressed() {
    display.value = "";

}

document.querySelectorAll('.sqrt').forEach(button=>button.addEventListener('click', sqrtPressed));

function sqrtPressed() {
    display.value = Math.sqrt(eval(display.value));
}

document.querySelectorAll('.memsave').forEach(button=>button.addEventListener('click', memsavePressed));

function memsavePressed() {
    mms = display.value;

}

document.querySelectorAll('.memclear').forEach(button=>button.addEventListener('click', memclearPressed));

function memclearPressed() {
    mms = "";
}

document.querySelectorAll('.memrec').forEach(button=>button.addEventListener('click', memrecPressed));

function memrecPressed() {
    display.value += mms;
}
