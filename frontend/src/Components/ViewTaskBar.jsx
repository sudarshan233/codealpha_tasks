import Steps from "./Steps.jsx";
import Description from "./Description.jsx";
import Calendar from "./Calendar.jsx";

const ViewTaskBar = () => {
    return (
        <div className="flex flex-col gap-6 rounded-tl-2xl bg-primary p-6 w-2/5 h-screen">
            <div>
                <input className="bg-primary text-4xl text-primary outline-0 font-bold pb-2" type="text" placeholder="Title" />
                <hr />
            </div>
            <Steps />
            <Description />
            <Calendar />
        </div>
    )
}

export default ViewTaskBar;