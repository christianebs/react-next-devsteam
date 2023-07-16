import Image from 'next/image'

import style from './cartOption.module.css'

export default function CartOption({ image, tile, price, onRemove }) {
    return(
        <div className={style.option}>
            <Image className={style.image} src={`/products/${image}`} alt={`Produto ${image}`} width={62} height={74} />
            <div className={style.info}>
                <h3 className={style.title}>{title}</h3>
                <h3 className={style.price}>R$ {price.toFixed(2)}</h3>
                <p className={style.remove} onClick={onRemove}>Remover</p>
            </div>
        </div>
    )
}