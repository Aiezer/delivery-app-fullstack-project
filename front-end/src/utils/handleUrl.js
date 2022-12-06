export default function handleUrl(role) {
  if (role === 'customer') {
    return '/customer/products';
  }
  if (role === 'seller') {
    return '/seller/orders';
  }
  if (role === 'administrator') {
    return '/admin/manage';
  }
}
