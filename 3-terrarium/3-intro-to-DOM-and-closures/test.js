const plant1 = document.getElementById('plant1');
const plant2 = document.getElementById('plant2');
const plant3 = document.getElementById('plant3');
const plant4 = document.getElementById('plant4');
const plant5 = document.getElementById('plant5');
const plant6 = document.getElementById('plant6');
const plant7 = document.getElementById('plant7');
const plant8 = document.getElementById('plant8');
const plant9 = document.getElementById('plant9');
const plant10 = document.getElementById('plant10');
const plant11 = document.getElementById('plant11');
const plant12 = document.getElementById('plant12');
const plant13 = document.getElementById('plant13');
const plant14 = document.getElementById('plant14');


dragElement(plant1);
dragElement(plant2);
dragElement(plant3);
dragElement(plant4);
dragElement(plant5);
dragElement(plant6);
dragElement(plant7);
dragElement(plant8);
dragElement(plant9);
dragElement(plant10);
dragElement(plant11);
dragElement(plant12);
dragElement(plant13);
dragElement(plant14);



function dragElement(terrariumElement) {

	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;



	function pointerDrag(e) {
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onpointermove = elementDrag;
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;

		pos3 = e.clientX;
		pos4 = e.clientY;
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';

	}

	function stopElementDrag() {
		document.onpointerup = null;
		document.onpointermove = null;
	}


}
const number = [2];

plant1.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant1.style.zIndex = Math.max(...number);

})


plant2.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant2.style.zIndex = Math.max(...number);
	

})
plant3.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant3.style.zIndex = Math.max(...number);
	
})
plant4.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant4.style.zIndex = Math.max(...number);
	
})
plant5.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant5.style.zIndex = Math.max(...number);
	
})
plant6.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant6.style.zIndex = Math.max(...number);
	
})
plant7.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant7.style.zIndex = Math.max(...number);
	
})
plant8.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant8.style.zIndex = Math.max(...number);
	
})
plant9.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant9.style.zIndex = Math.max(...number);
	
})
plant10.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant10.style.zIndex = Math.max(...number);
	
})
plant11.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant11.style.zIndex = Math.max(...number);
	
})
plant12.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant12.style.zIndex = Math.max(...number);
	
})
plant13.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant13.style.zIndex = Math.max(...number);
	
})
plant14.addEventListener('dblclick', () => {
	const style = Math.max(...number) +1;
	number.push(style)
	plant14.style.zIndex = Math.max(...number);
	
})


