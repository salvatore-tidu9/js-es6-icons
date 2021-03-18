$(document).ready(function () {

	const icons = [

		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},

		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},

		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},

		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},

		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},

		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},

		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},

		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},

		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},

		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},

		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},

		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},

		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},

		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},

		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},

		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];


	const colors = [

		"blue",

		"orange",

		"purple"
	];

	// ABBINAMENTO DI COLORI
	const coloredArray = colorIcons(icons, colors);
	
	console.log(coloredArray);


	const container = $(".icons");

	console.log(container);


	// ---ICONE NEL CONTAINER---
	print(coloredArray, container);


	const select = $("#type");

	const types = getType(coloredArray);

	console.log(types);

	//AGGIUNTA OPTIONS A SELECT
	printOptions(types, select);

	select.change({container}, function(event) {

		const container = event.data.container;

		const option = $(this).val();


		const optionFiltered = coloredArray.filter((item) => {

			return item.type === option;

		});

		print(optionFiltered, container);

	});

});





// -----FUNCTIONS-----

function print(array, container) {

	container.html("");

	array.forEach((item) => {

		const {color, family, name, prefix} = item;

		const elementHTML = 

		`
		<div class="icon">

		<i class= "${family} ${prefix}${name}" style="color: ${color}"></i>

		<div class= "title" style="color: ${color}">${name.toUpperCase()}</div>

		</div>
		
		`;

		container.append(elementHTML);

	});
}

// ---------------------------------------

// CICLO FOR

// function colorIcons(icons, colors) {

// 	const types = getType(icons);

// 	const coloredArray = [];

// 	for (let i = 0; i < icons.length; i++) {

// 		const icon = icons[i];

// 		const indexType = types.indexOf(icon.type);

// 		if (indexType !== -1) {

// 			icon.color = colors[indexType];
// 		}

// 		coloredArray.push(icon);
// 	}

// 	return coloredArray;
// }

// CICLO MAP

function colorIcons(icons, colors) {

	const types = getType(icons);

	coloredArray = icons.map((item) => {

		indexType = types.indexOf(item.type);

		if (indexType !== -1) {

			item.color = colors[indexType];
		}

		return item;
	});

	return coloredArray;
}

// -------------------------------------------

function getType(array) {

	const types = [];

	array.forEach((item) => {

		if (!types.includes(item.type)) {

			types.push(item.type);
		}
	});

	return types;
}


//--------------------------------------------------

function printOptions(array, select) {

	array.forEach((item) => {

		select.append(`<option value="${item}">${item}</option>`)
	});
}

//---------------------------------------------------

