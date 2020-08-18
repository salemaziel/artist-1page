import React from "react";


import Modal from "react-modal";

import { 
MdChat
} from 'react-icons/md'

import EstimateForm from "./estimateForm";

import modalStyles from './PageComponents/Home/home.module.css'

//import homeStyles from "./home.module.css";
//import "./home.module.css";

class HeroHeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      className: "",
      shouldCloseOnOverlayClick: "",
      shouldCloseOnEsc: "",
      shouldReturnFocusAfterClose: "",
      contentLabel: "",
    };
  }

  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true });
  };

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <a onClick={this.handleModalOpen}>
          <MdChat color="#0D4D8D" className={modalStyles.Icon}/> Contact for Booking
        </a>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Request A Quote"
          id="estimate"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          shouldReturnFocusAfterClose={true}
          /*className={homeStyles.modalmailing}
          overlayClassName={homeStyles.modalmailingOverlay}*/
        >

            <EstimateForm />
        </Modal>
      </>
    );
  }
}

export default HeroHeaderSection;
