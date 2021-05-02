import logo from './logo.svg';
import LoginLayout from "./layout/LoginLayout";
import MemberLayout from "./layout/MemberLayout";
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  
  const AuthStore = props.AuthStore || {};
  const token = AuthStore.tokenAPI;

  return (
    <div className="App">
      <Router>
        {token
          ? <MemberLayout />
          : <LoginLayout />
        }
      </Router>
    </div>
  );
}

const mapState = state => {
  return {
    AuthStore: state.AuthStore,
  };
};

const mapDispatch = {}

export default connect(mapState, mapDispatch)(App);
