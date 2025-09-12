import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Nav = () => {
  return (
    <nav className="bg-[#14001dff] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img src={Logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Links de navegação */}
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-yellow-300 font-bold transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/cadastro"
            className="hover:text-yellow-300 font-bold transition-colors cursor-pointer"
          >
            Cadastro
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;