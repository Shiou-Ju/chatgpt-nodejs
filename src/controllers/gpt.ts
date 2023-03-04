import { openAIKey } from '../config/Env';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: openAIKey,
});
const openai = new OpenAIApi(configuration);

export const example = async () => {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content:
          '用繁體中文回答我，我們要怎麼進步？',
      },
    ],
  });
  console.log(JSON.stringify(completion.data));
  console.log(completion.data);
};
