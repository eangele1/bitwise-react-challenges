import React, { Component } from 'react';
import Spinner from './Spinner.js';

let dialogStyles = {
    width: '90vw',
    maxHeight: '80%',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let overlay = {
    position: "fixed",
    display: "block",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: '2'
};

let dialogCloseButtonStyles = {
    padding: '3px 8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: "16px",
    backgroundColor: "blue"
};

class Modal extends Component {
    render() {
        let dialog = (
            <div style={overlay}>
                <div style={dialogStyles}>
                    <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>Close</button>
                    <div>{this.props.children === null ? <Spinner LoadState={true} /> : this.props.children}</div>
                </div>
            </div>
        );

        if (!this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        );
    }
}

export default Modal;