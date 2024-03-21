import * as React from "react"
import { Link } from "gatsby"
import {Box,Typography} from '@mui/material';

const Header = ({ siteTitle }) => (
  <header>
    <Box sx={{display:'flex',justifyContent:'center',color:'blue',backgroundColor:'grey',padding:'5px'}}>
      <Typography sx={{ fontWeight: 'bold', textTransform: 'none' }}> REACT GATSBY TASk</Typography>
    </Box>
     
    
  </header>
)

export default Header
