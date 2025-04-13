import { boards } from "@/data/boards";

import React from "react";
import BackButton from "@/components/back-button";
import DroppableCardSection from "@/components/boards/droppable-card-section";
import MemberAvater from "@/components/boards/member-avater";

export default async function BoardPage({
    params,
}: {
    params: { id: number };
}) {
    const { id } = await params;

    const board = boards?.find((board) => board.id === Number(id));

    if (!board) {
        return (
            <div className="container mx-auto my-11">
                <h1 className="mb-5">Board not found</h1>
            </div>
        );
    }

    return (
        <div>
            <div className="container mx-auto my-11">
                <div className="my-11">
                    <BackButton />
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-4 mb-11">
                        <h1 className="font-bold">{board.name}</h1>
                        <p className="text-gray-500 text-sm">
                            {board.description}
                        </p>
                    </div>

                    <div className="flex">
                        {board.members.map((member) => (
                            <MemberAvater
                                className="-ml-2 cursor-pointer w-8 h-8"
                                key={member.id}
                                member={member}
                            />
                        ))}
                    </div>
                </div>

                <DroppableCardSection />
            </div>
        </div>
    );
}
