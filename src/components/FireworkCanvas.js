import { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

export default function FireworksCanvas() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    const options = {
      rocketsPoint: {
        min: 0,
        max: 100
      },
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 15,
        max: 30
      },
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 100,
      trace: 3,
      explosion: 5,
      autoresize: true
    };
    const fireworks = new Fireworks(canvasRef.current, options);
    fireworks.start();

    return () => {
      fireworks.stop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
}