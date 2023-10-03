import React from 'react'
import { Stack, Paper, styled, Input, InputAdornment } from "@mui/material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

type Props = {}

export default function Body2({ }: Props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div style={{ height: "121px", width: "auto", backgroundColor: "#262626", display: "flex", justifyContent: "space-between", borderRadius: "10px", margin: "8px" }}>
            <div style={{ width: "60%", display: "flex" }}>

                <div className='flex items-center justify-center'>
                    <div className='rounded-full bg-white w-12 h-12 flex items-center justify-center ml-6'>
                        <FavoriteBorderOutlinedIcon />
                    </div>
                    <div className='ml-6 '>
                        <div className='text-base text-white' >Mã CP</div>
                        <div className='text-2xl font-extrabold text-white'>TCH</div>
                    </div>
                </div>

                <div className='flex items-center justify-center '>
                    <div className='ml-6 ' style={{ borderLeft: "1px solid #576072" }}>
                        <div className='ml-6'>
                            <div className='text-base text-white' >Tên Công ty</div>
                            <div className='text-2xl font-extrabold text-white'>ĐT DV Tài chính Hoàng Huy</div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center '>
                    <div className='ml-6 ' style={{ borderLeft: "1px solid #576072" }}>
                        <div className='mx-6'>
                            <div className='text-base text-white' >Sàn GD</div>
                            <div className='text-2xl font-extrabold text-white'>HOSE</div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center '>
                    <div className='ml-6 ' style={{ borderLeft: "1px solid #576072" }}>
                        <div className='ml-6'>
                            <div className='text-base text-white flex items-center ' >
                                <FolderOutlinedIcon sx={{ width: "15px", height: "15px" }} />
                                <span className='ml-3'>Danh mục</span>
                            </div>

                            <div className=' font-normal flex' style={{ color: "#E76224" }}>
                                <div className='mr-5'>VN30</div>
                                <div>VNDIAMOND</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-red flex items-center justify-between w-1/4' style={{ width: "40%" }}>
                <div></div>
                <div className='w-3/4'>
                    <Input startAdornment={
                        <InputAdornment position="start">
                            <SearchOutlinedIcon sx={{ color: "white" }} />
                        </InputAdornment>
                    } sx={{ height: "40px", color: "white", width: "90%", backgroundColor: "#111", borderRadius: "5px" }} placeholder='Nhập mã cổ phiếu hoặc tên công ty' />
                    <div className='flex items-center mt-2'>
                        <div className='text-base font-normal' style={{ color: "#A5ACBC" }}>Tìm kiếm gần đây: </div>
                        <div className='flex justify-around'>
                            <div className='text-white mx-3'>BHC</div>
                            <div className='text-white mx-3'>BHC</div>
                            <div className='text-white mx-3'>BHC</div>
                            <div className='text-white mx-3'>BHC</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}