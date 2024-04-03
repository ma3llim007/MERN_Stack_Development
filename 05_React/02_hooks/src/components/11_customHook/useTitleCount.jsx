import { useEffect } from "react";

export const useTitleCount = (count) => {
    useEffect(() => {
        if (count != 0) {
            document.title = `Counter: ${count}`;
        } else {
            document.title = 'Hooks';
        }
    }, [count]);
}