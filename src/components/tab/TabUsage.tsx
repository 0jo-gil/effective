import Tab from "@/components/tab/Tab";
import useTab from "@/components/tab/useTab";

export interface ITabs {
    id: number;
    title: string;
    panel: string;
}

const TabUsage = ({tabs}: { tabs: ITabs[] }) => {
    const {
        onTabClick,
        tabData
    } = useTab(tabs);

    return (
        <Tab>
            <Tab.List>
                {tabs.map((tab: ITabs) => (
                    <Tab.ListItem
                        key={tab.id}
                        tab={tab}
                        onTabClick={onTabClick}
                    />
                ))}
            </Tab.List>
            <Tab.Panel>
                {tabData.panel}
            </Tab.Panel>
        </Tab>
    )
}

export default TabUsage;
