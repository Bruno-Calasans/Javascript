

    // solução 1
    function getDistance(a, b) {
        let distance = Math.sqrt((b.x - a.x)** 2 + (b.y - a.y)**2).toFixed(3)
        return distance
    }

    // solução 2
    function getDistance2(a, b) {
        let distance = Math.hypot((b.x - a.x), (b.y - a.y)).toFixed(3)
        return distance
    }

    let pointA = {x: -2, y:1}
    let pointB = {x: 4, y: 3}
    console.log(getDistance2(pointA, pointB))