import React, { Component } from "react";

class Canvas extends Component {
  state = {};
  render() {
    return (
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Settings</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="list-group-flush">
            <a href="/#" class="list-group-item list-group-item-action">
              Restrict Entry 
            </a>
            <a href="/#" class="list-group-item list-group-item-action">
              Manage relaxations
            </a>
            <a href="/#" class="list-group-item list-group-item-action">
              Manage Working Hours
            </a>
            <a href="/#" class="list-group-item list-group-item-action">
              Manage Revenue
            </a>
            <a href="/#" class="list-group-item list-group-item-action">
              Predict Revenue
            </a>
            <a href="/#" class="list-group-item list-group-item-action">
              Logout
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Canvas;
