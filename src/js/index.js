const text = {
    juridica:   `Acessoria e Consultoria jurídica na área de saúde e gestão de processos, certificações e licenças estaduais municipais federais e afins`,
    "contabil":   `Acesaoria e consultoria Contábil e fiscal, adequações e revisões de alíquotas de encargos e afins`,
    "seguros":    `Seguros de Vida, Responsabilidade Civil, D&O Garantias e afins`,
    "investimentos": `Plataforma completa de ativos Nacionais e Internacionais, Criptoativos, Private Equity, Fundos Exclusivos e Venture Capital e afins`,
    "credito": `Linhas de crédito para diversas ocasiões: Home Equity, Imobiliário, Auto, Capital de Giro, Energia Fotovoltaica e afins`,
    "cambio": `Remessas internacionais de qualquer natureza. Papel-moeda e conta internacional com cartão de débito para viagens e afins`
}

const oWrapper = document.getElementsByClassName('wrapper')[0];
oWrapper.onmouseenter = function () {
    this.style.animationPlayState = 'paused';
    this.onmouseleave = function () {
        this.style.animationPlayState = 'running';
    }
}


const $items = document.querySelectorAll('.item')
document.querySelectorAll('.item').forEach(($items) =>
  $items.addEventListener('click', (event) => {
    console.log(event.value)
    $items.classList.toggle("active")
    printCenterLogo($items)
  })
)

const logo = document.querySelector(".logo")
function printCenterLogo(tag) {
    console.log(tag.value)
    const val = tag.value
    if(tag.classList.contains('active')){
        return logo.innerHTML = /* html */`
        <div class="text"> 
            ${text[val]}
        </div>
    `
    }else{
        return logo.innerHTML =  ` 
            <img src="img/DrSeguro.jpeg" alt="logo">
        `
    }
    
}

