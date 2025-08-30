import {AlignLeft} from "lucide-react";
import {useState} from "react";

const Description = (props) => {
    const [styles, setStyles] = useState("opacity-50");
    const {description, setDescription} = props;
    return (
        <div className="flex gap-4 ">
            <AlignLeft className="stroke-accent"/>
            <textarea className={`bg-primary text-base text-primary outline-0 border-2 border-accent hover:opacity-100 opacity-50 transition-opacity rounded w-full h-40 p-2`}
                      placeholder="Add a description"
                      onMouseOver={() => {
                          setStyles("opacity-100");
                      }}
                      onMouseLeave={() => {
                          setStyles("opacity-50");
                      }}
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
            />
        </div>
    )
}

export default Description;