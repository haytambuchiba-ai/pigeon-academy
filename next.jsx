// 🚀🔥 FINAL EFFECTS + VIDEO INTEGRATION
// Ultra premium experience

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// =========================
// 🌙 DARK MODE
// =========================
export function DarkModeToggle(){
  const [dark,setDark]=useState(false);

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', dark);
  },[dark]);

  return (
    <button onClick={()=>setDark(!dark)} className="px-4 py-2 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
      {dark ? 'Light' : 'Dark'}
    </button>
  );
}

// =========================
// 🧩 GLASS CARD
// =========================
function GlassCard({children}:{children:any}){
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition">
      {children}
    </div>
  );
}

// =========================
// 📹 VIDEO SECTION
// =========================
export function VideoSection(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <iframe
        className="w-full h-64 rounded-xl"
        src="https://www.youtube.com/embed/zuq9d9qvQ4M"
        title="Pigeon Racing"
        allowFullScreen
      />
      <iframe
        className="w-full h-64 rounded-xl"
        src="https://www.youtube.com/embed/6f6z9s7x5yE"
        title="Homing Pigeons Training"
        allowFullScreen
      />
    </div>
  );
}

// =========================
// 🧠 AI
// =========================
export function AITutor(){
  const [q,setQ]=useState('');
  const [a,setA]=useState('');

  async function ask(){
    const res = await fetch('/api/ai',{method:'POST',body:JSON.stringify({question:q})});
    const data = await res.json();
    setA(data.answer);
  }

  return (
    <GlassCard>
      <h2 className="text-xl font-bold">AI Professor</h2>
      <input className="border p-2 w-full mt-2 rounded" value={q} onChange={e=>setQ(e.target.value)} />
      <button onClick={ask} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Ask</button>
      {a && <p className="mt-3">{a}</p>}
    </GlassCard>
  );
}

// =========================
// 🐦 PIGEONS
// =========================
export const topPigeons = [
  {
    name: 'Armando',
    image: 'https://images.unsplash.com/photo-1601758064226-1f0c1a0b5b2f?w=800'
  },
  {
    name: 'Bolt',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800'
  },
  {
    name: 'New Kim',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=800'
  }
];

// =========================
// 🏠 MAIN PAGE
// =========================
export default function Page(){
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white p-6 space-y-16">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-5xl font-bold">
          🏆 Pigeon Academy
        </motion.h1>
        <DarkModeToggle />
      </div>

      {/* HERO VIDEO */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}}>
        <video
          autoPlay
          muted
          loop
          className="w-full rounded-2xl shadow-2xl"
        >
          <source src="https://cdn.coverr.co/videos/coverr-birds-flying-1560/1080p.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* PIGEONS */}
      <section className="grid md:grid-cols-3 gap-6">
        {topPigeons.map((p,i)=>(
          <motion.div key={i} whileHover={{scale:1.08}} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}>
            <GlassCard>
              <img src={p.image} className="rounded-xl mb-3" />
              <h3 className="font-bold">{p.name}</h3>
            </GlassCard>
          </motion.div>
        ))}
      </section>

      {/* VIDEOS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Learn with Videos</h2>
        <VideoSection />
      </section>

      {/* AI */}
      <section>
        <AITutor/>
      </section>

      {/* WHATSAPP */}
      <div className="text-center">
        <a href="https://wa.me/212656736320" className="px-6 py-3 bg-green-500 rounded-full text-lg hover:scale-110 transition">
          Contact on WhatsApp
        </a>
      </div>

    </main>
  );
}

// =========================
// 🎯 FINAL RESULT
// =========================
// 🎥 Background video hero
// 📹 YouTube educational videos
// ✨ Smooth animations everywhere
// 💎 Ultra premium UI
// 🚀 Production-ready design
