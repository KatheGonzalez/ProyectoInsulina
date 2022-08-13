import { FC } from "react";
import { ButtonForm } from "../../atom/button/buttonForm";
import { InputForm } from "../../atom/input/inputForm";
import { LabelForm } from "../../atom/label/labelForm";
import { FormUpdateOrder } from "./formUpdateOrderData"

const FormUpdateOrders: FC<FormUpdateOrder> = (props) => {
    return(
        <div>
            <LabelForm>ID: </LabelForm>
            <InputForm type='text' value={props.orderUpdated.id} onChange={event => props.setOrderUpdated({...props.orderUpdated, id:event.target.value})} placeholder='ID'
            name="id"></InputForm>
            <LabelForm>Count: </LabelForm>
            <InputForm type='number' value={props.orderUpdated.count} onChange={event => props.setOrderUpdated({...props.orderUpdated, count:event.target.value})} placeholder='Count'
            name="count"></InputForm>
            <LabelForm>State: </LabelForm>
            <InputForm type="text" value={props.orderUpdated.state} onChange={event => props.setOrderUpdated({...props.orderUpdated, state:event.target.value})} placeholder='State'
            name="state"></InputForm>
            <LabelForm>Brand: </LabelForm>
            <InputForm type="text" value={props.orderUpdated.brand} onChange={event => props.setOrderUpdated({...props.orderUpdated, brand:event.target.value})} placeholder='Brand'
            name="brand"></InputForm>
            <LabelForm>Date Collected: </LabelForm>
            <InputForm type="text" value={props.orderUpdated.date_collected} onChange={event => props.setOrderUpdated({...props.orderUpdated, date_collected:event.target.value})} placeholder='Date-Collected'
            name="date_collected"></InputForm>
            <ButtonForm onClick={props.updateOrderButton}>Update Order</ButtonForm>
        </div>
    )
}
export default FormUpdateOrders;

