import { Dispatch, FC } from 'react';
import { CreateOrder } from '../../../modelsclass/createOrder';
import { InputForm } from "../../atom/input/inputForm";
import { LabelForm } from "../../atom/label/labelForm";

const DeleteOrderForm: FC<{deleteOrder:CreateOrder, setDeleteOrder:Dispatch<CreateOrder>}> = (props) => {
    return (
        <form>
        <LabelForm>Insert the ID you want to delete</LabelForm>
        <InputForm
            type='text' value={props.deleteOrder.id} onChange={event => props.setDeleteOrder({...props.deleteOrder, id:event.target.value})} placeholder='Id'
            name="id"/>
        <LabelForm>State</LabelForm>
        <InputForm
            type='text' value={props.deleteOrder.state} onChange={event => props.setDeleteOrder({...props.deleteOrder, state:event.target.value})} placeholder='Delete'
            name="state"/>
        </form>
    )
}

export default DeleteOrderForm