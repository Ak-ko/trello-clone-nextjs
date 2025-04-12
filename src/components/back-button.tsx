"use client";

import { ArrowLeft } from "lucide-react";
import React from "react";

export default function BackButton() {
    return (
        <div
            onClick={() => {
                window.history.back();
            }}
            className="flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
        >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Back</span>
        </div>
    );
}
