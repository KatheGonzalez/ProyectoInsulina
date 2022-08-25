import { InputForm } from '../../atom/input/inputForm';
import { ButtonForm } from '../../atom/button/buttonForm';
import { TitleForm } from '../../atom/title/titleForm';
import { FC } from 'react';
import { FormLoginData } from './formLoginData';
import { BackgroundTwo } from '../../atom/backgroundTwo/backgroundTwo.Style';

const FormLogIn: FC<FormLoginData> = (props) => {
  const userChange = (event:any) => props.setUserLogged({...props.userLogged, [event.target.name]:event.target.value})
    return(

        <div>
        <TitleForm>Login</TitleForm>
        <InputForm
            type='text'
            value={props.userLogged.user}
            onChange={userChange}
            placeholder='Usuario'
            name= 'user'
            autocomplete=''/>

        <InputForm
          type="password"
          value={props.userLogged.password}
          onChange={userChange}
          placeholder='Contraseña'
          name= 'password'
          autocomplete=''/>
          
        <ButtonForm
        onClick={props.getTokenButton}
        >Ingresar</ButtonForm>
        </div>

      // </BackgroundTwo>
      
    )
}

export default FormLogIn