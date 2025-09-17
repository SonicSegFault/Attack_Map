import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { GlobeEffect } from "../theme/globeEffect";
import LeftText from "../components/LeftText";
import usearcsData from "../api/ArcDataApi";

export default function GlobeSection() {
    const arcsData = usearcsData();
    const globeRef = useRef<any>(null);
    const [visibleArcs, setVisibleArcs] = useState<any[]>([]);

    useEffect(() => {
        if (!globeRef.current) return;
        const controls = globeRef.current.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
    }, []);

    // Randomize arcs every 3s
    useEffect(() => {
        //setInterval(callback_function, delay)
        const interval = setInterval(() => {
            const count = Math.floor(Math.random() * 4) + 3; // 3–6 arcs
            const shuffled = [...arcsData].sort(() => 0.5 - Math.random());
            setVisibleArcs(shuffled.slice(0, count));
        }, 3000);
        return () => clearInterval(interval);
    }, [arcsData]);

    return (
        <section className="flex w-full h-screen bg-black">
            {/* Left - Text */}
            <LeftText arcs={visibleArcs}/>

            {/* Right - Globe */}
            <div className="relative w-[60%] h-screen flex items-center justify-center overflow-hidden">
                <GlobeEffect>
                    <Globe
                        ref={globeRef}
                        width={600}
                        height={500}
                        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
                        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                        backgroundColor="rgba(0,0,0,1)"
                        arcsData={visibleArcs.map(a => ({ ...a, arcAltitude: 0.2 }))}
                        arcColor={() => "#ffffff"}
                        arcDashLength={0.3}
                        arcDashGap={0.7}
                        arcDashAnimateTime={3000}
                        arcLabel={(d: any) =>
                            `<div style="font-family:monospace;">
                            <div><strong>IP:</strong> ${d.ipAddress}</div>
                            <div><strong>Country:</strong> ${d.countryCode}</div>
                            <div><strong>Last:</strong> ${new Date(d.lastReportedAt).toLocaleString()}</div>
                            </div>`
                        }
                    />
                </GlobeEffect>
            </div>
        </section>
    );
}
