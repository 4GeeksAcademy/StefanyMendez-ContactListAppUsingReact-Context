import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import mike from "../../img/mike.jpg"
import PropTypes from "prop-types";


export const CardContact = ({ contact, history }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2 my-3 ms-4">
                        <img className="rounded-circle" src={mike}></img>
                    </div>
                    <div className="col-7 mt-3 text-muted fs-5">
                        <label className="text-dark fs-3 mb-2">Nombre</label>
                        <br />
                        <i class="fa-solid fa-location-dot"></i>
                        <span className="ms-3">Address</span>
                        <br />
                        <i class="fa-solid fa-phone"></i>
                        <span className="ms-3">Phone</span>
                        <br />
                        <i class="fa-solid fa-envelope"></i>
                        <span className="ms-3">Mail</span>
                    </div>
                    <div className="col-2 mt-4 fs-4">
                        <i class="fa-solid fa-trash-can float-end ms-5"></i>
                        <i class="fa-solid fa-pencil float-end me-5"></i>
                    </div>
                </div>
            </li>
        </div>
    )
}
CardContact.protoTypes = {
    history: PropTypes.object,
    onDelete: PropTypes.func,
    contact: PropTypes.object

}

export default CardContact;