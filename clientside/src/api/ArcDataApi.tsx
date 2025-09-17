import { useEffect, useState } from "react";
import axios from "axios";

const ArcDataApi = () => {
    const [attacks, setAttacks] = useState([]);

    useEffect(() => {
        const fetchAttack = async () => {
            try {
                const res = await axios.get("https://attack-map.onrender.com/attacks/getattacks")
                setAttacks(res.data);
            } catch (err) { console.log(err) }
        }
        fetchAttack();
            const interval = setInterval(fetchAttack, 7 * 60 * 60 * 1000);
            return () => clearInterval(interval);
    }, [])

    return attacks
}

export default ArcDataApi;