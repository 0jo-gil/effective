import {ITabs} from "@/components/tab/TabUsage";
import {useCallback, useEffect, useState} from "react";

const useTab: {
    (tabs: ITabs[]): {
        onTabClick: (id: number) => void;
        tabData: ITabs;
    };
} = (tabs: ITabs[]) => {
    const [tabId, setTabId] = useState<number>(tabs[0].id);
    const [tabData, setTabData] = useState<ITabs>(tabs[0]);

    useEffect(() => {
        const tabResult = tabs.find((tab: ITabs) => tab.id === tabId);
        setTabData(tabResult as ITabs);
    }, [tabId])

    const onTabClick = useCallback((id: number) => {
        setTabId(id);
    }, [tabId])

    return {
        onTabClick,
        tabData
    }
}
export default useTab;
