import axios from 'axios';
const url = 'https://stage.achareh.ir/api/karfarmas/address';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4'
};

export const addNewAddress = async function (payload) {
    try {
        const response = await axios.post(url, payload, { headers });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getAllAddresses = async function () {
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching addresses:', error);
        throw error;
    }
};


