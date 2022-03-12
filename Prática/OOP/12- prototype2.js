

    // usando o __proto__

    // prototype de um objeto literal
    const obj = {} 
    console.log(obj.__proto__) 

    // prototype a partir de um objeto criado a partir de uma classe
    class SouUmObjeto{

        constructor(){
            this.info = "Sou da classe 'SouUmObjeto'"
        }
    }
    const obj3 = new SouUmObjeto
    console.log(obj3.__proto__) 

   

