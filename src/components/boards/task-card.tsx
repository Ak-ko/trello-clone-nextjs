import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function TaskCard({
    task,
}: {
    task: { id: number; name: string };
}) {
    return (
        <Card className="!p-2 rounded-xl cursor-pointer hover:shadow-lg">
            <CardTitle hidden />
            <CardDescription hidden />

            <CardContent>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                        {task.name}
                    </h3>
                </div>
            </CardContent>
        </Card>
    );
}
