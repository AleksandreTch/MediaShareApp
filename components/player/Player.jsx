import React, { useState, useRef, useEffect } from "react";
import { useStateContext } from "../LynxProvider";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';


const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  color:'white',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

function Player(props) {
  const audioElement = useRef();
  const globalState = useStateContext();

  useEffect(() => {
    if(globalState.isPlaying){
      audioElement.current.play();
    } else{
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if(forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if(temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if(temp < 0){
          temp = props.songs.length - 1;
        }

        return temp;
      })
    }
  }

  // modifing duration of the track
  const theme = useTheme();
  const length = 200; 
  function formatDuration(value) {
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';



  return (
    <Box className="mt-[3rem] mb-[1rem]" sx={{width:'100%', overflow:'hidden'}}>
    <Widget>
    <audio
      src={props.songs[props.currentSongIndex].src}
      ref={audioElement}
    ></audio>
    <PlayerDetails song={props.songs[props.currentSongIndex]} />
        
    <PlayerControls
      isPlaying={globalState.isPlaying}
      setIsPlaying={globalState.setIsPlaying}
      SkipSong={SkipSong}
    />
   
    <div className='relative mt-[0.5rem] mb-[0.5rem] mr-[2rem] ml-[2rem]'>
    </div>
    </Widget>
    
  </Box>
  );
};

export default Player;
