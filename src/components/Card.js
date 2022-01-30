import React from 'react';

const Card = props => {

    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt={props.title}/>
            <div className="card-body">
                <p className="card-text"> {props.title} </p>
            </div>
        </div>
    );

}

export default Card;