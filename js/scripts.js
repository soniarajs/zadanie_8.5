var a = 3;
	b = 1;
	value = (a * a) + (2 * a * b) - (b * b);

console.log('Wynik wynosi' + value);

if (value >= 0) {
	console.log('wynik dodatni');
}
if (value < 0) {
	console.log('wynik ujemny');
}

switch (value) {
    case '0': 
    	console.log('wynik jest równy 0');
        break;
    default:
    	console.log('wynik nie jest równy 0');
}
