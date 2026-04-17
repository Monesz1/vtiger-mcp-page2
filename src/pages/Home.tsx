import { useEffect } from "react";
import { motion } from "motion/react";
import { 
  Bot, 
  Search, 
  Users, 
  CheckSquare, 
  ShieldCheck, 
  Server, 
  Key, 
  Lock,
  ArrowRight,
  Zap,
  HelpCircle,
  PlusCircle,
  RefreshCw
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LicenseForm from "../components/LicenseForm";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Megjelent a Vtiger Model Context Protocol
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
            Kezelje VtigerCRM rendszerét <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">mesterséges intelligenciával</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Csatlakoztassa Vtiger profilját az MCP segítségével és automatizáljon minden feladatot természetes, emberi nyelven írt utasításokkal.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2">
              Ingyenes próbaperiódus
              <ArrowRight size={20} />
            </Link>
            <Link to="/setup" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2">
              Beállítási útmutató
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hogyan működik (Marketing) section */}
      <section id="how-it-works" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Minden CRM-művelet, egyetlen mondattal</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Felejtse el a bonyolult menüket. Kérje meg az AI-t a VtigerCRM kezelésére, és az azonnal elvégzi Ön helyett a feladatokat.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { icon: PlusCircle, title: "Új rekordok gyors létrehozása", desc: "Bővítse adatbázisát erőfeszítés nélkül. Akár új szervezetet, kapcsolatot vagy üzleti lehetőséget szeretne rögzíteni, elég egyetlen természetes mondatban megfogalmazni, és az asszisztens azonnal létrehozza a pontos rekordot a rendszerben." },
              { icon: Users, title: "Leadek rögzítése másodpercek alatt", desc: "Felejtse el az unalmas adatbevitelt a bemutatók vagy tárgyalások után. Diktálja le egyszerűen az új érdeklődők adatait az AI-nak, amely feldolgozza és másodpercek alatt hiánytalanul elmenti őket." },
              { icon: RefreshCw, title: "Adatok és profilok azonnali frissítése", desc: "Változott egy ügyfél telefonszáma, vagy előbbre lépett egy deal a sales pipe-ban? Csak írja be a módosítást a chatbe. Az asszisztens azonnal megtalálja a megfelelő adatlapot és elvégzi rajta a kért frissítéseket." },
              { icon: Zap, title: "Folyamatok intelligens automatizálása", desc: "Kérjen le gyors napi jelentéseket, keressen rá korábbi interakciókra, vagy listáztassa ki a lejáró feladatait. Az integráció elvégzi az időrabló kereséseket, így Ön csak az döntésekkel foglalkozhat." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-blue-600">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Az Ön adatai biztonságban vannak</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nagyvállalati szintű biztonság az első naptól kezdve. Az MCP szerver csak hídként szolgál, sosem adattárolóként.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Lock, title: "Titkosított kommunikáció", desc: "Minden kapcsolat a legszigorúbb TLS 1.3 protokollon keresztül zajlik." },
                  { icon: ShieldCheck, title: "Zero Data Storage", desc: "Egyetlen CRM adatot sem mentünk le az Ön rendszeréből." },
                  { icon: Key, title: "Licensz-alapú hozzáférés", desc: "Tökéletesen leköveti a meglévő VtigerCRM felhasználói jogosultságokat." },
                  { icon: Server, title: "EU Szerverek", desc: "A híd infrastruktúrája 100%-ban megfelel a GDPR szigorú követelményeinek." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full justify-center items-center flex bg-blue-100 text-blue-600">
                        <item.icon size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Folyamatos támogatás</h3>
              <ul className="space-y-6">
                {[
                  { title: "Ingyenes bemutató", desc: "Személyes demonstráció során bemutatjuk a Vtiger MCP működését." },
                  { title: "Garantált üzemidő", desc: "99.9% rendelkezésre állás az üzleti folyamatosság biztosítására." },
                  { title: "Szakértői ügyfélszolgálat", desc: "Közvetlen kapcsolat mérnökeinkkel." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="bg-green-100 text-green-600 p-2 rounded-lg shrink-0">
                      <CheckSquare size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Gyakran Ismételt Kérdések</h2>
            <p className="text-lg text-slate-600">Minden fontos információ a Vtiger MCP integrációval kapcsolatban.</p>
          </motion.div>

          <motion.div 
             variants={staggerContainer}
             initial="initial"
             whileInView="whileInView"
             className="space-y-6"
          >
            {[
              { q: "Milyen adatokat kell megadni a beállításhoz?", a: "Csak a vtigerCRM rendszere pontos webcímére (Instance URL), a saját azonosítójára (Username) és a profilbeállítások között megtalálható biztonsági kulcsra (Access Key) van szükségünk. Kódokat vagy bonyolult kulcsfájlokat nem kérünk." },
              { q: "Biztonságos-e a kapcsolat a Vtiger és az AI között?", a: "Igen, maximálisan. A csatlakozáshoz használt MCP protokoll TLS 1.3 titkosítással működik. Cégünk a szervereken nem tárol le, és nem is lát semmilyen CRM adatot vagy ügyfélinformációt – mi csak a biztonságos átjárót biztosítjuk." },
              { q: "Mire képes az MCP a vtigerCRM-mel?", a: "Az integrációval teljes szabadságot kap: lekérdezhet ügyfeleket, új leadeket rögzíthet, módosíthatja a meglévő rekordokat, vagy frissítheti a teendőit – pontosan úgy, mintha egy emberi asszisztensnek adna ki utasításokat." },
              { q: "Milyen jogosultságok szükségesek a használathoz?", a: "A rendszer tökéletesen leköveti a meglévő vállalati struktúrát. Az integráció kizárólag azokat a modulokat és adatokat éri el a vtigerCRM-ben, amelyekhez az Ön felhasználói profilja (amelynek az Access Key-ét használja) egyébként is hozzáfér." },
              { q: "Szükség van fejlesztőre az elindításhoz?", a: "Egyáltalán nincs! A folyamat 100%-ban felhasználóbarát. Mindössze egy kapott hivatkozást kell bemásolnia, majd megadnia a Vtiger felületén is használt bejelentkezési paramétereket." }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <h4 className="flex items-center gap-3 text-lg font-bold text-slate-900 mb-3">
                  <HelpCircle className="text-blue-600 shrink-0" size={20} />
                  {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="demo" className="py-24 bg-slate-900 border-t border-slate-800 relative z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Próbálja ki ingyenesen</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Tapasztalja meg a cégvezetés új dimenzióját. Automatizálja a VtigerCRM folyamatokat percek alatt.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp}>
            <LicenseForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
