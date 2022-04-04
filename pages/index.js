import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { YoutubeVideoPlayer } from '../component/youtubePlayer';
import { useState } from 'react';



export default function Home({results}) {
  const[currentVideo, setCurrentVideo] = useState(results[4]);
  const[playing, setPlaying] = useState(false);
  return (
    <div className='bg-color'>
      <Head>
        <title>Video Youtube</title>
      </Head>
      <div className="mx-auto w-10/12 sm:max-w-7xl lg:flex flex-row-reverse justify-center">
        <div className="w-full lg:w-80 xl:w-[410px]">
          <YoutubeVideoPlayer id={currentVideo.snippet.resourceId.videoId} playing={playing}/> 
        </div>
      </div>
    </div>
  )
}



export async function getStaticProps(){
  const My_Video = 'YOUR_VIDEO_ID';
  const API_KEY = 'Your API KEY'
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${My_Video}&key=${API_KEY}&maxResults=15`;
  
  const response = await fetch(REQUEST_URL);
  const results = await response.json();
  
  return{
    props:{results: results.items},
    revalidate:10,
  }
}