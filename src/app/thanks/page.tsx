"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, MoveLeft, Home, Share2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto w-full relative z-10"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="w-8 md:w-12 h-[1px] bg-indigo-500" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-indigo-500 flex items-center gap-2">
              Payment Received <Sparkles className="w-3 h-3" />
            </span>
          </div>

          <div className="relative">
            <h1 className="text-6xl md:text-9xl font-black leading-[0.8] tracking-tighter mb-12 uppercase italic py-4 break-words">
              <span className="block text-white">Дякую за</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 block">
                Підтримку
              </span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
            <p className="text-gray-500 text-lg md:text-2xl max-w-xl font-light leading-snug">
              Ваш внесок допомагає проєкту <br />
              <span className="text-white italic font-normal">
                рости та ставати кращим
              </span>
              . Це паливо для нових ідей.
            </p>
            
            <Link 
              href="/" 
              className="group flex items-center gap-4 text-indigo-400 hover:text-white transition-colors font-ukraine uppercase tracking-tighter text-sm md:text-lg"
            >
              <MoveLeft className="group-hover:-translate-x-2 transition-transform" />
              Повернутись на головну
            </Link>
          </div>
        </motion.div>

        {/* Декоративний елемент як у портфоліо */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />
      </section>

      {/* WHITE SECTION */}
      <section className="bg-white text-black py-24 md:py-40 rounded-t-[3rem] md:rounded-t-[6rem] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-none">
                Що далі?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase">Вдячність</h3>
                    <p className="text-gray-500 font-ukraine">Ви стали частиною спільноти, яка цінує якісний код та креативні рішення.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 text-black rounded-2xl flex items-center justify-center shrink-0">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase">Поділіться</h3>
                    <p className="text-gray-500 font-ukraine">Розкажіть про цей проєкт друзям. Це допомагає не менше за донат.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f7] p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-black/5 flex flex-col justify-center items-center text-center">
               <div className="mb-6 inline-block p-4 bg-white rounded-3xl shadow-sm">
                  <Home className="w-12 h-12 text-indigo-600" />
               </div>
               <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
                 Готові побачити більше?
               </h3>
               <Link 
                href="/" 
                className="inline-block px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
               >
                 До проєктів
               </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER - ідентичний основному */}
      <footer className="bg-white text-black py-20 border-t border-black/5 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-black text-2xl tracking-tighter uppercase italic">
            Kyiv / 2026
          </div>
          <div className="flex gap-8 font-bold uppercase tracking-tighter text-sm">
            <Link href="#" className="hover:line-through">GitHub</Link>
            <Link href="#" className="hover:line-through">Telegram</Link>
            <Link href="#" className="hover:line-through">LinkedIn</Link>
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] opacity-30">
            MADE WITH PASSION
          </div>
        </div>
      </footer>
    </main>
  );
}