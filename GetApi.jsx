import axios from 'axios';

// import function to async GET data from AWS via API gateway and prebuilt Lambda function

export const getApiFunction = async () => {
  const url = "put AWS API Gateway url here";
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data.Items;
  } catch (err) {
    console.log(err)
    throw new Error(err);
  }
};

