import React from 'react';
import '../stylesheets/Productos.css';

function Productos(props) {
    return (
        <div className="contenedor">
            <img class="img" src={require(`../images/${props.imagen}.svg`)} alt=""
                className="img-product"/>
            <div className="card-body">
                <h5>{props.text1}</h5>
                <p>{props.parrafo1}</p>
                <div class="divcito">
                    <img src={require(`../images/${props.icono}.svg`)} alt=""
                        className="icono" />
                    <div className="cont-text">
                        <h6>{props.h1}</h6>
                        <p>{props.parrafo2}</p>
                        <a href="#" class="link">{props.link}</a>
                    </div>
                </div>
            </div>
            <div class="botones">
                <button type="submit" class="botoncitos">{props.boton1}</button>
                <button type="submit" class="botoncitos">{props.boton2}</button>
            </div>
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">{props.nameatribution}</a>.
            </div>
        </div>
    )
}
export default Productos; 