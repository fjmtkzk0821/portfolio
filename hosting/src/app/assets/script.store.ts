export interface AppScript {
  name: string;
  src: string;
  async: boolean;
}

export const ScriptStore: AppScript[] = [
  {name: 'twitterWidget', src: 'https://platform.twitter.com/widgets.js', async: true},
  {name: 'instagramWidget', src: 'https://www.instagram.com/embed.js', async: true}
];
