// import {Counter} from "components";
import { Content, Tabs } from "components";
import "./Testing.scss";
import { Children, ReactNode } from "react";
import PopoverDropdown from "components/PopoverDropdown/PopoverDropdown";

type TabsProps = {
    children?: ReactNode;
    className?: string;
};

export default function Testing({ children, className }: TabsProps) {
    const ChildrenCount: number = Children.count(children);

    // const TabWrapperStyle: CSSProperties = {
    //     gridTemplateColumns: `repeat(${ChildrenCount}, 1fr)`,
    //     flexDirection: "column"
    // };

    return (
        <Content title="Testing">
            <div className="test-tab">
                {/* <PopoverDropdown
                    name="testName"
                    options={[
                        { linkTo: "#test1", title: "test1" },
                        { linkTo: "#test2", title: "test2" },
                        { linkTo: "#test3", title: "test3" }
                    ]}
                ></PopoverDropdown>
                <PopoverDropdown
                    name="testName"
                    options={[
                        { linkTo: "test1", title: "test1" },
                        { linkTo: "test2", title: "test2" },
                        { linkTo: "test3", title: "test3" }
                    ]}
                ></PopoverDropdown>
                <PopoverDropdown
                    name="testName"
                    options={[
                        { linkTo: "test1", title: "test1" },
                        { linkTo: "test2", title: "test2" },
                        { linkTo: "test3", title: "test3" }
                    ]}
                ></PopoverDropdown> */}
            </div>
        </Content>
    );
}
