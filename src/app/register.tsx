import { RegisterView } from "../viewModels/Register/Register.view";
import { useRegisterViewModel } from "../viewModels/Register/useRegister.view.Model";

export default function Register() {
  const { errors, control, onSubmit, isPending } = useRegisterViewModel();
  return <RegisterView errors={errors} control={control} onSubmit={onSubmit} isPending={isPending} />;
}
