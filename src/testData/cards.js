import React from 'react'
import CardComponent from '../components/CardComponent'
import taladro from '../img/taladro.jpg'
import hamburguesa from '../img/hamburguesa.jpg'
import xbox from '../img/xbox.png'

const Cards= [
    {
        id:1,
        title: "Taladro",
        category: "Ferreteria",
        image: taladro,
        text: "Taladro Marca Drill",
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
        id:3,
        title: "Xbox Series X",
        category: "Videojuegos",
        image: xbox,
        
    },
]

function cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            {
                Cards.map(card => (
                    <div className="col-md-4" key ={card.id}>
                        <CardComponent title={card.title} category={card.category} imageSource={card.image} text = {card.text} textN ={card.textM} textN2 ={card.textM2}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default cards