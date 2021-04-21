import React from "react";
import FacebookWhite from "../../../assets/images/facebook-white.svg";
import InstagramWhite from "../../../assets/images/instagram-white.svg";
import TwitterWhite from "../../../assets/images/twitter-white.svg";
import AppStore from "../../../assets/images/app-store.svg";
import PlayStore from "../../../assets/images/play-store.svg";
import WindowStore from "../../../assets/images/windows-store.svg";
import {FooterBox, FooterSocial, FooterLinkText, CopyrightText} from "./styles";

const Footer = ({socialIcons, downloadIcons}) => {
  const defualtSocialIcons = [
    {id: "1", url: "#", iconImg: FacebookWhite},
    {id: "2", url: "#", iconImg: InstagramWhite},
    {id: "3", url: "#", iconImg: TwitterWhite},
  ];

  const defualtDownloadIcons = [
    {id: "1d", url: "#", iconImg: AppStore},
    {id: "2d", url: "#", iconImg: PlayStore},
    {id: "3d", url: "#", iconImg: WindowStore},
  ];

  const links = [
    {id: "1dl", url: "/", text: "Home"},
    {id: "2dl", url: "#", text: "Terms and Conditions"},
    {id: "3dl", url: "#", text: "Privacy Policy"},
    {id: "4dl", url: "#", text: "Collection Statement"},
    {id: "5dl", url: "#", text: "Help"},
    {id: "6dl", url: "#", text: "Manage Account", postion: "last"},
  ];

  return (
    <>
      <FooterBox>
        <FooterLinkText>
          {links.map((link) => {
            return (
              <>
                <a href={link.url} key={link.id}>
                  {link.text}
                </a>{" "}
                {link.postion === "last" ? "" : <span>|</span>}
              </>
            );
          })}
        </FooterLinkText>
        <CopyrightText>
          Copyright &copy; 2016 DEMO Streaming. All right Reserved.
        </CopyrightText>
        <FooterSocial>
          <div className="social-icons">
            {socialIcons
              ? socialIcons.map((icon) => {
                  return (
                    <a href={icon.url} key={icon.id}>
                      <img src={icon.iconImg} alt="img"/>
                    </a>
                  );
                })
              : defualtSocialIcons.map((icon) => {
                  return (
                    <a href={icon.url} key={icon.id}>
                      <img src={icon.iconImg} alt="img"/>
                    </a>
                  );
                })}
          </div>
          <div className="download-icons">
            {downloadIcons
              ? downloadIcons.map((icon) => {
                  return (
                    <a href={icon.url} key={icon.id}>
                      <img src={icon.iconImg} alt="img"/>
                    </a>
                  );
                })
              : defualtDownloadIcons.map((icon) => {
                  return (
                    <a href={icon.url} key={icon.id}>
                      <img src={icon.iconImg} alt="img"/>
                    </a>
                  );
                })}
          </div>
        </FooterSocial>
      </FooterBox>
    </>
  );
};

export default Footer;
