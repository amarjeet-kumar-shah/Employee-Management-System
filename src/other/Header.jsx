import React, { useState } from "react";

const Header = (props, data) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

const logOutUser = () => {
  localStorage.setItem('loggedInUser', '')
  props.changeUser('')
  // window.location.reload()
}

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hi, <br />
        <span className="text-3xl font-semibold">UserName👋🏻</span>
      </h1>
      <button onClick={logOutUser} className="px-4 py-2  text-white font-medium bg-red-600 rounded-md">
        Log Out
      </button>
    </div>
  );
};

export default Header;
