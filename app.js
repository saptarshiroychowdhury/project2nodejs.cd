const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Hello from Node.js DevOps CI/CD Demo App!",
        status: "running",
        app: "nodejs-devops-demo"
    });
});

app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

