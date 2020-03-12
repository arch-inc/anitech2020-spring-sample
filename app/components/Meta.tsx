import { FC } from "react";

const root = "https://arch-inc.github.io/anitech2020-spring-sample";
const path = "/anitech2020-spring-sample";

const Meta: FC = () => (
  <>
    <link
      rel="icon"
      type="image/svg+xml"
      sizes="any"
      href={`${path}/static/images/arch-research-sq-inverted.svg`}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="any"
      href={`${path}/static/images/arch-research-sq-inverted.png`}
    />
    <link
      rel="mask-icon"
      type="image/svg+xml"
      href={`${path}/static/images/arch-research-sq.svg`}
      color="#008c8c"
    />
    <link
      rel="apple-touch-icon"
      type="image/png"
      sizes="any"
      href={`${path}/static/images/arch-research-sq-inverted.png`}
    />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@ArchResearchJp" />
    <meta
      property="twitter:image"
      content={`${root}${path}/static/images/arch-research-sq-inverted.png`}
    />

    <meta
      property="og:title"
      content="anitech2020-spring-sample | Layer support example for Fabric.js"
    />
    <meta
      property="og:image"
      content={`${root}${path}/static/images/arch-research-sq-inverted.png`}
    />
    <meta
      property="og:description"
      content="技術書典8で頒布予定の「アニメ技術 2020春」で紹介した、fabric.jsを使ったスケッチソフトのサンプルページです。"
    />
  </>
);

export default Meta;
