import axios from "axios";
import { apiKey } from "../../test_keys";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: apiKey,
    },
});
