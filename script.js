let named = document.getElementById('name').value
let brand = document.getElementById('brand').value
let price = document.getElementById('price').value
let date = document.getElementById('production_date').value
let select = document.getElementById('type').value
let discount = document.getElementsByName('discount')
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
			document.getElementById('invname').classList.remove('erore')
		} else {
			document.getElementById('name').style.borderColor = "red"
			document.getElementById('invname').classList.add('erore')
		}
		if (checkbrand(brand)) {
			document.getElementById('invbrand').classList.remove('erore')
		} else {
			document.getElementById('brand').style.borderColor = "red"
			document.getElementById('invbrand').classList.add('erore')
		}
		if (checkprice(price)) {
			document.getElementById('invprice').classList.remove('erore')

		} else {
			document.getElementById('price').style.borderColor = "red"
			document.getElementById('invprice').classList.add('erore')
		}
		if (date == "") {
			document.getElementById('production_date').style.borderColor = "red"
			document.getElementById('invdate').classList.add('erore')
		} else {
			document.getElementById('invdate').classList.remove('erore')
		}
		if ((discount[0].checked == false) && (discount[1].checked == false)) {
			document.getElementById('invdis').classList.add("erore")
			document.getElementById('discount').style.color = 'red'
		} else if ((discount[0].checked == true) || (discount[1].checked == false)) {
			document.getElementById('invdis').classList.remove("erore")
		}
		if (select == "") {
			document.getElementById('invselc').classList.add("erore")
			document.getElementById('type').style.color = 'red'
		} else {
			document.getElementById('invselc').classList.remove("erore")
		}
	} return table
}
// full valide
function checkP() {
	let p = document.querySelectorAll("form p")
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
		if (validation()[i] == "" || validation()[i] == undefined) {
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
	checkP()
	if (checkP() === true && checktable() === true) {
		save()
		resetform()
	}
}
function resetform() {
	document.getElementById('name').value = ""
    document.getElementById('brand').value = ""
    document.getElementById('price').value = ""
    document.getElementById('production_date').value = ""
    document.getElementById('type').value = ""
	let discount = document.getElementsByName('discount')
	for (let i = 0; i < discount.length; i++) {
		discount[i].checked = false		
	}
}
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
let upd = document.getElementById('save')
let button = document.getElementById('button')
let idtr
function edit(that) {

	// save.style.display = 'block'
	// button.style.display = 'none'
	let data = that.closest('tr')
	idtr=data
	let td = data.querySelectorAll('td')
	let table = []
	let inputtable =[] 
	td.forEach(e => table.push(e.innerHTML))
	let input =  document.querySelectorAll('form input,select')
	input.forEach(e=> inputtable.push(e))
	console.log(input)
	for (let i = 0; i < table.length-1; i++) {
		inputtable[i].value = table[i]
	}
	if (table[5] === "yes") {
		document.getElementById('yes').checked = true
	}else if(table[5] === "no"){
		document.getElementById('no').checked = true
	}
}
upd.onclick = function(){
	console.log(idtr)
	let discount =  document.getElementsByName('discount')
	let td = idtr.querySelectorAll('td')
	let table = [named, brand, price, date, select, getpromo(discount),`<button id="remove${cont}" onclick='remove(this);' class="remove">remove</button><button onclick='edit(this);' id="add${cont}" class="add">add</button>` ]
	let inputtbl = []
	table.forEach(e=>inputtbl.push(e))
	console.log(inputtbl)
	td[0].innerHTML = inputtbl[0]
	td[1].innerHTML = inputtbl[1]
	td[2].innerHTML = inputtbl[2]
	td[3].innerHTML = inputtbl[3]
	td[4].innerHTML = inputtbl[4]
	td[5].innerHTML = inputtbl[5]



	// for (let i = 0; i < inputtbl.length-2; i++) {
	// 	console.log(inputtbl[i]);
	// 	td[i].innerHTML = inputtbl[i]
	// }

	// td[5].innerHTML = getpromo(discount)
	
	// save.style.display = 'none'
	// button.style.display = 'block'
	resetform()
}