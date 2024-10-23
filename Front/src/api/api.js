import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchDataApi = async () => {   
  const { data } = await axios.get(`${API_URL}/ads`);
  return data;
};
export const fetchOneDataApi = async (id) => {   
    const { data } = await axios.get(`${API_URL}/ads/${id}`);
    return data;
  };
  

export const createDataApi = async (createdData) => {
  const { data } = await axios.post(`${API_URL}/ads`, {...createdData, area: Number(createdData.area)});
  return data;
};

export const deleteDataApi = async (id) => {
  await axios.delete(`${API_URL}/ads/${id}`);
};

export const loginApi = async (user) => {
  console.log(user)
  const newUser=await axios.post(`${API_URL}/auth/login`,user);
  return newUser
};

export const signupApi = async (user) => {
  const newUser= await axios.post(`${API_URL}/auth/signup`,user);
  return newUser;
};