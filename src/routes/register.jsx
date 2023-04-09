import Line from '../components/Line'
import BottomBtn from '../components/BottomBtn'
import RegisterForm from '../components/RegisterForm'

export default function Register() {
    return (
        <div id="registerPage" className="flex wrap centerX">
            <RegisterForm></RegisterForm>
            <Line></Line>
            <BottomBtn text="Masz już konto?" btnText="Zaloguj się" route="login"></BottomBtn>
        </div>
    );
}