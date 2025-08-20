import {useEffect, useState} from "react";
import {getCalendar} from "../../lib/calendar.js";
import {CalendarDays, ChevronsLeft, ChevronsRight, Clock} from "lucide-react";

const Calendar = () => {
    const [calendar, setCalendar] = useState([]);
    const [hour, setHour] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    useEffect(() => {
        setCalendar(getCalendar());
    },[])

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <div className="flex gap-4 text-sm">
            <CalendarDays className="stroke-accent box-content pt-2"/>
            <div className="flex flex-col gap-1">
                <div className="flex justify-evenly">
                    <ChevronsLeft className="stroke-accent hover:opacity-100 opacity-50 transition-opacity"/>
                    <h1 className="text-sm text-primary">August</h1>
                    <h1 className="text-sm text-primary">{new Date().getFullYear()}</h1>
                    <ChevronsRight className="stroke-accent hover:opacity-100 opacity-50 transition-opacity" />
                </div>
                <div className="grid grid-cols-7">
                    {days.map((day, index) => {
                        return (
                            <div key={index} className="text-primary text-xs text-center box-border p-1 rounded-xl">
                                {day}
                            </div>
                        )
                    })}
                    {calendar.map((day, index) => {
                        return (
                            <div key={index} className="bg-primary text-primary text-xs text-center box-border p-1 rounded-xl">
                                {day}
                            </div>
                        )
                    })}
                </div>
            </div>
            <Clock className="stroke-accent box-content pl-8 py-2"/>
            <div className="flex gap-1">
                <div className="text-primary py-2 px-4 h-max border border-accent rounded hover:bg-tertiary bg-primary transition-opacity">{hour}</div>
                <div className="text-primary py-2 px-4">:</div>
                <div className="text-primary py-2 px-4 h-max border border-accent rounded hover:bg-tertiary bg-primary transition-opacity">
                    {minutes < 10 ? 0 : null}
                    {minutes}</div>
            </div>
        </div>
    )
}

export default Calendar;