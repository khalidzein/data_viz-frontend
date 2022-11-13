import React from "react";
import DashHeader from "../../components/DashHeader/DashHeader";
import { Box } from "@mui/material";
import LineChart from "../../components/LineChart/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <DashHeader title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    );
};

export default Line;
