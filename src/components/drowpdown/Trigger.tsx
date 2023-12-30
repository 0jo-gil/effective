const Trigger = ({
                     label,
                     onClick
                 }: {
    label: string;
    onClick: () => void;
}) => {
    return (
        <div className={"trigger"} onClick={onClick}>
            <span className={"selection"}>{label}</span>
        </div>
    )
}

export default Trigger;

// 컴포넌트가 각자 가진 역할을 분리하고, 각자의 역할에 집중할 수 있도록 하기 위해 분리
// Trigger 컴포넌트는 클릭 시 Dropdown 컴포넌트의 isOpen 상태를 담당하고 selectedItem을 보여주는 역할을 한다.
