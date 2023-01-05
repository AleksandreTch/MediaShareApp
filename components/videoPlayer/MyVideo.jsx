import React, { useEffect, useState, useRef } from "react";
import { useStateContext } from "../LynxProvider";
import { BiSkipNext } from "react-icons/bi";

// https://drive.google.com/file/d/1ty2QQiNPMEFs1o_8HoSNqY5Clfu3ClM1/view?usp=sharing
// https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164

const MyVideo = (props) => {
  const globalState = useStateContext();
  const video = useRef();
  const [replay, setReplay] = useState(video.current);
  const [forward, setForward] = useState(video.current);
  const [backward, setBackward] = useState(video.current);

  useEffect(() => {
    if (globalState.isPlaying) {
      video.current.play();
    } else {
      video.current.pause();
    }
  });

//   const restartVideo = () => {
//     setReplay((video.current.currentTime = 0));
//   };


const SkipVideo = (foewards = true) => {
  if(forward) {
    props.setCurrentVideoIndex(() => {
      let temp = props.currentVideoIndex;
      temp++;

      if(temp > props.svideos.length - 1){
        temp = 0;
      }

      return temp;
    });
  } else {
    props.setCurrentVideoIndex(() => {
      let temp = props.currentVideoIndex;
      temp--;

      if(temp < 0) {
        temp = props.videos.length - 1;
      }

      return temp;
    })
  }
}

  return (
    <div className={props.className}>
      <div
        className=" mt-[8rem] md:mt-0 lg:mt-2
                    w-[480px] h-[320px] 
                    md:w-[568px] md:h-[281px]
                    lg:w-[680px] lg:h-[425px]
            bg-black"
      >
        <video
          className="   w-[480px] h-[320px] 
                        md:w-[588px] md:h-[301px] 
                        lg:w-[680px] lg:h-[425px]"
          ref={video}
          poster="/assets/Tumbnails/video1.jpg"
          loop
          controls
          autoPlay
          // src="/assets/video/video1.mp4"
          src={props.videos[props.currentVideoIndex].src}
          onClick={() => globalState.setIsPlaying(!globalState.isPlaying)}
        ></video>
        
        {/* controls */}
        <div
          className="flex text-white text-[3rem]"
        >
          <div className="cursor-pointer flex mr-auto hover:text-[#D2AE6D]">
            <BiSkipNext
              style={{
                transform:'rotate(180deg)'}}
                arialLabel='previous video'
                onClick={() => SkipVideo(false)} />
            <h2 className="text-[1rem] m-auto cursor-pointer">Previous</h2>
          </div>

          <div className="cursor-pointer flex ml-auto hover:text-[#D2AE6D]">
          <h2 className="text-[1rem] m-auto">Next</h2>
            <BiSkipNext
              ariaLabel="next video"
              onClick={() => SkipVideo()}
            />
          </div>
        </div>
        <div className="flex ml-[10%] md:ml-0 md:w-[100%] w-[80%] justify-between mt-0 md:mt-5">        
        <h1 className="text-white text-[1rem] md:text-[1.5rem] ">
          {`Title: ${props.videos[props.currentVideoIndex].title}`}
        </h1>
        <h1 className="text-white text-[1rem]  md:text-[1.5rem] ">
          {`By: ${props.videos[props.currentVideoIndex].by}`}
        </h1>
        </div>
      </div>
    </div>
  );
};

export default MyVideo;
