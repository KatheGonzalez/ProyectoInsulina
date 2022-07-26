import { useState } from 'react';

export function useLocalStorage (key: any, initialValue: any){
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? item : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue: (value:string | readonly string [] | undefined) => void = value => {
        try{
            setStoredValue(value)
            window.localStorage.setItem(key, value as string) 
        }catch (error){
            console.error(error)
        }
    }
    return [storedValue, setValue]   
}