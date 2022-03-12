
function tpChecker(home) {

    let {people, tp} = home
    let sheets = tp * 500
    let peopleRoll = people * 57
    let days = Math.floor((sheets / peopleRoll))
    if( days > 14) return `Your tp will last ${days} days, no need to panic!`
    else return `Your tp will last ${days} days, buy more!`

}

console.log(tpChecker({people: 4, tp: 1}))