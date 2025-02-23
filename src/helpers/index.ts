// Authentication helpers to either encrypt password or create random token

import crypto from 'crypto';

// create secret
const SECRET = 'ROBERT-REST-API';

// create randomizer
export const random = () => crypto.randomBytes(128).toString('base64');

// create authentication util
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};

