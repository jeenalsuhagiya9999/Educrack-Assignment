import React, { useState, useEffect } from "react";

import LoginForm from "./LoginForm";
import "./App.css";
import Items from "./Items";
import Mainpage from "./Mainpage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [detailsUploaded, setDetailsUploaded] = useState(false);

  const getUserName = () => {
    return fetch('http://localhost:9999/userinfo', { credentials: "include"})
    .then(r => {
      if(r.ok) {
        return r.json();
      } else {
        setLoggedIn(false);
        setUserName(undefined);
        return { success: false };
      }
    }).then(r => {
      if(r.success !== false) {
        setLoggedIn(true);
        setUserName(r.userName);
      }
    });
  }

  useEffect(() => {
    getUserName();
  }, []);


  const signupHandler = (username, password) => {
    loginOrSignup('http://localhost:9999/signup', username, password);
  };
  const loginHandler = (username, password) => {
    loginOrSignup('http://localhost:9999/login', username, password);
  };

  const logoutHandler = () => {
    return fetch('http://localhost:9999/logout', { credentials: 'include'})
    .then(r => {
      if(r.ok) {
        setLoggedIn(false);
        setUserName(undefined);
      }
    })
  };
  const AddInfoHandler = (Name, price, date,cost, userId)=>{
   
    GetAllInfo('http://localhost:9999/item',Name, price, date,cost, userId);
    setDetailsUploaded(true);
  }
  const GetAllInfo=(url, Name, price, date,cost, userId)=>{
    fetch(url, {
      method: "POST",
      body: JSON.stringify({Name, price, date,cost, userId }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include"
    })
    .then((r) => {
      
        return r.json()
      
    })

  }


  const loginOrSignup = (url, username, password) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ userName: username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include"
    })
      .then((r) => {
        if(r.ok) {
          return { success: true };
        } else {
          return r.json()
        }
      })
      .then((r) => {
        if(r.success === true) {
          return getUserName();
        } else {
          setError(r.err);
        }
      });
  }
  return loggedIn ? (
    //<RentingList username={userName} logoutHandler={logoutHandler}/>
    (detailsUploaded?(  <Mainpage />):( <Items AddInfoHandler={AddInfoHandler} logoutHandler={logoutHandler} />))
  ) : (
    <LoginForm
      signupHandler={signupHandler}
      loginHandler={loginHandler}
      error={error}
    />
  );
}

export default App;
