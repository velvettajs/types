interface XVideosVideo {
  url: string;
  path: string;
  title: string;
  duration: string;
  profile: {
    name: string;
    url: string;
  };
  views: string;
}

interface XVideosPagination {
  page: number;
  pages: number[];
  last_page: number;
  has_next: boolean;
  next: number | null;
  has_previous: boolean;
  previous: number | null;
  results_count: number;
}

interface XVideosVideoDetails {
  title: string | undefined;
  url: string;
  duration: number | undefined;
  description: string | undefined;
  image: string | undefined;
  views: string | undefined;
  videoType: string | undefined;
  mainUploader: XVideosMainUploader;
  models: XVideosModel[];
  tags: string[];
  likePercentage: string | undefined;
  dislikePercentage: string | undefined;
  commentsCount: number | undefined;
  files: XVideosFiles;
}

interface XVideosFiles {
  low: string | undefined;
  high: string | undefined;
  HLS: string | undefined;
  thumb: string | undefined;
  thumb69: string | undefined;
  thumbSlide: string | undefined;
  thumbSlideBig: string | undefined;
}
interface XVideosMainUploader {
  name: string;
  profileUrl: string;
}

interface XVideosModel extends XVideosMainUploader {
  id: string;
}

export type {
  XVideosFiles,
  XVideosMainUploader,
  XVideosModel,
  XVideosVideo,
  XVideosPagination,
  XVideosVideoDetails,
};
