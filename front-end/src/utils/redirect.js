import { useHistory } from "react-router-dom";

const history = useHistory();

export default async function Redirect() {
  const user = localStorage.getItem(user).JSON();
  if (!user) {
    history.push("/login");
  }
  const result = await verify(user);
  if (!result) {
    history.push("/login");
  }
  history.push(`/${user.role}/products`);
}

export default async function verify(user) {
  const { token } = user;
  const { data } = await axios({
  method: 'POST',
  url: 'http://localhost:3001/login',
  headers,
  data: {
  token,
  },
  });
  return data;
} 