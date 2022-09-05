import { InputForm } from '../../atom/input/inputForm';
import { ButtonForm } from '../../atom/button/buttonForm';
import { FC } from 'react';
import { FormLoginData } from './formLoginData';
import { BackgroundImage, BackgroundOne, Box, DivContainer, DivInfoLogin, DivPortalInfo, 
  DivTitlePortal, HelpIcon, ImgLogin, ImgPortal, InfoLoginP, InfoPortal, LoginInfo } from '../../atom/divStylesLogin/backgroundOne.Style';
import img from '../../../assets/images/ilustrations/background-shape-1.svg';
import img2 from '../../../assets/images/ilustrations/background-shape-2.svg';
import { LinkLogin, TitleLogin } from '../../atom/divStylesLogin/backgroundOne.Style';
import img3 from '../../../assets/images/ilustrations/insuline-pharma.svg';
import img4 from '../../../assets/images/brand/brand-main-white.svg';

const FormLogIn: FC<FormLoginData> = (props) => {
  const userChange = (event:any) => props.setUserLogged({...props.userLogged, [event.target.name]:event.target.value})
    return(
        <BackgroundOne>
          <Box width='1650px' height='840px'>
              <InfoPortal width='739px' height='840px'>

                <DivContainer>
                  <DivTitlePortal>Portal de Usuario</DivTitlePortal>
                  <DivPortalInfo>
                    <ImgLogin src={img4} alt="marca insulap blanca" />
                    <InfoLoginP>Expertos en salud corporal y ambiental
                      Una marca 100% Colombiana.
                    </InfoLoginP>
                  </DivPortalInfo>

                </DivContainer>

                <ImgPortal src={img3} alt="imagen de inyecciones"  rotate={360}/>

              </InfoPortal>

              <LoginInfo width='911px' height='840px'>
            
              <HelpIcon className="material-symbols-outlined">
              help</HelpIcon>

              <DivInfoLogin>


                <TitleLogin>Login</TitleLogin>

                <InputForm
                  className='loginuser'
                  type='text'
                  value={props.userLogged.user}
                  onChange={userChange}
                  placeholder='Usuario'
                  name= 'user'
                  autocomplete=''
                  width='640px'
                  height='50px'/>

                <InputForm
                  className='loginpassword'
                  type="password"
                  value={props.userLogged.password}
                  onChange={userChange}
                  placeholder='Contraseña'
                  name= 'password'
                  autocomplete=''
                  width='640px'
                  height='50px'/>
                  
                <ButtonForm
                  className='botonlogin'
                  onClick={props.getTokenButton}
                >INGRESAR</ButtonForm>

                <LinkLogin>¿Olvidaste tu clave?</LinkLogin>

              </DivInfoLogin>

              </LoginInfo>

          </Box>

          <BackgroundImage src={img} top='-50px' left='-150px'/>
          <BackgroundImage src={img2} top='-450px' right='-150px'/>

        </BackgroundOne>
    )
}

export default FormLogIn;