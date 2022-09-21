import { FC, useState } from 'react';
import { ButtonForm } from '../../atom/button/buttonForm';
import { InputForm } from '../../atom/input/inputForm';
import {
    BoxPermissions,
    ImgBack,
    ImgLogoNav,
    Linksnavbar,
    MenuBar,
    NavBarPermissions
} from '../../atom/stylesPermissionsPage/stylesPermissions';
import { FormNewOrderData } from './formNewOrderData';
import {
    Botonguardar,
    ColumnCreativeForm,
    ColumnInformative,
    CreativeFormContainer,
    ImgToDoCreationPage,
    InfoContainer,
    InfoInsulines,
    InfoTag,
    Leash,
    ParrafoInformativo,
    Separacion,
    Separaciondos,
    TitleInformation,
    TituloCreation,
    Triangle
} from '../../atom/stylesCreationOrdersPage/stylesCreationOrders';
// @ts-ignore
import img4 from '../../../assets/images/brand/brand-secondary-color.svg';
// @ts-ignore
import img7 from '../../../assets/images/ilustrations/insuline-group.svg';
// @ts-ignore
import img6 from '../../../assets/images/ilustrations/background-shape-3.svg';
// @ts-ignore
import img8 from '../../../assets/images/icons/inyection.svg';
import { LabelForm } from '../../atom/label/labelForm';
import { ActiveBrands, BRAND } from '../../../const/brand';
import { CreateOrder } from '../../../modelsclass/createOrder';


const FormNewOrder: FC<FormNewOrderData> = (props) => {

    const [orderCreated, setOrderCreated] = useState(new CreateOrder('', '', 0, '', '', '', 'CREATED', 0, '', ''))
    const orderCreatedChangeValue = (event: any) => setOrderCreated({
        ...orderCreated,
        [event.target.name]: event.target.value
    });

    return (

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
                    <ParrafoInformativo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores non
                        inventore est eligendi laborum vero, mollitia dolorem aperiam at hic itaque debitis amet sequi
                        nam et tempore molestias officiis!<br/><br/>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor dignissimos aliquid
                        commodi nesciunt
                    </ParrafoInformativo>
                </InfoContainer>
            </ColumnInformative>

            <ColumnCreativeForm>
                <CreativeFormContainer>
                    <Triangle/>
                    <Leash>
                        <InfoTag>Ref 3345</InfoTag>
                    </Leash>
                    <TituloCreation>Informacion de Usuario</TituloCreation>
                    <InputForm
                        type='text' value={props.newOrder.full_name}
                        onChange={event => props.setNewOrder({...props.newOrder, full_name: event.target.value})}
                        placeholder='Nombre Completo'
                        name="full_name"
                        width='700px'
                        height='50px'
                        className='creationform'
                    />
                    <InputForm
                        type='text' value={props.newOrder.dni}
                        onChange={event => props.setNewOrder({...props.newOrder, dni: event.target.value})}
                        placeholder='Dni'
                        name="dni"
                        width='370px'
                        height='50px'
                        className='creationform'/>
                    <InputForm
                        type='number' value={props.newOrder.cellphone}
                        onChange={event => props.setNewOrder({...props.newOrder, cellphone: event.target.value})}
                        placeholder='Celular'
                        name="cellphone"
                        width='268px'
                        height='50px'
                        className='creationform'/>
                    <InputForm
                        type='text' value={props.newOrder.place}
                        onChange={event => props.setNewOrder({...props.newOrder, place: event.target.value})}
                        placeholder='Direccion'
                        name="place"
                        width='700px'
                        height='50px'
                        className='creationform'/>
                    <TituloCreation>Informacion de Tubos de Insulina</TituloCreation>
                    <InfoInsulines>
                        <Separacion>
                            <LabelForm className='titulotag'>Marca de la Insulina</LabelForm>
                            <select name='brand' onChange={orderCreatedChangeValue} value={orderCreated.brand}>
                                {Object.keys(BRAND).map((brand) =>
                                    <option value={brand}>
                                        {BRAND[brand as ActiveBrands].name}
                                    </option>
                                )}
                            </select>
                        </Separacion>
                        <Separaciondos>
                            <LabelForm className='titulotag'>Cantidad de Tubos</LabelForm>
                            <img src={img8} alt='Inyection purple'></img>
                            <InputForm
                                type='number' value={props.newOrder.count}
                                onChange={event => props.setNewOrder({...props.newOrder, count: event.target.value})}
                                placeholder='Count'
                                name="count" width='83px' height='50px'/>
                        </Separaciondos>
                    </InfoInsulines>
                    <Botonguardar>
                        <ButtonForm
                            className='botoninsulines'
                            onClick={props.orderCreated}>
                            GUARDAR
                        </ButtonForm>
                    </Botonguardar>
                </CreativeFormContainer>
            </ColumnCreativeForm>

            <ImgToDoCreationPage className='inyecciones' src={img7} alt='insuline-group'/>
            <ImgBack src={img6} alt='ilustration'/>

        </BoxPermissions>

    )
}

export default FormNewOrder;
