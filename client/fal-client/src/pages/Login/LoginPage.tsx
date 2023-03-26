import React, { useState } from "react";
import getManagerInformation from "../../api-calls/getManager";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Manager } from "../../utils/types";
import "../Login/LoginPage.css";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { manager } from "../../utils/atoms";

const LoginPage = () => {
  const [input, setInput] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [currentManager, setCurrentManager] = useRecoilState(manager);
  const navigate = useNavigate();

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        shouldFocusAfterRender={false}
        className="findid-modal"
        ariaHideApp={false}
      >
        <div className="modal-wrapper">
          <div className="modal-column">
            <p>
              1. Navigera till "Mitt lag" och klicka på "Visa historik" i
              högerspalten
            </p>
            <br></br>
            <p>2. I URL:n hittar du ditt lag-ID här:</p>
            <br></br>
            <img
              src={require("./example-link.png")}
              alt="your image"
              style={{ width: "350px" }}
            />
            <br></br>
            <div style={{ display: "flex" }}>
              <p>3. Ditt lag-ID hade i detta fallet varit &nbsp;</p>
              <p className="focused-paragraph">360</p>
            </div>
          </div>
          <div className="modal-column" style={{ alignItems: "end" }}>
            <img
              src={require("./example-history.png")}
              alt="your image"
              style={{ width: "250px" }}
            />
          </div>
        </div>
      </Modal>
      <div className="body">
        <div className="login-wrapper">
          <div className="login-box">
            <div className="login-content">
              <h1 style={{ margin: "30px 0" }}>Logga in</h1>
              {/* <label for="team-id">Lag-ID</label> */}
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                id="team-id"
                placeholder="Lag-ID"
                type="number"
                className="team-id-field"
              ></input>
              <div className="login-row">
                <button
                  className="purple-button pointer underline no-margin"
                  style={{ zIndex: "0" }}
                  onClick={() => logIn()}
                >
                  Logga in
                </button>
                <h3 className="pointer underline" onClick={() => openModal()}>
                  Var hittar jag lag-id?
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  async function logIn() {
    const t: Manager = await getManagerInformation(input);
    setCurrentManager(t);
    console.log(t.player_first_name);
    navigate("/overview");
  }
};

export default LoginPage;
