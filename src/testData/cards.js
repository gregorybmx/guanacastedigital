import React from 'react'
import CardComponent from '../components/CardComponent'
import taladro from '../img/taladro.jpg'
import hamburguesa from '../img/hamburguesa.jpg'
import xbox from '../img/xbox.png'
import abarrotes from '../img/abarrotes.png'
import tresLeches from '../img/tres leches.jpg'
import jager from '../img/jagermeister.jpg'
import comidaPerros from '../img/comidaPerros.png'
import bisuteria from '../img/bisuteria.jpg'
import lizano from '../img/lizano.jpg'

const Cards = [
    {
        id: 1,
        title: "Taladro",
        category: "Ferreteria",
        image: taladro,
 
        textM: "Super Taladro Especial",
        textM2: "A la venta a precio reducido. Local guapo de bajos precios"

    },
    {
        id: 2,
        title: "Hamburguesa",
        category: "Comida",
        image: hamburguesa,

    },
    {
        id: 3,
        title: "Xbox Series X",
        category: "Videojuegos",
        image: xbox,
    },
    {
        id: 4,
        title: "Abarrotes",
        category: "Abarrotes",
        image: abarrotes,
    },
    {
        id: 5,
        title: "Tres Leches",
        category: "Comida",
        image: tresLeches,
    },
    {
        id: 6,
        title: "Jagermeister",
        category: "Licores",
        image: jager,
    },
    {
        id: 7,
        title: "Comida para Perros",
        category: "Animales",
        image: comidaPerros,
    },
    {
        id: 8,
        title: "Xbox Series X",
        category: "Bisuteria",
        image: bisuteria,
    },
    {
        id: 9,
        title: "Lizano",
        category: "Comida",
        image: lizano,
    },
]

function cards() {
    return (
        <div className={"container d-flex justify-content-center align-items-center h-100"}>
            <div className="row">
                {
                    Cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <CardComponent title={card.title} category={card.category} imageSource={card.image} text={card.text} textM={card.textM} textM2={card.textM2} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default cards