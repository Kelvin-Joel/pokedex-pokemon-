import React, { useState,useEffect } from "react";
import "../Styles/Forms.css";
import "../Styles/FormsLogin.css";
import useStore from "../Store/index";

const initialData = {
  name: "",
  paswoord: "",
};

const FormLogin = () => {
  const {
    InitialSession,
    user_global,
    ChangePokemonListStatus,
    FecthPokemon
  } = useStore();

  const [inputText, setInputText] = useState(initialData);

  const handleChangeInput = (e) => {

    inputText.id = Date.now();
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    InitialSession(inputText);
  };

  useEffect(() => {
    if (user_global) {
      ChangePokemonListStatus();
      FecthPokemon();
      setInputText(initialData);
    }
  }, [user_global]);
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="form__input"
        type="text"
        placeholder="Name User"
        name="name"
        value={inputText.name}
        autoComplete="off"
        onChange={(e) => handleChangeInput(e)}
      />
      <input
        className="form__input"
        type="password"
        placeholder="Paswwoord"
        name="paswoord"
        value={inputText.paswoord}
        autoComplete="off"
        onChange={(e) => handleChangeInput(e)}
      />
      <button className="btn btn_form_login background-color">
        Login
      </button>
    </form>
  );
};

export default FormLogin;
