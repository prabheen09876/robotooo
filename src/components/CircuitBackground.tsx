import { useEffect, useRef } from 'react';

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
        window.innerHeight * 1.5 // Ensure minimum height
      );
      canvas.width = window.innerWidth;
      canvas.height = docHeight;
    };

    // Initial resize
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', resizeCanvas);

    // Circuit points
    class Point {
      x: number;
      y: number;
      baseY: number;
      speed: number;
      connections: Point[];
      active: boolean;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseY = y;
        this.speed = 0.5 + Math.random() * 2;
        this.connections = [];
        this.active = Math.random() > 0.7;
      }

      update() {
        if (Math.random() < 0.002) {
          this.active = !this.active;
        }
      }
    }

    // Create grid of points
    const spacing = 150; // Increased spacing
    const points: Point[] = [];
    const cols = Math.ceil(canvas.width / spacing) + 1;
    const rows = Math.ceil(canvas.height / spacing) + 1;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const point = new Point(
          x * spacing,
          y * spacing
        );
        points.push(point);
      }
    }

    // Connect points
    points.forEach(point => {
      points.forEach(other => {
        if (point !== other) {
          const dx = Math.abs(point.x - other.x);
          const dy = Math.abs(point.y - other.y);
          if (dx <= spacing && dy <= spacing) {
            point.connections.push(other);
          }
        }
      });
    });

    // Animation
    let hue = 180; // Start with cyan

    function animate() {
      // Clear with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Increased opacity for better visibility
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update points
      points.forEach(point => {
        point.update();
      });

      // Draw connections
      points.forEach(point => {
        point.connections.forEach(connection => {
          if (point.active || connection.active) {
            const gradient = ctx.createLinearGradient(
              point.x, point.y, connection.x, connection.y
            );
            
            // Create glowing effect
            const alpha = (point.active && connection.active) ? 1 : 0.5; // Increased opacity
            gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, ${alpha})`); // Brighter color
            gradient.addColorStop(1, `hsla(${hue}, 100%, 70%, ${alpha})`);

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = (point.active && connection.active) ? 3 : 1.5; // Thicker lines
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.stroke();

            // Add glow effect
            ctx.shadowBlur = 20; // Increased glow
            ctx.shadowColor = `hsla(${hue}, 100%, 70%, ${alpha})`;
          }
        });

        // Draw points
        if (point.active) {
          ctx.beginPath();
          ctx.fillStyle = `hsla(${hue}, 100%, 70%, 0.9)`; // Brighter points
          ctx.arc(point.x, point.y, 4, 0, Math.PI * 2); // Larger points
          ctx.fill();
        }
      });

      // Animate hue for color variation
      hue = (hue + 0.1) % 360;

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #000000, #000033)',
      }}
    />
  );
}
