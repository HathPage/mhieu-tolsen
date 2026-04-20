import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Giới thiệu', path: '/about' },
    { label: 'Sản phẩm', path: '/products' },
    { label: 'Tin tức', path: '/news' },
    { label: 'Liên hệ', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#231f20] via-[#1a1618] to-[#231f20] shadow-lg z-50 border-b-4 border-[#f04c39]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/logo tolsenn.png"
              alt="TOLSEN Logo"
              className="h-5 object-contain group-hover:opacity-80 transition-opacity"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-2 font-semibold transition-all relative group ${
                  isActive(item.path)
                    ? 'text-[#f04c39]'
                    : 'text-gray-300 hover:text-[#f04c39]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-[#f04c39] transition-transform ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-[#f04c39] hover:text-[#f04c39] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#231f20] border-t border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 font-semibold transition-colors rounded-lg ${
                  isActive(item.path)
                    ? 'bg-[#f04c39] text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-[#f04c39]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
