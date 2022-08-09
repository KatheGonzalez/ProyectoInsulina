import { Dispatch, FC } from 'react';
import { CreateOrder } from '../../../modelsclass/createOrder';
import { InputForm } from '../../atom/input/inputForm';
import { LabelForm } from '../../atom/label/labelForm';
import { TitleForm } from '../../atom/title/titleForm';


// const FormNewOrder: FC<{newOrder:CreateOrder, setNewOrder:(value:CreateOrder) => void}> = (props) => {  --1 FORMA 
const FormNewOrder: FC<{newOrder:CreateOrder, setNewOrder:Dispatch<CreateOrder>}> = (props) => {
    
    return(
        <form>
            <TitleForm>Please Fill out the new Order form</TitleForm>
            <LabelForm>DNI:  </LabelForm>
            <InputForm
            type='text' value={props.newOrder.dni} onChange={event => props.setNewOrder({...props.newOrder, dni:event.target.value})} placeholder='Usuario'
            name="dni"/>
            <LabelForm>Cell-phone:  </LabelForm>
            <InputForm
            type='number' value={props.newOrder.cellphone} onChange={event => props.setNewOrder({...props.newOrder, cellphone:event.target.value})} placeholder='Cellphone'
            name="number"/>
            <LabelForm>Full Name:  </LabelForm>
            <InputForm
            type='text' value={props.newOrder.full_name} onChange={event => props.setNewOrder({...props.newOrder, full_name:event.target.value})} placeholder='Full Name'
            name="full_name"/>
            <LabelForm>Add your place</LabelForm>
            <InputForm
            type='text' value={props.newOrder.place} onChange={event => props.setNewOrder({...props.newOrder, place:event.target.value})} placeholder='Place'
            name="place"/>
            <LabelForm>Add Date_Requested</LabelForm>
            <InputForm
            type='text' value={props.newOrder.date_requested} onChange={event => props.setNewOrder({...props.newOrder, date_requested:event.target.value})} placeholder='Date_Requested'
            name="date_requested"/>
            <LabelForm>State</LabelForm>
            <InputForm
            type='text' value={props.newOrder.state} onChange={event => props.setNewOrder({...props.newOrder, state:event.target.value})} placeholder='State'
            name="state"/>
            <LabelForm>Insuline Count</LabelForm>
            <InputForm
            type='number' value={props.newOrder.count} onChange={event => props.setNewOrder({...props.newOrder, count:event.target.value})} placeholder='Count' 
            name="count"/>
            <LabelForm>Insuline Brand</LabelForm>
            <InputForm
            type='text' value={props.newOrder.brand} onChange={event => props.setNewOrder({...props.newOrder, brand:event.target.value})} placeholder='Brand'
            name="brand"/>
            
        </form>
    )
}
export default FormNewOrder