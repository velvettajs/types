# @velvetta/types 🟢

`@velvetta/types` is a TypeScript types package providing reusable interfaces and types for various services and modules related to the [velvettaJS](https://github.com/velvettajs)
 library and other components of your project. 🌱

## Installation 🚀

To install this package, use npm or yarn. Make sure you have access to the registry if it's private.

```bash
# npm
npm install @velvetta/types
# pnpm
pnpm add @velvetta/types
# yarn
yarn add @velvetta/types
# bun
bun add @velvetta/types
```

# Package Structure 📂

The package is organized into several type files divided into modules for better organization. Here’s how you can import and use these types in your project:

### Available Types
#### Velvetta 🎥

| Type          | Description   |
|---------------|---------------|
| **WebhookType** | Type for webhooks. |
| **VideoType**   | Type for videos.   |
| **GirlType**    | Type for girls.    |
| **TagType**     | Type for tags.     |
| **ServerType**  | Type for servers.  |

##### Example

```typescript
import { Velvetta } from '@velvetta/types';

const webhook: Velvetta.WebhookType = {
  tag: 'example',
  webhook_url: 'http://discord.com/webhook',
  server_id: 'server-id'
};

const video: Velvetta.VideoType = {
  title: 'Example Video',
  description: 'An example video',
  url: 'http://xvideos.com/video',
  image: 'http://xvideos.com/image.jpg',
  duration: 120,
  tags: ['example', 'video'],
  files: {
    high: 'http://xvideos.com/video.mp4'
  }
};
```

#### Services 🔧

| Type              | Description                         |
|-------------------|-------------------------------------|
| **DatabaseOptions** | Options for the database.            |
| **CdnOptions**      | Options for the CDN.                 |
| **DbType**         | Type for the database using `drizzle-orm`. |

##### Example

```typescript
import { Services } from '@velvetta/types';

const dbOptions: Services.DatabaseOptions = {
  dbUri: 'your-database-uri'
};

const cdnOptions: Services.CdnOptions = {
  region: 'your-region',
  endpoint: 'your-endpoint',
  credentials: {
    accessKeyId: 'your-access-key-id',
    secretAccessKey: 'your-secret-access-key'
  }
};

const db: Services.DbType = /* initialize your db */;
```

#### XVideos 📹

| Type                      | Description                               |
|---------------------------|-------------------------------------------|
| **XVideosVideo**          | Information about XVideos video.          |
| **XVideosPagination**     | Pagination data for XVideos.              |
| **XVideosVideoDetails**   | Details of an XVideos video.              |
| **XVideosFiles**          | Files related to the video.               |
| **XVideosMainUploader**   | Information about the main uploader.      |
| **XVideosModel**          | Information about models in XVideos videos. |
##### Example

```typescript
import { XVideos } from '@velvetta/types';

const videoDetails: XVideos.XVideosVideoDetails = {
  title: 'Example Video',
  url: 'http://xvideos.com/video',
  duration: 120,
  description: 'An example video description',
  image: 'http://xvideos.com/image.jpg',
  views: '12345',
  videoType: 'HD',
  mainUploader: {
    name: 'Uploader Name',
    profileUrl: 'http://xvideos.com/uploader'
  },
  models: [
    {
      id: 'model-id',
      name: 'Model Name',
      profileUrl: 'http://xvideos.com/model'
    }
  ],
  tags: ['example', 'video'],
  likePercentage: '75%',
  dislikePercentage: '25%',
  commentsCount: 10,
  files: {
    low: 'http://xvideos.com/video_low.mp4',
    high: 'http://xvideos.com/video_high.mp4',
    HLS: 'http://xvideos.com/video_hls.m3u8',
    thumb: 'http://xvideos.com/thumb.jpg',
    thumb69: 'http://xvideos.com/thumb69.jpg',
    thumbSlide: 'http://xvideos.com/thumbSlide.jpg',
    thumbSlideBig: 'http://xvideos.com/thumbSlideBig.jpg'
  }
};
```
## License 📝

This project is licensed under the [MIT License](LICENSE).

---

This `README.md` provides an overview of how to use the `@velvetta/types` package, including examples of how to import and use the types in your project. 🌿
