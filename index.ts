import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// DOC: https://developers.facebook.com/docs/pages-api/posts/#publish-a-photo

if (!process.env.FACEBOOK__PAGE_ID) {
  throw new Error('FACEBOOK__PAGE_ID is not set');
}
if (!process.env.FACEBOOK__USER_ACCESS_TOKEN) {
  throw new Error('FACEBOOK__USER_ACCESS_TOKEN is not set');
}
if (!process.env.FACEBOOK__PAGE_ACCESS_TOKEN) {
  throw new Error('FACEBOOK__PAGE_ACCESS_TOKEN is not set');
}

const PAGE_ID = process.env.FACEBOOK__PAGE_ID;
const USER_ACCESS_TOKEN = process.env.FACEBOOK__USER_ACCESS_TOKEN;
// Get from `https://graph.facebook.com/v22.0/me/accounts`, from data[number].access_token
const PAGE_ACCESS_TOKEN = process.env.FACEBOOK__PAGE_ACCESS_TOKEN;

async function postToFacebook() {
  const res = await axios.post(
    // `https://graph.facebook.com/v22.0/me?fields=id,name`,
    `https://graph.facebook.com/v22.0/${PAGE_ID}/feed`,
    {},
    {
      params: {
        message: 'สวัสดีจ้า 🎉✨',
        access_token: PAGE_ACCESS_TOKEN,
      },
    }
  );

  console.log('📌 โพสต์แล้ว! Post ID:', res.data);
}

export async function getAccountInfo() {
  const res = await axios.get(`https://graph.facebook.com/v22.0/me/accounts`, {
    params: {
      access_token: USER_ACCESS_TOKEN,
    },
  });

  console.log('📌 โพสต์แล้ว! Post ID:', res.data);
}

export async function postToFacebookWithImage() {
  const res = await axios.post(`https://graph.facebook.com/v22.0/${PAGE_ID}/photos`, null, {
    params: {
      url: 'https://i.ibb.co/hJTg9vhs/kubricate-logo.png',
      caption: 'Logo ของ Kubricate',
      access_token: PAGE_ACCESS_TOKEN,
    },
  });

  console.log('✅ โพสต์รูปสำเร็จ! Post ID:', res.data);
}

try {
  // await postToFacebook();
  // await postToFacebookWithImage();
  await getAccountInfo();
} catch (e: unknown) {
  if (axios.isAxiosError(e)) {
    console.log('Error', e.message, e.response?.data);
  }
}
