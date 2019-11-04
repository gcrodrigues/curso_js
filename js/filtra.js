var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){    
        for(i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;
            //Expressao Regular para melhor filtragem
            var expressao = new RegExp(this.value, "i") 

            if(!expressao.test(nome)){
                paciente.classList.add("esconde");
            } else{
                paciente.classList.remove("esconde");
            }
        }
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("esconde")
        });
    }
});