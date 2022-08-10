import jwt_decode from 'jwt-decode';
import { Decode } from '../modelsclass/validation';

function decodeToken() {
    const localValue = window.localStorage.getItem('access_token'); 
    const decodeValue:Decode = jwt_decode<Decode>(localValue!)
    const permissionsValue: Array<string> = decodeValue.permissions

  return (
        {localValue,
        decodeValue,
        permissionsValue
        }
        
  );
}

export default decodeToken;
