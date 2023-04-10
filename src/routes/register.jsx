import Line from '../components/Line'
import BottomBtnContainer from '../components/BottomBtnContainer'
import RegisterForm from '../components/RegisterForm'

export default function Register() {
    return (
        <div id="registerPage" className="flex wrap centerX">
            <RegisterForm></RegisterForm>
            <Line></Line>
            <BottomBtnContainer text="Masz już konto?" btnText="Zaloguj się" route="login"></BottomBtnContainer>
        </div>
    );
}