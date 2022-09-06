
export interface InputFormData {
    type?: string, 
    name?: string | undefined,
    placeholder?: string, 
    value?: string | number | undefined,
    onChange?:(event: any) => any,
    autocomplete?: string,
    required?: boolean,
    className?: string,
    width?: string,
    height?: string,
};