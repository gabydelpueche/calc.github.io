var r = document.getElementById('result')
var b = document.getElementById('button')

function display(val){
    r.value+= val

    return val
}

function Solve(){
    var z = r.value
    var g = eval(z)
    r.value = g
    return g
}

function Away(){
    r.value = ""
}   

