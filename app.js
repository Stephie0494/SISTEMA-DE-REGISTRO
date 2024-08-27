function encriptar() {
    let texto = document.getElementById("inputTexto").value;

    // Validación: solo letras minúsculas sin acentos ni caracteres especiales
    if (/^[a-z\s]+$/.test(texto)) {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById("resultado").innerText = textoEncriptado;
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
}

function desencriptar() {
    let textoEncriptado = document.getElementById("inputTexto").value;

    // Validación: solo letras minúsculas sin acentos ni caracteres especiales
    if (/^[a-z\s]+$/.test(textoEncriptado)) {
        let textoDesencriptado = textoEncriptado
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        document.getElementById("resultado").innerText = textoDesencriptado;
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
}

