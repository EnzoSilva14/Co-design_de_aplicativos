document.addEventListener('DOMContentLoaded', function () {

    form = document.getElementById('form');
    input = document.getElementById('input');
    main = document.querySelector('main');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        txt = input.value;

        if (txt !== '') {

            section = document.createElement('section');
            section.classList.add('botao35');
            main.appendChild(section);

            div = document.createElement('div');
            div.classList.add('linha2');
            section.appendChild(div);

            img = document.createElement('img');
            img.src = 'img/noun-person-1192668.png';
            img.classList.add('img1');
            div.appendChild(img);

            h2 = document.createElement('h2');
            h2.textContent = 'Você';
            div.appendChild(h2);

            h3 = document.createElement('h3');
            h3.classList.add('texto3');
            h3.textContent = txt;
            section.appendChild(h3);

            input.value = '';
        }
    });
});