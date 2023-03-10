import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import {
  StyledNameTypography,
  StyledIconButton,
  StyledCardContent,
} from "./styles";

interface CocktailCardProps {
  src: string;
  name?: string;
  id: string;
  category?: string;
}

export const CocktailCard = (props: CocktailCardProps) => {
  return (
    <Grid xs={12} sm={5} md={4}>
      <Card sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="100%"
          image={props.src}
          alt={props.name}
        />
        <StyledCardContent sx={{ p: 3 }}>
          <StyledNameTypography gutterBottom variant="h5" component="div">
            {props.name}
          </StyledNameTypography>
          <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
            {props.category}
          </Typography>
          <CardActions sx={{ p: 0, mt: 3, position: "relative" }}>
            <StyledIconButton
              aria-label="arrow"
              href={`drink/${props.id}/details`}
            >
              <ArrowForwardIcon />
            </StyledIconButton>
          </CardActions>
        </StyledCardContent>
      </Card>
    </Grid>
  );
};
