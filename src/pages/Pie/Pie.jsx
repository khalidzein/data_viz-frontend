import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import DashHeader from "../../components/DashHeader/DashHeader";
import { Box } from "@mui/material";

const Pie = () => {
    return (
        <Box m="20px">
            <DashHeader title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    );
};

export default Pie;
