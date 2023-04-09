import LoginForm from '../components/LoginForm'
import Line from '../components/Line'
import BottomBtn from '../components/BottomBtn'

export default function Login() {
    return (
        <div id="loginPage" className="flex wrap centerX">
          <LoginForm></LoginForm>
          <Line></Line>
          <BottomBtn text="Nie masz jeszcze konta?" btnText="Zarejestruj się" route="register"></BottomBtn>
        </div>
    );
}
