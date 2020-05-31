import React, { useEffect, useMemo } from "react";
import axios from "./axios";
import "./App.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ItemList from "./components/ItemList";
import { useDispatch, useSelector } from "react-redux";
import objToArray from "./Auxiliar/objToArr";
import AddNewPostPage from "./pages/AddNewItemPage";

function App() {
  console.log("render");
  const dispatch = useDispatch();
  let initRefresh = useSelector((state) => state.initRefresh);

  const firebaseConfig = useMemo(
    () => ({
      apiKey: "AIzaSyBVwgTuqBBxIn-__3LU8vOPMCw0iCE1oU0",
      authDomain: "train-39df7.firebaseapp.com",
      databaseURL: "https://train-39df7.firebaseio.com",
      projectId: "train-39df7",
      storageBucket: "train-39df7.appspot.com",
      messagingSenderId: "356224743225",
      appId: "1:356224743225:web:af9407f63996673d2d5ae8",
    }),
    []
  );
  // Initialize Firebase

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, [firebaseConfig]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then(function (response) {
        // handle success
        let resArr = objToArray(response.data);
        dispatch({ type: "SET-DATA", data: resArr });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [dispatch, initRefresh]);



  

  return (
    <div className="App">
      <Router>
        <ul className="nav-menu">
          <li>
            <Link to="/create-new-item">Add new item</Link>
          </li>
          <li>
            <Link to="/active-items">Active items</Link>
          </li>
        </ul>

        <Switch>
          <Redirect exact   from='/' to='/active-items' />
          <Redirect    from='//' to='/' />>
          <Route exact path="/create-new-item">
            <AddNewPostPage />
          </Route>
          <Route exact path="/active-items">
            <ItemList />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
