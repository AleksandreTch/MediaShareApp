import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Player from "../../components/player/Player";
import { useState, useEffect } from "react";
import {useRouter} from 'next/router';
import MyVideo from "../../components/videoPlayer/MyVideo";
// images

//tracks
// import SurfaceTrack from '../../public/assets/tracks/Surface.mp3';
// import VtopiaTrack from '../../public/assets/tracks/VTOPIA.mp3';
// import StepGrandmaTrack from '../../public/assets/tracks/StepGrandma.mp3';
// import DisclosureTrack from '../../public/assets/tracks/HelpMeLoseMyMind.mp3';
// import CazzetteTrack from '../../public/assets/tracks/SheWantsMeDead.mp3';

function PlayerPage(props){
    const router = useRouter();

    // Video Input Data
    const [videos, setVideo] = useState([

        {
            "id": "680696",
            "title" : "BLUE PLANET NEWS",
            "by" : "Krypto",
            "poster" : `/assets/Tumbnails/video1.jpg`,
            "src" : `/assets/video/video3.mp4`
        },
    ])

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [nextVideoIndex,setNextVideoIndex] = useState(currentVideoIndex + 1);
    const [showTitle, setShowTitle] = useState(true);
    const [showBy, setShowBy] = useState(true);

    useEffect(()=>{
        setNextVideoIndex(()=>{
            if(currentVideoIndex + 1 > videos.length - 1){
                return 0;
            } else {
                return currentVideoIndex + 1;
            }
        });
        },[currentVideoIndex]);

    return(
        <div>
            <Navbar imgSrc="/assets/logo/LynxLogo.svg"/>
            <div className="text-[#071739] flex center items-center 
                            flex-col text-center bg-black ">
                <MyVideo
                    className=' flex items-center justify-center
                                w-screen h-[60vh]
                                md:h-[80vh] lg:h-[80vh]'
                    currentVideoIndex={currentVideoIndex}
                    setCurrentVideoIndex={setCurrentVideoIndex}
                    nextVideoIndex={nextVideoIndex}
                    videos={videos}
                    
                />
            </div>
            <Footer className="translate-y-[19rem] md:translate-y-[10.5rem]"/>
        </div>
    )
}

export default PlayerPage;