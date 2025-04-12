export const keydownActions = {
    enter: (
        e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
        callback: () => void
    ) => {
        if (e.key === "Enter") {
            e.preventDefault();
            callback();
        }
    },
    escape: (
        e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
        callback: () => void
    ) => {
        if (e.key === "Escape") {
            e.preventDefault();
            callback();
        }
    },
};
