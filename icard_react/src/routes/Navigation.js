import React from "react";
import {BrowserRouter, Routes} from "react-router-dom";


export function Navigation() {
  console.log("routes -->", Routes);
  return (
    <BrowserRouter>
        <Routes>
          <h2>Navigation...</h2>
        </Routes>
    </BrowserRouter>

  );
}
