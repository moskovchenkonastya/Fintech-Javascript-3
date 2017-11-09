const input = document.querySelector('input');
const link = document.querySelector('a');

const mask = '+7(###)-###-##-##';

input.addEventListener('focus', () => {
    if (input.value === '') {
        input.value = '+7';
    }
});

input.addEventListener('blur', () => {
    if (input.value === '+7') {
        input.value = '';
    }
});


input.addEventListener('input', event => {
    const posStart = input.selectionStart;
    const data = Number(event.data).toString();

    if (evt.data !== null && Number.isNaN(+parsedData)) {
        input.value = previousValue;
        input.selectionStart = selectionStart - evt.data.length;
        input.selectionEnd = selectionStart - evt.data.length;
        return;
    }

    if (evt.data === null && selectionStart >= 2) {
        input.value = cutSymbols(selectionStart);
    }

    const number = input.value.replace(/\D+/g, '').slice(0, 11);
    const maskArray = mask.split('');

    previousValue = maskNumber(number, maskArray);
    input.value = previousValue;
    setCursor(selectionStart, parsedData);

    updateLink();
});
