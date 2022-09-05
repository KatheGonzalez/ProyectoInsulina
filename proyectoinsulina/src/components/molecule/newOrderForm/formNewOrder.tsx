import { FC } from 'react';
import { ButtonForm } from '../../atom/button/buttonForm';
import { InputForm } from '../../atom/input/inputForm';
import { BoxPermissions, ImgBack, ImgLogoNav,  Linksnavbar, MenuBar, NavBarPermissions } from '../../atom/stylesPermissionsPage/stylesPermissions';
import { FormNewOrderData } from './formNewOrderData';
import img4 from '../../../assets/images/brand/brand-secondary-color.svg';
import { ColumnCreativeForm, ColumnInformative, CreativeFormContainer, ImgToDoCreationPage, InfoContainer, InfoInsulines, Leash, ParrafoInformativo, TitleInformation, TituloCreation } from '../../atom/stylesCreationOrdersPage/stylesCreationOrders';
import img7 from '../../../assets/images/ilustrations/insuline-group.svg';
import img6 from '../../../assets/images/ilustrations/background-shape-3.svg';
import { LabelForm } from '../../atom/label/labelForm';

const FormNewOrder: FC<FormNewOrderData> = (props) => {

    return(

        <BoxPermissions className='InfoNewOrder'>

          <NavBarPermissions>
            <ImgLogoNav src={img4} alt=''></ImgLogoNav>
            <MenuBar>
              <Linksnavbar className='HomeColor'>Home</Linksnavbar>
              <Linksnavbar className='GreyColor'>Settings</Linksnavbar>
              <Linksnavbar className='GreyColor'>About</Linksnavbar>
              <Linksnavbar className='GreyColor'>Help</Linksnavbar>
            </MenuBar>
          </NavBarPermissions>
        
          <ColumnInformative>
            <InfoContainer>
                <TitleInformation>Solicitar recogida de tubos de insulina</TitleInformation>
                <ParrafoInformativo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores non inventore est eligendi laborum vero, mollitia dolorem aperiam at hic itaque debitis amet sequi nam et tempore molestias officiis!<br/><br/>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor dignissimos aliquid commodi nesciunt 
                </ParrafoInformativo>
            </InfoContainer>
          </ColumnInformative>

            <ColumnCreativeForm>
                <CreativeFormContainer>
                    
                    <TituloCreation>Informacion de Usuario
                        <Leash>Ref 3345</Leash>
                    </TituloCreation>

                    <InputForm
                    type='text' value={props.newOrder.full_name} onChange={event => props.setNewOrder({...props.newOrder, full_name:event.target.value})} placeholder='Nombre Completo'
                    name="full_name"
                    width='700px'
                    height='50px'
                    className='creationform'
                    />

                    <InputForm
                    type='text' value={props.newOrder.dni} onChange={event => props.setNewOrder({...props.newOrder, dni:event.target.value})} placeholder='Dni'
                    name="dni"
                    width='370px'
                    height='50px'
                    className='creationform'/>

                    <InputForm
                    type='text' value={props.newOrder.cellphone} onChange={event => props.setNewOrder({...props.newOrder, cellphone:event.target.value})} placeholder='Celular'
                    name="cellphone"
                    width='268px'
                    height='50px'
                    className='creationform'/>
                    
                    <InputForm
                    type='number' value={props.newOrder.place} onChange={event => props.setNewOrder({...props.newOrder, place:event.target.value})} placeholder='Direccion'
                    name="place"
                    width='700px'
                    height='50px'
                    className='creationform'/>

                    <TituloCreation>Informacion de Tubos de Insulina</TituloCreation>

                    <InfoInsulines>
                        
                        <div>
                            <LabelForm>Marca de la Insulina</LabelForm>
                            <InputForm
                            type='text' value={props.newOrder.brand} onChange={event => props.setNewOrder({...props.newOrder, brand:event.target.value})} placeholder='Brand'
                            name="brand"/>
                        </div>
                        <div>
                            <LabelForm>Cantidad de Tubos</LabelForm>
                            <InputForm
                                type='number' value={props.newOrder.count} onChange={event => props.setNewOrder({...props.newOrder, count:event.target.value})} placeholder='Count' 
                                name="count"/>
                        </div>
                        
                    </InfoInsulines>

                        <ButtonForm
                        className='botoninsulines'
                        onClick={props.orderCreated}
                        >GUARDAR</ButtonForm>
                    

                </CreativeFormContainer>
            </ColumnCreativeForm>

        <ImgToDoCreationPage className='inyecciones' src={img7} alt='insuline-group'/>
        <ImgBack src={img6} alt='ilustration'/>
        </BoxPermissions>
        
    )
}

export default FormNewOrder;