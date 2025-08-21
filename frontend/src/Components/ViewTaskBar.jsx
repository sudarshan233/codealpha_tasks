import Steps from "./Steps.jsx";
import Description from "./Description.jsx";
import Calendar from "./Calendar.jsx";
import { Plus } from 'lucide-react';
import React, { useState } from 'react';

const ViewTaskBar = (props) => {
  const {expandView, addTask} = props;
    return (
        <section className={`${expandView} `}>
            <section className="flex flex-col gap-6 relative">
              <div>
                <input className="bg-primary text-4xl text-primary outline-0 font-bold pb-2" type="text" placeholder="Title" />
                <hr />
              </div>
              <Steps />
              <Description />
            </section>

            <section className="flex gap-2 self-end">
              <button className="flex w-max hover:bg-tertiary bg-primary transition-bg px-4 py-2 rounded border border-accent text-primary">
                Cancel
              </button>
              <button className="flex w-max bg-accent  px-4 py-2 rounded border border-accent text-primary">
                <Plus className="stroke-primary w-4 h-4 box-content pt-1 pr-2" />
                Add task
              </button>
            </section>
        </section>
    )
}

export default ViewTaskBar;