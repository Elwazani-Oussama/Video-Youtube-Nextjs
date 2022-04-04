import ReactPlayer from 'react-player/youtube'


const YoutubeVideoPlayer = (props) => {
  const { id, playing } = props;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div>
      <ReactPlayer
        url={url}
        playing={playing}
        width='100%'
        className='lg:border-[13px] lg:border-[#ffffff62] rounded-[2px]'
      />
     </div>
  );
};
export {YoutubeVideoPlayer};









