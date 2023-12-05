document.addEventListener('DOMContentLoaded', function () {

    form = document.getElementById('form');
    input = document.getElementById('input');
    main = document.querySelector('main');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        txt = input.value;

        if (txt !== '') {

            main.createElement('div');
        }

    });

});