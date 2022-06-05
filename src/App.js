import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";
import { onSnapshot } from "firebase/firestore";
//layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import "./default.scss";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        onSnapshot(userRef, (snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({ ...initialState });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Routes>
          <Route element={<HomepageLayout currentUser={currentUser} />}>
            <Route path="/" element={<Homepage />} />
          </Route>
          <Route element={<MainLayout currentUser={currentUser} />}>
            {!currentUser ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/registration" element={<Navigate to="/" />} />
              </>
            )}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    );
  }
}

export default App;
