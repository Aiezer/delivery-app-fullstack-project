// import { useHistory } from 'react-router-dom';

// const history = useHistory();

// export async function verify(user) {
//   const { token } = user;
//   const { data } = await axios({
//     method: 'POST',
//     url: 'http://localhost:3001/login',
//     headers,
//     data: {
//       token,
//     },
//   });
//   return data;
// }

// export default async function Redirect() {
//   const users = localStorage.getItem(user).JSON();
//   if (!users) {
//     history.push('/login');
//   }
//   const result = await verify(users);
//   if (!result) {
//     history.push('/login');
//   }
//   history.push(`/${users.role}/products`);
// }
