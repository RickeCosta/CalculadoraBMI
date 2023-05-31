export default function initAlterar(){
            
    const cardImc = document.querySelector('.card-imc');
    const cardImperial = document.querySelector('.imperial');
    const container = document.querySelector('#container');
    const btnImperial = document.getElementById('imperial');
    const btnMetrica = document.getElementById('metric');


    function handleImperial(){
        container.classList.remove('container-imc')
        cardImc.classList.add('remove')
        container.classList.add('container-imperial')
        cardImperial.classList.add('ativo')
    }
    
    
    function handleImc(){
        container.classList.remove('container-imperial')
        container.classList.add('container-imc')
        cardImc.classList.remove('remove')
        cardImperial.classList.remove('ativo')
    }
    
    btnImperial.addEventListener('click', handleImperial)
    btnMetrica.addEventListener('click', handleImc)
   
}