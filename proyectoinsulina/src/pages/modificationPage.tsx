import { Link } from 'react-router-dom';
import { CardForm } from '../components/atom/card/cardForm';
import Permissions  from '../modelsclass/permissions';
import decodeToken from '../services/decodeToken';
import img from '../assets/images/icons/medicine.svg';
import img2 from '../assets/images/icons/weather.svg';
import img3 from '../assets/images/icons/location.svg';
import { BoldTitle, BoxPermissions, Connection, ImgBack, ImgLogoNav, ImgToDo, InfoUserCard, InfoUserSection, LastConnection, Linksnavbar, MenuBar, NameUser, NavBarPermissions, PermissionsContainer, UserImageIcon } from '../components/atom/stylesPermissionsPage/stylesPermissions';
import img4 from '../assets/images/brand/brand-secondary-color.svg';
import img5 from '../assets/images/ilustrations/tasks-to-do.svg';
import img6 from '../assets/images/icons/user.svg';
import img7 from '../assets/images/ilustrations/background-shape-3.svg'

function PermissionsVerificationPage(){
    
    const{
        permissionsValue
    } = decodeToken();

    return (
   
        <BoxPermissions>

          <NavBarPermissions>
            <ImgLogoNav src={img4} alt=''></ImgLogoNav>
            <MenuBar>
              <Linksnavbar className='HomeColor'>Home</Linksnavbar>
              <Linksnavbar className='GreyColor'>Settings</Linksnavbar>
              <Linksnavbar className='GreyColor'>About</Linksnavbar>
              <Linksnavbar className='GreyColor'>Help</Linksnavbar>
            </MenuBar>
          </NavBarPermissions>

          <InfoUserSection>
            <InfoUserCard>
              <NameUser>Maria Camila 
                Balaguera Smith</NameUser>
              <UserImageIcon src={img6} alt="Logo de usuario morado" />
            </InfoUserCard>
            <Connection>
              <LastConnection>
                <BoldTitle>Ultima Conexion:</BoldTitle> 12/23/2022 <br/>
                <BoldTitle>Tipo de Usuario:</BoldTitle> Paciente
              </LastConnection>
            </Connection>
          </InfoUserSection>


          <PermissionsContainer>
            {permissionsValue.includes(Permissions.read) && <Link to="/getOrders">
              <CardForm 
                  title='Ver Solicitudes' 
                  text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                  img={img}
                  rotate={333}
                  bottom={'17px'}
                  right={'-27px'}
              /></Link>}
            {permissionsValue.includes(Permissions.delete) && <Link to="/getOrders">
              <CardForm 
                      title='Eliminar Solicitudes' 
                      text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                      img={img3}
                      rotate={7}
                      bottom= {'-6px'}
                      right={'-25px'}
                  />
              </Link>}
            {permissionsValue.includes(Permissions.create) && <Link to="/createOrder">
              <CardForm 
                      title='Crear Solicitudes' 
                      text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                      img={img3}
                      rotate={6}
                      bottom= {'-8px'}
                      right={'-25px'}
                  />
              </Link>}
            {permissionsValue.includes(Permissions.update) && <Link to="/getOrders">
              <CardForm 
                          title='Actualizar Solicitudes' 
                          text='Solicitar recogida de tubos de insulina para que uno de nuestros agentes se dirija a recogerlo'
                          img={img3}
                          rotate={6}
                          bottom= {'-8px'}
                          right={'-25px'}
                      />
              </Link>}

              <Link to="/">
              <CardForm 
                          title='Pagina Principal' 
                          text='Regresa a la pagina de inicio
                          cuida tu salud'
                          img={img2}
                          rotate={16}
                          bottom={'-7px'}
                          right={'-10px'}
                      />
              </Link>
              
          </PermissionsContainer>

          <ImgToDo src={img5} alt='Todo-Image'/>
          <ImgBack src={img7}/>
        </BoxPermissions>
    )
}

export default PermissionsVerificationPage;