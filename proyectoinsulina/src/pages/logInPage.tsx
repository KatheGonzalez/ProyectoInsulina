import { Fragment, useState } from 'react';
import { ButtonForm } from '../components/atom/buttonForm';
import { InputForm } from '../components/atom/inputForm';
import { LabelForm } from '../components/atom/labelForm';
import { TitleForm } from '../components/atom/titleForm';
import { useLocalStorage } from '../components/molecule/useLocalStorage';
import { LogInUser } from '../services/insulineServices';
import jwt_decode from "jwt-decode";

// import { GetOrders } from '../services/insulineServices';
// import './App.css';


function LogInPage() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const [getPermissions, setPermissions] = useLocalStorage('access_token', '')

  console.log(jwt_decode(getPermissions));
  
  return (
    <Fragment>
      <TitleForm>Daily Insulines</TitleForm>
      <LabelForm>Ingresa tu usuario aqui  </LabelForm>
      <InputForm
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Usuario'/>

      <LabelForm>Ingresa tu clave aqui  </LabelForm>  
      <InputForm
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Clave'/>
        
      <ButtonForm
        onClick={async () => setPermissions(await LogInUser(text, password))}
      >Send</ButtonForm>

    </Fragment>
  );
}

export default LogInPage;
