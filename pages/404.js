import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/player");
    }, 1600);
  }, []);

  console.log(router.route);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-[black] via-blue-500/10  to-[black]">
      <div className="border-[2px] mb-[10rem] py-6 px-10 animate-scaleUpDown">
        <h1 className="text-[2.5rem] text-[red] animate-scaleUpDown ">
          WRONG PIN
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
