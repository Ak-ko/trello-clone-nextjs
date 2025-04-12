import { TaskCardT } from "@/@types/board";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

import CustomCheckBox from "../custom-checkbox";

export default function TaskCard({
    task,
    onCompleteTask,
}: {
    task: TaskCardT;
    onCompleteTask?: (taskId: number, isCompleted: boolean) => void;
}) {
    const handleChecked = (checked: boolean) => {
        onCompleteTask?.(task.id, checked);
    };

    return (
        <Card className="!p-3 rounded-xl cursor-pointer hover:shadow-lg group/task-card">
            <CardTitle hidden />
            <CardDescription hidden />

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
                        {!task.isCompleted ? (
                            <h3 className="text-sm font-semibold text-gray-800 select-none">
                                {task.name}
                            </h3>
                        ) : (
                            <del className="text-sm font-semibold text-gray-800 select-none">
                                {task.name}
                            </del>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
