import { createHeader } from "./header.js"
const main = document.querySelector('main')
export function BodyIndex(){
    main.innerHTML = `
    <main>
        <section class='section__img'>
            <h1> Bem Vindo ao melhor site de compras do Brasil
        </section>
        
        <section class='section__pagamento'>
            <div class='div'>
                <span class="material-symbols-outlined">
                 credit_card
                </span>
                <div>
                    <span> Utilize o nosso cartão</span>
                    <a href='#'>Ver mais</a>
                </div>
            </div>
            <div class='div'>
                <span class="material-symbols-outlined">
                thumb_up
                </span>
                <div>
                    <span> Pagemento rápido e seguro </span>
                </div>
            </div>
            <div class='div'>
                <span class="material-symbols-outlined">
                credit_score
                </span>
                <div>
                    <span> Até 10X sem juros </span>
                    <a href='#'>Ver mais</a>
                </div>
            </div>
            <div class='div'>
                <span class="material-symbols-outlined">
                smartphone
                </span>
                
                    <span> Pagemento via pix </span>
                
            </div>
        </section>
    </main>
    `
}
