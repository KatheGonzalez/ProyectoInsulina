import { useState } from 'react';
import { LoginUser } from '../services/insulineServices';
import FormLogIn from '../components/molecule/formLogIn/formLogIn';
import { useLocalStorage } from '../services/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { LogIn } from '../modelsclass/login';

function LogInPage() {
  const [userLogged, setUserLogged] = useState(new LogIn('', ''));
  const [getUserToken, setGetUserToken] = useLocalStorage('access_token','') 
  const navigate = useNavigate()
 
  const getToken = async () => {
    const userLogin = await LoginUser(userLogged);
    if(userLogin === 401){
      window.alert('Your password or user is incorrect');
    }else{
      setGetUserToken(userLogin);
      navigate("/modification");
    }
  }

  return (
        <FormLogIn 
        userLogged={userLogged}
        setUserLogged={setUserLogged}
        getTokenButton={getToken}
        />
  );
}

export default LogInPage;
