import { ChatGPTAPI } from 'chatgpt';
import { openAIKey } from '../config/Env';

const api = new ChatGPTAPI({
  apiKey: openAIKey,
});

const text = 'Please tell me more about chatgpt!';

export const example = async () => {
  const res = await api.sendMessage(text);
  console.log(res.text);
};
