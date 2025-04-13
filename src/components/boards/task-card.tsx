import { TaskT, UserT } from "@/@types/board";
import { Card, CardContent } from "../ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

import CustomCheckBox from "../custom-checkbox";
import TaskCardDetails from "./task-card-details";

export default function TaskCard({
    task,
    onCompleteTask,
    onEditTask,
}: {
    task: TaskT;
    onCompleteTask?: (taskId: number, isCompleted: boolean) => void;
    onEditTask?: (taskId: number, name: string) => void;
    onSelectMembers?: (members: UserT[]) => void;
}) {
    const handleChecked = (checked: boolean) => {
        onCompleteTask?.(task.id, checked);
    };

    const handleEdit = (id: number, name: string) => {
        onEditTask?.(id, name);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="!p-3 rounded-xl cursor-pointer hover:shadow-lg group/task-card">
                    <CardContent className="!px-4">
                        <div className="flex items-center">
                            <CustomCheckBox
                                defaultChecked={task.isCompleted}
                                onChecked={handleChecked}
                                className={`${
                                    !task.isCompleted
                                        ? "invisible opacity-0 group-hover/task-card:visible group-hover/task-card:opacity-100 group-hover/task-card:mr-1.5"
                                        : "mr-1.5"
                                }   transition-all duration-500 mt-0.5`}
                            />
                            <div
                                className={`${
                                    !task.isCompleted &&
                                    "-translate-x-[20px] group-hover/task-card:translate-x-0"
                                } transition-all duration-500`}
                            >
                                <h3
                                    className={`${
                                        task.isCompleted && "line-through"
                                    }  text-sm font-semibold text-gray-800 select-none transition-all duration-500`}
                                >
                                    {task.name}
                                </h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[900px] border-primary/80 shadow-primary/20 shadow border-4">
                <TaskCardDetails onEdit={handleEdit} task={task} />
            </DialogContent>
        </Dialog>
    );
}
