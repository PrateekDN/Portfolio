import { Icon } from "@iconify/react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useEffect, useRef } from "react";

gsap.registerPlugin(Observer);

const Marquee = ({
  items = [],
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
}) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const tlRef = useRef(null); // Local ref for timeline
  const obsRef = useRef(null); // Local ref for observer

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;

    gsap.set(items, {
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });

    gsap.set(items, { x: 0 });

    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length);
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }

    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }

  useEffect(() => {
    // Reset the itemsRef on every re-run to avoid old DOM nodes
    itemsRef.current = itemsRef.current.slice(0, items.length * 3);

    const timer = setTimeout(() => {
      // 1. Kill any existing instances for this specific marquee
      if (tlRef.current) tlRef.current.kill();
      if (obsRef.current) obsRef.current.kill();

      // 2. Initialize
      tlRef.current = horizontalLoop(itemsRef.current, {
        repeat: -1,
        paddingRight: 100, // Increased to ensure no overlap
        speed: 1.5,
        reversed: reverse,
      });

      obsRef.current = Observer.create({
        onChangeY(self) {
          let factor = 2.5;
          if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
            factor *= -1;
          }
          gsap
            .timeline({ defaults: { ease: "none" } })
            .to(tlRef.current, { timeScale: factor * 3, duration: 0.2, overwrite: true })
            .to(tlRef.current, { timeScale: reverse ? -1 : 1, duration: 1.2, ease: "power2.out" }, "+=0.1");
        },
      });
    }, 150); // Slightly longer delay to ensure lower marquee layout is solid

    return () => {
      clearTimeout(timer);
      if (tlRef.current) tlRef.current.kill();
      if (obsRef.current) obsRef.current.kill();
    };
  }, [items, reverse]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full h-24 md:h-[120px] flex items-center marquee-text-responsive whitespace-nowrap box-border ${className}`}
    >
      <div className="flex flex-nowrap min-w-max items-center">
        {/* Using 4 sets of items for the lower marquee to absolutely prevent gaps */}
        {[...items, ...items, ...items, ...items].map((text, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className="flex items-center px-12 gap-x-12 shrink-0 will-change-transform"
          >
            <span className="inline-block">{text}</span>
            <Icon icon={icon} className={`inline-block shrink-0 ${iconClassName}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;