var tabela = document.querySelector("table");

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },800);
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener('dblclick', function(){
//         this.remove();
//     });
// });