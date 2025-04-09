import React, { Component } from "react";

export default class admin_deleteTrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      train_no: "",
    };
  }

  handleTrainNumberChange = (e) => {
    this.setState({ train_no: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const payload = {
      ...this.state,
      token,
    };
    await fetch("/booking/train/delete/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "ok") {
          alert("Successfully deleted train: ",this.state.train_no);
        } else {
          alert("Failed to delete train");
        }
      });

    //TODO: check whether train number exist
    // console.log("Submitted Train Number:", this.state.train_no);
    this.setState({ train_no: "" });
    // alert("Operation Successful");
  };

  render() {
    return (
      <div>
        <div className="mb-3">
          <div className="container" id="hrm" style={{ margin: "5rem 0px" }}>
            <form onSubmit={this.handleSubmit}>
              <label className="form-label my-3">
                Train Number:
                <input
                  type="text"
                  value={this.state.train_no}
                  onChange={this.handleTrainNumberChange}
                />
              </label>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleSubmit}
                style={{ padding: "6px", margin: "0px 10px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
