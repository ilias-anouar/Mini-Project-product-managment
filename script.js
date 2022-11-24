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
function getpromo(listpromo) {
	for (let i = 0; i < listpromo.length; i++) {
		if (listpromo[i].checked) {
			return listpromo[i].value;
			break;
		}
	}
}
// validation general
function validation() {
	// input value
	let name = document.getElementById('name').value
	let brand = document.getElementById('brand').value
	let price = document.getElementById('price').value
	let date = document.getElementById('production_date').value
	let select = document.getElementById('type').value
	let discount = document.getElementsByName('discount')
	let table = [name, brand, price, date, select, getpromo(discount),`<button id="remove${cont}" onclick='remove(this);' class="remove">remove</button><button onclick='edit(this);' id="add${cont}" class="add">add</button>` ]
	// validation
	checkName(name)
	checkbrand(brand)
	checkprice(price)
	// condition
	if (e = true) {
		if (checkName(name)) {
			document.getElementById('name').style.borderColor = "green"
			document.getElementById('invname').classList.remove('erore')
		} else {
			document.getElementById('name').style.borderColor = "red"
			document.getElementById('invname').classList.add('erore')
		}
		if (checkbrand(brand)) {
			document.getElementById('brand').style.borderColor = "green"
			document.getElementById('invbrand').classList.remove('erore')
		} else {
			document.getElementById('brand').style.borderColor = "red"
			document.getElementById('invbrand').classList.add('erore')
		}
		if (checkprice(price)) {
			document.getElementById('price').style.borderColor = "green"
			document.getElementById('invprice').classList.remove('erore')

		} else {
			document.getElementById('price').style.borderColor = "red"
			document.getElementById('invprice').classList.add('erore')
		}
		if (date == "") {
			document.getElementById('production_date').style.borderColor = "red"
			document.getElementById('invdate').classList.add('erore')
		} else {
			document.getElementById('production_date').style.borderColor = "green"
			document.getElementById('invdate').classList.remove('erore')
		}
		if ((discount[0].checked == false) && (discount[1].checked == false)) {
			document.getElementById('invdis').classList.add("erore")
			document.getElementById('discount').style.color = 'red'
		} else if ((discount[0].checked == true) || (discount[1].checked == false)) {
			document.getElementById('invdis').classList.remove("erore")
			document.getElementById('discount').style.color = 'green'
		}
		if (select == "") {
			document.getElementById('invselc').classList.add("erore")
			document.getElementById('type').style.color = 'red'
		} else {
			document.getElementById('invselc').classList.remove("erore")
			document.getElementById('type').style.color = 'green'
		}
	} return table
}
// full valide
function checkP() {
	let p = document.querySelectorAll("#form p")
	let table = []
	let result = true
	p.forEach(e => {
		table.push(e)
	});
	for (let i = 0; i < table.length; i++) {
		if (table[i].classList.contains("erore")) {
			return result = false
		}
	}
	return result
}
function checktable() {
	let result = true
	for (let i = 0; i < validation().length; i++) {
		if (validation()[i] == "") {
			return result = false
		}
	}
	return result
}
let cont = 0
document.getElementById('button').onclick = function () {
	cont++
	validation();
	checktable()
	console.log(validation());
	console.log(checktable());
	checkP()
	if (checkP() == true && checktable() == true) {
		save()
		// reseform()
	}
}
// function reseform() {
// 	let name = document.getElementById('name').value = ""
//     let brand = document.getElementById('brand').value = ""
//     let price = document.getElementById('price').value = ""
//     let date = document.getElementById('production_date').value = ""
// 	let select = document.getElementById('type').value = ""
//     let discount = document.getElementsByName('discount').checked = false
// }
function save() {
	let tr = document.createElement('tr')
	tr.setAttribute('id', 'tr' + cont)
	document.getElementById('table').appendChild(tr)
	for (let i = 0; i < validation().length; i++) {
		let td = document.createElement('td');
		td.setAttribute('id', 'td' + i + cont);
		document.getElementById('tr' + cont).appendChild(td);
		document.getElementById('td' + i + cont).innerHTML = validation()[i];
	}
}
// remove
function remove(that) {
	that.closest('tr').remove()
}
// edit
function edit(that) {
	let data = that.closest('tr')
	let td = data.querySelectorAll('td')
	let table = []
	td.forEach(e => table.push(e.innerHTML))
	for (let i = 0; i < validation().length-2; i++) {
		validation[i]=table[i]		
	}
}