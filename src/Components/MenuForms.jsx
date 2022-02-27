import React from "react";
import '../Styles/Forms.css'
import useStore from "../Store/index";
const MenuForms = () => {
  const {Change_FormLogin_State, FormLogin_status}=useStore();
  return (
    <nav className="menu_nabvar">
      <h1 className="title">{FormLogin_status ? 'Login' : 'Register User'}</h1>
      <div className="menu_tags flex">
        <button
          className={`btn_tags ${FormLogin_status ? "background-color" : "white" }`} onClick={()=>Change_FormLogin_State()}
        >
          Login
        </button>
        <button
          className={`btn_tags ${FormLogin_status ? "white" : "background-color" }`} onClick={()=>Change_FormLogin_State()}>
          SingUp
        </button>
      </div>
    </nav>
  );
};

export default MenuForms;
