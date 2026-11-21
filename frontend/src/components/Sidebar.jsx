import { NavLink } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Lançamentos", path: "/lancamento", icon: "💸" },
    { name: "Cartões", path: "/cartoes", icon: "💳" },
    { name: "Relatórios", path: "/relatorios", icon: "📈" },
  ];

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <aside
      className={`fixed inset-x-0 bottom-0 z-50 flex max-h-[75vh] w-full flex-col rounded-t-2xl border-t border-borda bg-fundo transition-all duration-300 ease-out md:sticky md:top-0 md:h-screen md:max-h-none md:shrink-0 md:rounded-none md:border-r md:border-t-0 ${
        isOpen
          ? "translate-y-0 md:w-64"
          : "translate-y-full md:w-20 md:translate-y-0"
      }`}
    >
      {/* Alça visual de arraste no topo do bottom sheet (só no mobile) */}
      <div className="flex justify-center pt-3 md:hidden">
        <span className="h-1.5 w-12 rounded-full bg-slate-700" />
      </div>

      {/* Cabeçalho */}
      <div className="flex h-16 items-center justify-between border-b border-borda px-2">
        <span
          className={`overflow-hidden whitespace-nowrap font-bold text-titulo transition-all duration-200 ${
            isOpen ? "w-auto text-xl opacity-100" : "md:w-0 md:opacity-0"
          }`}
        >
          FinControl
        </span>

        {/* Botão de fechar no mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar menu"
          className="rounded-lg bg-slate-800 px-2.5 py-1.5 text-sm text-slate-300 transition hover:bg-slate-700 hover:text-white md:hidden"
        >
          ✕
        </button>

        {/* Botão de recolher/expandir no desktop */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          title={isOpen ? "Recolher menu" : "Expandir menu"}
          aria-label={isOpen ? "Recolher menu" : "Expandir menu"}
          className="hidden h-8 w-fit px-2 items-center justify-center rounded-lg bg-fundo1 text-xs text-texto transition hover:bg-fundo2 md:flex"
        >
          {isOpen ? (
            <ArrowLeft size={16} />
          ) : (
            <>
              <a href="" className="text-texto">
                Menu
              </a>
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>

      {/* Links de navegação */}
      <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto p-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={handleLinkClick}
            title={!isOpen ? item.name : undefined}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-verde-600 text-white"
                  : "text-texto hover:bg-verde-800 hover:text-white"
              } ${!isOpen ? "md:justify-center md:px-0" : ""}`
            }
          >
            <span className="shrink-0 text-base">{item.icon}</span>
            <span
              className={`whitespace-nowrap transition-opacity duration-200 ${
                isOpen ? "opacity-100" : "md:hidden md:opacity-0"
              }`}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
