import { Dispatch } from 'react';
import { LogIn } from "../../../modelsclass/login";

export interface FormLoginData {
    userLogged:LogIn, 
    setUserLogged:Dispatch<React.SetStateAction<LogIn>>,
    getTokenButton:() => Promise<any>
}