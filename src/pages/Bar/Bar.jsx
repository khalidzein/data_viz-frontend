import React from "react";
import BarChart from "../../components/BarChart/BarChart";
import DashHeader from "../../components/DashHeader/DashHeader";
import { Box } from "@mui/material";

const Bar = () => {
    return (
        <Box m="20px">
            <DashHeader title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    );
};

export default Bar;
