"use client";

import { defaultDroppableCards } from "@/data/boards";
import React, { useState } from "react";
import DroppableCard from "./droppable-card";
import AddDroppableCardButton from "./add-droppable-card-button";
import { DndContext } from "@dnd-kit/core";
import { DroppableCardT } from "@/@types/board";
import {
    BoardStateProvider,
    useBoardState,
} from "../context/board-state-context";

export default function DroppableCards() {
    return (
        <BoardStateProvider>
            <DroppableCardsInner />
        </BoardStateProvider>
    );
}

function DroppableCardsInner() {
    const { droppableCards, addDroppableCard, editDroppableCard, moveTask } =
        useBoardState();

    const handleDragOver = (event: any) => {
        // Optional: highlight drop targets
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active && over && active.data.current && over.id) {
            const { droppableId: fromDroppableId, taskId } =
                active.data.current;
            const toDroppableId = parseInt(
                String(over.id).replace("droppable-", "")
            );
            if (fromDroppableId !== toDroppableId) {
                moveTask(fromDroppableId, toDroppableId, taskId);
            }
        }
    };

    return (
        <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
            <div className={`flex items-start gap-4`}>
                {droppableCards.map((_dC) => (
                    <DroppableCard
                        key={_dC.id}
                        droppableCard={_dC}
                        onEdit={editDroppableCard}
                    />
                ))}
                <AddDroppableCardButton
                    onAddNewDroppableCard={addDroppableCard}
                />
            </div>
        </DndContext>
    );
}
