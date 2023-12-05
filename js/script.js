document.addEventListener('DOMContentLoaded', function () {

    form = document.getElementById('form');
    input = document.getElementById('input');
    main = document.querySelector('main');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        txt = input.value;

        if (txt !== '') {

            section = document.createElement('section');
            section.classList.add('botao3');
            main.appendChild(section);
            h3 = document.createElement('h3');
            h3.classList.add('texto3');
            h3.textContent = txt;
            section.appendChild(h3);
            input.value = '';
        }

    });


});