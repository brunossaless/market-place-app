import { RegisterView } from "../viewModels/Register/Register.view";
import { useRegisterViewModel } from "../viewModels/Register/useRegister.view.Model";

export default function Register() {
  const { userDate, setUserDate } = useRegisterViewModel();
  return <RegisterView userDate={userDate} setUserDate={setUserDate} />;
}
