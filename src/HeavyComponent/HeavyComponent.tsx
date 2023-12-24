import React from "react";

function HeavyComponent(props: { clickHandler: () => void }) {
    console.log("Heavy component renders");

    return (
        <div>
            <button onClick={props.clickHandler}>Print count from Heavy Component</button>
        </div>
    )
}

export const HeavyComponentMemoized = React.memo(HeavyComponent);