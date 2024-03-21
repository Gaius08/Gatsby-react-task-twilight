import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import SideBar from "./SideBar"
import "./layout.css"
import { Box, Typography } from "@mui/material"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header style={{width: "100%"}} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <main style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ display: "flex" }}>
            <SideBar />
            <div style={{ marginLeft: "10%", marginTop: "20px", flex: 1 }}>
              {children}
            </div>
          </div>
        </main>
        <footer style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 999 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "blue",
              backgroundColor: "grey",
              padding: "5px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", textTransform: "none" }}>
              Footer
            </Typography>
          </Box>
        </footer>
      </div>
    </>
  )
}

export default Layout
