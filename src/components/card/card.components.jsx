import React from 'react';
import './card.style.css';


export const Card= (props) => (
    <div className='row'>
        <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture" style={{backgroundImage:`linear-gradient(to right bottom, rgba(111, 182, 204, 0.82), rgba(199,8,94,0.8)),url(${props.uim})`,backgroundSize: "100% 100%"}}>
                            </div>
                            <div className="card__details">
                                <ul>
                                    <li>{props.user.location.country +', '+props.user.location.city}</li>
                                <li>Email: {props.user.email}</li>
                            <li>Phone: {props.user.phone}</li>
                                <li>Gender: {props.user.gender}</li>
                            <li>DOB &diams; {(props.user.dob.date).slice(0,10)}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__name-box">
                                    <p className="card__name-only">
                                        Name
                                    </p>
                                    <p className="card__name-value">
                                        {props.user.name.first +' '+props.user.name.last}
                                    </p>
                                </div>
                                <a href="#" className="btn btn--white">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
)
