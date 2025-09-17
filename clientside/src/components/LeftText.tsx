import { motion, useScroll, useTransform } from "framer-motion";
import Zoop from "../theme/zoop";
import Reveal from "../theme/RevealZoop";
import { useEffect, useState } from "react";

const LeftText = ({ arcs }: { arcs: any[] }) => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  const [showConsole, setShowConsole] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setShowConsole(v > 0.3);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <div className="w-[40%] flex flex-col justify-center pl-30 -translate-y-20">
      {/* Text block */}
      <motion.div
        style={{ opacity, y }}
        transition={{ ease: "easeInOut" }}
      >
        <Reveal><Zoop>Real-Time</Zoop></Reveal>
        <Reveal><Zoop>Attack&nbsp;Map</Zoop></Reveal>
        <p className="mt-4 text-lg text-gray-400 font-mono">
          root@system:~$ <span className="animate-blink">_</span>
        </p>
      </motion.div>

      {/* Console (appears below) */}
      {showConsole && (
        <div className="mt-8 mx-auto w-full max-w-md border border-white rounded-lg shadow-lg overflow-hidden">
          {/* Top bar like XP window */}
          <div className="flex items-center justify-between bg-white px-3 py-1">
            <span className="text-black font-mono text-sm">Attack Console</span>
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full cursor-pointer"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-4 bg-black text-white font-mono text-sm border-t border-white h-64 overflow-y-auto">
            {arcs.map((a, i) => (
              <div key={i} className="mb-2 flex justify-between items-center border-b border-gray-700 pb-1">
                <span className="mr-2">[{i + 1}]</span>
                <span className="flex-1">
                  {a.ipAddress} ({a.countryCode})
                </span>
                <span className="ml-2 text-white-400">
                  {new Date(a.lastReportedAt).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftText;
