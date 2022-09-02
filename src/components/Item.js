import PropTypes from 'prop-types'

function Item({ marca, Ano_lancamento }){
    return(
        <>
            <li>{marca} - {Ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    Ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    Ano_lancamento: 0,
}

export default Item 