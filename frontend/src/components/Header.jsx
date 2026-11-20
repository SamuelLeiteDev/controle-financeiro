import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.js";

export default function Header() {
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
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-slate-800 bg-slate-900/80 px-6 backdrop-blur-md">
      {/* Lado esquerdo: Logo no mobile ou título/contexto */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold text-sky-400 md:hidden">
          FinançasApp
        </span>
        <h1 className="hidden text-sm font-medium text-slate-400 md:block">
          Visão Geral
        </h1>
      </div>

      {/* Lado direito: Ações do usuário */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
            {user.nome.charAt(0)}
          </div>
          <span className="hidden text-sm font-medium text-slate-200 sm:block">
            {user.nome}
          </span>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
