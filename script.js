const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

       //adiciona um ouvidor de evento
button.addEventListener('click', add) //são dois parâmetros || 1º o nome do evento e 2º da função a ser executada

form.addEventListener('change', save)

function add(){

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);

    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        alert('❌ Dia já incluso ❌')
        return
    }
    alert('Dia adicionado com sucesso ✅')
    nlwSetup.addDay(today);
}

function save(){
    //localstorage é um objeto que armazena dados na memória do Brownse.
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

const data = K=JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}


nlwSetup.setData(data)
nlwSetup.load()



