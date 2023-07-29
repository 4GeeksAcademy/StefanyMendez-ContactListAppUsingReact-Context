import React, { Component } from "react";
import PropTypes from "prop-types";

export const Toast = (type) => (
    <div className="position-fixed bottom-0 mb-5 end-0 p-3">
    <div id="addToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <i className="fa-solid fa-circle-check text-success me-2"></i>
        <strong className="me-auto">Save Contact</strong>
        <small>Now</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        <i className="fa-solid fa-user-check mx-4 text-success"></i>
        Contact Saved Successfully
      </div>
    </div>
  </div>
);
Modal.propTypes = {
    type: PropTypes.string
}
