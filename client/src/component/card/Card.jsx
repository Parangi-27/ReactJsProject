import React from 'react'
import PropTypes from 'prop-types'
import money from "./money.png";
import './card.css'

const Card = props => {
   // console.log("maanavsvvvv")
   // console.log(props.item)
    return (
        <>
        <div className="card">
            <div className="card__img">
             <img src={money} alt="" />
            </div>
            <div className="card__title">
            <p>{props.item.name}</p> <p>{props.item.amount}</p><p>{props.item.description}</p>
                {/* <p>{props.item.title}</p> */}
            </div>
        </div>

        </>
    )
}

Card.propTypes = {
    item: PropTypes.object
}

export default Card
