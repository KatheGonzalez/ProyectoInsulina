import { useState } from 'react';
import { useLocalStorage } from '../services/useLocalStorage';
import { LogInUser } from '../services/insulineServices';
import jwt_decode from "jwt-decode";
import FormLogIn from '../components/molecule/formTemplate/formLogIn';

function LogInPage() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const [getPermissions, setPermissions] = useLocalStorage('access_token', '')

   console.log(jwt_decode(getPermissions));

   const changeValue = (e:any) => setText(e.target.value)
   const changeValue2 = (e:any) => setPassword(e.target.value)
   const changeValue3 = async () => setPermissions(await LogInUser(text, password)) 

  return (
        <FormLogIn 
        value1={text} 
        onChange1={changeValue}
        value2={password} 
        onChange2={changeValue2}
        onClickBut={changeValue3}
        ></FormLogIn>
  );
}

export default LogInPage;
