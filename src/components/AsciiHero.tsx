import { useEffect } from "react";
import "../styles/ascii-hero.css"; 

const AsciiHero = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvasHero") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(0);
    const katakana = Array.from({ length: 96 }, (_, i) => String.fromCharCode(0x30A0 + i)).join('');
    const letters = katakana + "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#00ff00";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };

    const interval = setInterval(draw, 50);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };

    window.addEventListener("resize", resize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const ascii = `
 ███████╗██╗   ███████╗██╗  ██╗███████╗███╗   ██╗
 ██╔════╝██║   ██╔════╝██║  ██║██╔════╝████╗  ██║
 █████╗  ██║   █████╗  ██║  ██║█████╗  ██╔██╗ ██║
 ██╔══╝  ██║   ██╔══╝  ██║  ██║██╔══╝  ██║╚██╗██║
 ███████╗█████╗███████╗ █████ ║███████╗██║   ██╔╝
 ╚══════╝╚════╝╚══════╝╚══════╝╚══════╝  ╚═════╝ 

 ███╗   ██╗ ██████╗ ██████╗ ████████╗██╗  ██╗
 ████╗  ██║██╔═══██╗██╔══██╗╚══██╔══╝██║  ██║
 ██╔██╗ ██║██║   ██║██████╔╝   ██║   ███████║
 ██║╚██╗██║██║   ██║██╔══██╗   ██║   ██╔══██║
 ██║ ╚████║╚██████╔╝██║  ██║   ██║   ██║  ██║
 ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
  `;

  return (
    <section className="ascii-hero">
      <canvas id="matrixCanvasHero"></canvas>
      <pre className="ascii-text">{ascii}</pre>
    </section>
  );
};

export default AsciiHero;
