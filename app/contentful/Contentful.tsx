// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
// })

// Contentful.tsx

import { createClient } from 'contentful';
// import * as contentful from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '8jkm1fcy3nbt',
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? 'X-azWnSK6w50g8cfm7RsXr_2zQ5svpv2bKMYK5h4Ki8'
});

export { client };
