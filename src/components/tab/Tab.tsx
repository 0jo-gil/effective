import TabList from "@/components/tab/TabList";
import TabPanel from "@/components/tab/TabPanel";
import {PropsWithChildren} from "react";
import TabListItem from "@/components/tab/TabListItem";

const Tab = ({children}: PropsWithChildren) => {
    return (
        <div>
            <h1>TAB</h1>
            {children}
        </div>
    )
}

export default Tab;

Tab.List = TabList;
Tab.ListItem = TabListItem;
Tab.Panel = TabPanel;
