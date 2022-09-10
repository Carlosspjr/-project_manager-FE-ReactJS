import Button from "./evento/Button"

function Evento(){
    function MeuEvento(){
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento(){
        console.log("Ativando o segundo evento")
    }
    
    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <button event={MeuEvento} text="Primeiro evento"/>
            <button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default Evento