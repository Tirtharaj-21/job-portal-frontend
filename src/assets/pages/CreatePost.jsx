import React, { useState } from "react";
import Header from "../Component/Header";
import cimage from "../picture/createImage.png";
import { Box, styled, Typography, TextField, Button } from "@mui/material";
import Dropdown from "../Component/Dropdown";
import { savepost } from "../Service/api";
import { useNavigate } from "react-router-dom";
import { routhpath } from "../Routes/route";

const Component = styled(Box)({
  padding: "80px 200px",
  background: "#F5F5F5",
});
const Container1 = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: 20,
  padding: "0 70px",
  background: "#FFFFFF",
  " & > p": {
    fontSize: 35,
    fontWeight: 700,
    opacity: ".7",
  },
});

const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  padding: 20,
  background: "#FFFFFF",
  borderRadius: 20,
  "& > *": {
    marginTop: "20px !important",
  },
});

const defaultobj = {
  profile: "",
  type: "",
  description: "",
  experience: "",
  technology: [],
  salary: "",
};

export default function CreatePost() {
  const [data, setData] = useState(defaultobj);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const navigate = useNavigate();

  const saveJob = async () => {
    await savepost(data);
    navigate(routhpath.post);
  };

  const options = {
    type: ["Online", "Offline"],
    experience: ["0-2 years", "3-5 years", "5-8 years", "8 and more years"],
    technology: [
      "Java",
      "JavaScript",
      "Angular",
      "React",
      "Node.js",
      "Express.js",
      "Docker",
      "AWS",
      "HTML",
      "CSS",
      "C",
      "C++",
      "C#",
      "Python",
    ],
    salary: [
      "Rs 0-300000",
      "Rs 300000-500000",
      "Rs 500000-800000",
      "Rs 800000-1300000",
      "Rs1300000-more ",
    ],
  };
  return (
    <>
      <Header />
      <Component>
        <Container1>
          <Typography>Create a job post</Typography>
          <img src={cimage} alt="create" width={350} />
        </Container1>
        <FormWrapper>
          <TextField
            placeholder="Job Title"
            name="profile"
            onChange={handleChange}
          />
          <Dropdown
            label="Job Type"
            id="job-type-label"
            value={data.type}
            handleChange={handleChange}
            name="type"
            options={options.type}
          />
          <TextField
            placeholder="Job Description"
            name="description"
            onChange={handleChange}
          />
          <Dropdown
            label="Experience"
            id="job-experience-label"
            value={data.experience}
            handleChange={handleChange}
            options={options.experience}
            name="experience"
          />
          <Dropdown
            label="Technology"
            id="job-technology-label"
            value={data.technology}
            handleChange={handleChange}
            options={options.technology}
            name="technology"
            multiple
          />
          <Dropdown
            label="Salary"
            id="job-salary-label"
            value={data.salary}
            handleChange={handleChange}
            options={options.salary}
            name="salary"
          />
          <Button onClick={() => saveJob()} variant="contained">
            save job
          </Button>
        </FormWrapper>
      </Component>
    </>
  );
}
