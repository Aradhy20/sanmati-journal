import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';
import PageHeader from '../Components/PageHeader';
import { Sparkles, Shield, Zap, RotateCcw, Compass, Activity, ArrowUp, ArrowDown } from 'lucide-react';

export default function AntigravitySandbox() {
    // State Controls
    const [gravityMode, setGravityMode] = useState('normal'); // 'normal', 'zero', 'inverse'
    const [shieldIntensity, setShieldIntensity] = useState(100); // 0 to 100%
    const [propulsiveForce, setPropulsiveForce] = useState(250); // 0 to 500 N
    const [massSignature, setMassSignature] = useState('positive'); // 'positive', 'negative'
    const [isThrusterActive, setIsThrusterActive] = useState(false);

    // Telemetry/Stats State for UI
    const [telemetry, setTelemetry] = useState({
        speed: 0,
        altitude: 400,
        netForceY: 0,
        status: 'Stable Orbit'
    });

    const canvasRef = useRef(null);
    const shipRef = useRef({
        x: 400,
        y: 250,
        vx: 0,
        vy: 0,
        mass: 100, // kg
        radius: 18,
        angle: -Math.PI / 2, // facing up
    });

    const dragRef = useRef({
        isDragging: false,
        startX: 0,
        startY: 0
    });

    const debrisRef = useRef([]);

    // Reset Simulation
    const handleReset = () => {
        const canvas = canvasRef.current;
        const width = canvas ? canvas.width : 800;
        const height = canvas ? canvas.height : 500;
        
        shipRef.current = {
            x: width / 2,
            y: height / 2 - 50,
            vx: 0,
            vy: 0,
            mass: 100,
            radius: 18,
            angle: -Math.PI / 2,
        };
        debrisRef.current = [];
        setGravityMode('normal');
        setShieldIntensity(100);
        setPropulsiveForce(250);
        setMassSignature('positive');
        setIsThrusterActive(false);
    };

    // Physics Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationId;
        let lastTime = performance.now();

        // Canvas sizing
        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Populate initial debris
        const spawnDebris = () => {
            return {
                x: Math.random() * canvas.width,
                y: -20 - Math.random() * 100,
                vx: (Math.random() - 0.5) * 1.5,
                vy: Math.random() * 2 + 1,
                radius: Math.random() * 5 + 3,
                color: `rgba(200, 210, 230, ${Math.random() * 0.4 + 0.3})`
            };
        };

        for (let i = 0; i < 15; i++) {
            debrisRef.current.push({
                ...spawnDebris(),
                y: Math.random() * (canvas.height - 150)
            });
        }

        const loop = (time) => {
            const dt = Math.min((time - lastTime) / 1000, 0.1); // cap dt at 0.1s
            lastTime = time;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Space background & grid
            ctx.fillStyle = '#0b0f19';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Subtle glowing Grid lines
            ctx.strokeStyle = 'rgba(30, 41, 59, 0.5)';
            ctx.lineWidth = 1;
            const gridSize = 40;
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            const ship = shipRef.current;
            const bubbleRadius = 80;

            // Calculate Gravity Acceleration
            let baseGravity = 9.8;
            if (gravityMode === 'zero') baseGravity = 0;
            if (gravityMode === 'inverse') baseGravity = -4.9;

            // Mass Signature factor
            const massFactor = massSignature === 'negative' ? -1 : 1;
            const gravityAccel = baseGravity * massFactor;

            // Determine if ship is inside its own gravity shielding
            // (The shield blocks gravity acting ON the ship itself based on shield intensity)
            const gravityShieldFactor = 1 - (shieldIntensity / 100);
            const netGravityAccel = gravityAccel * gravityShieldFactor;

            // Propulsive Force
            let thrustX = 0;
            let thrustY = 0;
            if (isThrusterActive) {
                // Thruster acts in direction of ship orientation (facing up)
                const thrustAccel = propulsiveForce / ship.mass;
                thrustX = Math.cos(ship.angle) * thrustAccel;
                thrustY = Math.sin(ship.angle) * thrustAccel;
            }

            // Apply Physics to Ship (if not dragging)
            if (!dragRef.current.isDragging) {
                // Acceleration
                const ax = thrustX;
                const ay = thrustY + netGravityAccel;

                // Update Velocity with drag/friction
                ship.vx = (ship.vx + ax * dt * 25) * 0.98;
                ship.vy = (ship.vy + ay * dt * 25) * 0.98;

                // Update Position
                ship.x += ship.vx * dt;
                ship.y += ship.vy * dt;

                // Boundary collision (bounce)
                const planetHeight = 60;
                const bottomBoundary = canvas.height - planetHeight - ship.radius;
                if (ship.y > bottomBoundary) {
                    ship.y = bottomBoundary;
                    ship.vy = -ship.vy * 0.3; // dampen bounce
                    ship.vx *= 0.8;
                }
                if (ship.y < ship.radius) {
                    ship.y = ship.radius;
                    ship.vy = -ship.vy * 0.3;
                }
                if (ship.x > canvas.width - ship.radius) {
                    ship.x = canvas.width - ship.radius;
                    ship.vx = -ship.vx * 0.5;
                }
                if (ship.x < ship.radius) {
                    ship.x = ship.radius;
                    ship.vx = -ship.vx * 0.5;
                }
            }

            // Draw Planet Surface (glowing green/blue horizon)
            const gradient = ctx.createLinearGradient(0, canvas.height - 60, 0, canvas.height);
            gradient.addColorStop(0, 'rgba(56, 189, 248, 0.4)'); // Sky blue glow
            gradient.addColorStop(0.2, '#1e293b');
            gradient.addColorStop(1, '#0f172a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, canvas.height - 60, canvas.width, 60);

            ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, canvas.height - 60);
            ctx.lineTo(canvas.width, canvas.height - 60);
            ctx.stroke();

            // Render Debris & Shield Deflection
            ctx.lineWidth = 1.5;
            debrisRef.current.forEach((particle, idx) => {
                // Apply Gravity to debris particles
                particle.y += particle.vy * dt * 60;
                particle.x += particle.vx * dt * 60;

                // Check distance to ship
                const dx = particle.x - ship.x;
                const dy = particle.y - ship.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Shield Deflection Logic
                if (dist < bubbleRadius) {
                    const shieldForce = shieldIntensity / 100;
                    if (shieldForce > 0) {
                        // Push particle outward along the radial vector
                        const pushForce = (bubbleRadius - dist) * 0.15 * shieldForce;
                        const nx = dx / dist;
                        const ny = dy / dist;

                        particle.x += nx * pushForce;
                        particle.y += ny * pushForce;

                        // Give it an outward velocity curve
                        particle.vx += nx * pushForce * 0.5;
                        particle.vy += ny * pushForce * 0.5;

                        // Draw connection spark
                        ctx.strokeStyle = `rgba(14, 165, 233, ${shieldForce * 0.6})`;
                        ctx.beginPath();
                        ctx.moveTo(ship.x + nx * ship.radius, ship.y + ny * ship.radius);
                        ctx.lineTo(particle.x, particle.y);
                        ctx.stroke();
                    }
                }

                // Recycle debris
                if (particle.y > canvas.height - 60 || particle.x < 0 || particle.x > canvas.width) {
                    debrisRef.current[idx] = spawnDebris();
                }

                // Draw debris particle
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw Alcubierre Forcefield Bubble
            if (shieldIntensity > 0) {
                const pulse = Math.sin(time * 0.005) * 2;
                const activeRadius = bubbleRadius + pulse;

                // Shield outer glow circle
                const shieldGlow = ctx.createRadialGradient(ship.x, ship.y, ship.radius + 10, ship.x, ship.y, activeRadius);
                shieldGlow.addColorStop(0, 'rgba(14, 165, 233, 0)');
                shieldGlow.addColorStop(0.8, `rgba(14, 165, 233, ${(shieldIntensity / 100) * 0.15})`);
                shieldGlow.addColorStop(1, `rgba(14, 165, 233, ${(shieldIntensity / 100) * 0.4})`);
                
                ctx.fillStyle = shieldGlow;
                ctx.beginPath();
                ctx.arc(ship.x, ship.y, activeRadius, 0, Math.PI * 2);
                ctx.fill();

                // Shield border rings
                ctx.strokeStyle = `rgba(56, 189, 248, ${(shieldIntensity / 100) * 0.6})`;
                ctx.lineWidth = 1;
                ctx.setLineDash([6, 12]);
                ctx.beginPath();
                ctx.arc(ship.x, ship.y, activeRadius, 0, Math.PI * 2);
                ctx.stroke();
                
                ctx.strokeStyle = `rgba(14, 165, 233, ${(shieldIntensity / 100) * 0.3})`;
                ctx.setLineDash([]);
                ctx.beginPath();
                ctx.arc(ship.x, ship.y, activeRadius - 4, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Draw Vector Arrows
            ctx.setLineDash([]);
            const drawVector = (dx, dy, color, label) => {
                const startX = ship.x;
                const startY = ship.y;
                const endX = ship.x + dx;
                const endY = ship.y + dy;

                ctx.strokeStyle = color;
                ctx.fillStyle = color;
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                // Arrow head
                const angle = Math.atan2(endY - startY, endX - startX);
                ctx.beginPath();
                ctx.moveTo(endX, endY);
                ctx.lineTo(endX - 8 * Math.cos(angle - Math.PI / 6), endY - 8 * Math.sin(angle - Math.PI / 6));
                ctx.lineTo(endX - 8 * Math.cos(angle + Math.PI / 6), endY - 8 * Math.sin(angle + Math.PI / 6));
                ctx.fill();

                // Label
                ctx.font = 'bold 9px sans-serif';
                ctx.fillText(label, endX + 8, endY + 3);
            };

            // Gravity vector (Red, pointing down/up)
            if (baseGravity !== 0) {
                const gravityVectorLen = gravityAccel * 5;
                drawVector(0, gravityVectorLen, '#ef4444', 'Gravity');
            }

            // Shield buoyancy / Gravity Cancellation vector (Green)
            if (shieldIntensity > 0 && baseGravity !== 0) {
                const cancelVectorLen = -gravityAccel * (shieldIntensity / 100) * 5;
                drawVector(0, cancelVectorLen, '#22c55e', 'Shield Lift');
            }

            // Propulsion vector (Blue, pointing direction of thrust)
            if (isThrusterActive && propulsiveForce > 0) {
                const thrustVecX = Math.cos(ship.angle) * (propulsiveForce * 0.15);
                const thrustVecY = Math.sin(ship.angle) * (propulsiveForce * 0.15);
                drawVector(thrustVecX, thrustVecY, '#3b82f6', 'Thrusters');
            }

            // Draw Research Ship
            ctx.save();
            ctx.translate(ship.x, ship.y);
            ctx.rotate(ship.angle + Math.PI / 2); // default ship shape points up, adjust angle

            // Ship shadow glow
            ctx.shadowBlur = 15;
            ctx.shadowColor = isThrusterActive ? '#3b82f6' : '#64748b';

            // Thruster fire tail
            if (isThrusterActive) {
                ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
                ctx.beginPath();
                ctx.moveTo(-6, 12);
                ctx.lineTo(0, 24 + Math.random() * 8);
                ctx.lineTo(6, 12);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = 'rgba(253, 224, 71, 0.9)'; // Inner yellow flame
                ctx.beginPath();
                ctx.moveTo(-3, 12);
                ctx.lineTo(0, 18 + Math.random() * 4);
                ctx.lineTo(3, 12);
                ctx.closePath();
                ctx.fill();
            }

            // Sleek sci-fi triangle hull
            ctx.fillStyle = '#f8fafc'; // White ceramic hull
            ctx.strokeStyle = '#38bdf8'; // Cyan highlights
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, -18); // top nose
            ctx.lineTo(12, 12);  // bottom right
            ctx.lineTo(-12, 12); // bottom left
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Cockpit glass
            ctx.fillStyle = '#0ea5e9';
            ctx.beginPath();
            ctx.moveTo(0, -10);
            ctx.lineTo(4, 2);
            ctx.lineTo(-4, 2);
            ctx.closePath();
            ctx.fill();

            ctx.restore();

            // Update Telemetry metrics
            const altitudeVal = Math.round((canvas.height - 60 - ship.y) * 1.5);
            const speedVal = Math.round(Math.sqrt(ship.vx * ship.vx + ship.vy * ship.vy) * 2.5);
            const netForce = Math.round(ship.vy * ship.mass * 0.1);

            let statusStr = 'Stable Orbit';
            if (altitudeVal <= 10) statusStr = 'Grounded';
            else if (isThrusterActive) statusStr = 'Ascending';
            else if (ship.vy > 1) statusStr = 'Falling';

            setTelemetry({
                speed: speedVal,
                altitude: altitudeVal < 0 ? 0 : altitudeVal,
                netForceY: netForce,
                status: statusStr
            });

            animationId = requestAnimationFrame(loop);
        };

        animationId = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [gravityMode, shieldIntensity, propulsiveForce, massSignature, isThrusterActive]);

    // Handle ship dragging
    const getMousePos = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const handleMouseDown = (e) => {
        const pos = getMousePos(e);
        const ship = shipRef.current;
        const dx = pos.x - ship.x;
        const dy = pos.y - ship.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 40) { // Clicked near the ship/bubble
            dragRef.current = {
                isDragging: true,
                startX: dx,
                startY: dy
            };
            ship.vx = 0;
            ship.vy = 0;
        }
    };

    const handleMouseMove = (e) => {
        if (!dragRef.current.isDragging) return;
        const pos = getMousePos(e);
        const ship = shipRef.current;
        ship.x = pos.x - dragRef.current.startX;
        ship.y = pos.y - dragRef.current.startY;
    };

    const handleMouseUp = () => {
        dragRef.current.isDragging = false;
    };

    return (
        <MainLayout>
            <Seo
                title="Antigravity Propulsion Sandbox"
                description="Interactive Alcubierre bubble, gravity cancellation, and propulsion engine sandbox simulation."
            />

            <PageHeader
                title="Antigravity & Propulsion Sandbox"
                breadcrumb="Antigravity Sandbox"
                subtitle="Explore quantum gravity cancellation, bubble shield dynamics, and negative mass physics in real-time."
            />

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Pane - Simulation Canvas */}
                    <div className="lg:col-span-2 bg-[#090d16] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col relative">
                        <div className="bg-slate-900/60 px-6 py-4 border-b border-slate-800 flex justify-between items-center z-10">
                            <div className="flex items-center gap-2">
                                <Activity className="w-5 h-5 text-sky-400 animate-pulse" />
                                <span className="font-mono text-xs text-sky-400 uppercase tracking-widest font-black">Simulation Feed [Active]</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                                <span>Shield Status: <strong className={shieldIntensity > 0 ? 'text-emerald-400' : 'text-rose-400'}>{shieldIntensity > 0 ? 'ONLINE' : 'OFFLINE'}</strong></span>
                            </div>
                        </div>

                        {/* Interactive Canvas */}
                        <div className="relative flex-1 min-h-[480px]">
                            <canvas
                                ref={canvasRef}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                                className="w-full h-full cursor-grab active:cursor-grabbing block"
                            />
                            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur border border-white/10 rounded-2xl p-4 text-white font-mono text-xs space-y-1.5 pointer-events-none select-none">
                                <div>SPEED: <span className="text-sky-400 font-bold">{telemetry.speed} km/h</span></div>
                                <div>ALTITUDE: <span className="text-yellow-400 font-bold">{telemetry.altitude} m</span></div>
                                <div>NET FORCE Y: <span className={telemetry.netForceY >= 0 ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{telemetry.netForceY} N</span></div>
                                <div>STATUS: <span className="text-emerald-400 font-bold">{telemetry.status}</span></div>
                            </div>
                            
                            <div className="absolute bottom-4 right-4 bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-1.5 text-[10px] text-slate-500 font-mono pointer-events-none select-none">
                                Click & Drag Ship to reposition
                            </div>
                        </div>
                    </div>

                    {/* Right Pane - Parameter Side Controller */}
                    <div className="bg-white rounded-3xl border border-[#E9E5DD] shadow-xl p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6 border-b border-[#E9E5DD]/60 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Compass className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-serif font-black text-primary">Propulsion Controller</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine Calibration Panel</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* 1. Gravity Mode Toggle */}
                                <div>
                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5">1. Gravity Field Mode</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            { key: 'normal', label: 'Earth (9.8)', icon: ArrowDown, color: 'hover:border-rose-400 hover:text-rose-600' },
                                            { key: 'zero', label: 'Zero-G (0)', icon: Sparkles, color: 'hover:border-sky-400 hover:text-sky-600' },
                                            { key: 'inverse', label: 'Inverse (-4.9)', icon: ArrowUp, color: 'hover:border-emerald-400 hover:text-emerald-600' }
                                        ].map((g) => (
                                            <button
                                                key={g.key}
                                                onClick={() => setGravityMode(g.key)}
                                                className={`py-3 px-2 border rounded-xl flex flex-col items-center justify-center gap-1.5 text-[10px] font-bold transition-all ${
                                                    gravityMode === g.key
                                                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                                        : 'border-[#E9E5DD] text-slate-600 bg-slate-50/50 ' + g.color
                                                }`}
                                            >
                                                <g.icon className="w-4 h-4" />
                                                {g.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* 2. Shield Intensity Slider */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                            <Shield className="w-3.5 h-3.5 text-sky-500" /> 2. Shield Field Intensity
                                        </label>
                                        <span className="font-mono text-xs text-sky-600 font-bold">{shieldIntensity}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={shieldIntensity}
                                        onChange={(e) => setShieldIntensity(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                                    />
                                    <p className="text-[9px] text-slate-400 mt-1">Blocks gravity and curves falling asteroids dynamically around the ship.</p>
                                </div>

                                {/* 3. Propulsive Force Slider */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                            <Zap className="w-3.5 h-3.5 text-amber-500" /> 3. Propulsive Thrust Power
                                        </label>
                                        <span className="font-mono text-xs text-amber-600 font-bold">{propulsiveForce} N</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="500"
                                        value={propulsiveForce}
                                        onChange={(e) => setPropulsiveForce(parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                    />
                                    <p className="text-[9px] text-slate-400 mt-1">Thruster force applied when clicking &quot;Fire Thrusters&quot;.</p>
                                </div>

                                {/* 4. Mass Signature Toggle */}
                                <div>
                                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5">4. Ship Mass Signature</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { key: 'positive', label: 'Positive Mass', desc: 'Attracted to Gravity' },
                                            { key: 'negative', label: 'Negative Mass', desc: 'Repelled by Gravity' }
                                        ].map((m) => (
                                            <button
                                                key={m.key}
                                                onClick={() => setMassSignature(m.key)}
                                                className={`py-3 px-4 border rounded-xl text-left transition-all ${
                                                    massSignature === m.key
                                                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                                        : 'border-[#E9E5DD] text-slate-600 bg-slate-50/50 hover:bg-slate-50'
                                                }`}
                                            >
                                                <div className="text-[10px] font-bold">{m.label}</div>
                                                <div className={`text-[8px] mt-0.5 ${massSignature === m.key ? 'text-sky-200' : 'text-slate-400'}`}>{m.desc}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Action Buttons */}
                        <div className="mt-8 pt-6 border-t border-[#E9E5DD]/60 space-y-3">
                            <button
                                onMouseDown={() => setIsThrusterActive(true)}
                                onMouseUp={() => setIsThrusterActive(false)}
                                onMouseLeave={() => setIsThrusterActive(false)}
                                onTouchStart={() => setIsThrusterActive(true)}
                                onTouchEnd={() => setIsThrusterActive(false)}
                                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-xl ${
                                    isThrusterActive
                                        ? 'bg-amber-500 text-white shadow-amber-500/20 scale-[0.98]'
                                        : 'bg-primary text-white hover:bg-primary-dark shadow-primary/20'
                                }`}
                            >
                                <Zap className="w-4 h-4" />
                                {isThrusterActive ? 'Thrusters Active...' : 'Hold to Fire Thrusters'}
                            </button>

                            <button
                                onClick={handleReset}
                                className="w-full py-3.5 border border-[#E9E5DD] hover:border-slate-400 text-slate-500 hover:text-slate-700 font-bold text-xs uppercase tracking-wider rounded-2xl transition-colors flex items-center justify-center gap-2"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                Reset Sandbox
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
