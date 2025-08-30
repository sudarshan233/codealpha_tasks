
const HandleEmptyTasks = () => {
    return (
        <div className={"flex flex-col justify-center items-center h-full w-full"}>
            <img src='/assets/Empty.gif' alt={'Illustration depicting that there are no tasks'} className={"w-80"}/>
            <h1 className={'text-primary'}>No Tasks to Master!!!</h1>
        </div>
    )
}

export default HandleEmptyTasks;