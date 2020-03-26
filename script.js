//function expression to select element//
const selectElement = (s)=> document.queryselector(s);
//open the menu on click
selectElement(s:'.open').addEventListener('click',()=>{
	selectElement(s:'.nav-list').classList.add('active');
});
selectElement(s:'.close').addEventListener('click',()=>{
	selectElement(s:'.nav-list').classList.remove('active');
});
