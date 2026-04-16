import React, { useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '', delay = 0 }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    let iteration = 0;
    let interval: any = null;

    const startScramble = () => {
      clearInterval(interval);
      iteration = 0;
      
      interval = setInterval(() => {
        element.innerText = text
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(startScramble, delay * 1000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span ref={textRef} className={className}>{text}</span>;
};

export default ScrambleText;
