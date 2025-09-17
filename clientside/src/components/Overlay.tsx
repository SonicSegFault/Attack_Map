// components/Overlay.tsx
type OverlayProps = {
    show: boolean;
    onClose: () => void;
};

const Overlay = ({ show, onClose }: OverlayProps) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="bg-black-900 text-white max-w-2xl p-8 rounded-2xl shadow-lg relative">
                <h2 className="text-3xl font-bold mb-4">How This App Works</h2>
                <p className="text-gray-300 mb-4">
                    This app is a live cybersecurity attack map built to help visualize
                    real-world threats in an intuitive way.
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>Threat Data:</strong> We fetch the{" "}
                        <span className="font-mono">blacklist snapshot</span> directly from{" "}
                        <a
                            href="https://www.abuseipdb.com/"
                            target="_blank"
                            className="underline text-blue-400"
                        >
                            AbuseIPDB
                        </a>{" "}
                        several times a day to ensure fresh, accurate data.
                    </li>
                    <li>
                        <strong>Data Refresh:</strong> Old entries are cleared automatically and
                        replaced by the newest IP intelligence. This ensures you are always
                        seeing the most recent global activity.
                    </li>
                    <li>
                        <strong>Attack Simulation:</strong> The frontend processes the IP
                        addresses, matches them with geo-location data, and animates them as{" "}
                        <span className="italic">attack arcs</span> across the globe.
                    </li>
                    <li>
                        <strong>Real-Time Feel:</strong> Although the source data is refreshed
                        periodically, the visualization simulates constant live attack traffic
                        for a dynamic experience.
                    </li>
                    <li>
                        <strong>Purpose:</strong> This map is not just a cool visualization,
                        it’s meant to raise awareness about the scale of cyber threats and how
                        they spread across the world.
                    </li>
                </ul>np

                <p className="mt-6 text-sm text-gray-400">
                    ⚠️ Note: This visualization is educational and awareness-focused, not a
                    real-time intrusion detection system.
                </p>

                <div className="flex justify-end my-10">
                    <button
                        onClick={onClose}
                        className="relative font-mono text-[16px] tracking-[2px]
                        text-white border-4 border-black px-3 py-1 
                        shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px]
                        active:shadow-none active:top-[5px] active:left-[5px] transition-all bg-black"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
