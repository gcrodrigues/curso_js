var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso"); 
var tdAltura = paciente.querySelector(".info-altura"); 

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;


if(peso<=0 || peso>=1000){
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido";
}

if(altura<=0 || altura>=3){
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida";
}

var imc = peso / (altura*altura);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc; 