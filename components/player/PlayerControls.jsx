import React from "react";
import { useStateContext } from "../LynxProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faForward,
    faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';


const PlayerControls = (props) => {
    const globalState = useStateContext();
    const theme = useTheme();
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

    return(
        <Box
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          mt:-1,
          marginTop:'0.75rem',
        }}
        >
          <IconButton  
          className="btnBkg"
          sx={{marginRight:'1rem'}}
          aria-label="previous song"  
          onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon className="p-[0.7rem] text-base border-none text-white outline-none bg-none rouded-full focus:text-[rgba(171,2,26,0.95)] hover:scale-110 hover:text-[#D2AE6D]" icon={faBackward} />
      </IconButton>
      <IconButton
        className="btnBkg"
        sx={{fontSize:'2.75rem'}}
        onClick={() => globalState.setIsPlaying(!globalState.isPlaying)}
      >
        <FontAwesomeIcon className="p-[1.25rem] text-4xl border-none text-white outline-none bg-none rouded-full focus:text-[rgba(171,2,26,0.95)] ease-in-out duration-300 hover:scale-110 hover:text-[#D2AE6D]" icon={globalState.isPlaying ? faPause : faPlay} />
      </IconButton>
      <IconButton 
        className="btnBkg"
        sx={{marginLeft:'1rem'}} 
        onClick={() => props.SkipSong()}>
        <FontAwesomeIcon className="p-[0.7rem] text-base border-none text-white outline-none bg-none rouded-full focus:text-[rgba(171,2,26,0.95)] hover:scale-110 hover:text-[#D2AE6D]" icon={faForward} />
      </IconButton>
      
    </Box>
    )
}  

export default PlayerControls;