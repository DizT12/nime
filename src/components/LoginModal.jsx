import React, { useEffect, useRef } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  const handleGoogleLogin = () => {
    // Implement your Google OAuth here
    // e.g. window.location.href = '/auth/google'
    alert('Redirect ke Google OAuth...');
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');

        @keyframes nfModalIn {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes nfFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes nfPulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(246,207,128,0.25); }
          50%       { box-shadow: 0 0 0 12px rgba(246,207,128,0);  }
        }
        @keyframes nfShine {
          from { transform: translateX(-100%) skewX(-20deg); }
          to   { transform: translateX(200%)  skewX(-20deg); }
        }
        @keyframes nfFloat {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-6px);  }
        }
        @keyframes nfSpinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .nf-modal-backdrop {
          animation: nfFadeIn 0.25s ease-out;
          font-family: 'Sora', sans-serif;
        }
        .nf-modal-card {
          animation: nfModalIn 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .nf-avatar-pulse {
          animation: nfPulseRing 3s ease-in-out infinite, nfFloat 4s ease-in-out infinite;
        }
        .nf-google-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }
        .nf-google-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%);
          transform: translateX(-100%) skewX(-20deg);
          transition: none;
        }
        .nf-google-btn:hover::before {
          animation: nfShine 0.55s ease forwards;
        }
        .nf-google-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(246,207,128,0.25);
        }
        .nf-google-btn:active {
          transform: translateY(0) scale(0.97);
        }
        .nf-orb-1 {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(246,207,128,0.07) 0%, transparent 70%);
          top: -60px;
          right: -40px;
          pointer-events: none;
          animation: nfSpinSlow 20s linear infinite;
        }
        .nf-orb-2 {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(246,207,128,0.05) 0%, transparent 70%);
          bottom: -30px;
          left: -20px;
          pointer-events: none;
        }
        .nf-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        }
        .nf-close-btn {
          transition: color 0.15s ease, transform 0.15s ease, background 0.15s ease;
        }
        .nf-close-btn:hover {
          color: #F6CF80;
          transform: rotate(90deg);
          background: rgba(246,207,128,0.08);
        }
        .nf-feature-item {
          transition: transform 0.2s ease;
        }
        .nf-feature-item:hover {
          transform: translateX(3px);
        }
      `}</style>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="nf-modal-backdrop fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-4"
        style={{ background: 'rgba(10,10,12,0.85)', backdropFilter: 'blur(12px)' }}
        onClick={handleBackdropClick}
      >
        {/* Card */}
        <div className="nf-modal-card relative w-full sm:max-w-sm bg-[#111114] border border-white/8 rounded-t-[2.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
          
          {/* Decorative orbs */}
          <div className="nf-orb-1" />
          <div className="nf-orb-2" />

          {/* Top drag indicator (mobile) */}
          <div className="flex justify-center pt-3 pb-0 sm:hidden">
            <div className="w-10 h-1 bg-white/15 rounded-full" />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="nf-close-btn absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-white/30 z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Content */}
          <div className="px-8 pt-8 pb-10 flex flex-col items-center">

            {/* Avatar / Brand Icon */}
            <div className="nf-avatar-pulse mb-6 relative">
              <div className="w-20 h-20 rounded-2xl bg-[#1a1a1f] border border-[#F6CF80]/20 flex items-center justify-center shadow-[0_8px_32px_rgba(246,207,128,0.12)]">
                <img
                  src="https://raw.githubusercontent.com/alip-jmbd/alipp/main/icon-rbg.png"
                  alt="NefuSoft"
                  className="w-12 h-12 object-contain"
                />
              </div>
              {/* Gold dot accent */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#F6CF80] border-2 border-[#111114] flex items-center justify-center">
                <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-white font-[800] text-2xl tracking-tight mb-1.5 text-center" style={{ fontFamily: 'Sora, sans-serif' }}>
              Masuk ke <span className="text-[#F6CF80]">NefuSoft</span>
            </h2>
            <p className="text-white/40 text-[13px] font-medium text-center leading-relaxed mb-7 max-w-[240px]">
              Simpan riwayat nonton & nikmati pengalaman yang lebih personal
            </p>

            {/* Features */}
            <div className="w-full flex flex-col gap-3 mb-7">
              {[
                { icon: '🕐', text: 'Riwayat tontonan tersimpan otomatis' },
                { icon: '⭐', text: 'Bookmark anime favoritmu' },
                { icon: '🔔', text: 'Notifikasi episode terbaru' },
              ].map((f, i) => (
                <div key={i} className="nf-feature-item flex items-center gap-3 text-white/50 text-[12px] font-semibold">
                  <span className="text-base leading-none">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full flex items-center gap-3 mb-6">
              <div className="nf-divider-line" />
              <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase shrink-0">Lanjutkan dengan</span>
              <div className="nf-divider-line" />
            </div>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="nf-google-btn w-full flex items-center justify-center gap-3 bg-[#F6CF80] text-black font-[700] text-[14px] py-4 rounded-2xl shadow-[0_8px_24px_rgba(246,207,128,0.15)] tracking-wide"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {/* Google G icon */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Masuk dengan Google
            </button>

            {/* Privacy note */}
            <p className="mt-5 text-white/20 text-[10px] font-medium text-center leading-relaxed px-4">
              Dengan masuk, kamu menyetujui{' '}
              <span className="text-white/40 underline underline-offset-2 cursor-pointer hover:text-[#F6CF80] transition-colors">Syarat & Ketentuan</span>
              {' '}dan{' '}
              <span className="text-white/40 underline underline-offset-2 cursor-pointer hover:text-[#F6CF80] transition-colors">Kebijakan Privasi</span>
              {' '}NefuSoft.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
