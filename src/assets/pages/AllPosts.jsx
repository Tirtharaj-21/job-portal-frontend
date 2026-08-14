import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import { getAllposts } from "../Service/api";
import {
  Box,
  InputBase,
  Typography,
  Card,
  CardContent,
  styled,
} from "@mui/material";

const SearchWrapper = styled(Box)({
  marginTop: 74,
  display: "flex",
  justifyContent: "center",
  "& > div": {
    width: 500,
    height: 45,
    border: "1px solid #767676",
    borderRadius: 10,
    alignItems: "center",
    marginRight: 20,
    paddingLeft: "2%",
  },
});

const PostWrapper = styled(Box)({
  marginTop: 50,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  "& > div": {
    border: "1px solid #442d0",
    borderRadius: 10,
    margin: 10,
    width: "30%",
    height: 300,
  },
});

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await getAllposts();
      setPosts(response.data);
    };
    getData();
  }, []);

  let filteredPosts = posts.filter((p) => {
    return (
      p.profile.toLowerCase().includes(text.toLowerCase()) ||
      p.type.toLowerCase().includes(text.toLowerCase())
    );
  });
  // The entire component function runs again from top to bottom

  return (
    <>
      <Header />
      <SearchWrapper>
        <InputBase
          placeholder="Search by Job Title"
          onChange={(e) => {
            // console.log(e.target.value);
            setText(e.target.value);
          }}
        />
      </SearchWrapper>
      <PostWrapper>
        {filteredPosts.map((post) => (
          <Card key={post.id || post._id}>
            <CardContent>
              <Typography variant="h5">{post.profile}</Typography>
              <Typography>
                {post.type === "Offline" ? "Remote" : "Office"}
              </Typography>
              <Typography>Salary:{post.salary}</Typography>
              <Typography style={{ color: "#6f6f6f", margin: "10px 0" }}>
                {post.description.length > 150
                  ? post.description.substring(0, 150) + "..."
                  : post.description}
              </Typography>
              <Typography>
                <b>Experience:</b>
                {post.experience}
              </Typography>
              <Typography>
                <b>Technology:</b>
                {post.technology}
              </Typography>
              <Typography style={{ color: "#6f6f6f", marginTop: "auto" }}>
                posted on {new Date(post.createdAt).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </PostWrapper>
    </>
  );
};

export default AllPosts;
