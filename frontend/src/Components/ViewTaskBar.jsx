import Steps from "./Steps.jsx";
import Description from "./Description.jsx";
import Calendar from "./Calendar.jsx";
import {Plus, SquarePen, X} from 'lucide-react';
import React from 'react';

const ViewTaskBar = (props) => {
  const {expandView, setExpandView,
      setTasksView,
      addTask, editTask, taskName, setTaskName,
      steps, setSteps, step, setStep, description, setDescription,
      clickToView} = props;

    const removeStep = (event, index) => {
        event.preventDefault();
        setSteps((prev) => prev.filter(() => !prev[index]));
        setStep("");
    }

    return (
        <form onSubmit={clickToView === true ? editTask:addTask} className={`${expandView} min-h-screen bg-primary overflow-auto`}>
            <section className="flex flex-col gap-6 relative">
              <div>
                <input className="bg-primary h-12 text-4xl text-primary outline-0 font-bold pb-2" type="text" placeholder="Title"
                value={taskName} onChange={(event) => setTaskName(event.target.value)}/>
                <hr />
              </div>
                {steps.map((addedStep, index) => {
                    return <div className={`flex justify-between border-2 border-accent rounded box-border p-2`}>
                        <p className={"text-base text-primary"}>{addedStep}</p>
                        <button onClick={(event) => removeStep(event, index)}>
                            <X className={"stroke-accent"}/>
                        </button>
                    </div>
                })}
              <Steps step={step} setSteps={setSteps} setStep={setStep}/>
              <Description description={description} setDescription={setDescription}/>
            </section>
            <section className="flex gap-2 self-end">
              <button onClick={() => {
                  setExpandView("hidden");
                  setTasksView("w-full");
              }} className="flex cursor-pointer w-max hover:bg-tertiary bg-primary transition-bg duration-[0.4s] px-4 py-2 rounded border border-accent text-primary">
                Cancel
              </button>
                {clickToView === true ? <button type="submit" onClick={editTask} className="flex w-max bg-accent  px-4 py-2 rounded border border-accent text-primary">
                    <SquarePen className="stroke-primary w-4 h-4 box-content pt-1 pr-2" />
                    Edit task
                </button> : <button type="submit" className="flex w-max bg-accent  px-4 py-2 rounded border border-accent text-primary">
                    <Plus className="stroke-primary w-4 h-4 box-content pt-1 pr-2" />
                    Add task
                </button>}
            </section>
        </form>
    )
}

export default ViewTaskBar;