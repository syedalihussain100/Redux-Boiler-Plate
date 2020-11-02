import React from "react";
import { connect } from "react-redux";
import { setData } from "../store/action/index";

class Firstapp extends React.Component {
  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps====>", state);
    return state;
  }
  render() {
    let maindata = [
      { id: 3, name: "Zaid-Roy", email: "rzaid3616@gmail.com" },
      { id: 4, name: "Faizan-khan", email: "wear@gmail.com" },
    ];
    console.log("USERS===>", this.props.users);
    return (
      <div>
        <h1>Learning Redux</h1>
        <button onClick={() => this.props.setData(maindata)}>Set-Data</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.firstreducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Firstapp);
