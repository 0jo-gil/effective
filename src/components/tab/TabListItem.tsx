import {ITabs} from "@/components/tab/TabUsage";

const TabListItem = ({tab, onTabClick}: { tab: ITabs, onTabClick: (id: number) => void }) => {
    const {id, title} = tab;

    return (
        <div onClick={() => onTabClick(id)}>
            <h2>{title}</h2>
        </div>
    )
}

export default TabListItem;
