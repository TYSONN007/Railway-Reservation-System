import React, { Component } from "react";
import { Link } from "react-router-dom";
class Anav extends Component {
  shouldComponentUpdate() {
    return false;
  }

  navUnhide = (e, id) => {
    const lastChild = e.target.lastChild;
    if (document.getElementById(id).style.display === "block") {
      document.getElementById(id).style.display = "none";
      lastChild.innerHTML = "arrow_drop_down";
      e.target.style.backgroundColor = "#2b4b75";
    } else {
      document.getElementById(id).style.display = "block";
      lastChild.innerHTML = "arrow_drop_up";
      e.target.style.backgroundColor = "black";
    }
  };
  render() {
    return (
      <div className="a_nav">
        <h2>Menu</h2>

        <p onClick={e => this.navUnhide(e, "nav-hide1")}>
          {" "}
          <i className="material-icons">create</i> Create{" "}
          <i className="material-icons">arrow_drop_down</i>
        </p>

        <div id="nav-hide1" style={{ display: "none" }}>
          <ul>
            <Link to="/admin/train/create">
              <li>Create Train</li>
            </Link>
            <Link to="/admin/route/create">
              <li>Create Route</li>
            </Link>
            <Link to="/admin/station/create">
              <li>Create Station</li>
            </Link>
          </ul>
        </div>

        <p onClick={e => this.navUnhide(e, "nav-hide3")}>
          <i className="material-icons">update</i> Update{" "}
          <i className="material-icons">arrow_drop_down</i>
        </p>

        <div id="nav-hide3" style={{ display: "none" }}>
          <ul>
            <Link to="/admin/train/update">
              <li>Update Train</li>
            </Link>
          </ul>
        </div>
        <p onClick={e => this.navUnhide(e, "nav-hide4")}>
          <i className="material-icons">delete</i> Delete{" "}
          <i className="material-icons">arrow_drop_down</i>
        </p>

        <div id="nav-hide4" style={{ display: "none" }}>
          <ul>
            <Link to="/admin/train/delete">
              <li>Delete Train</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Anav;
