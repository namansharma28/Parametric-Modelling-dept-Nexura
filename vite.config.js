import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

// Custom plugin to copy the video file to the dist folder
const copyVideoPlugin = () => {
  return {
    name: "copy-video-plugin",
    closeBundle: async () => {
      // Source path of the video file
      const sourcePath = resolve(__dirname, "public", "laptop_bg.mov");
      // Destination path in the dist folder
      const destPath = resolve(__dirname, "dist", "laptop_bg.mov");

      // Check if the source file exists
      if (fs.existsSync(sourcePath)) {
        // Create a read stream from the source file
        const readStream = fs.createReadStream(sourcePath);
        // Create a write stream to the destination file
        const writeStream = fs.createWriteStream(destPath);

        // Pipe the read stream to the write stream
        readStream.pipe(writeStream);

        console.log("Video file copied to dist folder");
      } else {
        console.error("Video file not found in public folder");
      }
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyVideoPlugin()],
  base: "/Parametric-Modelling-dept-Nexura",
});
