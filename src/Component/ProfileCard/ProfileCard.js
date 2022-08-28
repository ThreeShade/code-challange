import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, TextField } from "@mui/material";

export default function ProfileCard({ value }) {

  return (
    <Card sx={{ boxShadow: "none", paddingTop: "24px", paddingBottom: "24px" }}>
      <CardActionArea className="  ">
        <CardMedia
          component="img"
          style={{ objectFit: "contain", width: "auto" }}
          height="150"
          image="https://thispersondoesnotexist.com/image"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Personal Information
          </Typography>
          <section className="stepper-form-section max-height-80-percentage">
            {Object.entries(value).map(([key, _value]) => (
              <React.Fragment key={_value}>
                <TextField
                  disabled
                  label={key}
                  className="mr-16px mb-16px"
                  value={_value}
                  // helperText={validate("name",value.fullName)?.message}
                  variant="standard"
                />
              </React.Fragment>
            ))}
          </section>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
