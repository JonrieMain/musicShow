	const header = document.querySelector('#header')
	window.addEventListener('scroll', () =>{
		if(window.matchMedia("(min-width: 826px)").matches){
			header.classList.toggle('sticky', window.scrollY > 0)
		}
	});




	const nav = document.querySelector('.nav');
	const navSmallWidth = document.querySelector('.navSmallWidth');
	navSmallWidth.addEventListener('click', ()=>{
		if(navSmallWidth.classList.contains('open')){
			/* change nav style to open*/
			nav.style.width="70%";
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




	const ac = document.querySelectorAll('.ac')

		/* click active check*/
		ac.forEach(actives =>{
			actives.addEventListener('click',()=>{

				/* remove */
				ac.forEach(re =>{
					re.classList.remove('active')
				})

				/* add */
				actives.classList.add('active')
			})
		})
	
