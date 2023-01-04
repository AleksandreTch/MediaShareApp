import React, {useContext, useState} from "react";

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext);
}

export function LynxProvider({children}){
    const [isPlaying, setIsPlaying] = useState(false)

    return(
        <StateContext.Provider
        value = {{
            isPlaying,
            setIsPlaying,
        }}>
            {children}
        </StateContext.Provider>
    )
}