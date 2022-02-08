import md5 from 'md5';

const ts = 'marvel-api';
const publicKey = '3d6390c3279dc91909bdb48d11ba79a1';
const privateKey = '2603dc86b91fa397bc4c10ccd86c919fa738ccaa';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
    ts,
    apikey: publicKey,
    hash,
};

export default apiKey;
