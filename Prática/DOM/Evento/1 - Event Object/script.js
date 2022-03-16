
    // parêmetro event é o objeto Event
    function testar(e){

        console.log(e);
        console.log(e.cancelable); // true
        e.preventDefault()
        console.log(e.defaultPrevented); // true
    }


