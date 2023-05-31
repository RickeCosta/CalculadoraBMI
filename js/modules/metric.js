export default function initCalculoMetric(){

    const resultado = document.querySelector('[data-resultado]');
    let imc;
    const cardImc = document.querySelector('.card-imc');
    const dados = {
        altura: altura,
        peso: peso,
    };

            
    function CalcularImc (event){
        if(dados[0] !='' && dados[1] !=''){
            dados[event.target.name] = event.target.value;
            imc = ((dados.peso /dados.altura) / dados.altura * 10000);
            console.log(imc)
            if(imc){
                let classificacao = '';
                if (imc < 18.5){
                    classificacao = 'Seu IMC sugere que você está abaixo do peso.';
                }else if (imc < 25) {
                    classificacao = 'Seu IMC sugere que você tem um peso saudável. ';
                }else if (imc < 30){
                    classificacao = 'Seu IMC sugere que você tem um peso levente acima do peso.';
                }else if (imc < 35){
                    classificacao = 'Seu Imc sugere que  você está com obesidade  de grau I.';
                }else if (imc < 40){
                    classificacao = 'Seu Imc sugere que  você está com obesidade  de grau II.';
                }else {
                    classificacao = 'Seu Imc sugere que  você está com obesidade  de grau III. Cuidado!!';
                }

                resultado.innerHTML = `
                <div class="resultado" data-resultado>
                    <div class="card-res">
                        <div class="res-imc">
                            <h3>Your BMI is... </h3>
                            <p>${imc.toFixed(1)}</p>
                        </div>
                        <div class="text-imc">
                            <p>${classificacao}</p>
                        </div>
                    </div>   
                </div>`
            }
        }
    
    }

 
    cardImc.addEventListener('change', CalcularImc)
}








