import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { Decode } from '../modelsclass/validation';

function DecodeToken() {
    const localValue = window.localStorage.getItem('access_token');
    const decodeValue: Decode = jwt_decode<Decode>(localValue!);
    const permissionsValue: Array<string> = decodeValue.permissions;
    const [loading, setLoading] = useState<React.SetStateAction<boolean>>(true);

    return (
        {
            localValue,
            decodeValue,
            permissionsValue,
            loading,
            setLoading
        }

    );
}

export default DecodeToken;
