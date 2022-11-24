// validation functions
function checkName(name) {
    let nameRex = /^(^[a-z]+['-\s]?[a-z]+)$/gi
    let validename = nameRex.test(name)
    return validename
}
function checkbrand(brand) {
    let brandRex = /^(^[a-z]+['-\s]?[a-z]+)$/gi
    let validebrand = brandRex.test(brand)
    return validebrand
}
function checkprice(price) {
    let priceRex = /^(^\d+([,.]?\d+$)?)$/
    let valideprice = priceRex.test(price)
    return valideprice
}
function checkdate(date) {
    let dateRex = /^\d{2}\/\d{2}\/\d{4}$/
    let validedate = dateRex.test(date)
    return validedate
}
// validation general
function validation(){
    // input value
    let name = document.getElementById('name').value
    let brand = document.getElementById('brand').value
    let price = document.getElementById('price').value
    let date = document.getElementById('production_date').value
    let discount = document.getElementsByName('discount')
    // validation
    checkName(name)
    checkbrand(brand)
    checkprice(price)
    checkdate(date)
    // condition
if (e = true) {
	    if (checkName(name)) {
	        document.getElementById('name').style.borderColor = "green"
	        document.getElementById('invname').classList.remove('erore')
	    }else{
	        document.getElementById('name').style.borderColor = "red"
	        document.getElementById('invname').classList.add('erore')
	    }
	    if (checkbrand(brand)) {
	        document.getElementById('brand').style.borderColor = "green"
	        document.getElementById('invbrand').classList.remove('erore')
	    }else{
	        document.getElementById('brand').style.borderColor = "red"
	        document.getElementById('invbrand').classList.add('erore')
	    }
	    if (checkprice(price)) {
            document.getElementById('price').style.borderColor = "green"
	        document.getElementById('invprice').classList.remove('erore')

	    }else{
	        document.getElementById('price').style.borderColor = "red"
	        document.getElementById('invprice').classList.add('erore')
	    }
	    if (checkdate(date)) {
	        document.getElementById('production_date').style.borderColor = "green"
	        document.getElementById('invdate').classList.remove('erore')
	    }else{
	        document.getElementById('production_date').style.borderColor = "red"
	        document.getElementById('invdate').classList.add('erore')
	    }
	    if ((discount[0].checked == false)&&(discount[1].checked == false)) {
	        document.getElementById('invdis').classList.add("erore")
	        document.getElementById('discount').style.color = 'red'
	    } else if ((discount[0].checked == true)||(discount[1].checked == false)){
	        document.getElementById('invdis').classList.remove("erore")
	        document.getElementById('discount').style.color = 'green'
	    }
}return false
}
document.getElementById('button').onclick = function(){
    validation()
}