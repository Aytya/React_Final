import React from "react";
import {Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions} from "../../Data/mockData";
import {DownloadDoneOutlined, Email, PointOfSale, PersonAdd,Traffic } from "@mui/icons-material";
import Header from "../../Components/Header/Header";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Box display = "flex" justifyContent = "space-between" alignItems = "center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadDoneOutlined sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            
        </Box>
    )

}
export default Dashboard;