import React from "react";
import { Routes, Route } from "react-router-dom";

import FeedRepositorie from "../pages/FeedRepositorie";
import LikeRepositorie from "../pages/LikeRepositorie";

const RoutePages: React.FC = () => (
  <Routes>
    <Route path="/" element={<FeedRepositorie />} />
    <Route path="/like-repositories" element={<LikeRepositorie />} />
  </Routes>
);

export default RoutePages;
