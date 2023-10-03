import React from 'react'
import { Box, styled, Grid, Paper, Stack, } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

type Props = {}

export default function Body({ }: Props) {
  const CustomBody = styled(Box)({
    backgroundColor: "#111111",
    height: "100%",
    width: "100%",
    padding: "30px",
    display: "flex"
  })

  return (
    <CustomBody >
      <div style={{ border: "1px solid #39C85E", margin: "10px", width: "100%", height: "90px", borderRadius: "5px", display: "flex", alignItems: "center" }}>
        <div style={{ padding: "0 20px", display: "flex", alignItems: "center", width: "40%" }}>
          <BackupIcon sx={{ color: "#39C85E", width: "50px", height: "50px" }} />
          <span style={{ color: "#39C85E", fontSize: "24px", fontWeight: "700", padding: "0 20px" }}>TÍN HIỆU MUA</span>
        </div>
        <div style={{ display: "flex", alignContent: "center", justifyContent: "space-around", width: "50%" }}>
          <div style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Inter", color: "white", padding: "0 20px" }}>BCG</div>
          <div style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Inter", color: "white", padding: "0 20px" }}>BCG</div>
          <div style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Inter", color: "white", padding: "0 20px" }}>BCG</div>
          <div style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Inter", color: "white", padding: "0 20px" }}>BCG</div>
        </div>
      </div>

      <div style={{ border: "1px solid #EA4245", margin: "10px", width: "100%", height: "90px", borderRadius: "5px", display: "flex", alignItems: "center" }}>
        <div style={{ padding: "0 20px", display: "flex", alignItems: "center", width: "40%" }}>
          <BackupIcon sx={{ color: "#EA4245", width: "50px", height: "50px" }} />
          <span style={{ color: "#EA4245", fontSize: "24px", fontWeight: "700", padding: "0 20px" }}>TÍN HIỆU MUA</span>
        </div>
        <div style={{ display: "flex", alignContent: "center", justifyContent: "space-around", width: "50%" }}>
          <div style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Inter", color: "white", padding: "0 20px" }}>BCG</div>
          <div style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Inter", color: "white", padding: "0 20px" }}>BCG</div>
          <div style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Inter", color: "white", padding: "0 20px" }}>BCG</div>
          <div style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Inter", color: "white", padding: "0 20px" }}>BCG</div>
        </div>
      </div>
    </CustomBody>
  )
}