import React from 'react';
import '../stylesheets/Card.css';

function Card(props) {
    return (
        <div className="card-container">
            <p class="text-gray">{props.comment}</p>
            <div>
                <img src={require(`../images/${props.imagen}.jpg`)} alt=""
                    className="img-profile" />
                <h3 class="text-blue">{props.nombre}</h3>
                <p class="text-gray">{props.cargo}</p>
            </div>
        </div>
    )
}
export default Card; 
