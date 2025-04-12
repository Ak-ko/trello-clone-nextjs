import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

export const DndContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const sensors = useSensors(useSensor(PointerSensor));

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter}>
            {children}
        </DndContext>
    );
};
