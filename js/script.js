async function getAdvice(){
    const resposta = await fetch ("https://api.adviceslip.com/advice");

    console.log(resposta);

    const data = await resposta.json();

    console.log(data);
    console.log(data.slip.advice);

    document.querySelector("#advice").innerHTML = data.slip.advice;
}

//botão funcionando
let botaoAdvice = document.querySelector("#get-advice");

botaoAdvice.addEventListener("click", function(){
   getAdvice(); 
});