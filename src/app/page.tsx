import { boards } from "@/data/boards";

import React from "react";
import BoardCard from "@/components/boards/board-card";

export default function Home() {
    return (
        <section className="container mx-auto my-11">
            <h1 className="mb-5">Boards</h1>
            <main className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {boards?.map((board) => (
                        <BoardCard key={board.id} board={board} />
                    ))}
                </div>
            </main>
        </section>
    );
}
