import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PageFooter = ()=>{
    return (
        <div className="bg-black text-white flex flex-col items-center justify-center space-y-4 pt-20 pb-8">
        <div className="flex space-x-4">
          <IconButton className="hover:-translate-y-2 transition-transform">
            <AccountCircleIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton className="hover:-translate-y-2 transition-transform">
            <GitHubIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton className="hover:-translate-y-2 transition-transform">
            <LinkedInIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <p className="text-3x1 font-bold">Created by Suyog Acharya</p>
        <p className="text-xs">
          Copyright © SonicSegFault - SSF 2025
        </p>
      </div>
    )
}

export default PageFooter;