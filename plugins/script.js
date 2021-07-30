
[...document.querySelectorAll('.grid-item')].forEach((item)=>{

    item.addEventListener('mouseover' , (e)=>{
        let target = e.target;
        while(!target.classList.contains('grid-item')){
            target = target.parentElement;
        }
        const img = target.querySelector('img');
        const link = target.querySelector('a');
        img.style.opacity = '0.5';
        link.style.display = 'flex';
    })
    item.addEventListener('mouseout' , (e)=>{
        let target = e.target;
        if(!target.classList.contains('grid-item')){
            target = target.parentElement;
        }
        const img = target.querySelector('img');
        const link = target.querySelector('a');
        img.style.opacity = '1';
        link.style.display = 'none';
    })
})


