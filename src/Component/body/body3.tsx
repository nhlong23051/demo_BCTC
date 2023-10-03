import React from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Select, InputLabel, FormControl } from '@mui/material'
import "./style.css"
type Props = {}

export default function Body3({ }: Props) {
    return (
        <div className='flex'>
            <div className='rounded' style={{ backgroundColor: "#262626", height: "424px", width: "25%", margin: "10px" }}>
                <div className='m-4 h-1/3 w-full mt-6'>
                    <div className='flex h-full'>
                        <div className=' rounded-xl text-center bg-green-700 w-1/3'>
                            <div className='font-normal text-base mt-5 text-white'>STOCK RATING</div>
                            <div className='font-extrabold text-7xl text-white'>92</div>
                        </div>

                        <div className=' rounded-xl text-center bg-blue-700 h-28 w-28 mx-4'>
                            <div className='font-normal text-sm mt-5 text-white'>ĐIỂM CƠ BẢN</div>
                            <div className='font-extrabold text-5xl text-white'>92</div>
                        </div>

                        <div className=' rounded-xl text-center bg-blue-700 h-28 w-28'>
                            <div className='font-normal text-sm mt-5 text-white'>SỨC MẠNH GIÁ</div>
                            <div className='font-extrabold text-5xl text-white'>92</div>
                        </div>
                    </div>
                </div>

                <div className='m-4 h-1/3 w-full flex items-center'>
                    <div className='text-base font-normal' style={{ width: "25%", color: "#A5ACBC" }}>Xu hướng ngắn hạn</div>
                    <div style={{ border: "1px solid #39C85E", width: "35%", height: "80px" }} className='rounded-full flex items-center justify-center'>
                        <LightModeOutlinedIcon fontSize='large' sx={{ color: "#39C85E" }} />
                    </div>
                    <div style={{ width: "45%" }} className='px-7'>
                        <div className='font-normal text-base' style={{ color: "#A5ACBC" }}>Ngày</div>
                        <div className='text-xl text-white'>20/03/2023</div>
                    </div>
                </div>

                <div className='m-4 flex items-center'>
                    <div className='text-base' style={{ width: "25%", color: "#A5ACBC" }}>Khuyến nghị</div>
                    <div style={{ width: "35%" }}>
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: "red" }} id="demo-simple-select-label">BÁN</InputLabel>
                            <Select
                                sx={{ border: "1px solid red" }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >

                            </Select>
                        </FormControl>
                    </div>

                    <div className='pl-6' style={{ width: "35%" }}>
                        <div className='text-base' style={{ color: "#A5ACBC" }}>Giá đóng cửa:</div>
                        <div className='bg-black rounded h-10 flex items-center justify-center'>
                            <div className='text-white'>10,700</div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='rounded' style={{ backgroundColor: "#262626", height: "424px", width: "50%", margin: "15px" }}>
                <h2 className='text-2xl text-center py-6 text-white' style={{ fontFamily: "Roboto" }}>THÔNG TIN CƠ BẢN</h2>

                <div className='grid grid-cols-2'>
                    <div className='mx-2'>
                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>

                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>

                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>

                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>

                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>

                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>

                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>

                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>

                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>
                    </div>

                    <div className='mx-2'>
                        <div className='mx-3 py-1 flex justify-center' style={{borderBottom:"1px solid #576072",borderTop:"1px solid #576072" }}>
                            <div className='mx-3 text-base' style={{ color: "#A5ACBC" }}>Nhóm ngành</div>
                            <div className='mx-3 text-white'>Nhóm ngành L1</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='rounded' style={{ backgroundColor: "#262626", height: "424px", width: "25%", margin: "10px" }}>A</div>
        </div>
    )
}