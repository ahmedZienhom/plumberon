// counter 

const counters = document.querySelectorAll(`.counter`);
const countersContainer =  document.querySelector(`.counters-conatiner`);
let isShowed = false;



window.addEventListener("scroll", _ => {


    if(window.scrollY >=  countersContainer.offsetTop - window.innerHeight + countersContainer.offsetHeight  && !isShowed){
        counters.forEach(c =>{        
            const updateCounter = () => {
                const target = +c.getAttribute('data-target');
                const cNum = +c.textContent;
                const increment = target / 200;
                if (cNum < target) {
                    c.textContent = `${Math.ceil(cNum + increment)}`;
                    setTimeout(updateCounter, 10);
                    } else {
                        c.textContent = target;
                    }
            };
        
            updateCounter();
        })
        isShowed = true;
    }
});


// iframe open and close

const openCircle = document.querySelector(`.play-circle`);

const iframeContainer = document.querySelector(`.iframe-conatiner`);

openCircle.addEventListener("click", e => {
    iframeContainer.classList.replace('d-none', `d-flex`)
})

iframeContainer.addEventListener(`click`, () => {
    iframeContainer.classList.replace(`d-flex`, 'd-none')
});
