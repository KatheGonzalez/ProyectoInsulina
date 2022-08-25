
export interface InputFormData {
    type?: string, 
    name?: string | undefined,
    placeholder?: string, 
    value?: string | undefined | number, 
    onChange?:(event: any) => any,
    autocomplete?: string,
    required?: boolean
}