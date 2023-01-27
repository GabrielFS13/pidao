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
        btn.innerText = 'Pedir'
        btn.style.backgroundImage = 'none'
        controle = false
        transicao()
    }else{
        btn.innerText = ''
        btn.style.backgroundImage = 'url("img/pidao.jpg")'
        controle = true
        transicao()
    }
}

function transicao(){
    document.body.classList.toggle("dark-mode")
}