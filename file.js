const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "example.txt");

async function handleFile() {
    try {
        await fs.writeFile(filePath, "Hello from Node.js");

        const data = await fs.readFile(filePath, "utf8");

        console.log("File content:", data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

handleFile();