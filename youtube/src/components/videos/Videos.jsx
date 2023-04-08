import { Stack, Box } from "@mui/material";
import ChannelCard from "../channel-card/Channel-Card";
import Loader from "../loader/Loader";
import  VideoCard from "../video-card/Video-card"
const Videos = ({videos}) => {
  if(!videos.length){
    return <Loader />
  }
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map(item => (
         <Box key={item.id.videoId}>
         {item.id.videoId && <VideoCard video={item} />}
         {item.id.channeld && <ChannelCard channelDetail={item} />}
       </Box>
      ))}
    </Stack>
  )
};

export default Videos;
