import { InputForm } from '../../atom/input/inputForm';
import { ButtonForm } from '../../atom/button/buttonForm';
import { TitleForm } from '../../atom/title/titleForm';
import { FC } from 'react';
import { FormLoginData } from './formLoginData';
import { BackgroundImage, Box, DivContainer, DivPortalTitle, InfoPortal, LoginInfo } from '../../atom/divStyles/backgroundOne.Style';
import { Links } from '../../atom/links/links.Style';
import img from '../../../assets/images/ilustrations/background-shape-1.svg';
import img2 from '../../../assets/images/ilustrations/background-shape-2.svg';

const FormLogIn: FC<FormLoginData> = (props) => {
  const userChange = (event:any) => props.setUserLogged({...props.userLogged, [event.target.name]:event.target.value})
    return(
        <>
          <Box width='1650px' height='840px'>
            <InfoPortal>
              <DivContainer className='main-container-info-left'>
               <DivPortalTitle className='title-portal'>Portal de usuario</DivPortalTitle>

               <div className='info-portal'>
                  <img/>
                  <p></p>
               </div>
              </DivContainer>
            </InfoPortal>

            <LoginInfo className='right-container'>

              <TitleForm>Login</TitleForm>

              <InputForm
                  type='text'
                  value={props.userLogged.user}
                  onChange={userChange}
                  placeholder='Usuario'
                  name= 'user'
                  autocomplete=''/>

              <InputForm
                type="password"
                value={props.userLogged.password}
                onChange={userChange}
                placeholder='Contraseña'
                name= 'password'
                autocomplete=''/>
                
              <ButtonForm
              onClick={props.getTokenButton}
              >INGRESAR</ButtonForm>

              <Links>¿Olvidaste tu clave?</Links>
            </LoginInfo>

          </Box>

          <BackgroundImage src={img} top='-50px' left='-150px'/>
          <BackgroundImage src={img2} top='-450px' right='-150px'/>
        </>
    )
}

export default FormLogIn;