import React from "react";
import DashHeader from "../../components/DashHeader/DashHeader";
import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart/GeographyChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Geo = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <DashHeader
                title="Geography Chart"
                subtitle="Simple Geography Chart"
            />
            <Box
                height="75vh"
                border={`1px solid ${colors.grey[100]}`}
                borderRadius="4px"
            >
                <GeographyChart />
            </Box>
        </Box>
    );
};

export default Geo;
