import React, { useState } from 'react';
import { Lock, Mail, ChevronRight, Fingerprint } from 'lucide-react';

export default function LoginPage({ onLogin }: any) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0f172a] font-sans p-6">
      {/* Sphères de lumière en arrière-plan pour le relief */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="relative w-full max-w-[420px]">
        {/* Carte Principale */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
          
          {/* Logo / Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-lg opacity-40"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl">
                <Fingerprint className="text-white" size={32} />
              </div>
            </div>
          </div>

          <h2 className="text-white text-3xl font-bold text-center mb-2">Authentification</h2>
          <p className="text-slate-400 text-center text-sm mb-10">Accédez à votre espace Génie Logiciel</p>

          <form className="space-y-4">
            <div className="space-y-1">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full bg-slate-800/50 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-500"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="relative group">
                <input 
                  type="password" 
                  placeholder="Mot de passe"
                  className="w-full bg-slate-800/50 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-500"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={20} />
              </div>
            </div>

            <div className="flex justify-end py-1">
              <button type="button" className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors">
                Identifiants oubliés ?
              </button>
            </div>

            <button 
              type="submit"
              className="w-full relative group mt-4"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-2xl blur group-hover:blur-md transition-all opacity-50"></div>
              <div className="relative bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all">
                Se connecter
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </form>

          {/* Séparateur */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-[1px] bg-slate-700"></div>
            <span className="px-4 text-slate-500 text-xs font-bold uppercase tracking-widest">OU</span>
            <div className="flex-1 h-[1px] bg-slate-700"></div>
          </div>

          <button className="w-full py-4 border border-slate-700 rounded-2xl text-slate-300 font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-3">
             <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
             Continuer avec Google
          </button>
        </div>

        {/* Badge de version en bas */}
        <p className="text-center mt-8 text-slate-500 text-xs font-mono uppercase tracking-[0.3em]">
          Core System v2.0.26
        </p>
      </div>
    </div>
  );
}