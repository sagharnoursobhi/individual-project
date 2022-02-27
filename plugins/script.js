
[...document.querySelectorAll('.item')].forEach((item)=>{

    item.addEventListener('mouseover' , (e)=>{
        let target = e.target;
        while(!target.classList.contains('item')){
            target = target.parentElement;
         }
        const img = target.querySelector('img');
        const link = target.querySelector('a');
        img.style.opacity = '0.5';
        link.style.display = 'flex';
    })
    item.addEventListener('mouseout' , (e)=>{
        let target = e.target;
        if(!target.classList.contains('item')){
            target = target.parentElement;
        }
        const img = target.querySelector('img');
        const link = target.querySelector('a');
        img.style.opacity = '1';
        link.style.display = 'none';
    })
})

//smooth scrolling
const scrollToContactBtn = document.querySelector('#cont-btn')
const scrollToPortlioBtn = document.querySelector('#port-btn')
const contactSectionScroll = document.querySelector('#contact-me')
const portfolioSectionScroll = document.querySelector('#work')

scrollToContactBtn.addEventListener('click' , (e)=>{
    const contactSectionCoordinate = contactSectionScroll.getBoundingClientRect();

    window.scrollTo({
        left: contactSectionCoordinate.left + window.pageXOffset,
        top: contactSectionCoordinate.top + window.pageYOffset,
        behavior: 'smooth'
    })
})

scrollToPortlioBtn.addEventListener('click' , ()=>{
    const portfolioSectionCooordinate = portfolioSectionScroll.getBoundingClientRect();
    
    window.scrollTo({
        left: portfolioSectionCooordinate.left + window.pageXOffset,
        top: portfolioSectionCooordinate.top + window.pageYOffset,
        behavior: 'smooth'
    })
})




