const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

dotenv.config();

const genAI = new GoogleGenerativeAI("AIzaSyCAzKKud1S2O8BX4G65mMNmth4bkKJ6MiM");
// const genAI = new GoogleGenerativeAI(process.env.gemini);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });


const systemPrompt = "you are an virtual assistant , your work is to assist me in short and convertational answers to my questions , please dont mkae answers consfusing and lengthy , make it simple and easy to understand";
async function generate(prompt) {
    const result = await model.generateContent([systemPrompt, prompt]);
    return result.response.text()  
}

module.exports = {generate};
















// say.getInstalledVoices((err, voices) => {
//     console.log(voices);
// });

// [
//     'Microsoft David Desktop',
//     'Microsoft Hazel Desktop',
//     'Microsoft Zira Desktop'
// ]