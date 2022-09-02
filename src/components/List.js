import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" Ano_lancamento={1985} />
                <Item marca="Fiat"  Ano_lancamento={1964}/>
                <Item marca="Renault" Ano_lancamento={2022}/>
            </ul>
        </>
    )
}

export default List