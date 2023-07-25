import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import CardContact from "../component/cardContact.js";
import { Modal } from "../component/modal.js";


export const Contacts = (...props)=>{
    const { store, actions } = useContext(Context);
    return(
        <div className="container">
           <div className="my-4 text-end">

            <Link className="btn btn-success" to="/addContact">
						Add new contact
		    </Link>
           </div>
        <ul className="list-group ">
            <CardContact/>
            <CardContact/>
            <CardContact/>
        </ul>
        </div>
    )
}

export default Contacts;