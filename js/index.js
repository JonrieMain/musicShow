const nav = document.querySelector('.nav');
const navSmallWidth = document.querySelector('.navSmallWidth');
navSmallWidth.addEventListener('click', ()=>{
	if(navSmallWidth.classList.contains('open')){
		/* change nav style to open*/
		nav.style.width="60%";
		/* change src */
		navSmallWidth.src="./img/close.png"

		/* remove classList and add*/
		navSmallWidth.classList.remove('open');
		navSmallWidth.classList.add('close');
	}else{
		/* change nav style to open*/
		nav.style.width="0%";
		/* change src */
		navSmallWidth.src="./img/open.png"

		/* remove classList and add*/
		navSmallWidth.classList.add('open');
		navSmallWidth.classList.remove('close');
	}
});