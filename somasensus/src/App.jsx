import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from './data';
import emailjs from '@emailjs/browser';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('ru');
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  const form = useRef();

  const t = translations[lang] || translations['en'];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_01phsav',
      'template_cva6ahb',
      form.current, 
      'D0EotPSvRXrXMyqbE'
    )
    .then((result) => {
        alert('Сообщение успешно отправлено!');
        e.target.reset(); 
    }, (error) => {
        alert('Ошибка: ' + error.text);
    });
  };

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f4f0ea] min-h-screen text-[#2c2c2c] font-sans overflow-x-hidden">
      
{/* НАВИГАЦИЯ */}
      <nav className={`fixed w-full z-50 transition-all duration-500 p-6 flex justify-between items-center text-white ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent'}`}>
        <div className="text-xl font-serif italic tracking-widest font-bold">SS</div>
        
        {/* Десктопное меню (скрыто на мобилках) */}
        <div className="hidden md:flex gap-12 text-xs tracking-widest font-bold uppercase">
          <a href="#about" className="hover:text-gray-300 transition">{t.nav.about}</a>
          <a href="#services" className="hover:text-gray-300 transition">{t.nav.services}</a>
          <a href="#booking" className="hover:text-gray-300 transition">{t.nav.booking}</a>
          <a href="#contact" className="hover:text-gray-300 transition">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-6">
          {/* Переключатель языков */}
          <div className="flex gap-4 text-xs font-bold bg-white/10 px-3 py-1 rounded-full">
            <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'underline' : 'opacity-70'}>RU</button>
            <button onClick={() => setLang('et')} className={lang === 'et' ? 'underline' : 'opacity-70'}>ET</button>
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'underline' : 'opacity-70'}>EN</button>
          </div>

          {/* Кнопка Бургер (видна только на мобилках) */}
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="md:hidden text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* МОБИЛЬНОЕ МЕНЮ (OVERLAY) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#2c2c2c] text-white flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-xl font-serif italic tracking-widest font-bold">SS</div>
              <button onClick={() => setIsMenuOpen(false)} className="text-4xl">&times;</button>
            </div>
            
            <div className="flex flex-col gap-10 text-3xl font-serif uppercase tracking-widest">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">{t.nav.about}</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">{t.nav.services}</a>
              <a href="#booking" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">{t.nav.booking}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400">{t.nav.contact}</a>
            </div>

            <div className="mt-auto opacity-50 text-xs tracking-widest">
              SOMA SENSUS — TALLINN, ESTONIA
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#6b705c]"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay">
          <source src="/vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 px-4">
          <p className="tracking-[0.4em] text-xs mb-4 uppercase font-bold text-white/80">{t.hero.welcome}</p>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-4 tracking-tight drop-shadow-md">{t.hero.title}</h1>
          <p className="tracking-[0.3em] text-sm uppercase max-w-lg mx-auto leading-relaxed">{t.hero.subtitle}</p>
        </motion.div>
      </section>

      {/* ABOUT YANA */}
      <section id="about" className="bg-[#6b705c] text-white py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 flex flex-col gap-6">
            <h2 className="text-5xl font-serif">{t.aboutYana.title}</h2>
            <p className="text-lg opacity-95 leading-relaxed">{t.aboutYana.intro}</p>
            <div className="p-6 border border-white/20 bg-black/10">
              <p className="text-sm font-bold opacity-100 mb-4">{t.aboutYana.subtitle}</p>
              <p className="text-base leading-relaxed opacity-90 mb-6">{t.aboutYana.text}</p>
              <ul className="grid grid-cols-1 gap-2 text-sm">
                {t.aboutYana.skills.map((s, i) => <li key={i} className="flex items-center gap-2"><span>•</span> {s}</li>)}
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/yana.jpg" alt="Yana" className="max-w-sm w-full shadow-2xl rounded-sm mx-auto" />
          </div>
        </div>
      </section>

      {/* ФОТО ТЕРАПИИ (POOL) С НАЛОЖЕНИЕМ-ГРАДИЕНТОМ */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/pool.jpg')" }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #6b705c 0%, #2c2c2c 100%)', opacity: 0.5 }}></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-16 text-white uppercase tracking-tighter">{t.offers.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.offers.items.map((srv) => (
              <motion.div key={srv.id} whileHover={{ y: -10 }} onClick={() => setSelectedService(srv)} className="flex flex-col shadow-xl cursor-pointer group">
                <div className="h-64 overflow-hidden relative">
                  <img src={`/service-${srv.id}.jpg`} alt={srv.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 text-3xl drop-shadow-md">{srv.icon}</div>
                </div>
                <div className="bg-[#6b705c] p-8 text-white flex-1 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <h3 className="text-2xl font-serif mb-2">{srv.name}</h3>
                    <p className="text-sm opacity-80 line-clamp-3 mb-4">{srv.desc}</p>
                  </div>
                  <div className="flex justify-between items-center border-t border-white/20 pt-4">
                    <span className="text-xs uppercase font-bold tracking-widest">{srv.price}</span>
                    <span className="text-xs border-b border-white/40 uppercase tracking-widest">Details →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="relative py-32 overflow-hidden text-white px-8">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/booking-bg.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #2c2c2c 0%, #60432d 100%)', opacity: 0.7 }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-serif mb-12 tracking-wider">{t.booking.title}</h2>
            <div className="space-y-10">
              {t.booking.locations.map((loc, i) => (
                <div key={i} className="border-l-2 border-[#6b705c] pl-6">
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{loc.name}</h3>
                  <div className="space-y-2 opacity-80 text-sm">
                    {loc.prices.map((p, idx) => <p key={idx}>{p}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white/5 backdrop-blur-sm p-10 border border-white/10">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              <input 
                type="text" 
                name="user_name" 
                required 
                placeholder={t.booking.form.name} 
                className="bg-transparent border-b border-white/30 p-3 outline-none focus:border-[#6b705c] transition" 
              />
              <input 
                type="email" 
                name="user_email" 
                required 
                placeholder={t.booking.form.email} 
                className="bg-transparent border-b border-white/30 p-3 outline-none focus:border-[#6b705c] transition" 
              />
              <select 
                name="service_name" 
                required 
                className="bg-transparent border-b border-white/30 p-3 outline-none focus:border-[#6b705c] transition text-white/60"
              >
                <option value="" className="text-black">{t.booking.form.service}</option>
                {t.offers.items.map(s => <option key={s.id} value={s.name} className="text-black">{s.name}</option>)}
              </select>
              <button 
                type="submit" 
                className="bg-[#6b705c] py-4 mt-4 uppercase tracking-widest text-sm font-bold hover:bg-[#5c604b] transition"
              >
                {t.booking.form.btn}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FEEDBACK (ОТЗЫВЫ) — СТИЛЬ МОДАЛЬНОГО ОКНА */}
      <section id="press" className="relative py-32 border-t border-[#2c2c2c] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/feedback-bg.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #2c2c2c 0%, #60432d 100%)', opacity: 0.6 }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-xs tracking-[0.5em] text-center mb-16 uppercase font-bold text-white opacity-60">{t.feedback.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.feedback.reviews.map((rev, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }} 
                className="bg-[#6b705c] p-10 shadow-2xl border border-white/20 flex flex-col justify-between min-h-[320px] text-white"
              >
                <p className="font-serif italic text-xl leading-relaxed">"{rev.text}"</p>
                <div className="mt-8 pt-6 border-t border-white/20 uppercase text-[10px] font-bold tracking-[0.3em] text-white/70"> 
                   — {rev.author} 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ С ВИДЕО */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #63462d 0%, #5c6c4c 100%)', opacity: 0.6 }}></div>
        <h2 className="relative z-10 text-6xl md:text-8xl font-serif italic drop-shadow-2xl tracking-tight">
          {t.welcomeSpace.videoPlaceholder}
        </h2>
      </section>

     {/* CONTACT */}
<section id="contact" className="bg-[#5c6c4c] py-24 px-6 text-white border-t border-white/10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
{/* Блок с адресом */}
<div className="border border-white/30 p-10 flex flex-col justify-between min-h-[200px]">
  <h3 className="text-2xl font-serif mb-6">Location</h3>
  <div className="space-y-3 opacity-90 text-sm">
    {t.contact.locations.map((l, i) => {
      // Если это первая строка (Таллинн, Эстония), выводим просто текст
      if (i === 0) {
        return <p key={i} className="block">{l}</p>;
      }
      // Для остальных строк делаем ссылку на карту
      return (
        <a 
          key={i} 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l + ", Tallinn, Estonia")}`}
          target="_blank" 
          rel="noreferrer"
          className="block hover:text-gray-300 underline decoration-white/40 underline-offset-4 transition"
        >
          {l}
        </a>
      );
    })}
  </div>
</div>

    {/* Блок с часами (без изменений) */}
    <div className="border border-white/30 p-10 flex flex-col justify-between min-h-[200px]">
      <h3 className="text-2xl font-serif mb-6">Working Hours</h3>
      <div className="space-y-2 opacity-90 text-sm"> 
        {t.contact.hours.map((h, i) => <p key={i}>{h}</p>)} 
      </div>
    </div>

    {/* Блок с соцсетями (теперь с подчеркиванием) */}
    <div className="border border-white/30 p-10 flex flex-col justify-between min-h-[200px]">
      <h3 className="text-2xl font-serif mb-6">Get Social</h3>
      <div className="flex flex-col gap-4 text-sm opacity-90">
        <a 
          href="https://www.instagram.com/yana.belova.physio_est/?hl=am-et" 
          className="underline decoration-white/40 underline-offset-4 hover:text-gray-300 transition" 
          target="_blank" 
          rel="noreferrer"
        >
          Instagram
        </a>
        <a 
          href="https://www.facebook.com/p/SomaSensus-61566848969221/" 
          className="underline decoration-white/40 underline-offset-4 hover:text-gray-300 transition" 
          target="_blank" 
          rel="noreferrer"
        >
          Facebook
        </a>
        <a 
          href="mailto:yanabelova.physio@gmail.com" 
          className="underline decoration-white/40 underline-offset-4 hover:text-gray-300 transition"
        >
          yanabelova.physio@gmail.com
        </a>
      </div>
    </div>

  </div>
</section>
      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6" 
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 50 }} 
              className="bg-[#6b705c] text-white max-w-2xl w-full p-12 relative shadow-2xl border border-white/20" 
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 text-3xl opacity-50 hover:opacity-100">×</button>
              <div className="text-5xl mb-6">{selectedService.icon}</div>
              <h3 className="text-4xl font-serif mb-6">{selectedService.name}</h3>
              <p className="text-lg leading-relaxed mb-8 opacity-90">{selectedService.desc}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {selectedService.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tighter text-white/80">
                    <span className="w-2 h-2 bg-white/40 rounded-full"></span> {b}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedService(null)} 
                className="w-full py-4 bg-white/10 border border-white/20 text-white uppercase tracking-widest text-sm hover:bg-white/20 transition"
              >
                {t.contact.btnClose}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;