import { InputForm } from "../../atom/input/inputForm"
import { LabelForm } from "../../atom/label/labelForm"
import { ButtonForm } from '../../atom/button/buttonForm';
import { TitleForm } from '../../atom/title/titleForm';
import { Link }  from 'react-router-dom';
import { FC } from "react";

const FormLogIn: FC<{value1:string, onChange1:(e: any) => void,
        value2:string, onChange2:(e: any) => void,
        onClickBut:() => Promise<any>}> = 
        ({value1, onChange1,value2, onChange2, onClickBut}) =>
 {
    return(
      <div>
        <TitleForm>Daily Insulines</TitleForm>
        <LabelForm>Usuario  </LabelForm> 
        <InputForm
            type='text'
            value={value1}
            onChange={onChange1}
            placeholder='Usuario'/>

        <LabelForm>Password  </LabelForm> 

        <InputForm
          type="password"
          value={value2}
          onChange={onChange2}
          placeholder='Clave'/>
          
        <ButtonForm
        onClick={onClickBut}
        ><Link to="Modification">Send</Link></ButtonForm>
      </div>
    )
}
export default FormLogIn