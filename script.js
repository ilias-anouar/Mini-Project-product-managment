// validation functions
function checkName(name) {
    let nameRex = /^(^[a-z]+['-\s]?[a-z]+)$/
    let validename = nameRex.test(name)
    return validename
}
function checkbrand(brand) {
    let brandRex = /^(^[a-z]+['-\s]?[a-z]+)$/
    let validebrand = brandRex.test(brand)
    return validebrand
}
function checkprice(price) {
    let priceRex = /^\d+([,.]?\d+$)?/
    let valideprice = priceRex.test(price)
    return valideprice
}
function checkdate(date) {
    let dateRex = /^\d{2}\/\d{2}\/\d{4}$/
    let validedate = dateRex.test(date)
    return validedate
}
// event
let button = document.getElementById('button')
button.onclick = function(){
    // input value
    let name = document.getElementById('name').value
    let brand = document.getElementById('brand').value
    let price = document.getElementById('price').value
    let date = document.getElementById('date').value
    // validation
    checkName(name)
    checkbrand(brand)
    checkprice(price)
    checkdate(date)
    // condition
    if (checkName(name)) {
        document.getElementById('name').style.borderColor = "green"
        document.getElementById('invname').classList.remove('erore')
    }

}