interface WebhookType {
  tag: string;
  webhook_url: string;
  server_id: string;
}

interface VideoType {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  duration?: number;
  tags?: string[];
  files?: { high?: string };
}

interface GirlType {
  name: string;
  avatar: string;
}

interface TagType {
  id: string;
  name: string;
}

interface ServerType {
  server_id: string;
}

export type { WebhookType, VideoType, GirlType, TagType, ServerType };
