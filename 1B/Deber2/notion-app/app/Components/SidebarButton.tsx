import {IconType} from "react-icons";
import React from "react";

interface SidebarButtonProps {
    icon: IconType,
    viewTitle: string,
}

const SidebarButton: React.FC<SidebarButtonProps> = (
    {icon: Icon, viewTitle}
) => {
    return (
        <div className={"sidebar-button"}>
            <Icon size={14} className={"icon-container"}/>
            <div className={"text-container"}>{viewTitle}</div>
        </div>
    );
}

export default SidebarButton;