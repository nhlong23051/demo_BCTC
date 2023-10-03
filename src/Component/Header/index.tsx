import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Body from '../body';

export default function HeaderCpn() {
    const Header = styled(Box)({
        backgroundColor: "#0A1D42",
        height: "99px",
        width: "100%",
        display: "flex",
        justifyContent: 'space-between',

    })

    const HeaderLeft = styled(Typography)({
        display: "flex",
    })

    const HeaderRight = styled(Typography)({
        display: "flex",
    })

    return (
        <div style={{width:"100%"}}>
            <Header position="static" >
                <HeaderLeft sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ color: "#E76224", fontSize: "26px", fontWeight: "800", fontFamily: "Roboto", padding: "0 24px" }}>STOCK RATING</Typography>
                    <Typography sx={{ color: "#576072", fontSize: "26px", fontWeight: "800", fontFamily: "Roboto" }}>SECTOR RATING</Typography>
                </HeaderLeft>

                <HeaderRight>
                    <Typography
                        sx={{ position: "relative", borderRadius: "50px", height: "44px", width: "74px", border: "2px solid #A5ACBC", margin: "17px 12px 38px 0" }}>
                        <DarkModeOutlinedIcon
                            sx={{ left: "3px", top: "3px", fontSize: "35px", backgroundColor: "#E76224", color: 'white', position: "absolute", borderRadius: "50%" }} />
                    </Typography>

                    <div
                        style={{ border: "2px solid #A5ACBC", height: "44px", width: "185px", margin: "17px 12px 38px 0", display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex" }}>
                            <LanguageOutlinedIcon sx={{ width: "26px", height: "26px", margin: "8px 8px 10px 12px", color: "white" }} />
                            <Typography sx={{ fontSize: "16px", fontWeight: "400", fontFamily: "Roboto", margin: "8px 0", color: "white" }} >Tiếng Việt</Typography>
                        </div>
                        <ArrowDropDownIcon sx={{ color: "white", margin: "8px 0" }} />
                    </div>

                    <div
                        style={{ border: "2px solid #A5ACBC", height: "44px", width: "185px", margin: "17px 28px 38px 0", display: "flex", justifyContent: "space-between", position: "relative" }}>
                        <div style={{ display: "flex" }}>
                            <AccountCircleIcon sx={{ width: "26px", height: "26px", margin: "8px 8px 10px 12px", color: "white" }} />
                            <Typography sx={{ fontSize: "16px", fontWeight: "400", fontFamily: "Roboto", margin: "8px 0", color: "white" }} >Tiếng Việt</Typography>
                        </div>
                        <ArrowDropDownIcon sx={{ color: "white", margin: "8px 0" }} />
                        <div style={{ position: "absolute", color: "white", top: "45px", display: "flex" }}>
                            <Typography sx={{ fontSize: "15px", fontWeight: "400", fontFamily: "Roboto" }}>Thời gian còn lại:</Typography>
                            <span style={{ color: "#E76224", fontSize: "15px", fontWeight: "700", fontFamily: "Roboto", margin: "0 4px" }}>313</span>
                            <span style={{ fontSize: "15px" }}>ngày</span>
                        </div>
                    </div>
                </HeaderRight>
            </Header >
            <Body />
        </div>
    );
}