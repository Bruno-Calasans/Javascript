function calcular_viagem(){
    var dist = document.getElementById("dist").value
    var msg = document.querySelector("#msg")
    msg.innerHTML = `Você está prestes a fazer uma viagem de ${dist}Km. <br>`

    // Usando operador ternário
    var custo = (dist <= 200) ? (dist *0.5) : (dist * 0.45)
  
    msg.innerHTML += `O custo total será R$${custo}`
    
}


