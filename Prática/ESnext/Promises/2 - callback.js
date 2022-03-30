

    // comparando callback vs promises
    
    // usando callbacks
    /*setTimeout(() => {
        console.log('Callback 1');

        setTimeout(() => {
            console.log('Callback 2');

            setTimeout(() => {
                console.log('Callback 3');

            }, 3000)

        }, 3000)

    }, 3000)
*/
    // callback hell => aninhamento de várias callbacks 

    // usando promises
    function esperarDepois(texto, tempo = 2000, ){

        return new Promise(resolve => {

            setTimeout(() => {
                resolve(texto)
            }, tempo)
        })
    }

    esperarDepois('Promise')
        .then(esperarDepois)
        .then(esperarDepois)
    
        

