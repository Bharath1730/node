import fs from "fs";

// Write file (synchronously)
const fileName = "vikram.txt";
const movieDetails = `Movie: Leo, Date: 05/11/2025, Time: 9:00 AM`;

fs.writeFileSync(fileName, movieDetails);
console.log("✅ File written successfully!");

// Check if file exists before reading
if (fs.existsSync(fileName)) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err.message);
    } else {
      console.log("📄 File content:\n", data);
    }
  });
} else {
  console.log("⚠️ File does not exist");
}
