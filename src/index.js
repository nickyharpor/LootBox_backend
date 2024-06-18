const express = require("express");

const app = express();
const port = parseInt(process.env.PORT ?? "4700");

app.listen(port, () => console.info("Server running on %d", port));