const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/user/111", (req, res, next) => {
  res.json({
    status: "success",
    student: {
      userId: 111,
      name: "manhtri",
      links: {
        feeds_url: "http://localhost:5000/feeds/111",
      },
    },
  });
});

app.get("/feeds/111", (req, res, next) => {
  res.json({
    status: "success",
    feeds: [
      {
        feedId: 1, 
        title: "title 01",
        like: 3,
        links: {
          like_url: "http://localhost:5000/like/1",
        },
      },
      {
        feedId: 2,
        title: "title 02",
        like: 4,
        links: {
          like_url: "http://localhost:5000/like/2",
        },
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`The server running at port ${PORT}`);
});
