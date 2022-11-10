import React from 'react'
import PropTypes from 'prop-types'

import './card.css'

const Card = props => {
    console.log(props.item)
    return (
        <div className="card">
            <div className="card__img">
             {/* <img src={props.item.img} alt="" /> */}
            </div>
            <div className="card__title">
                <p>{props.item.name}</p>
                {/* <p>{props.item.title}</p> */}
            </div>
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object
}

export default Card
