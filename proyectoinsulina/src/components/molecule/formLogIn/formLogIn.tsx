import { InputForm } from '../../atom/input/inputForm';
import { LabelForm } from '../../atom/label/labelForm';
import { ButtonForm } from '../../atom/button/buttonForm';
import { TitleForm } from '../../atom/title/titleForm';
import { FC } from 'react';
import { FormLoginData } from './formLoginData';

const FormLogIn: FC<FormLoginData> = (props) => {
  const userChange = (event:any) => props.setUserLogged({...props.userLogged, [event.target.name]:event.target.value})
    return(
      <div>
        <TitleForm>Daily Insulins</TitleForm>
        
        <LabelForm>User  </LabelForm> 
        <InputForm
            type='text'
            value={props.userLogged.user}
            onChange={userChange}
            placeholder='User'
            name= 'user'
            autocomplete=''/>

        <LabelForm>Password  </LabelForm> 

        <InputForm
          type="password"
          value={props.userLogged.password}
          onChange={userChange}
          placeholder='Pasword'
          name= 'password'
          autocomplete=''/>
          
        <ButtonForm
        onClick={props.getTokenButton}
        >Send</ButtonForm>
      </div>
    )
}
export default FormLogIn