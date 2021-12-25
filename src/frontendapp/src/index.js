import React from 'react';
import ReactDOM from 'react-dom';

import GuestApp from './GuestApp';
import AdminApp from './AdminApp';
import SignedApp from './SignedApp';
// import reportWebVitals from './reportWebVitals';
import jwt from 'jwt-decode'

const accessToken = localStorage.getItem("accessToken")
if (accessToken === null) {
  ReactDOM.render(
    <React.StrictMode>
      <GuestApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
else {
  const email = jwt(accessToken).email

  if (email === "Admin") {
    ReactDOM.render(
      <React.StrictMode>
        <AdminApp />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  else {
    ReactDOM.render(
      <React.StrictMode>
        <SignedApp />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
