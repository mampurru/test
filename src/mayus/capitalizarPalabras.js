function capitalizarPalabras(cadena) {
    if (typeof cadena !== 'string') {
        return "La entrada no es una cadena de texto"; 
    }
    if (cadena === "") {
        return cadena; 
    }
    return cadena
        .split(' ') 
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()) 
        .join(' '); 
}

module.exports = capitalizarPalabras;