import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Key, CheckCircle, X, Loader2 } from "lucide-react";

export default function LicenseForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    users: 1
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [licenseKey, setLicenseKey] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/generate-license", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setLicenseKey(data.licenseKey);
        setShowModal(true);
        // Reset form optionally, or keep it filled
      }
    } catch (error) {
      console.error("Failed to generate license", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Form Card */}
      <div className="relative bg-[#0f172a] rounded-xl shadow-2xl overflow-hidden pt-1 border border-slate-800">
        {/* Subtle gradient top border line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-amber-400 opacity-80" />
        
        <div className="p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-white mb-2">Ingyenes bemutató és teszt igénylése</h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Töltse ki az adatokat és azonnal megkapja a 14 napos próba licenckulcsot e-mailben.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-slate-300 mb-1.5">Cégnév</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Cég neve"
                className="w-full bg-[#0b1121] text-white border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-slate-300 mb-1.5">Kapcsolattartó neve</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="Teljes név"
                className="w-full bg-[#0b1121] text-white border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">Mobiltelefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+36 ..."
                className="w-full bg-[#0b1121] text-white border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@ceg.hu"
                className="w-full bg-[#0b1121] text-white border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="users" className="block text-sm font-medium text-slate-300 mb-1.5">Felhasználók száma</label>
              <input
                type="number"
                id="users"
                name="users"
                min="1"
                value={formData.users}
                onChange={handleChange}
                className="w-full bg-[#0b1121] text-white border border-slate-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 font-bold text-[15px] py-4 rounded-lg mt-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Kérjük várjon...
                </>
              ) : (
                "Próba licenc igénylése"
              )}
            </button>
            
            <p className="text-center text-slate-500 text-xs mt-4">
              14 napos ingyenes próba. Nincs elköteleződés.
            </p>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-slate-100 z-10 text-center"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Sikeres igénylés!</h3>
              <p className="text-slate-600 mb-8">
                A próba licenckulcsot elküldtük az Ön e-mail címére. Most azonnal használatba is veheti a Vtiger MCP-t az alábbi kulccsal:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 mb-6 group cursor-copy" onClick={() => {
                navigator.clipboard.writeText(licenseKey || "");
              }}>
                <div className="flex items-center gap-3">
                  <Key size={20} className="text-blue-600" />
                  <code className="text-slate-900 font-mono font-bold text-lg select-all">
                    {licenseKey}
                  </code>
                </div>
                <span className="text-xs text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Kattintson a másoláshoz
                </span>
              </div>
              
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Tovább a beállításhoz
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
