import KeypadComponent from "../../components/keypad/KeypadComponent";
import { useRouter } from "next/router";

function Player() {
    const router = useRouter();

    console.log(router.route);

    return(
        <div>
            <KeypadComponent/>
        </div>
    )
} 

export default Player;