import { motion } from "framer-motion";

type ZoopProps = {
    children: string;
};

const DURATION=0.25;
const STAGGER=0.025;

const Zoop = ({ children }: ZoopProps) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden max-w-full whitespace-nowrap uppercase sm:text-4xl lg:text-7xl md:text-6xl font-mono text-white font-bold leading-tight"
            style={{
                lineHeight:0.95
            }}
        >
            <div>
                {children?.split("").map((l,i)=>{
                    return <motion.span 
                    variants={{
                        initial: {y:0},
                        hovered: {y:"-100%"}
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER*i
                    }}
                    className="inline-block"
                    key={i}>{l}</motion.span>
                })}
            </div>
            <div className="absolute inset-0">
                {children?.split("").map((l,i)=>{
                    return <motion.span
                    variants={{
                        initial: {y:"100%"},
                        hovered: {y:0}
                    }}
                    transition={{
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER*i
                    }}
                    className="inline-block"
                    key={i}>{l}</motion.span>
                })}
            </div>
        </motion.div>
    );
};

export default Zoop;
