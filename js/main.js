const btn = document.querySelector("#pedir")
let controle = false
btn.addEventListener("click", function(){
    if(!controle){
        document.querySelector("#tocar-pedir").play()
    }
    trocaBg()
})


function trocaBg(){
    if(controle){
        btnText('Pedir')
        controle = false
        transicao()
    }else{
        btnText('')
        controle = true
        transicao()
    }
}

function transicao(){
    document.body.classList.toggle("dark-mode")
}

function btnText(text){
    btn.innerText = text

}