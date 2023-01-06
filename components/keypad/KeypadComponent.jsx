import React ,{useState} from 'react';
import {BsFillBackspaceFill} from 'react-icons/bs';
import Link from 'next/link';
import Navbar from '../Navbar';

const KeypadComponent = (props) => {
    const [password, setPassword ] = useState('');
    
    const clearHandler = () => {
        setPassword('')
    }

    const backspaceHandler = () => {
        setPassword(password.substring(0,password.length - 1))
    }


    // TO DO: Map all the keypad keys to the keyboard inside the function below
    const keyboardInput = (e) => {
            if(e.keyCode == 48){
                setPassword((password) => `${password}0`)
            }
    }
    
    return(
        // keypad container
        <div className='flex w-screen h-screen animate-scaleUp' onKeyDown={keyboardInput}>
            
            <Navbar className="fixed w-full h-20 shadow-xl z-[100] " imgSrc="/assets/logo/LynxLogo.svg"/>
            
            {/* keypad */}

            <div className="w-[22rem] h-[35.75rem] m-auto rounded-[20px] translate-y-[-5rem]">
                
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
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}1`) }>
                            1 
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}2`) }>
                                                <div>2</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    A B C
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}3`) }>
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
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}4`) }>
                                                <div>4</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    G H I
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}5`) }>
                                                <div>5</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    J K L
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}6`) }>
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
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}7`) }>
                                                <div>7</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[1.65rem] translate-y-[-.75rem]">
                                                    P Q R S
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}8`) }>
                                                <div>8</div>
                                                <div className="absolute text-[.75rem]
                                                                ml-[2rem] translate-y-[-.75rem]">
                                                    T U V
                                                </div>
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}9`) }>
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
                                            hover:bg-white
                                            hover:text-black"
                                            onClick={clearHandler}
                                            >
                                                C
                        </button>
                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            translate-y-[-.2rem]
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
                        onClick={() => setPassword((password) => `${password}0`) }>
                                                0                                                
                        </button>
                        
                {/* Clear Button */}

                        <button className=" border-2 w-[6rem] h-[6rem] 
                                            rounded-[20px] text-4xl
                                            hover:bg-white
                                            hover:text-black"
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
                                    hover:bg-green-600
                                    hover:border-none
                                    hover:text-black
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