

    // usando o this keyword

    // usando dentro de um método
    const teste = {
        nome: 'teste1',
        desc: 'sou um teste',
        met: function(){return `${this.nome} ${this.desc}`}
    }
    console.log(teste.met())

    // this sozinho
   console.log(this)

   // this dentro de uma função
   function testandoThis(){
       return this
   }
   console.log(testandoThis())

   // this em event handlers
   let meuBotão = document.getElementById('meuBotão')
   meuBotão.onclick = function(){
       this.style.backgroundColor = 'red'
   }

   

