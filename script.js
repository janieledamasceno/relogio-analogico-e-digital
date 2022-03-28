let digitalElement = document.querySelector('.digital');

let segundosElement = document.querySelector('.p_s');
let minutoElement = document.querySelector('.p_m');
let horaElement = document.querySelector('.p_h');

function clockUpdate() {
    let tempo = new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    let segundos = tempo.getSeconds();

    digitalElement.innerHTML = `${fixarZero(hora)}:${fixarZero(minuto)}:${fixarZero(segundos)}`;

    let angulosegundos = ((360 / 60) * segundos) - 90;
    let angulominuto = ((360 / 60) * minuto) - 90;
    let angulohora = ((360 / 12) * hora) + ((30 / 60) * minuto) - 90;

    segundosElement.style.transform = `rotate(${angulosegundos}deg)`;
    minutoElement.style.transform = `rotate(${angulominuto}deg)`;
    horaElement.style.transform = `rotate(${angulohora}deg)`;

}

function fixarZero(hour) {
    return hour < 10 ? `0${hour}` : hour;
}

setInterval(clockUpdate, 1000)
clockUpdate();