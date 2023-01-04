
import React, { useRef } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
      width: '100%',
    },
  });

const PlayerDetails = (props) => {
    return(
        <Box sx={{display:'flex', alignItems:'center' }}>
        <CoverImage>
            <img
            className="w-[25rem]"
            src={props.song.img_src}
            alt={props.song.title}/>
        </CoverImage>
       
        <Box sm={{ml: 1.5, minWidth: 0}}>
            
            <Typography 
                        color='white' 
                        variant="caption"
                        sx={{
                            fontWeight:'500',
                            marginLeft:'2rem',
                        }} 
                        >{props.song.title}
            </Typography>
            <Typography color='white'
                        sx={{
                            fontSize:'1rem', 
                            marginLeft:'2rem'
                        }} 
                        noWrap >{props.song.artist}
            </Typography>   
        </Box>
    </Box>
    )
}

export default PlayerDetails;