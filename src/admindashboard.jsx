import React, { Component } from "react";
import Canvas from "./canvas";
import { Modal } from "./infoModal";
class Admindashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/#">
              Ticketless
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link " href="/">
                    Customer Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/admin">
                    Admin Dashboard
                  </a>
                </li>
              </ul>
              <button className="btn btn-outline-success me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </button>
              <button className="btn btn-outline-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row mt-5">
            <h2>Tickets Issued</h2>
            <div className="col-sm-6 offset-sm-3">
              <ol class="list-group list-group-numbered">
                <li
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-start "
                  data-bs-toggle="modal"
                  data-bs-target="#GMM"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Guindy Meuseum</div>
                    Main Entrance
                  </div>
                  <span class="badge bg-primary rounded-pill">145</span>
                </li>
                <li
                  class="list-group-item d-flex list-group-item-action justify-content-between align-items-start"
                  data-bs-toggle="modal"
                  data-bs-target="#GMP"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Guindy Meuseum</div>
                    Pre-historic block
                  </div>
                  <span class="badge bg-primary rounded-pill">45</span>
                </li>
                <li
                  class="list-group-item d-flex list-group-item-action justify-content-between align-items-start"
                  data-bs-toggle="modal"
                  data-bs-target="#GMMB"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Guindy Meuseum</div>
                    Medival Block
                  </div>
                  <span class="badge bg-primary rounded-pill">67</span>
                </li>
                <li
                  class="list-group-item d-flex list-group-item-action justify-content-between align-items-start"
                  data-bs-toggle="modal"
                  data-bs-target="#STR"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Shore Temple</div>
                    Road Entrance
                  </div>
                  <span class="badge bg-primary rounded-pill">1040</span>
                </li>
                <li
                  class="list-group-item d-flex list-group-item-action justify-content-between align-items-start"
                  data-bs-toggle="modal"
                  data-bs-target="#STS"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Shore Temple</div>
                    Shore Entrance
                  </div>
                  <span class="badge bg-primary rounded-pill">54</span>
                </li>
                <li
                  class="list-group-item d-flex list-group-item-action justify-content-between align-items-start"
                  data-bs-toggle="modal"
                  data-bs-target="#MRSD"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Mountain Rail</div>
                    Departing Station
                  </div>
                  <span class="badge bg-primary rounded-pill">84</span>
                </li>
                <li
                  class="list-group-item d-flex list-group-item-action justify-content-between align-items-start"
                  data-bs-toggle="modal"
                  data-bs-target="#MRS2"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Mountain Rail</div>
                    Station 2
                  </div>
                  <span class="badge bg-primary rounded-pill">12</span>
                </li>
                <li
                  class="list-group-item d-flex list-group-item-action justify-content-between align-items-start"
                  data-bs-toggle="modal"
                  data-bs-target="#MRS3"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Mountain Rail</div>
                    Station 3
                  </div>
                  <span class="badge bg-primary rounded-pill">44</span>
                </li>
                <li
                  class="list-group-item d-flex list-group-item-action justify-content-between align-items-start"
                  data-bs-toggle="modal"
                  data-bs-target="#MRF"
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">Mountain Rail</div>
                    Final Stop
                  </div>
                  <span class="badge bg-primary rounded-pill">23</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <Modal
          Heading="Guindy Meuseum"
          gateWay="Main Entrance"
          id="GMM"
        ></Modal>
        <Modal
          Heading="Guindy Meuseum"
          gateWay="PreHistoric Block"
          id="GMP"
        ></Modal>
        <Modal
          Heading="Guindy Meuseum"
          gateWay="Medival Block"
          id="GMMB"
        ></Modal>
        <Modal Heading="Shore Temple" gateWay="Road Entrance" id="STR"></Modal>
        <Modal Heading="Shore Temple" gateWay="Shore Entrance" id="STS"></Modal>
        <Modal
          Heading="Mountain Rail"
          gateWay="Departing Station"
          id="MRSD"
        ></Modal>
        <Modal Heading="Mountain Rail" gateWay="Station 2" id="MRS2"></Modal>
        <Modal Heading="Mountain Rail" gateWay="Station 3" id="MRS3"></Modal>
        <Modal Heading="Mountain Rail" gateWay="Final Station" id="MRF"></Modal>
        <Canvas></Canvas>
      </div>
    );
  }
}

export { Admindashboard };
