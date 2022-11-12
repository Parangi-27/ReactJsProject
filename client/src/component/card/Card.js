import React from 'react'
import PropTypes from 'prop-types'
import money from "./money.png";
import './card.css'

const Card = props => {
   // console.log("maanavsvvvv")
   // console.log(props.item)
//    var h;
// {props.color ? h='green': h='red'} 
   
    return (
        <><center>
        <div className="card">
            <div className="card__img">
             <img src={money} alt="" />
            </div>
            <div className="card__title">
            <p>{props.item.name}</p> <p style={{color:'{h}'}}>{props.item.amount}</p><p>{props.item.description}</p>
                {/* <p>{props.item.title}</p> */}
            </div>
        </div>
</center>
        </>
    )
}

Card.propTypes = {
    item: PropTypes.object
}

export default Card
