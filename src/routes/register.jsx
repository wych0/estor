import Line from '../components/SignInUpPageComponents/Line'
import BottomBtnContainer from '../components/SignInUpPageComponents/BottomBtnContainer'
import RegisterForm from '../components/SignInUpPageComponents/RegisterForm'

export default function Register() {
    return (
        <div id="registerPage" className="flex wrap centerX">
            <RegisterForm></RegisterForm>
            <Line></Line>
            <BottomBtnContainer text="Masz już konto?" btnText="Zaloguj się" route="login"></BottomBtnContainer>
        </div>
    );
}