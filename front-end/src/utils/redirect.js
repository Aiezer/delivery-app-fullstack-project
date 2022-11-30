export async function verify(user) {
  const { token } = user;
  const { data } = await axios({
    method: 'POST',
    url: 'http://localhost:3001/validate',
    headers,
    data: {
      token,
    },
  });
  return data;
}

export async function Redirect() {
  // const data = localStorage.getItem(user).JSON();

  // const result = await verify(data);
  // if (!result) {
  //   return ('/login');
  // }
  // return (`/${data.role}/products`);
  return '/login';
}
