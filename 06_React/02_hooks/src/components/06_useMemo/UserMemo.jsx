import { useMemo, useState } from "react";



const UserMemo = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(
        new Array(29_99).fill(0).map((_, i) => ({
            id: i,
            isSelected: i === 29_98,
        }))
    );

    const SelectedItem = useMemo(() => items.find((item) => item.isSelected),[items]);

    return (
        <>
            <div className="card">
                <h1>Count: {count}</h1>
                <h2>Seclected Item: {SelectedItem?.id}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    )
}

export default UserMemo;