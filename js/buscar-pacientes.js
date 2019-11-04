var botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', function(){
    var xhr = new XMLHttpRequest(); //obj js responsável de fazer requisições http

    //tipo de requesição e pra onde
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    //resposta da requisição
    xhr.addEventListener("load", function() {
        //validação do status da requisição 
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("esconde");
            var resposta = xhr.responseText;
            //trasnformando JSON -> Object
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("esconde");
        }
    });
    //recebe a requisição e envia
    xhr.send();
});