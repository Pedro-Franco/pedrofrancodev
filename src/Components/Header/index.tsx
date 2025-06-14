import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    {
      title: "About",
      link: "/pedrofrancodev/about"
    },
    {
      title: "Works",
      link: "/pedrofrancodev/works"
    },
    {
      title: "Contact",
      link: "/pedrofrancodev/contact"
    },
  ];

  return(
    <header className="text-white p-6 flex justify-between items-center relative z-50 md:container mx-auto">
      <p className="font-bold text-2xl">{`<PedroFranco />`}</p>

      {/* NAV Desktop - visível acima de md */}
      <nav className="hidden md:flex gap-10">
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.title} className="group relative">
              <NavLink
                to={item.link}
                className="inline-block transition-transform duration-200 group-hover:-translate-y-1"
              >
                {item.title}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão Hamburguer - visível abaixo de md */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col justify-between w-6 h-5 md:hidden z-50"
      >
        <span
          className={`h-1 bg-white transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-1 bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`h-1 bg-white transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Menu Mobile deslizante */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-slate-950 transition-transform duration-300 ease-in-out z-40 p-10 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-6 mt-20 text-lg">
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink to={item.link} onClick={() => setMenuOpen(false)}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}