import React from "react";
import Closet from "../makeCloset/onlineCloset/Closet";
import Outfit from "./outfit/Outfit";

// import {
//   PiTShirtBold,
//   PiPantsBold,
//   PiCoatHangerBold,
//   PiBootBold,
// } from "react-icons/pi";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  // ListItem,
  // ListItemButton,
  // ListItemText,
  Toolbar,
} from "@mui/material";

export default function CheckOutfit(props) {
  const drawerWidth = 340;
  const drawer = (
    <div>
      <Toolbar>
        <h1>Closet</h1>
      </Toolbar>
      <List>
        {/* <Closet value="outfit" />
        {["TOP", "BOTTOM", "OUTER", "SHOES"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {text === "TOP" ? (
                <PiTShirtBold />
              ) : text === "BOTTOM" ? (
                <PiPantsBold />
              ) : text === "OUTER" ? (
                <PiCoatHangerBold />
              ) : (
                <PiBootBold />
              )}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Closet modalvalue="outfit" />
        {/* {["TOP", "BOTTOM", "OUTER", "SHOES"].map((text, index) => (
          // <ListItem key={text} disablePadding>
          <ListItemButton>
            {text === "TOP" ? (
              <PiTShirtBold />
            ) : text === "BOTTOM" ? (
              <PiPantsBold />
            ) : text === "OUTER" ? (
              <PiCoatHangerBold />
            ) : (
              <PiBootBold />
            )}
            <ListItemText primary={text} />
          </ListItemButton>
          // </ListItem>
        ))} */}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <h1>Check Your Outfit</h1>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outfit />
      </Box>
    </Box>
  );
}
