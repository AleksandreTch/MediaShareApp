import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Player from "../components/player/Player";
import { useState, useEffect } from "react";
import MyVideo from "../components/videoPlayer/MyVideo";
// images

//tracks
// import SurfaceTrack from '../../public/assets/tracks/Surface.mp3';
// import VtopiaTrack from '../../public/assets/tracks/VTOPIA.mp3';
// import StepGrandmaTrack from '../../public/assets/tracks/StepGrandma.mp3';
// import DisclosureTrack from '../../public/assets/tracks/HelpMeLoseMyMind.mp3';
// import CazzetteTrack from '../../public/assets/tracks/SheWantsMeDead.mp3';

function PlayerPage(props){

    const [songs, setSongs] = useState([
        {
            "id": "680143",
            "title" : "Arcus",
            "artist" : "The Life A19",
            "ablum" : "",
            "track" : "The Life A19",
            "year" : "2014",
            "duration": 254,
            "img_src" : `/assets/albumCovers/Note.webp`,
            "src" : `/assets/tracks/05_R1_The Life_A19__9 -Arcus.m4a`
        },
        {   
            "id": "873307",
            "title" : "Take 01",
            "artist" : "R2A",
            "ablum" : "",
            "track" : "",
            "year" : "2020",
            "duration": 383,
            "img_src" : `/assets/albumCovers/Note.webp`,
            "src" : `/assets/tracks/10_R2a_TrackTen_Take01.wav`
        },
        {   
            "id": "457582",
            "title" : "Excuse Me",
            "artist" : "R2",
            "ablum" : "Dont Talk",
            "track" : "Step Grandma",
            "year" : "2021",
            "duration": 168,
            "img_src" : `/assets/albumCovers/Note.webp`,
            "src" : `/assets/tracks/Excuse Me.mp3`
        },
        {   
            "id": "354515",
            "title" : "How Long I'm Just Human",
            "artist" : "R2",
            "ablum" : "",
            "track" : "Help Me Lose My Mind",
            "year" : "2014",
            "duration": 236,
            "img_src" : `/assets/albumCovers/Note.webp`,
            "src" : `/assets/tracks/How Long Im just human__•.mp3`
        },
        {   
            "id": "354515",
            "title" : "Jokers Wild",
            "artist" : "R2",
            "ablum" : "",
            "track" : "Help Me Lose My Mind",
            "year" : "2014",
            "duration": 236,
            "img_src" : `/assets/albumCovers/Note.webp`,
            "src" : `/assets/tracks/Jokers Wild.mp3`
        },
        {   
            "id": "354515",
            "title" : "Uncom",
            "artist" : "R2",
            "ablum" : "",
            "track" : "",
            "year" : "2014",
            "duration": 236,
            "img_src" : `/assets/albumCovers/Note.webp`,
            "src" : `/assets/tracks/PI Phunk01 Vox NK_Dm3 UNcom•.mp3`
        },
        {   
            "id": "354515",
            "title" : "Studio",
            "artist" : "R2",
            "ablum" : "",
            "track" : "",
            "year" : "2014",
            "duration": 236,
            "img_src" : `/assets/albumCovers/Note.webp`,
            "src" : `/assets/tracks/Track01 Studio.mp3`
        },
    ]) 

    const [videos, setVideo] = useState([
        {
            "id": "680143",
            "title" : "Fashion Week",
            "by" : "Urban Explorer",
            "poster" : `/assets/Tumbnails/video1.jpg`,
            "src" : `/assets/video/video1.mp4`
        },
        {
            "id": "680143",
            "title" : "Project Demo",
            "by" : "Urban Explorer",
            "poster" : `/assets/Tumbnails/video1.jpg`,
            "src" : `/assets/video/video2.mp4`
        },
    ])

    

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [nextVideoIndex,setNextVideoIndex] = useState(currentVideoIndex + 1);

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
            <Navbar/>
            <div className="text-[#071739] flex center items-center 
                            flex-col text-center bg-black ">
                <MyVideo
                    className=' flex items-center justify-center
                                w-screen h-[60vh]
                                md:h-[75vh] lg:h-[80vh]'
                    currentVideoIndex={currentVideoIndex}
                    setCurrentVideoIndex={setCurrentVideoIndex}
                    nextVideoIndex={nextVideoIndex}
                    videos={videos}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default PlayerPage;