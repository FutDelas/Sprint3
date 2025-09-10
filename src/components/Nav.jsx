import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Nav = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <img src={Logo} alt="logo" className="h-10 w-auto" />
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/cadastro" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;