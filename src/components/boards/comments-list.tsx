import { comments } from "@/data/boards";
import React from "react";
import CommentCard from "./comment-card";

export default function CommentsList() {
    return (
        <div className="space-y-5 max-h-[200px] overflow-y-scroll">
            {comments?.map((c, indx) => (
                <CommentCard key={indx} comment={c} />
            ))}
        </div>
    );
}
