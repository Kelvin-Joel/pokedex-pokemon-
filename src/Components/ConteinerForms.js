import React from 'react'
import MenuForms from './MenuForms'
import FormLogin from './FormLogin'
import FormsRegister from './FormsRegister'
import '../Styles/Forms.css'
import '../Styles/FormsLogin.css'
import useStore from '../Store/index'

const ConteinerForms = () => {
  const {FormLogin_status} = useStore();
  
  return (
    <div className='container_forms'>
      <MenuForms />
      <div className='box-forms'>
       
        {
          FormLogin_status ? <FormLogin/> : <FormsRegister/>
        }
      </div>
    </div>
  )
}

export default ConteinerForms