const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

function Navbar({ activeSection }) {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#home">
          <span className="navbar__brand-mark" />
          S Varsha
        </a>

        <nav className="navbar__nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={activeSection === link.id ? 'is-active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
