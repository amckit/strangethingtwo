import React from "react";

const LogoutAccount = (props) => {
  const handleClick = () => {
    localStorage.clear("Token");
    let accessTokenObj = JSON.parse(localStorage.getItem("Token"));
    console.log(accessTokenObj);
    props.setIsLoggedIn(false)
  };

  return (
    <div>
      <h2>LOG OUT</h2>
      <button
        onClick={handleClick}
        styles={{ width: "200px", height: "100px" }}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutAccount;