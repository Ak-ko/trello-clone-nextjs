import React, { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function DatePicker() {
    const [date, setDate] = useState<Date | undefined>();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
