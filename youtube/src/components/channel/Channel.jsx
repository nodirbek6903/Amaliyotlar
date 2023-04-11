import { useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ApiService } from './../../services/api.service';
import { Box, Container } from "@mui/material";
import ChannelCard from './../channel-card/Channel-Card';
import Videos from './../videos/Videos';

function Channel() {
const [channelDetail,setChannelDetail] = useState()
const [videos,setVideos] =useState([])
  const {id} = useParams()

  useEffect(() => {
    const getData = async() => {
      try{
        const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setChannelDetail(dataChannelDetail.items[0])
        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        setVideos(dataVideo?.items)
      }
      catch(error){
        console.log(error);
      }
    }
    getData() 
  },[id])
  return(
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box width={"100%"} height={"200px"} zIndex={10} 
        sx={{
          backgroundImage: `url(${channelDetail?.brandingSettings.image?.bannerExternalUrl})`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          objectFit:"cover",
          backgroundRepeat:"no-repeat"
          }} />
        <ChannelCard video={channelDetail} marginTop={"-100px"} />
      </Box>
      <Container maxWidth={"90%"} sx={{margin:"0 auto"}}>
          <Videos videos={videos} />
      </Container>
    </Box>
  )
}

export default Channel