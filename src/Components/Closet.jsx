import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Closet.css";
// button - mui
import Button from "@mui/material-next/Button";
// image list - mui
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Closet() {
  const [clothes, setClothes] = useState("");

  // function showCloth(value) {
  //   return clothes.data?.map((cloth) =>
  //     cloth.type === value ? (
  //       <div key={cloth.id + cloth.type}>
  //         <img src={cloth.img} alt="cloth" />
  //       </div>
  //     ) : (
  //       ""
  //     )
  //   );
  // }

  function showCloth(value) {
    return (
      <ImageList sx={{ width: 200, height: 200 }} cols={1} rowheight={164}>
        {clothes.data?.map((cloth) =>
          cloth.type === value ? (
            <ImageListItem key={cloth.id + cloth.type}>
              <img
                src={`${cloth.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${cloth.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt="cloth"
                loading="lazy"
              />
            </ImageListItem>
          ) : (
            ""
          )
        )}
      </ImageList>
    );
  }

  // function showCloth(value) {
  //   return clothes.data?.map((cloth) =>
  //     cloth.type === value ? (
  //       <ImageList sx={{ width: 100, height: 40 }} cols={4} rowHeight={104}>
  //         <ImageListItem key={cloth.id + cloth.type}>
  //           <img
  //             src={`${cloth.img}?w=164&h=164&fit=crop&auto=format`}
  //             srcSet={`${cloth.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
  //             alt="cloth"
  //             loading="lazy"
  //           />
  //         </ImageListItem>
  //       </ImageList>
  //     ) : (
  //       ""
  //     )
  //   );
  // }

  useEffect(() => {
    try {
      axios.get("/list").then((data) => setClothes(data));
    } catch (e) {}
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="title">
          <span className="title-box">TOP</span>
          <span className="title-box"> BOTTOM</span>
          <span className="title-box">OUTER</span>
          <span className="title-box">SHOES</span>
        </div>
        <div className="box">
          <span className="close-box TOP">{showCloth("TOP")}</span>
          <span className="close-box BOTTOM">{showCloth("BOTTOM")}</span>
          <span className="close-box OUTER">{showCloth("OUTER")}</span>
          <span className="close-box SHOES">{showCloth("SHOES")}</span>
        </div>
        <div className="button">
          <Link to="/outfit">
            <Button
              style={{ fontFamily: "GoryeongStrawberry" }}
              color="secondary"
              disabled={false}
              size="large"
              variant="outlined"
            >
              ♡ ON - Closet
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
