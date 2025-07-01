let numero = window.document.getElementById('valorf')
let lista = window.document.getElementById('listaf')
let res = window.document.getElementById('res')
let vets = []

function enumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
          return true
    }else{
        return false
    }
}

function emlista(n , l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(enumero(numero.value) && !emlista(numero.value , vets)){
      vets.push(Number(numero.value))
      let item = document.createElement('option')
      item.text = `o valor ${numero.value} foi adicionado`
      lista.appendChild(item)
      res.innerText = ''
    }else{
        alert('erro')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    let total = vets.length
    let maior = vets[0]
    let menor = vets[0]
    let soma = 0
    let media = 0
    for(let pos in vets){
        soma += Number(vets[pos])
        if(maior < vets[pos]){
            maior = vets[pos]
        }

        if(menor > vets[pos]){
            menor = vets[pos]
        }
      
    }
    media = soma / total 
    res.innerHTML += `<p> no total temos ${total} valores</p>`
    res.innerHTML += `<p> o maior valor foi  ${maior} </p>`
    res.innerHTML += `<p> o menor valor foi ${menor} </p>`
    res.innerHTML += `<p> a soma de todos os valores é ${soma} </p>`
    res.innerHTML += `<p> a media foi ${media} </p>`
}

