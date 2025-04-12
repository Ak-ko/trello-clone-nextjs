import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import React from "react";

export default function BoardCard({
    board,
}: {
    board: { id: number; name: string; description: string };
}) {
    return (
        <Link href={`/board/${board.id}`} key={board.id}>
            <Card className="shadow-md hover:shadow-lg cursor-pointer">
                <CardTitle>
                    <div className="px-5">
                        <h1>{board.name}</h1>
                    </div>
                </CardTitle>
                <CardDescription className="px-5">
                    {board.description}
                </CardDescription>
            </Card>
        </Link>
    );
}
