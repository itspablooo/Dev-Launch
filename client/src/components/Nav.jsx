import { Link } from 'react-router-dom';
import NavBar from './UI/Navbar';


export default function Nav() {
  return (
    <NavBar
      links = {[
      <Link key={1} className='nav-link text-light' to="/">
        Home </Link>,
      <Link key={2} className='nav-link text-light' to="/about">
        About </Link>,
      <Link key={3} className='nav-link text-light' to="/login">
        Login </Link>,
      <Link key={4} className='nav-link text-light' to="/project">project
      </Link>
      ]}
    />
  );
}