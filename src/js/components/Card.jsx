import React from "react";

const Card = ({ image, title, text, buttonLabel }) => {
    return (
        <div className="col-md-3">
            <div className="card mb-4">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn btn-primary">{buttonLabel}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;