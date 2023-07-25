import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Modal = props => {

    const { store, actions } = useContext(Context)

    return (
        <div className="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure do you want to delete???</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
Modal.propTypes = {
    history : PropTypes.object,
    onClose : PropTypes.func,
    show: PropTypes.bool
}
Modal.defaultProps = {
    show:false,
    onClose : null
}
