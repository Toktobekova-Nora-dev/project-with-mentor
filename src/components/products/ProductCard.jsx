import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/details/${item._id}`)}
      sx={{ maxWidth: 345, textAlign: "center" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </CardContent>
      <img
        style={{ maxWidth: "300px", width: "100%" }}
        src={item.image}
        alt=""
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {item.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
