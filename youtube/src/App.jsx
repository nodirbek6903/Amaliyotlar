import { Routes,Route } from "react-router-dom"
import { Box } from "@mui/system"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Channel from "./components/channel/Channel"
import VideoDetail from './components/VideoDetail/VideoDetail';
import Search from './components/search/Search';

const App = () => {
  return (
    <Box>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/channel/:id" element={<Channel />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/search/:id" element={<Search />} />
    </Routes>
    </Box> 
  )
}

export default App