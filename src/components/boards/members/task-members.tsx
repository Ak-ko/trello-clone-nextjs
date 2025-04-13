import React from "react";
import MemberAvater from "../member-avater";
import { UserT } from "@/@types/board";

export default function TaskMembers({ members }: { members: UserT[] }) {
    return (
        members?.length > 0 && (
            <div>
                <span className="font-bold text-xs mb-1 inline-block">
                    Members
                </span>
                <div className="flex items-center ml-2">
                    {members?.map((member) => (
                        <MemberAvater
                            className="-ml-2 w-8 h-8"
                            key={member.id}
                            member={member}
                        />
                    ))}
                </div>
            </div>
        )
    );
}
