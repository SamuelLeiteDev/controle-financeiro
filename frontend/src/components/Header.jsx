import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.js";
import { Moon, SunMoon, DoorOpen } from "lucide-react";
import { useTheme } from "../contexts/themeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/");
    }
  };
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-borda bg-fundo px-6 backdrop-blur-md">
      {/* Lado esquerdo: Logo no mobile ou título/contexto */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold text-titulo md:hidden">
          FinançasApp
        </span>
        <h1 className="hidden text-sm font-medium text-texto-suave md:block">
          Visão Geral
        </h1>
      </div>

      {/* Lado direito: Ações do usuário */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div>
            <button
              type="button"
              onClick={toggleTheme}
              title={
                theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
              }
              aria-label="Alternar tema"
              className="flex h-12 w-12 items-center justify-center rounded-lg text-slate-700 transition hover:bg-neutral-300 dark:text-slate-200 dark:hover:bg-neutral-900"
            >
              {theme === "dark" ? <SunMoon size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-texto">
            {user.nome.charAt(0)}
          </div>
          <span className="hidden text-sm font-medium text-texto sm:block">
            {user.nome}
          </span>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white flex gap-2"
        >
          <DoorOpen size={16} />
          Sair
        </button>
      </div>
    </header>
  );
}
