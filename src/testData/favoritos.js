import React from 'react'
import CardComponent from '../components/CardComponent'
import taladro from '../img/taladro.jpg'
import xbox from '../img/xbox.png'

const Cards = [
    {
        id: 1,
        title: "Taladro",
        category: "Ferreteria",
        image: taladro,
        text: "Taladro Marca Drill",
        textM: "Super Taladro Especial",
        textM2: "A la venta a precio reducido. Local guapo de bajos precios"

    },
    {
        id: 3,
        title: "Xbox Series X",
        category: "Videojuegos",
        image: xbox,
        text: "Microsoft Xbox Series X",
        textM: "Consola de nueva generación. Juegos de nueva generación. Embárcate en nuevas aventuras como debería hacerse en la Xbox Series X.",
        textM2: "A la venta a buen precio. Tienda Jueguitops"
    },
]

function favoritos() {
    return (
        <div>
            {
                Cards.map(card => (
                    <div  key={card.id}>
                        <CardComponent title={card.title} category={card.category} imageSource={card.image} text={card.text} textM={card.textM} textM2={card.textM2} />
                    </div>
                ))
            }
        </div>
    )
}

export default favoritos