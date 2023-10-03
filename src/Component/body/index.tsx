import React from 'react'
import { Box, styled, Grid, Paper, Stack, } from '@mui/material'
import Body1 from './body1';
import Body2 from './body2';
import Body3 from './body3';

type Props = {}

export default function Body({ }: Props) {
  const CustomBody = styled(Box)({
    backgroundColor: "#111111",
    height: "100%",
    width: "100%",
    padding: "30px"
  })

  return (
    <CustomBody >
      <Body1 />

      <Body2 />

      <Body3 />
    </CustomBody>
  )
}