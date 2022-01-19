import React from "react";
import DashboardContent from "./DashboardContent";
import DashboardNav from "./DashboardNav";

function Dashboard({children})    {
    return(
        <div>
            <DashboardNav />
            {children}
        </div>
    )
}

export default Dashboard