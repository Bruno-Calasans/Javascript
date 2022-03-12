
    function findIt(obj, name) {

        let values = Object.keys(obj)
        if(values.includes(name)) return `${name} is here`
        else return `${name} is gone...`
	
    }
    const obj = {
        tv: 30,
        timmy: 20,
        stereo: 50,
      }

    console.log(findIt(obj, 'timmy'))