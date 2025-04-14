import { MessageCircle } from "lucide-react";
import React from "react";
import MemberAvater from "./member-avater";
import CommentInput from "./comment-input";
import CommentsList from "./comments-list";

export default function CommentSection() {
    return (
        <div>
            <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="text-xs font-bold">Comment</span>
            </div>

            <CommentInput />

            <div className="my-11">
                <CommentsList />
            </div>
        </div>
    );
}
