
export interface InputFormData {
    type?: string,
    // este undefined no hace falta si tiene el ?
    name?: string | undefined,
    placeholder?: string,
    // este undefined no hace falta si tiene el ?
    value?: string | number | undefined,
    // dejo pasar el primer any, el segundo nop
    onChange?: (event: any) => void,
    autocomplete?: string,
    required?: boolean,
    className?: string,
    width?: string,
    height?: string,
}
