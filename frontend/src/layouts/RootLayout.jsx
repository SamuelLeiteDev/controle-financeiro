import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function RootLayout() {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 768);

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Botão flutuante na parte inferior direita no mobile */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
          className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-950/60 transition hover:bg-sky-500 active:scale-95 md:hidden"
        >
          <span>☰</span>
          <span>Menu</span>
        </button>
      )}

      {/* Overlay escuro no mobile quando a gaveta está aberta */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Coluna 1: Barra lateral (ou Bottom Sheet no mobile) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Coluna 2: Cabeçalho no topo + Conteúdo das páginas */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1 p-2 pb-24 md:pb-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
