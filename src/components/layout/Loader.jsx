import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Loader({ onComplete }) {
    const preloaderRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            // 1. Letters slide up smoothly
            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            // 2. The 10 black columns slide down (0.1s stagger between each)
            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
            // 3. Letters fade out WITH matching stagger to create the wipe effect
            .to('.name-text span', { 
                autoAlpha: 0,
                duration: 0.3,
                stagger: 0.1, // Matches the column stagger perfectly
            }, '<0.3') // Triggers 0.3s after the first column starts falling (right as it hits the letter)
            
            // 4. Clean up the preloader wrapper after everything finishes
            .to(preloaderRef.current, { 
                autoAlpha: 0,
                duration: 0.5 
            }, '+=0.2'); 
        },
        { scope: preloaderRef }
    );

    // We split your name into an array so we can stagger each letter
    const name = "PRATEEK".split("");

    return (
        <div className="fixed inset-0 z-[100] flex" ref={preloaderRef}>
            {/* Generate the 10 curtain columns */}
            {[...Array(10)].map((_, i) => (
                <div key={i} className="preloader-item h-full w-[10%] bg-[#03040b]"></div>
            ))}

            <p className="name-text flex text-[20vw] lg:text-[200px] font-anton text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden z-10">
                {name.map((char, i) => (
                    <span key={i} className="inline-block translate-y-full">
                        {char}
                    </span>
                ))}
            </p>
        </div>
    );
}