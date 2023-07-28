import React, { useContext, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";

export const AddContact = (...props) => {
  const { store, actions } = useContext(Context)
  const [toast, setToast] = useState()

  return (
    <div className="container mt-4">
      <form className="needs-validation" onSubmit={e => {
        
        var toastTrigger = document.getElementById('liveToastBtn')
        var toastLiveExample = document.getElementById('liveToast')
        if (toastTrigger) {

            var toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        
        if (!!store.id_contact) {
          e.preventDefault();
          actions.updateContact(e, store.id_contact.id)
         
        } else {
          e.preventDefault();
          actions.saveContact()
          e.target.reset();


          }
        }
      }
      }>
        <h1 className="text-center">Add a new Contact</h1>

        <div className="mb-3">
          <label htmlFor="formGroupFullName" className="form-label">Full Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="formGroupFullName"
            name="full_name"
            placeholder="Full Name"
            onChange={actions.handleChange}
            defaultValue={!!store.id_contact ? store.id_contact.full_name : ""}
          />

        </div>

        <div className="mb-3">
          <label htmlFor="formGroupEmail" className="form-label">Email</label>
          <input
            required
            type="email"
            className="form-control"
            id="formGroupEmail"
            name="email"
            placeholder="Email"
            onChange={actions.handleChange}
            defaultValue={!!store.id_contact ? store.id_contact.email : ""}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupPhone" className="form-label">Phone Number</label>
          <input
            required
            type="number"
            className="form-control"
            id="formGroupPhone"
            name="phone"
            placeholder="Enter Phone"
            onChange={actions.handleChange}
            defaultValue={!!store.id_contact ? store.id_contact.phone : ""}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupAdress" className="form-label">Address</label>
          <input
            required
            type="text"
            className="form-control"
            id="formGroupAdress"
            name="address"
            placeholder="Enter Address"
            onChange={actions.handleChange}
            defaultValue={!!store.id_contact ? store.id_contact.address : ""}
          />
        </div>


        <div className="mb-3">

          <button className="btn btn-primary w-100" type="submit" id="liveToastBtn">Save</button>
        </div>
      </form>
      <Link className="mt-3 w-100 text-center" to="/contacts" onClick={() => deleteID()}>
        or get back to contacts
      </Link>

      
      <div className="position-fixed bottom-0 mb-5 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
          <i className="fa-solid fa-circle-check text-success me-2"></i>
            <strong className="me-auto">Contact List</strong>
            <small>Now</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
          <i className="fa-solid fa-user-check mx-4 text-success"></i>
            Contact Saved successfully
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddContact