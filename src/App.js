import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stepper1 from "./Component/Steppers/Stepper1";
import Stepper2 from "./Component/Steppers/Stepper2";
import Header from "./Component/Header/Header";
import ProfileCard from "./Component/ProfileCard/ProfileCard";
import { Alert } from "@mui/material";
import { updateProfileData } from "./Services/Api";
const steps = ["Personal Information", "Address", "Final Check"];

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: "",
    dob: "",
    height: "",
    weight: "",
    luckyNumber: "",
    color: "",
    street: "",
    pinCode: ""
  });
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  console.log(activeStep);
  const handleNext = async () => {
    let newSkipped = skipped;

    if (activeStep === steps.length - 1) {
      await updateProfileData(form);
    }

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function onChangeHandler(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Header />
      <Container className=" h-100 max-height-80-percentage mt-24px">
        <Box
          className="h-100 pt-24 pb-24"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          {activeStep === 3 && (
            <Alert severity="success">Form submitted successfully!</Alert>
          )}
          <ConditionalRender condition={activeStep !== 3}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption"></Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </ConditionalRender>
          <ConditionalRender condition={activeStep === steps.length}>
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {/* All steps completed - you&apos;re finished */}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          </ConditionalRender>
          <ConditionalRender
            condition={activeStep === steps.length}
          ></ConditionalRender>
          {/* Forms */}

          <section className="max-width-70 mx-auto">
            <ConditionalRender condition={activeStep === 0}>
              <Stepper1
                onChange={(event) => {
                  onChangeHandler(event);
                }}
                value={form}
              />
            </ConditionalRender>

            <ConditionalRender condition={activeStep === 1}>
              <Stepper2
                onChange={(event) => {
                  onChangeHandler(event);
                }}
                value={form}
              />
            </ConditionalRender>

            <ConditionalRender condition={activeStep === 2}>
              <ProfileCard value={form} />
            </ConditionalRender>
          </section>

          {/* Footer buttons */}
          <ConditionalRender condition={activeStep !== steps.length}>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </ConditionalRender>
        </Box>
      </Container>
    </>
  );
}

const ConditionalRender = ({ condition, children }) => {
  return condition ? children : "";
};
