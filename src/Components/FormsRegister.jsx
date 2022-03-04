import React, { useState } from "react";
import useStore from "../Store/index";
import "../Styles/FormsLogin.css";
import "../Styles/Forms.css";

const initialData = {
  id: null,
  name: "",
  paswoord: "",
  listFavoritos: [],
};

const FormsRegister = () => {
  const { change_state_FormRegister, AddUser, Change_FormLogin_State} = useStore();
  const [inputText, setInputText] = useState(initialData);

  const handleChangeInput = (e) => {
    inputText.id = Date.now();
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.name !== "" && inputText.paswoord !== "") {
      AddUser(inputText);
      change_state_FormRegister();
      Change_FormLogin_State()
      return;
    }
    alert("Campos Vacios!");
  };

  return (
    <form
      className="form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className="form__input"
        name="name"
        value={inputText.name}
        type="text"
        placeholder="Name User"
        autoComplete="off"
        onChange={(e) => handleChangeInput(e)}
      />
      <input
        className="form__input"
        name="paswoord"
        value={inputText.paswoord}
        type="password"
        placeholder="Paswwoord"
        autoComplete="off"
        onChange={(e) => handleChangeInput(e)}
      />
      <div className="flex box_buttons">
        <button
          className="btn background-color"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default FormsRegister;
