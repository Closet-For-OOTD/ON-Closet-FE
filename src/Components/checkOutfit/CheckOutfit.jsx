import React from "react";
import { Link } from "react-router-dom";
import Closet from "../makeCloset/onlineCloset/Closet";
import Outfit from "./outfit/Outfit";
import CustomButton from "../button/CustomButton";
import { Box, Drawer, List, Toolbar } from "@mui/material";

export default function CheckOutfit(props) {
  const drawerWidth = 340;
  const drawer = (
    <div>
      <Toolbar>
        <h1>Closet</h1>
      </Toolbar>
      <List>
        <Link to="/upload">
          <CustomButton content="Add Cloth" />
        </Link>
        <Closet modalvalue="outfit" />
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
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
        <Outfit />
      </Box>
    </Box>
  );
}
