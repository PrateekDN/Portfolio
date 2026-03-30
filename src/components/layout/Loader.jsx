import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Loader({ onComplete }) {
    const preloaderRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            // 1. INITIAL STATE (The Curtain Hide)
            // No fading here! We push them 120% down so they are completely hidden 
            // underneath our custom baseline mask, ready to slide up.
            gsap.set('.name-text span', { 
                yPercent: 120, 
                rotation: -15 
            });

            // 2. THE BUTTERY CURTAIN REVEAL + WAVE
            // Because they start opaque but hidden behind the baseline, 
            // animating yPercent creates the exact "sliding out of nowhere" effect.
            tl.to('.name-text span', {
                keyframes: [
                    // Shoots up out of the invisible mask, tilts, and overshoots the baseline
                    { yPercent: -15, rotation: 3, duration: 0.6, ease: "power3.out" },
                    // Glides perfectly down to rest on the baseline
                    { yPercent: 0, rotation: 0, duration: 0.5, ease: "power2.inOut" }
                ],
                stagger: 0.05, // Tight stagger for a continuous fluid wave
                force3D: true, // Hardware acceleration for buttery smoothness on all hz
            });

            // 3. THE 10 COLUMNS DROP
            tl.to('.preloader-item', {
                yPercent: 100,
                duration: 0.7,
                stagger: 0.05, // EXACTLY matches the text fade stagger below
                ease: "power4.inOut",
                force3D: true,
            }, "+=0.15"); // Waits a split second for the wave to finish settling

            // 4. THE SEAMLESS WIPE (Fading exactly as the strip touches the letter)
            tl.to('.name-text span', {
                autoAlpha: 0,
                yPercent: 15, // Pushes slightly down into the mask as they fade
                duration: 0.3,
                stagger: 0.05, // Matches the columns perfectly for the sweep effect
                force3D: true,
            }, '<0.25'); // Triggers 0.25s after the columns start falling (right as they hit the text)

            // 5. CLEANUP
            tl.to(preloaderRef.current, {
                autoAlpha: 0,
                duration: 0.3
            });
        },
        { scope: preloaderRef }
    );

    const name = "PRATEEK".split("");

    return (
        <div className="fixed inset-0 z-[100] flex bg-[#03040b]" ref={preloaderRef}>
            {/* Generate the 10 curtain columns */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className="preloader-item h-full w-[10%] bg-[#03040b]"></div>
            ))}

            {/* THE MAGIC MASK: [clip-path:inset(-100%_-50%_0_-50%)]
                - Top is -100% (allows the bounce to overflow upwards without clipping)
                - Left/Right is -50% (allows tilt without clipping)
                - Bottom is 0 (creates the SHARP invisible line for the curtain reveal)
            */}
            <p className="name-text flex gap-[4px] text-[20vw] lg:text-[200px] font-anton text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none z-10 [clip-path:inset(-100%_-50%_0_-50%)]">
                {name.map((char, i) => (
                    <span 
                        key={i} 
                        className="inline-block will-change-transform" 
                    >
                        {char}
                    </span>
                ))}
            </p>
        </div>
    );
}