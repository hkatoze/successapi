const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
async function sendVerificationCode(phone_number, verificationCode) {
  try {
    const url = "https://www.aqilas.com/api/v1/sms";
    const headers = {
      "X-AUTH-TOKEN": 'a8746232-e083-4826-8c0e-a81b00ac8b2b',
      "Content-Type": "application/json",
    };

    const data = {
      from: "SUCCESS",
      text: `Code de confirmation: ${verificationCode}`,
      to: [`+226${phone_number}`],
    };

    const response = await axios.post(url, data, { headers });

    return response.data;
  } catch (error) {
    console.error("Impossible d'envoyer le message:", error);
  }
}

module.exports = { sendVerificationCode };
