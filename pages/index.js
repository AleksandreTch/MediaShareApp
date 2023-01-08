import React, {useEffect} from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/player')
    }, 1750);
  }, [])

  return (
    <div className="">
      <Head>
        <title>KRYPTO MX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Main />
      <Footer />
    </div>
  );
}
