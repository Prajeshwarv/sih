import React, { Component } from "react";

class Modal extends Component {
  state = {};
  render() {
    return (
      <div
        class="modal fade"
        id={this.props.id}
        tabindex="-1"
        aria-labelledby={this.props.id}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id={this.props.id}>
                {this.props.Heading}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>{this.props.gateWay}</h6>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Prads</td>
                    <td> 15:00 IST 5th March</td>
                    <td> 50 </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>17:00 IST 5th March</td>
                    <td> 50 </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Modal };
