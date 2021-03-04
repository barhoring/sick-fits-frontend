import Link from 'next/link';
import SingOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  console.log(user);
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SingOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
