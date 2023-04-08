import  {Stack,Box} from "@mui/material"
import  {colors} from "../constants/color"
import { Link } from "react-router-dom"
import SearchBar from './../search-bar/SearchBar';
const Navbar = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} p={2} sx={{
      position: "sticky",top:0,zIndex:999,background:colors.primary
    }}>
      <Link to={"/"}>
      <h3 className="nodirbek">Nodirbek</h3>
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  )
}

export default Navbar