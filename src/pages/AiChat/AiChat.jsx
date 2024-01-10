import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Hero from "../../components/AiChat/Hero/Hero";
import AiBot from "../../components/aibot/aibot";
import { useNavigate } from "react-router-dom";
function AiChat() {
  const navigate = useNavigate();

  useEffect(() => {
    const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));

    if (!sessionStorageUser) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Box>
      <Hero />
      <AiBot />
    </Box>
  );
}
export default AiChat;
