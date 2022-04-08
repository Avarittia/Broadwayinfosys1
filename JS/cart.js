const cart = document.getElementsByClassName('add');
const remove =document.getElementsByClassName('remove')
console.log(remove.length)
console.log(cart.length)
let product=[
	{
		name: 'coffee-1',
		price: 5,
		inCart: 0,
	},
	{
		name: 'coffee-2',
		price: 7,
		inCart: 0,
	},
	{
		name: 'coffee-3',
		price: 15,
		inCart: 0,
	},
	{
		name: 'coffee-4',
		price: 11,
		inCart: 0,
	},
	{
		name: 'coffee-5',
		price: 19,
		inCart: 0,
	},
	{
		name: 'coffee-6',
		price: 17,
		inCart: 0,
	}
]
//add to cart
for (let i=0; i<cart.length; i++){
	cart[i].addEventListener('click', e=>{
		cartNumbers()
	})
}
function onLoadItems(){
	let productNumbers = localStorage.getItem('cartNumbers');		
	if (productNumbers){
		document.querySelector('.cartlist').textContent=productNumbers
	}

}


function cartNumbers (){
	let productNumbers = localStorage.getItem('cartNumbers');
	
	productNumbers =   parseInt(productNumbers)

	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cartlist').textContent = productNumbers + 1;
	}
	else{
		localStorage.setItem('cartNumbers', 1)
		document.querySelector('.cartlist').textContent = 1;
	}

}

onLoadItems();
