import axios from "axios";

const ROBOFLOW_URL =
  "https://serverless.roboflow.com/avocado-defect-detection-k0vvs/1";
const API_KEY = "ehz2KfTki4bWawSBXCLP";

export interface Prediction {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  class: string;
}

export interface DetectionResponse {
  predictions: Prediction[];
}

export async function detectImage(base64: string): Promise<DetectionResponse | null> {
  try {
    const response = await axios({
      method: "POST",
      url: `${ROBOFLOW_URL}?api_key=${API_KEY}`,
      data: base64,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data;
  } catch (error) {
    console.log("Detection Error: ", error);
    return null;
  }
}
