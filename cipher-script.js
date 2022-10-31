function rot13(str) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // definimos el alfabeto para comparar y asignar
    let newStr = ""; // string acumulador
    let index; // indice que asignamos de alphabet al newStr

    for (let i = 0; i < str.length; i++) {
        // buscamos str[i] en alphabet y desplazamos 13 indices para asignar la nueva letra
        // si es mayor a las letras del abc(26) restamos ese numero para "reiniciar" el conteo

        alphabet.indexOf(str[i]) + 13 >= 26 ? index = alphabet.indexOf(str[i]) + 13 - 26
         : index = alphabet.indexOf(str[i]) + 13; 

        // a newStr se le suma el indice de alphabet que sera str[i]+13
        // si str[i] no existe en alphabet (indexOf == -1) se agrega sin modificar
        if (alphabet.indexOf(str[i]) != -1) {
            newStr = newStr + alphabet[index]
        } else {
            newStr = newStr + str[i]
        };
    };
    console.log(newStr)
    return newStr;
}

rot13("SERR PBQR PNZC");

rot13("SERR CVMMN!")

rot13("SERR YBIR?")

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
