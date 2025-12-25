const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";
const VERSION = process.env.APP_VERSION || "v1";

app.get("/", (req, res) => {
  res.json({
    message: "PROJECT 5 – CI/CD + Docker + ENV + TAG",
    environment: ENV,
    version: VERSION,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
