import { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Bot, ChevronRight } from "lucide-react";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // When the route changes (e.g. going to /setup), scroll back to top.
    // Hash-based scrolling is handled separately in Home.tsx
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Bot size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Vtiger<span className="text-blue-600">MCP</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link to="/#how-it-works" className="hover:text-blue-600 transition-colors">Hogyan működik</Link>
            <Link to="/setup" className="hover:text-blue-600 transition-colors">Beállítás</Link>
            <Link to="/#faq" className="hover:text-blue-600 transition-colors">GYIK</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/setup" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-1">
              Beállítás megkezdése
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Bot size={24} className="text-blue-500" />
              <span className="font-bold text-xl tracking-tight text-white">
                Vtiger<span className="text-blue-500">MCP</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Kezelje Vtiger CRM rendszerét mesterséges intelligenciával. 
              Biztonságos Model Context Protocol alapú integráció vállalatok részére.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Termék</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#how-it-works" className="hover:text-white transition-colors">Hogyan működik</Link></li>
              <li><Link to="/setup" className="hover:text-white transition-colors">Beállítási útmutató</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">GYIK</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Biztonság & Jogi infók</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Adatvédelmi nyilatkozat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Általános Szerződési Feltételek</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Titkosítási architektúra</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Vtiger MCP Integráció. Nem hivatalos Vtiger Systems termék.</p>
        </div>
      </footer>
    </div>
  );
}
