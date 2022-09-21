import { useEffect, useState } from "react";
import { CreateOrder } from "../modelsclass/createOrder";
import { DeleteOrders, GetOrders, UpdateOrders } from "../services/insulineServices";
import DecodeToken from "../services/decodeToken";
import { ButtonForm } from "../components/atom/button/buttonForm";
import Permissions from '../modelsclass/permissions';
import { InputForm } from "../components/atom/input/inputForm";
// Evitar que el codigo se extienda tanto hacia la derecha cuando se esta desarrollando
import {
    BoxPermissions,
    ImgBack,
    ImgLogoNav,
    Linksnavbar,
    MenuBar,
    NavBarPermissions
} from "../components/atom/stylesPermissionsPage/stylesPermissions";
import {
    ColumnCreativeForm,
    ColumnInformative,
    CreativeFormContainer,
    ImgToDoCreationPage,
    InfoContainer,
    ParrafoInformativo,
    TitleInformation
} from "../components/atom/stylesCreationOrdersPage/stylesCreationOrders";
// @ts-ignore: Puedes usar esto (Mala practica, cuando no sirven los imports)
import img from '../assets/images/ilustrations/map-route.svg';
// @ts-ignore
import img4 from '../assets/images/brand/brand-secondary-color.svg';
// @ts-ignore
import img7 from '../assets/images/ilustrations/background-shape-3.svg';
import { TituloUser } from '../components/atom/ordersStyle/ordersStyle';
import { ActiveStates, STATES } from "../const/states";
import { StatusComponent } from "../components/atom/validationcreateorder/validationCreateOrder";


const OrdersPage = () => {

    const [orders, setOrders] = useState<CreateOrder[]>([]);  //aqui quiero agarrar todas las ordenes completas
    const [indexOrder, setIndexOrder] = useState(-1);
    const [loading, setLoading] = useState(true);
    const [orderSelected, setOrderSelected] = useState(new CreateOrder('', '', 0, '', '', '', 'CREATED', 0, '', ''))

    const {
        localValue,
        permissionsValue
    } = DecodeToken();


    useEffect(() => {
        (async () => {
            const orderList: CreateOrder[] = await GetOrders(localValue!)
            setOrders(orderList.filter(order => order.state !== 'DELETED')) // aqui supuestamente tengo todas las ordenes PERO DELETED NO
        })();
    }, [loading]);


    const deleteOrderForm = async (id: string) => {
        // Cambiar este tipo de nombres, al momento de subir codigo asegurarse de no tener esto
        // Puntos y comass
        const algo: { id: string, state: ActiveStates } = {
            id: id,
            state: 'DELETED'
        }
        await DeleteOrders(localValue!, algo);
        setLoading(!loading);
    };

    // Ojo con los nombres, "Selectedd"
    const orderSelectedd = (index: number, order: CreateOrder) => {
        // Puntos y comass
        setIndexOrder(index);
        setOrderSelected(order);
        setLoading(!loading);
    };

    const updateOrderForm = async (orderUpdated: CreateOrder) => await UpdateOrders(localValue!, orderUpdated);

    // No Any (Este lo dejamos pasar porque el tipado estaba complejo pero evitar)
    const orderSelectedChangeValue = (event: any) => setOrderSelected({
        ...orderSelected,
        [event.target.name]: event.target.value
    });

    return (
        <BoxPermissions className='OrderContainer'>
            <NavBarPermissions>
                {/*Alt no deberia ser vacio*/}
                <ImgLogoNav src={img4} alt=''></ImgLogoNav>
                <MenuBar>
                    <Linksnavbar className='HomeColor'>Home</Linksnavbar>
                    <Linksnavbar className='GreyColor'>Settings</Linksnavbar>
                    <Linksnavbar className='GreyColor'>About</Linksnavbar>
                    <Linksnavbar className='GreyColor'>Help</Linksnavbar>
                </MenuBar>
            </NavBarPermissions>

            <ColumnInformative className="InformativeGetOrder">
                <InfoContainer className="InfoGetOrder">
                    {/*Tildess, para el usuario final estos errores q cometemos al escribirnos por whasapo no deben llegar a los usuarios*/}
                    <TitleInformation>Gestion de Entregas</TitleInformation>
                    <ParrafoInformativo>
                        Recuerda que la fecha de obtencion sera tenida en cuenta
                        solo cuando el usuario actualice el estado a "Obtenida"
                    </ParrafoInformativo>
                </InfoContainer>
            </ColumnInformative>

            <ColumnCreativeForm className="OrdersContainer">
                <CreativeFormContainer className="GetOrderContainer">
                    <table>
                        <thead>
                        <tr>
                            <TituloUser>Usuario</TituloUser>
                            <TituloUser>Celular</TituloUser>
                            <TituloUser>Dirección</TituloUser>
                            <TituloUser>Cantidad</TituloUser>
                            <TituloUser>Marca</TituloUser>
                            <TituloUser>Estado</TituloUser>
                        </tr>
                        </thead>
                        <tbody>
                        {orders && orders.map((order, index) => indexOrder !== index ?
                            <tr key={index}>

                                {/*Error de HTML, organizarlo bien identado para entender como se comportara*/}
                                <TituloUser className="OrdersForm">{order.dni}</TituloUser>
                                <TituloUser className="UserName">{order.full_name}</TituloUser>

                                <TituloUser className="OrdersForm">{order.cellphone}</TituloUser>
                                <TituloUser className="OrdersForm">{order.place}</TituloUser>
                                <TituloUser className="OrdersForm count">{order.count}</TituloUser>
                                <TituloUser className="OrdersForm brand">{order.brand}</TituloUser>
                                <TituloUser className="OrdersForm">
                                    <StatusComponent background={STATES[order.state!].background}>
                                        {STATES[order.state!].name}
                                    </StatusComponent>
                                </TituloUser>
                                <td>
                                    {(permissionsValue.includes(Permissions.read) && permissionsValue.includes(Permissions.delete)) &&
                                        //  Nombre "Boton" deberia estar en inglés
                                        // Identar mejor el codigo
                                      <ButtonForm className='botonDelete' onClick={() => deleteOrderForm(order.id!)}>
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                      </ButtonForm>
                                    }
                                </td>
                                <td>
                                    {(permissionsValue.includes(Permissions.read) && permissionsValue.includes(Permissions.update)) &&
                                      <ButtonForm className='botonEditar' onClick={() => orderSelectedd(index, order)}>
                                        <span className="material-symbols-outlined">
                                            edit
                                        </span>
                                      </ButtonForm>
                                    }
                                </td>
                            </tr>
                            :
                            <tr key={index}>
                                <td>
                                    <td>{order.dni}</td>
                                    <br/>
                                    <td>{order.full_name}</td>
                                </td>
                                <td>{order.cellphone}</td>
                                <td>{order.place}</td>
                                <td>
                                    <InputForm className='editionForm' width="78px" height="30px" type='number'
                                               value={orderSelected.count} onChange={orderSelectedChangeValue}
                                               placeholder='Count' name="count"/>
                                </td>
                                <td>
                                    <InputForm className='editionForm' width="108px" height='30px' type='text'
                                               value={orderSelected.brand} onChange={orderSelectedChangeValue}
                                               placeholder='Brand' name="brand"/>
                                </td>
                                <td>
                                    <select name='state' onChange={orderSelectedChangeValue}
                                            value={orderSelected.state}>
                                        {Object.keys(STATES).map((state) =>
                                            <option value={state}>
                                                {STATES[state as ActiveStates].name}
                                            </option>
                                        )}
                                    </select>
                                </td>

                                <td>
                                    {/*Para que esa className?, no se esta usando***/}
                                    <ButtonForm className='botonGuardar' onClick={() => updateOrderForm(orderSelected)}>
                                        <span className="material-symbols-outlined">
                                            save
                                        </span>
                                    </ButtonForm>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </CreativeFormContainer>
            </ColumnCreativeForm>
            <ImgToDoCreationPage className='maproute' src={img} alt='MapRoute'/>
            <ImgBack src={img7}/>
        </BoxPermissions>
    )
}

export default OrdersPage;
