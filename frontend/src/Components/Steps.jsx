import {PlusCircle} from "lucide-react";
import {useState} from "react";

const Steps = (props) => {
    const [styles, setStyles] = useState("opacity-50");
    const {setSteps, step, setStep} = props;
    const addStep = (event) => {
        event.preventDefault();
        setSteps((prev) => [...prev, step]);
        setStep("");
    }

    return (
        <div className={`flex border-2 border-accent ${styles} rounded box-border p-2`} onMouseOver={() => {
            setStyles("opacity-100");
        }} onMouseLeave={() => {
            setStyles("opacity-50");
        }}>
            <input className="text-base text-primary bg-primary outline-0 w-full" placeholder="Add Step"
                   value={step} onChange={(event) => setStep(event.target.value)}/>
            <button onClick={addStep} className="bg-primary text-primary outline-0 rounded-full w-8 h-8 ml-2">
                <PlusCircle className="w-6 h-6 stroke-accent hover:opacity-100 opacity-50 transition-opacity"/>
            </button>
        </div>
    )
}

export default Steps;