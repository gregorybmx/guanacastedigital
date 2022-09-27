import React from 'react'
import CardComponent from '../components/CardComponent'
import taladro from '../img/taladro.jpg'
import hamburguesa from '../img/hamburguesa.jpg'
import xbox from '../img/xbox.png'

const Cards= [
    {
        id:1,
        title: "Taladro",
        image: taladro,
        text: "Taladro Marca Drill",
        url: "http://taladro.com",
    },
    {
        id: 2,
        title: "hamburguesa",
        image: hamburguesa,
        url: "http://hamburguesa.com",
    },
    {
        id:3,
        title: "Xbox Series X",
        image: xbox,
        url: "http://xbox.com",
    },
]

function cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            {
                Cards.map(card => (
                    <div className="col-md-4" key ={card.id}>
                        <CardComponent title={card.title} imageSource={card.image} url={card.url} text = {card.text}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default cards