import React from "react";
const Card = (props) => {
  return (
        <div className="Card">
            <h3>{props.name}</h3>
            <h5>{props.date}</h5>
            <a href={props.link}><button className="more-button">Learn More!</button></a>
        </div>
    )
}
export default Card;