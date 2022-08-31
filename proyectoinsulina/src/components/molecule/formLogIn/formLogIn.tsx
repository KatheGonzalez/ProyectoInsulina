import { InputForm } from '../../atom/input/inputForm';
import { ButtonForm } from '../../atom/button/buttonForm';
import { FC } from 'react';
import { FormLoginData } from './formLoginData';
import { BackgroundImage, Box, DivContainer, DivInfoLogin, DivPortalInfo, DivPortalTitle, DivTitlePortal, ImgLogin, ImgPortal, InfoLoginP, InfoPortal, LoginInfo } from '../../atom/divStylesLogin/backgroundOne.Style';
import img from '../../../assets/images/ilustrations/background-shape-1.svg';
import img2 from '../../../assets/images/ilustrations/background-shape-2.svg';
import { LinkLogin, TitleLogin } from '../../atom/loginCard/loginCard.Style';
import img3 from '../../../assets/images/ilustrations/insuline-pharma.svg';
import img4 from '../../../assets/images/brand/brand-main-white.svg';

const FormLogIn: FC<FormLoginData> = (props) => {
  const userChange = (event:any) => props.setUserLogged({...props.userLogged, [event.target.name]:event.target.value})
    return(
        <>
          <Box width='1650px' height='840px'>
              <InfoPortal width='739px' height='840px'>

                <DivContainer>
                  <DivPortalTitle>
                    <DivTitlePortal>Portal de Usuario</DivTitlePortal>
                  </DivPortalTitle>

                  <DivPortalInfo>
                    <ImgLogin src={img4} alt="" />
                    <InfoLoginP>Expertos en salud corporal y ambiental
                      Una marca 100% Colombiana.
                    </InfoLoginP>
                  </DivPortalInfo>

                </DivContainer>

                <ImgPortal src={img3} alt="imagen de inyecciones"  rotate={360}/>

              </InfoPortal>

              <LoginInfo width='911px' height='840px'>
            
                <DivInfoLogin>

                  <TitleLogin>Login</TitleLogin>

                  <InputForm
                      className='loginuser'
                      type='text'
                      value={props.userLogged.user}
                      onChange={userChange}
                      placeholder='Usuario'
                      name= 'user'
                      autocomplete=''/>

                  <InputForm
                    className='loginpassword'
                    type="password"
                    value={props.userLogged.password}
                    onChange={userChange}
                    placeholder='Contraseña'
                    name= 'password'
                    autocomplete=''/>
                    
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
        </>
    )
}

export default FormLogIn;