import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  isLight = false,
}) => {
  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 64 : 48;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Brain & Circuit Logo Icon */}
      <div 
        className="relative flex items-center justify-center shrink-0"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
          </defs>

          {/* Left Brain Half - Gold biological gyri/curves */}
          <path
            d="M 50 12 
               C 38 12, 28 18, 22 26
               C 16 34, 15 42, 18 50
               C 14 56, 15 65, 20 72
               C 25 79, 34 85, 42 87
               C 46 88, 49 88, 50 88"
            stroke="url(#goldGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Brain Inner Folds */}
          <path
            d="M 23 32 C 30 35, 38 34, 46 28
               M 20 48 C 32 45, 36 54, 48 52
               M 22 66 C 30 62, 36 68, 48 70
               M 32 78 C 38 74, 44 80, 48 83"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Dividing Gap Line */}
          <line
            x1="50"
            y1="12"
            x2="50"
            y2="88"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />

          {/* Right Circuit Half - Digital Node Traces */}
          {/* Main Trace 1 */}
          <path
            d="M 50 15 L 60 15 L 60 30 L 74 30 L 74 42 L 82 42"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="82" cy="42" r="3.5" fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" />
          <circle cx="60" cy="30" r="3" fill="#F59E0B" />

          {/* Trace 2 */}
          <path
            d="M 50 36 L 68 36 L 68 62 L 78 62"
            stroke="url(#silverGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="78" cy="62" r="3.5" fill="none" stroke="url(#silverGrad)" strokeWidth="2.5" />

          {/* Trace 3 */}
          <path
            d="M 50 56 L 58 56 L 58 78 L 70 78"
            stroke="url(#goldGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="70" cy="78" r="3.5" fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" />

          {/* Trace 4 Outer Top */}
          <path
            d="M 50 25 L 72 25 L 80 32"
            stroke="url(#silverGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="80" cy="32" r="3" fill="none" stroke="url(#silverGrad)" strokeWidth="2" />

          {/* Trace 5 Bottom */}
          <path
            d="M 50 72 L 62 72 L 62 86 L 66 86"
            stroke="url(#silverGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="66" cy="86" r="3" fill="none" stroke="url(#silverGrad)" strokeWidth="2" />
        </svg>
      </div>

      {/* Typography representation */}
      {showText && (
        <div className="flex flex-col text-start">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-black tracking-tight ${
                size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'
              } ${isLight ? 'text-slate-900' : 'text-white'}`}
            >
              الفكر <span className="gold-gradient-text">الرقمي</span>
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold tracking-wider">
              RT-KSA
            </span>
          </div>
          <span
            className={`text-[10px] tracking-wider mt-1 ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            حلول رقمية • تصميم • تطوير • تسويق
          </span>
        </div>
      )}
    </div>
  );
};
