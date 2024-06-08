import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const key = "5tIHeNlvOTskSLbZ_aIavcwIE4hWbuOA7EVwGAmxgoY";

const fetchImagesWithTopic = async (query) => {
  const response = await axios.get("/search/photos", {
    params: { client_id: key, query },
  });
  return response.data;
};

export default fetchImagesWithTopic;
