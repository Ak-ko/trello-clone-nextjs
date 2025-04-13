import React from "react";
import { DateRangeT } from "../due-date-picker";
import { format } from "date-fns";

export default function Dates({ dateRange }: { dateRange: DateRangeT }) {
    return (
        (dateRange?.from || dateRange?.to) && (
            <div className="text-sm">
                <span className="text-xs font-bold">Dates</span>
                <div className="bg-primary/10 font-bold shadow-primary/20 shadow text-primary px-3 py-1 flex items-center gap-2">
                    {dateRange?.from && (
                        <span>{format(dateRange.from, "LLL dd, yyyy")}</span>
                    )}
                    {dateRange?.from && dateRange?.to && <span>-</span>}
                    {dateRange?.to && (
                        <span>{format(dateRange.to, "LLL dd, yyyy")}</span>
                    )}
                </div>
            </div>
        )
    );
}
