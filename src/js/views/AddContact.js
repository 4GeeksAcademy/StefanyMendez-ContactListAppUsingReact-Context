import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";

export const AddContact = ({ history }, ...props) => {
  const { store, actions } = useContext(Context)
  return (
    <div className="container mt-4">
      <form>
        <h1 className="text-center">Add a new Contact</h1>

        <div className="mb-3">
          <label for="formGroupFullName" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupFullName"
            name="full_name"
            placeholder="Full Name" onChange={actions.handleChange}
          />
        </div>
        
        <div className="mb-3">
          <label for="formGroupEmail" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="formGroupEmail"
            name="email"
            placeholder="Enter Email"
            onChange={actions.handleChange}
          />
        </div>

        <div className="mb-3">
          <label for="formGroupPhone" className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="formGroupPhone"
            name="phone"
            placeholder="Enter Phone"
            onChange={actions.handleChange}
          />
        </div>

        <div className="mb-3">
          <label for="formGroupAdress" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="formGroupAdress"
            name="address"
            placeholder="Enter Address"
            onChange={actions.handleChange}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100">Save</button>
        </div>
      </form>
      <Link className="mt-3 w-100 text-center" to="/contacts" onClick={() => deleteID()}>
        or get back to contacts
      </Link>
    </div>
  )
}
AddContact.protoTypes = {
  history: PropTypes.object
}
export default AddContact