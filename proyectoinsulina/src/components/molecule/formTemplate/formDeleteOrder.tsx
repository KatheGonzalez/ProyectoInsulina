import { Dispatch, FC } from "react";
import { DeleteOrder } from "../../../modelsclass/deleteTemplate";
import { InputForm } from "../../atom/input/inputForm";
import { LabelForm } from "../../atom/label/labelForm";

const DeleteOrderForm: FC<{deleteOrder:DeleteOrder, setDeleteOrder:Dispatch<DeleteOrder>}> = (props) => {
    return (
        <>
        <LabelForm>Insert the ID you want to delete</LabelForm>
        <InputForm
            type='text' value={props.deleteOrder.id} onChange={event => props.setDeleteOrder({...props.deleteOrder, id:event.target.value})} placeholder='Id'/>
        <LabelForm>State</LabelForm>
        <InputForm
            type='text' value={props.deleteOrder.state} onChange={event => props.setDeleteOrder({...props.deleteOrder, state:event.target.value})} placeholder='Delete'/>
        </>
    )
}

export default DeleteOrderForm