import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png"; // New image import

const assets: { card: string; dialog: string[] } = {
  card: img1,
  dialog: [img1, img2, img3], // Updated array
};

export default assets;
