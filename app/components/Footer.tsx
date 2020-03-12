import { FC } from "react";

const Footer: FC = () => (
  <footer>
    <style jsx>{`
      footer {
        padding: 2em 0;
      }
    `}</style>
    <div className="ui container">
      <div className="ui horizontal divided list">
        <div className="item">
          &copy; <a href="//research.archinc.jp">Arch Inc.</a> 2020
        </div>
        <div className="item">
          <a href="https://github.com/arch-inc/anitech2020-spring-sample">
            <i className="github icon" /> arch-inc/anitech2020-spring-sample
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
