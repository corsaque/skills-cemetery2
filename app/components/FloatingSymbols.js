export default function FloatingSymbols() {
  const arcaneSymbols = ['✧', '⚜', '✦', '⚝', '⚕', '⚛', '⚘', '♱', '☥', '☯', '☪', '☭', '♆', '♔'];

  return (
    <>
      {arcaneSymbols.map((symbol, index) => (
        <div
          key={index}
          className="arcane-symbol absolute text-pale-cream opacity-20 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 20}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {symbol}
        </div>
      ))}
    </>
  );
}