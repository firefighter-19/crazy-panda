let data = [
	{ name: 'name1', surname: 'surname1', age: '35', salary: 5000 },
	{ name: 'name2', surname: 'surname2', age: '34', salary: 5050 },
	{ name: 'name3', surname: 'surname3', age: '33', salary: 5500 },
	{ name: 'name4', surname: 'surname4', age: '32', salary: 7000 },
	{ name: 'name5', surname: 'surname5', age: '31', salary: 6000 },
	{ name: 'name6', surname: 'surname6', age: '30', salary: 3000 },
	{ name: 'name7', surname: 'surname7', age: '29', salary: 4000 },
	{ name: 'name8', surname: 'surname8', age: '28', salary: 5500 },
	{ name: 'name9', surname: 'surname9', age: '27', salary: 5300 },
	{ name: 'name10', surname: 'surname10', age: '26', salary: 2300 },
	{ name: 'name11', surname: 'surname11', age: '25', salary: 4500 },
	{ name: 'name12', surname: 'surname12', age: '24', salary: 5700 },
	{ name: 'name13', surname: 'surname13', age: '23', salary: 5900 },
	{ name: 'name14', surname: 'surname14', age: '22', salary: 2000 },
	{ name: 'name15', surname: 'surname15', age: '21', salary: 1000 },
	{ name: 'name16', surname: 'surname16', age: '20', salary: 500 },
	{ name: 'name17', surname: 'surname17', age: '19', salary: 300 },
	{ name: 'name18', surname: 'surname18', age: '18', salary: 200 },
	{ name: 'name19', surname: 'surname19', age: '45', salary: 5000000 },
	{ name: 'name20', surname: 'surname20', age: '65', salary: 1 }
];

const pagination = (data) => {
	const table = document.querySelector('table');
	const sortDiv = document.querySelector('.sort__section');
	const ul = document.querySelector('.pagination__list');

	const elOnPage = 5; // сделать возможность выбирать количество элементов пользователю (5, 10, 15, 20)
	const paginationCount = Math.ceil(data.length / elOnPage);

	const liItems = [];
	for (let i = 1; i <= paginationCount; i++) {
		let li = document.createElement('li');
		li.classList.add('pagination__items');
		ul.append(li)
		li.innerHTML = i;
		liItems.push(li);
	}

	ul.addEventListener('click', e => showData(e));

	window.addEventListener('load', () => {
		let list = data.slice(0, 5);
		for (let item of list) {
			let tr = document.createElement('tr');
			table.append(tr);
			createElement(item, tr);
		}
		liItems[0].classList.add('active');
	});

	const showData = (e) => {
		let result = +e.target.innerHTML;
		let start = (result - 1) * elOnPage;
		let end = start + elOnPage;
		if (typeof result === 'number' && !isNaN(result)) {
			for (let key in liItems) {
				if (liItems[key].classList.contains('active')) {
					liItems[key].classList.remove('active');
				}
			}
			e.target.classList.add('active');

			let list = data.slice(start, end);
			table.innerHTML = '';
			for (let item of list) {
				let tbody = document.createElement('tbody');
				let button = document.createElement('button');
				let tr = document.createElement('tr');
				table.append(tbody);
				tbody.append(button);
				button.append(tr);
				createElement(item, tr);
			}
		} else {
			console.log('error')
		}
	}

	const createElement = (data, el) => {
		for (let key in data) {
			let td = document.createElement('td');
			td.classList.add('items__item');
			el.append(td);
			td.innerHTML = data[key];
		}
	}
}

pagination(data);