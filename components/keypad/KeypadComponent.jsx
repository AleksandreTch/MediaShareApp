import React ,{useState, useEffect} from 'react';
import {BsFillBackspaceFill} from 'react-icons/bs';
import Link from 'next/link';
import Navbar from '../Navbar';

const KeypadComponent = (props) => {
    const [password, setPassword ] = useState('');
    const [animateKey, setAnimateKey] = useState('');
    const [enterPressed, setEnterPressed] = useState(false);
    
    useEffect(() => {
        const enterPressHandler = (e) => {
            if( e.keyCode == 13 && password.length == 0){
              setEnterPressed(true);
            } else if (password.length != 0){
                setEnterPressed(false);
            }
          };
        document.addEventListener("keydown", enterPressHandler);

        return () => {
            document.removeEventListener("keydown", enterPressHandler);
        }
    }, []);
    
    const clearHandler = () => {
        setPassword('')
    }

    const backspaceHandler = () => {
        setPassword(password.substring(0,password.length - 1))
    }

    // TO DO: Map all the keypad keys to the keyboard inside the function below
    // const keyboardInput = (e) => {
    //         if(e.keyCode == 48){
    //             setPassword((password) => `${password}0`)
    //         }
    // }

    const onePressed = () => {
        setPassword((password) => `${password}1`);
        setEnterPressed(false);
    }
    const twoPressed = () => {
        setPassword((password) => `${password}2`);
        setEnterPressed(false);
    }
    const threePressed = () => {
        setPassword((password) => `${password}3`);
        setEnterPressed(false);
    }
    const fourPressed = () => {
        setPassword((password) => `${password}4`);
        setEnterPressed(false);
    }
    const fivePressed = () => {
        setPassword((password) => `${password}5`);
        setEnterPressed(false);
    }
    const sixPressed = () => {
        setPassword((password) => `${password}6`);
        setEnterPressed(false);
    }
    const sevenPressed = () => {
        setPassword((password) => `${password}7`);
        setEnterPressed(false);
    }
    const eightPressed = () => {
        setPassword((password) => `${password}8`);
        setEnterPressed(false);
    }
    const ninePressed = () => {
        setPassword((password) => `${password}9`);
        setEnterPressed(false);
    }
    const zeroPressed = () => {
        setPassword((password) => `${password}0`);
        setEnterPressed(false);
    }

    return(
        // keypad container
        <div className='flex flex-col w-screen h-screen bg-gradient-to-r from-[black] via-blue-500/40  to-[black]'>
            
            <Navbar imgSrc="/assets/logo/LynxLogo.svg"/>
            
            {/* keypad */}

            {/* Enter Pressed Error message */}
           { enterPressed ? <div className='flex justify-center  mt-[4rem]'>
                <p className='text-green-600 text-[1rem] md:text-[1.75rem] font-semibold animate-fadeOut opacity-0'>ENTER PIN</p>
            </div> : ""}

            <div className={enterPressed ? `w-[22rem] h-[35.75rem] animate-scaleUp m-auto mt-[1rem] rounded-[20px] translate-y-[-5rem]` : `w-[22rem] h-[35.75rem] animate-scaleUp m-auto rounded-[20px] translate-y-[-5rem]`}>
                
                {/* input screen */}
                
                <div className="flex w-[100%] h-[5rem]">
                    <input  type='password' 
                            maxlength='6' 
                            minlength='4' 
                            value={password}
                            className=" py-[.25rem] text-white 
                                        bg-[transparent] text-center 
                                        text-[2.5rem] tracking-[.75rem] 
                                        outline-none m-auto 
                                        w-[100%] h-[100%]"/> 
                </div>

                {/* nums 123 */}

                <div className="flex w-[100%] h-[7.5rem]">
                    <div className="m-auto space-x-4">
                        <button className= {`border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn`}
                        onClick={onePressed}>
                            1 
                        </button>
                        <button className={` border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn`}
                        onClick={twoPressed}>
                                                <div>2</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    A B C
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                        onClick={threePressed}>
                                                <div>3</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    D E F
                                                </div>
                        </button>
                    </div>
                </div>
                
                {/* nums 456 */}
                
                <div className="flex w-[100%] h-[7.5rem]">
                    <div className="m-auto space-x-4">
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                        onClick={fourPressed}>
                                                <div>4</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    G H I
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                        onClick={fivePressed}>
                                                <div>5</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    J K L
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                        onClick={sixPressed}>
                                                <div>6</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    M N O
                                                </div>
                        </button>
                    </div>
                </div>
                
                {/* nums 789 */}
                
                <div className="flex w-[100%] h-[7.5rem]">
                    <div className="m-auto space-x-4">
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                        onClick={sevenPressed}>
                                                <div>7</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[1.65rem] translate-y-[-.75rem]">
                                                    P Q R S
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                        onClick={eightPressed}>
                                                <div>8</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    T U V
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                        onClick={ninePressed}>
                                                <div>9</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[1.65rem] translate-y-[-.75rem]">
                                                    W X Y Z
                                                </div>
                        </button>
                    </div>
                </div>
                
                {/* nums * 0 # */}
                
                <div className="flex w-[100%] h-[7.5rem]">
                    <div className="m-auto space-x-4">
                        <button className=" border-2 w-[6rem] h-[6rem]
                                            translate-y-[-.16rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                                            onClick={clearHandler}
                                            >
                                                C
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            translate-y-[-.2rem]
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                        onClick={zeroPressed}>
                                                0                                                
                        </button>
                        
                {/* Clear Button */}

                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            focus:animate-pressBtn"
                                            onClick={backspaceHandler}>
                                            <BsFillBackspaceFill
                                                style={{
                                                    marginLeft:'1.75rem'
                                                }}
                                            />
                        </button>
                        
                    </div>
                </div>

                {/* Enter Button */}
                
                <Link href={`player/${password}`}>
                <div className="flex w-[100%] h-[4.5rem] ">
                    <div className="flex m-auto space-x-4 border-[2px] 
                                    w-[20rem] h-[4rem]
                                    rounded-[10px]
                                    hover:bg-green-700/40
                                    hover:border-none
                                    hover:text-white
                                    hover:font-semibold">
                        <h1 className='m-auto text-lg font-normal tracking-[1rem]'>
                            ENTER
                        </h1>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default KeypadComponent;