import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonForm } from "../../atom/button/buttonForm";
import { InputForm } from "../../atom/input/inputForm";
import { LabelForm } from "../../atom/label/labelForm";
import { FormDeleteData } from "./formDeleteData";

const DeleteOrderForm: FC<FormDeleteData> = (props) => {
    return (
        <div>
        <LabelForm>Insert the ID you want to delete</LabelForm>
        <InputForm
            type='text' value={props.deleteOrder.id} onChange={event => props.setDeleteOrder({...props.deleteOrder, id:event.target.value})} placeholder='Id'
            name="id" required/>
        <LabelForm>State</LabelForm>
        <InputForm
            type='text' value={props.deleteOrder.state} onChange={event => props.setDeleteOrder({...props.deleteOrder, state:event.target.value})}
            name="state"/>
        <ButtonForm onClick={props.deleteOrderButton}> Eliminar Orden</ButtonForm>
        <ButtonForm onClick={()=>{}}><Link to="/Permissions">Go Back!</Link></ButtonForm>
        </div>
    )
}

export default DeleteOrderForm;