import { apiConifg } from "../config/apiConfig";
import axios from "axios";

const getProducts =async () => {
  try {
    const res = await axios.get(apiConifg.API_BASE_URL);
    return {
      success: true,
      data: res.data['CatalogGeneratorJSONObjList']
    };
  } catch(err) {
    return {
      success: false,
      errMsg: 'Error in Fetching data: ' + err
    }
  }

};

export default { getProducts };