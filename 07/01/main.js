const input = document.querySelector('input');
const a = document.querySelector('a');

const mask = '+ 7 (_ _ _) - _ _ _ - _ _ - _ _';

input.addEventListener('focus', () => {
    if (input.value === '') {
        input.value = '+ 7 (     ) -       -     -    ';
    }
});

input.addEventListener('blur', () => {
    if (input.value === '+7') {
        input.value = '';
    }
});

function setCursorPosition(len, cur) {
    cur.focus();
    if (cur.setSelectionRange) { cur.setSelectionRange(len, len); } else if (cur.createTextRange) {
        const range = cur.createTextRange();
        range.collapse(true);
        range.moveEnd('character', len);
        range.moveStart('character', len);
        range.select();
    }
}

input.addEventListener('input', () => {

    let i = 0;
    let cur = input.value.replace(/\D/g, '');
    let lenInput = input.value.length;
    let lenMask = mask.length;

    input.value = mask.replace(/./g, num => {
        return (/[_\d]/.test(num) && i < lenMask) ? cur.charAt(i++) : i >= lenMask ? '' : num;
    });

    setCursorPosition(lenInput, input);

    if (lenInput === lenMask) {
        a.textContent = `${input.value.replace(/\s/g, '')}`;
    }
});