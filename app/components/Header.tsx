import { FC } from "react";

const Header: FC = () => (
  <div className="hero">
    <style jsx>{`
      :global(html, body) {
        background: #eee;
      }
      div.hero {
        padding: 3em 0;
      }
    `}</style>
    <div className="ui container">
      <h1 className="ui header">anitech2020-spring-sample</h1>
    </div>
  </div>
);

export default Header;
