// 自分の写真やnote記事に合わせて、以下のデータを書き換えてください。
// 画像は `public/images/` フォルダ内に保存して、以下の `image:` にファイル名を指定します。
// 例: public/images/sample1.jpg の場合 -> image: '/images/sample1.jpg'
// title: タイトル
// url: リンク先のURL（note記事や、より高画質な写真へのリンクなど）
// caption: 説明文
// height: 画像の高さの目安（aspect-square, aspect-video, aspect-[3/4] など）

export const items = [
  {
    id: 1,
    image: '/images/sample1.jpg',
    title: 'Alpine Morning',
    url: 'https://note.com/your_account/article_example_1',
    caption: 'Majestic peaks bathed in the first light of dawn. The crisp air and absolute silence made this moment unforgettable.',
    height: 'aspect-[3/4]'
  },
  {
    id: 2,
    image: '/images/sample2.jpg',
    title: 'Modern Architecture',
    url: 'https://instagram.com/p/example_post/',
    caption: 'Exploring minimal forms and concrete textures in the city center.',
    height: 'aspect-[4/3]'
  },
  {
    id: 3,
    image: '/images/sample3.jpg',
    title: 'Wandering the Trails',
    url: 'https://note.com/your_account/article_example_2',
    caption: 'note article cover: My favorite hiking spots this summer.',
    height: 'aspect-square'
  },
  {
    id: 4,
    image: '/images/sample4.jpg',
    title: 'Film Diary 01',
    url: 'https://example.com/gallery/1',
    caption: 'A collection of 35mm shots from my weekend trip to Kyoto.',
    height: 'aspect-[2/3]'
  },
  {
    id: 5,
    image: '/images/sample5.jpg',
    title: 'Vintage Wheels',
    url: 'https://note.com/your_account/article_example_3',
    caption: 'Spotted this beautiful classic car parked in an alley.',
    height: 'aspect-video'
  }
];
