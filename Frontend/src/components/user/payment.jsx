import React, { Component } from "react";
import Navbar from "../Navbar";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainNo: "",
      pnrNo: "",
      customerName: "",
      paymentMode: "",
      price:""
    };
  }

  handlePaymentModeChange=(e)=>{
    this.setState({
        paymentMode: e.target.value
    })
  }


  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div
          className="payment-gateway"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            className="card"
            style={{
              padding: "2rem",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
            }}
          >
            <h2>Payment Details</h2>
            <p>Train No: {this.props.trainNo}</p>
            <p>Ticket No: {this.props.pnrNo}</p>
            <p>Customer Name: {this.props.customerName}</p>
            <p>Price of Ticket: {this.props.price}</p>
            <div className="form-group">
              <label>Mode of Payment:</label>
              <select
                className="form-control"
                value={this.state.paymentMode}
                onChange={this.handlePaymentModeChange}
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
              </select>
            </div>
            <button className="btn btn-primary" style={{
              marginTop: "10px"
            }}>Proceed to payment</button>
          </div>
        </div>
      </div>
    );
  }
}
