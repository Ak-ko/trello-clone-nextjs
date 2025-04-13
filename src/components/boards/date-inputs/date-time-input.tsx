import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useState } from "react";

export default function DateTimeInput({
    label,
    onDateChange,
    onTimeChange,
    includeTime = true,
}: {
    label: string;
    onDateChange?: (date: Date | undefined) => void;
    onTimeChange?: (time: string | undefined) => void;
    includeTime?: boolean;
}) {
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        if (!checked) {
            setDate("");
            setTime("");
        }
    }, [checked]);

    useEffect(() => {
        const parsedDate = date
            ? new Date(`${date}T${time || "00:00"}`)
            : undefined;
        onDateChange?.(parsedDate);
        onTimeChange?.(time || undefined);
    }, [date, time]);

    const handleChecked = () => {
        setChecked((prev) => !prev);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
    };

    return (
        <fieldset className="border border-gray-200 p-3 rounded-lg">
            <legend className="text-sm inline-block mb-1 font-bold">
                {label}
            </legend>
            <div className="flex items-center gap-2">
                <Checkbox onClick={handleChecked} checked={checked} />
                <div className="flex items-center gap-2">
                    <input
                        className={`bg-white block w-[140px] px-3 py-1 border shadow-md rounded ${
                            !checked ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        type="date"
                        disabled={!checked}
                        onChange={handleDateChange}
                        value={date}
                    />
                    {includeTime && (
                        <input
                            className={`bg-white block w-[100px] px-3 py-1 border shadow-md rounded ${
                                !checked ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            type="time"
                            disabled={!checked}
                            onChange={handleTimeChange}
                            value={time}
                        />
                    )}
                </div>
            </div>
        </fieldset>
    );
}
