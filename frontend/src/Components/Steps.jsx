import {PlusCircle} from "lucide-react";
import {useState} from "react";

const Steps = () => {
    const [styles, setStyles] = useState("opacity-50");
    return (
        <div className={`flex border-2 border-accent ${styles} rounded box-border p-2`} onMouseOver={() => {
            setStyles("opacity-100");
        }} onMouseLeave={() => {
            setStyles("opacity-50");
        }}>
            <input className="text-base text-primary bg-primary outline-0 w-full" placeholder="Add Step"/>
            <PlusCircle className="w-6 h-6 stroke-accent hover:opacity-100 opacity-50 transition-opacity" />
        </div>
    )
}

export default Steps;