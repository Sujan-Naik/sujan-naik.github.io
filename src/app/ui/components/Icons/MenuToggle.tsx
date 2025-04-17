"use client"

// Adapted from https://codesandbox.io/p/sandbox/81ww2d?file=%2Fsrc%2FMenuToggle.tsx%3A1%2C1-34%2C1
interface PathProps {
    variants?: { closed: { d: string }; open: { d: string } },
    d?: string,
    className?: string
}

const Path = (props: PathProps) => (
    <path
        fill="circle"
        strokeWidth="3"
        stroke="var(--foreground-primary)"
        strokeLinecap="round"
        {...props}
    />
);

interface MenuToggleProps {
    toggle: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({toggle}: MenuToggleProps) => {
    return (
        <button onClick={toggle} className={"p-5"}>
            <svg width="23" height="18" viewBox="0 0 23 18">
                <Path
                    d="M 2 2.5 L 20 2.5"
                    className="top"
                    variants={{
                        closed: {d: "M 2 2.5 L 20 2.5"},
                        open: {d: "M 3 16.5 L 17 2.5"}
                    }}
                />
                <Path d="M 2 9.423 L 20 9.423" className="middle"/>
                <Path
                    d="M 2 16.346 L 20 16.346"
                    className="bottom"
                    variants={{
                        closed: {d: "M 2 16.346 L 20 16.346"},
                        open: {d: "M 3 2.5 L 17 16.346"}
                    }}
                />
            </svg>
        </button>
    )
}

export default MenuToggle;
