import { useEffect, useState } from 'react';

export default function FloatingSymbols() {
  const arcaneSymbols = ['✧', '⚜', '✦', '⚝', '⚕', '⚛', '⚘', '♱', '☥', '☯', '☪', '♆', '♔'];

  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    // Generate random positions, sizes, and animation delays for each symbol
    const generatedSymbols = arcaneSymbols.map((symbol) => ({
      symbol,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 20 + 20}px`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setSymbols(generatedSymbols);
  }, []); // Run only once after the component mounts

  return (
    <>
      {symbols.map((item, index) => (
        <div
          key={index}
          className="arcane-symbol absolute text-pale-cream opacity-20 animate-float"
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.fontSize,
            animationDelay: item.animationDelay,
          }}
        >
          {item.symbol}
        </div>
      ))}
    </>
  );
}