const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const imageGen = async (req, res) => {
    const { prompt, n, size } = req.body;

    const imgSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

    try {
        const response = await openai.createImage({
            prompt,
            n: +n || 1,
            size: imgSize,
        })
        res.status(200).json(response.data.data)
    } catch (error) {
        res.status(400).json({
            msg: "Illegal text to generate",
        })
    }
}

module.exports = {
    imageGen,
}