import { createHeader } from "./header.js"
const main = document.querySelector('main')
export function BodyIndex(){
    main.innerHTML = `
    
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
        <section class='products__1 section'></section>
        <section class='products__2 section'></section>
        <section class='products__3 section'></section>
        <section class='section__categorias'>
            <h1> Cátegorias </h1>
            <div class='categorias'>
                <div>
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                    <strong> Produtos em Alta </strong>
                </div>
                <div>
                    <span class="material-symbols-outlined">
                        toys
                    </span>
                    <strong> Brinquedos para crianças </strong>
                </div>
                <div>
                    <span class="material-symbols-outlined">
                        sports_esports
                     </span>
                    <strong> Esportes e Games  </strong>
                </div>
                <div>
                    <span class="material-symbols-outlined">
                        electric_car
                     </span>
                    <strong> Carros,Motos e outros  </strong>
                </div>
                <div>
                <span class="material-symbols-outlined">
                    mic
                 </span>
                <strong> Musicas,Áudio e Videos </strong>
            </div>
                <div>
                    <span class="material-symbols-outlined">
                        computer
                    </span>
                    <strong> Informática </strong>
                </div>
            <div>
                <span class="material-symbols-outlined">
                    home
                </span>
                <strong> Coisas para casa </strong>
                
            </div>
            <div>
                <span class="material-symbols-outlined">
                    language
                </span>
                <strong> Ítens Internacionais </strong>
                
            </div>
            <div>
            <span class="material-symbols-outlined">
                pets
            </span>
            <strong> Animais </strong>
            
        </div>
        <div>
            <span class="material-symbols-outlined">
            smartphone
            </span>
            <strong> Celulares e Telefone </strong>
        </div>
            </div>
        </section>
    
    `
}
