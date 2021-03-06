import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOption }
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3>Selected OPtion</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption} className="button">Okay</button>
    </Modal>
);

export default OptionModal;

