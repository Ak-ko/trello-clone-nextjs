import React from "react";
import MemberAvater from "./member-avater";
import { users } from "@/data/boards";

export default function CommentInput() {
    const member = users[0];
    return (
        <div className="flex items-start gap-2 my-3">
            <MemberAvater className="w-8 h-8 mt-1" member={member} />
            <textarea
                className="min-h-[30px] max-h-[200px] resize-none overflow-hidden rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full"
                placeholder="Write a comment..."
                rows={1}
                onInput={(e: any) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        alert("Save A Comment !");
                    }
                }}
            />
        </div>
    );
}
