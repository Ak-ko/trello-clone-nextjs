"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import MenuBar from "./menu-bar";
import Heading from "@tiptap/extension-heading";
interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
}
export default function RichTextEditor({
    content,
    onChange,
}: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc ml-3",
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal ml-3",
                    },
                },
                heading: false,
            }),
            Heading.configure({
                levels: [1, 2, 3],
            }).extend({
                renderHTML({ node, HTMLAttributes }) {
                    const level = node.attrs.level;
                    const levelClasses: { [key: number]: string } = {
                        1: "text-2xl font-bold mt-4 mb-2",
                        2: "text-xl font-bold mt-3 mb-2",
                        3: "text-lg font-bold mt-2 mb-1",
                    };

                    return [
                        `h${level}`,
                        {
                            ...HTMLAttributes,
                            class: levelClasses[level] || "font-bold",
                        },
                        0,
                    ];
                },
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Highlight,
        ],
        content: content,
        editorProps: {
            attributes: {
                class: "min-h-[156px] border border-t-0 rounded-b-md bg-slate-50 py-2 px-3 focus:outline-primary",
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });
    return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent className="prose-headings" editor={editor} />
        </div>
    );
}
