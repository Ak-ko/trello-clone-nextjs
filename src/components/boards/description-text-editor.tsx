import React, { useState } from "react";
import { TextIcon } from "lucide-react";
import { Button } from "../ui/button";

import RichTextEditor from "../rich-editor/rich-text-editor";

export default function DescriptionTextEditor({
    onSave,
}: {
    onSave: (content: string) => void;
}) {
    const [content, setContent] = useState("");

    const handleSave = () => {
        onSave?.(content);
    };

    return (
        <div className="my-8">
            <div className="flex items-center gap-2 mb-3">
                <TextIcon size={20} />
                <span className="text-xs font-bold">Description</span>
            </div>
            <div className="w-full">
                <RichTextEditor content={content} onChange={setContent} />
            </div>

            <div className="my-2 flex items-center gap-2">
                <Button onClick={handleSave} className="cursor-pointer">
                    Save
                </Button>
            </div>
        </div>
    );
}
