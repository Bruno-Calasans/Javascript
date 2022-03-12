
function isObject(value) {

	if(value instanceof Object) 
    console.log(true)
    else console.log(false)
}

isObject(null)
isObject(new RegExp('^[a-zA-Z0-9]+$', 'g'))
isObject(function(){})
isObject('')