import React from "react";
import '../Styles/Forms.css'
import useStore from "../Store/index";
const MenuForms = () => {
  const {Change_FormLogin_State, FormLogin_status}=useStore();
  return (
    <nav className="navbar">
      <h1 className="navbar__title">{FormLogin_status ? 'Login' : 'Register User'}</h1>
      <div className="navbar__tags flex">
        <button
          className={`navbar__btn ${FormLogin_status ? "background-color" : "white" }`} onClick={()=>Change_FormLogin_State()}
        >
          Login
        </button>
        <button
          className={`navbar__btn ${FormLogin_status ? "white" : "background-color" }`} onClick={()=>Change_FormLogin_State()}>
          SingUp
        </button>
      </div>
    </nav>
  );
};

export default MenuForms;
