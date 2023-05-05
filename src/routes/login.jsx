import LoginForm from '../components/SignInUpPageComponents/LoginForm'
import Line from '../components/SignInUpPageComponents/Line'
import BottomBtnContainer from '../components/SignInUpPageComponents/BottomBtnContainer'

export default function Login() {
    return (
        <div id="loginPage" className="flex wrap centerX">
          <LoginForm></LoginForm>
          <Line></Line>
          <BottomBtnContainer text="Nie masz jeszcze konta?" btnText="Zarejestruj się" route="register"></BottomBtnContainer>
        </div>
    );
}
