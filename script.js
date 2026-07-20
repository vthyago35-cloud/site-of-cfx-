/*=========================
CONTADORES
=========================*/

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const iniciarContadores = () => {

        counters.forEach(counter => {

            const alvo = Number(counter.dataset.target);
            let atual = 0;

            const timer = setInterval(() => {

                atual += Math.ceil(alvo / 80);

                if (atual >= alvo) {

                    atual = alvo;
                    clearInterval(timer);

                }

                counter.textContent = atual;

            }, 20);

        });

    };

    const observer = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {

            iniciarContadores();
            observer.disconnect();

        }

    });

    const heroNumeros = document.querySelector(".hero-numeros");

    if(heroNumeros){

        observer.observe(heroNumeros);

    }

}

/*=========================
PARALLAX
=========================*/

const heroImage = document.querySelector(".hero-img img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;
const y=(window.innerHeight/2-e.clientY)/40;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

}

/*=========================================
      HEADER INTELIGENTE
=========================================*/

const header = document.querySelector("header");

let ultimoScroll = 0;

window.addEventListener("scroll", () => {

    const scrollAtual = window.pageYOffset;

    // Adiciona fundo ao rolar
    if(scrollAtual > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

    // Esconde ao descer
    if(scrollAtual > ultimoScroll && scrollAtual > 120){

        header.classList.add("hide");

    }else{

        // Mostra ao subir
        header.classList.remove("hide");

    }

    ultimoScroll = scrollAtual;

});