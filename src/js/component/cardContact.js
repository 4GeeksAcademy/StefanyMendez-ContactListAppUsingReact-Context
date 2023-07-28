import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import mike from "../../img/mike.jpg"
import PropTypes from "prop-types";


export const CardContact = ({ contact }, ...props) => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2 my-3 ms-4">
                        <img className="rounded-circle" src={mike}></img>
                    </div>
                    <div className="col-7 mt-3 text-muted fs-5">
                        <label className="text-dark fs-3 mb-2">{contact.full_name}</label>
                        <br />
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="ms-3">{contact.address}</span>
                        <br />
                        <i className="fa-solid fa-phone"></i>
                        <span className="ms-3">{contact.phone}</span>
                        <br />
                        <i className="fa-solid fa-envelope"></i>
                        <span className="ms-3">{contact.email}</span>
                    </div>
                    <div className="col-2 mt-4 fs-4 d-flex">
                        <button className="border-0 bg-transparent" onClick={() => { actions.getContactByID(contact.id) }}>
                            <Link className="text-dark" to={`/edit/${contact.id}`}>
                                <i className="fa-solid fa-pencil float-end me-5"></i>
                            </Link>
                        </button>
                        <button className="border-0 bg-transparent" onClick={() => { actions.handleDelete(contact.id) }}>
                            <i className="fa-solid fa-trash-can float-end ms-5"></i>
                        </button>
                    </div>
                </div>
            </li>
        </div>
    )
}
CardContact.protoTypes = {
    contact: PropTypes.object
}

export default CardContact;