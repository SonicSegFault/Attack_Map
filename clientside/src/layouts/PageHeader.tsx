import { useState } from "react";
import Overlay from "../components/Overlay";


const PageHeader = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    return (
        <>
            <header className="flex justify-between items-center px-12 pt-12 text-white">
                {/* Left */}
                <div className="flex items-center gap-8">
                    {/* Profile placeholder */}
                    <img
                        src="/Profile.jpeg"
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <span className="font-mono text-2xl font-bold tracking-wide">Attack Map</span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowOverlay(true)}
                        className="relative font-mono text-[16px] tracking-[2px] 
                    text-white border-4 border-black px-3 py-1
                    shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] 
                    active:shadow-none active:top-[5px] active:left-[5px] transition-all bg-black"
                    >
                        Click Me
                    </button>
                </div>
            </header>
            <Overlay show={showOverlay} onClose={()=>setShowOverlay(false)}/>
        </>
    );
};

export default PageHeader;
