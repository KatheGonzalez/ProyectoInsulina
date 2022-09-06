
import { BackgroundSuccess, ConfirFail, IconConfirmation, InfoConfir } from './userExperienceStyle';
import img2 from '../../../assets/images/icons/fail.svg';

export const Confirmation = () => {
    return (
        <BackgroundSuccess>
            <ConfirFail>
            <IconConfirmation src={img2} alt='Fail Icon icon'/>
            <InfoConfir>Hubo un problema al modificar la solicitud del usuario</InfoConfir>
            </ConfirFail>
        </BackgroundSuccess>
    )
};


