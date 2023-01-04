import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
          router.push('/player')
        }, 1600);
      }, [])
    

    console.log(router.route)

    return(
        <div className="flex items-center justify-center w-screen h-screen">
            <h1 className="text-[2.5rem] text-[red] animate-scaleUpDown">WRONG PIN</h1>
        </div>
    )
}

export default ErrorPage;