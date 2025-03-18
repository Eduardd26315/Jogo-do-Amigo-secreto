//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {

        let nome = document.getElementById("amigo").value.trim();


        if (nome === ""){
            alert(' ERROR!, O CAMPO ESTA VAZIO!!!');
            return;

        }

        const regex = /^[a-zA-Z\s]+$/; // Permite letras e espaços
        if (!regex.test(nome)) {

            alert('ERROR! DIGITE UM VALOR VÁLIDO (APENAS LETRAS)!!!');
        return;
        }
        if (amigos.includes(nome)) {
            alert(`O nome "${nome}" já está na lista!`);
            return;
        }
    amigos.push(nome)
    console.log(amigos)

    function limpaCampo(){

        nome = document.getElementById("amigo").value = ""

        
    }
    limpaCampo()
    function verificarLista() {
        
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
    
        amigos.forEach(amigo => {

            let li = document.createElement("li"); 
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }
    
    verificarLista()

}




function sortearAmigo() {
    
    let lista = document.getElementById("listaAmigos");

    
    if (!lista || amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear!");
        return;
    }


    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    let amigoSorteado = amigos[indiceAleatorio];

   
    lista.innerHTML = "";

    
    amigos = [];

    
    let resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    } else {
        console.error("Elemento com ID 'resultado' não encontrado.");
    }
}


