import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  ox: number; // original position
  oy: number;
  oz: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
}

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D parameters
    const fov = 350; // Field of View (distance to projection screen)
    const particleCount = Math.min(80, Math.floor((width * height) / 15000));
    const particles: Particle[] = [];

    // Create particles in 3D space (-width/2 to width/2, -height/2 to height/2, -fov to fov)
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * width * 1.2;
      const y = (Math.random() - 0.5) * height * 1.2;
      const z = (Math.random() - 0.5) * fov * 2;
      particles.push({
        x,
        y,
        z,
        ox: x,
        oy: y,
        oz: z,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        color: `rgba(99, 102, 241, ${Math.random() * 0.3 + 0.2})`, // Indigo-like tint
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coords around center: (-0.5 to 0.5)
      mouseRef.current.tx = (e.clientX - width / 2) / width;
      mouseRef.current.ty = (e.clientY - height / 2) / height;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Rotation angles
    let angleX = 0.0005;
    let angleY = 0.0005;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation (spring effect)
      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      // Rotate space slightly based on mouse
      const rotY = angleY + mouse.x * 0.08;
      const rotX = angleX + mouse.y * 0.08;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Sort particles by Z (depth sorting) so closer ones render on top
      particles.forEach((p) => {
        // Move particle by velocity
        p.ox += p.vx;
        p.oy += p.vy;
        p.oz += p.vz;

        // Wrap around boundaries
        const boundaryX = width * 0.8;
        const boundaryY = height * 0.8;
        const boundaryZ = fov;

        if (Math.abs(p.ox) > boundaryX) p.vx *= -1;
        if (Math.abs(p.oy) > boundaryY) p.vy *= -1;
        if (Math.abs(p.oz) > boundaryZ) p.vz *= -1;

        // Apply rotation around Y axis
        let x1 = p.ox * cosY - p.oz * sinY;
        let z1 = p.oz * cosY + p.ox * sinY;

        // Apply rotation around X axis
        let y1 = p.oy * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.oy * sinX;

        // Project to 2D
        const scale = fov / (fov + z2);
        p.x = x1 * scale + width / 2;
        p.y = y1 * scale + height / 2;
        p.z = z2;
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          // Don't connect if they are behind camera
          if (p1.z + fov < 10 || p2.z + fov < 10) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect if visual screen distance is small
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        if (p.z + fov < 10) return; // behind camera

        const size = Math.max(0.5, ((fov - p.z) / fov) * 2.5);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Slowly increment base rotation
      angleX += 0.0002;
      angleY += 0.0003;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60 dark:opacity-40 transition-opacity duration-1000"
    />
  );
}
