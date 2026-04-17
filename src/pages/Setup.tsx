import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Setup() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Beállítás 5 egyszerű lépésben
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kódolás és fejlesztői tudás nélkül, percek alatt összekapcsolhatja VtigerCRM rendszerét a kedvenc mesterséges intelligenciájával.
          </p>
        </motion.div>

        <div className="space-y-8">
          {[
            { 
              num: 1, 
              title: "MCP szerver URL másolása", 
              desc: "Első lépésként másolja ki a dedikált Vtiger MCP szerverhez tartozó hivatkozást (URL-t), amelyet a rendszerünk láthatóan biztosít az Ön számára. Ez lesz a biztonságos híd a két rendszer között." 
            },
            { 
              num: 2, 
              title: "Connector hozzáadása a Claude AI-ban", 
              desc: "Nyissa meg a Claude AI beállításait, majd keresse meg az új integrációk (Connectors) hozzáadására szolgáló menüpontot. Illessze be az előző lépésben kimásolt biztonságos URL-t." 
            },
            { 
              num: 3, 
              title: "Connect gombra kattintás", 
              desc: "Hagyja jóvá a kapcsolatot a \"Connect\" vagy \"Hozzáadás\" gombra kattintva. Ezzel el is indította az integrációs folyamatot a mesterséges intelligencia felületén." 
            },
            { 
              num: 4, 
              title: "Vtiger adatok megadása", 
              desc: "A felugró, biztonságos ablakban adja meg a vtigerCRM azonosítóit: a rendszer elérhetőségét (Instance URL), a regisztrált felhasználónevét (Username), valamint a profiljában található azonosító kulcsot (Access Key). Semmilyen vizuális vagy technikai formátumozásra nem lesz szüksége." 
            },
            { 
              num: 5, 
              title: "Kész! Kezdheted használni", 
              desc: "A sikeres hitelesítés után az asszisztens azonnal elkezdi olvasni a struktúrát és készen áll a munkára. Adja ki az első utasítást: „Listázd ki az utolsó 5 leademet a Vtiger-ből!”, és élvezze az automatizációt!" 
            }
          ].map((step, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 relative overflow-hidden group hover:border-blue-200 transition-colors"
             >
               <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-100 group-hover:bg-blue-600 transition-colors"></div>
               <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-extrabold text-2xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                 {step.num}
               </div>
               <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {step.desc}
                  </p>
               </div>
             </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-green-50 rounded-2xl p-8 border border-green-200 text-center"
          >
            <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-4">Sikeres telepítés után</h3>
            <p className="text-green-800 text-lg mb-8 max-w-xl mx-auto">Bármikor megkérdezheti az asszisztenstől, hogy milyen lehetőségei vannak, a rendszer pedig felsorolja az elérhető funkciókat.</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Vissza a főoldalra
              <ArrowRight size={20} />
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
