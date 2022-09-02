function Evento({Numero}){
    function MeuEvento(){
        console.log(`Opa, fui ativado!${Numero}`)
    }
    
    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <button onClick ={MeuEvento}>CLIQUE AQUI!</button>
        </div>
    )
}

export default Evento