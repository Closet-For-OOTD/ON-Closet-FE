import React, { useState } from "react";
import {
  PiTShirtBold,
  PiPantsBold,
  PiCoatHangerBold,
  PiBootBold,
} from "react-icons/pi";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export default function ResponsiveDrawer(props) {
  const drawerWidth = 340;

  const drawer = (
    <div>
      <Toolbar />

      <List>
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
        ))}
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
          <Typography variant="h6" noWrap component="div">
            Check Your Outfit
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
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
        <Typography>내용작성</Typography>
      </Box>
    </Box>
  );
}
