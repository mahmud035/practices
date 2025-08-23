const ValidPassword = () => <h2>Valid Password</h2>;
const InvalidPassword = () => <h2>Invalid Password</h2>;

export default function Password() {
  const isValid = false;

  return isValid ? <ValidPassword /> : <InvalidPassword />;
}
