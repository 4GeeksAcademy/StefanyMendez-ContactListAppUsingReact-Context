import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Modal = props => {

    const { store, actions } = useContext(Context)

    return (
        <div className="modal" tabIndex="-1" style={{ display: store.showModal ? "inline-block" : "none" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            onClick={() => actions.deleteModal()}>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{`Are you sure to delete ${!!store.id_contact ? store.id_contact.full_name : ""} from the contact list???`}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={() => actions.deleteModal()}>CANCEL</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal"
                            onClick={() => actions.deleteContactsByID(store.id_contact.id)}>YES</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
Modal.propTypes = {

    show: PropTypes.bool
}
Modal.defaultProps = {
    show: false,
}
