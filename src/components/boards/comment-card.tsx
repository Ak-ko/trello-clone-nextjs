import { CommentT, UserT } from "@/@types/board";
import { formatDistanceToNow } from "date-fns";
import React, { useMemo } from "react";

import MemberAvater from "./member-avater";

export default function CommentCard({ comment }: { comment: CommentT }) {
    const timeAgo = useMemo(() => {
        return formatDistanceToNow(new Date(comment.createdAt as string), {
            addSuffix: true,
        });
    }, [comment]);

    return (
        <div className="flex items-start gap-2 bg-primary/10 p-2 rounded-lg shadow">
            <MemberAvater member={comment.member as UserT} />
            <div className="w-full">
                <div className="flex items-center gap-3">
                    <span>{comment.member?.name}</span>
                    <span>{timeAgo}</span>
                </div>
                <div className="bg-primary/20 p-2 rounded my-2">
                    {comment.content}
                </div>
            </div>
        </div>
    );
}
