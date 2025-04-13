import { UserT } from "@/@types/board";
import React from "react";

export default function MemberList({
    members,
    children,
}: {
    members: UserT[];
    children: (member: UserT) => React.ReactNode;
}) {
    return members?.length > 0 ? (
        members.map((user) => (
            <React.Fragment key={user.id}>{children?.(user)}</React.Fragment>
        ))
    ) : (
        <h1 className="text-gray-500 text-sm mt-3 flex items-center justify-center min-h-[50px]">
            No members
        </h1>
    );
}
