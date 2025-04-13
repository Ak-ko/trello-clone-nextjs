import { BoardT } from "@/@types/board";

import React from "react";
import MemberAvater from "../member-avater";
import BoardMemberAssignButton from "./board-member-assign-button";

export default function BoardMembersSection({ board }: { board: BoardT }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex">
                {board.members.map((member) => (
                    <MemberAvater
                        className="-ml-2 cursor-pointer w-8 h-8"
                        key={member.id}
                        member={member}
                        showTooltip
                        tooltipText={member.name}
                    />
                ))}
            </div>

            <BoardMemberAssignButton />
        </div>
    );
}
