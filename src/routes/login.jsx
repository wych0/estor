import LoginForm from '../components/LoginForm'
import Line from '../components/Line'
import BottomBtnContainer from '../components/BottomBtnContainer'

export default function Login() {
    return (
        <div id="loginPage" className="flex wrap centerX">
          <LoginForm></LoginForm>
          <Line></Line>
          <BottomBtnContainer text="Nie masz jeszcze konta?" btnText="Zarejestruj się" route="register"></BottomBtnContainer>
        </div>
    );
}
