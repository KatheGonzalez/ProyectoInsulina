import { useState } from "react";

export function useLocalStorage (key: any, initialValue: any){
    const [storedValue, setStoredValue] = useState(() => {
        // devolver el valor del estado inciial, recuperar 
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue: (value:string | number | readonly string [] | undefined) => void = value => {
        try{
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        }catch (error){
            console.error(error)
        }
    }
    console.log(storedValue)
    return [storedValue, setValue]   
}