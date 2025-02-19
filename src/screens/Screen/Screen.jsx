import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ColorDark } from "../../icons/ColorDark";
import { IconChevronRight } from "../../icons/IconChevronRight";
import { IconDribble2 } from "../../icons/IconDribble2";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram1 } from "../../icons/IconInstagram1";
import { IconLinkedin2 } from "../../icons/IconLinkedin2";
import { IconRelume } from "../../icons/IconRelume";
import { IconX1 } from "../../icons/IconX1";
import { IconX7 } from "../../icons/IconX7";
import { IconYoutube1 } from "../../icons/IconYoutube1";
import { Logo2ColorDark4 } from "../../icons/Logo2ColorDark4";
import "./style.css";

export const Screen = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="screen"
      style={{
        alignItems: screenWidth < 1440 ? "flex-start" : undefined,
        backgroundColor: screenWidth >= 1440 ? "#ffffff" : undefined,
        display: screenWidth < 1440 ? "inline-flex" : undefined,
        flexDirection: screenWidth < 1440 ? "column" : undefined,
        height: screenWidth >= 1440 ? "6704px" : undefined,
        width: screenWidth >= 1440 ? "1440px" : undefined,
      }}
    >
      <div
        className="navbar"
        style={{
          borderBottomStyle: screenWidth >= 1440 ? "solid" : undefined,
          borderBottomWidth: screenWidth >= 1440 ? "1px" : undefined,
          borderColor:
            screenWidth >= 1440 ? "var(--semantic-border-primary)" : undefined,
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          height: screenWidth >= 1440 ? "72px" : undefined,
          justifyContent: screenWidth >= 1440 ? "center" : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding: screenWidth >= 1440 ? "0px 64px" : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "0" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        {screenWidth < 1440 && (
          <>
            <div className="container">
              <div className="content">
                <ColorDark className="color-dark" />
              </div>

              <div className="column">
                <div className="actions">
                  <div className="style-primary-small">
                    <button className="button">登録</button>
                  </div>
                </div>

                <div className="icon">
                  <IconX7 className="instance-node" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="div">
                <div className="link">
                  <div className="link-text">ホーム</div>
                </div>

                <div className="link-text-wrapper">
                  <div className="link-text">コース一覧</div>
                </div>

                <div className="link-text-wrapper">
                  <div className="link-text">お問い合わせ</div>
                </div>

                <div className="nav-link-dropdown">
                  <div className="link-2">
                    <div className="text-wrapper">サポート</div>

                    <img
                      className="instance-node"
                      alt="Chevron down"
                      src="/img/chevron-down-1.svg"
                    />
                  </div>

                  <div className="menu">
                    <div className="link-text-2">FAQ</div>

                    <div className="link-text-3">ブログ</div>

                    <div className="link-text-3">コミュニティ</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {screenWidth >= 1440 && (
          <div className="container-2">
            <div className="content">
              <ColorDark className="color-dark" />
            </div>

            <div className="column-2">
              <div className="div-wrapper">
                <div className="link-text-4">ホーム</div>
              </div>

              <div className="div-wrapper">
                <div className="link-text-4">コース一覧</div>
              </div>

              <div className="div-wrapper">
                <div className="link-text-4">お問い合わせ</div>
              </div>

              <div className="link-3">
                <div className="nav-link-dropdown-2">
                  <div className="link-text-4">サポート</div>

                  <img
                    className="chevron-down"
                    alt="Chevron down"
                    src="/img/chevron-down.png"
                  />
                </div>

                <div className="menu-2">
                  <div className="link-text-5">FAQ</div>

                  <div className="link-text-6">ブログ</div>

                  <div className="link-text-6">コミュニティ</div>
                </div>
              </div>
            </div>

            <div className="style-primary-small-wrapper">
              <div className="button-wrapper">
                <button className="button">登録</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="header"
        style={{
          alignItems:
            screenWidth < 1440
              ? "flex-start"
              : screenWidth >= 1440
                ? "center"
                : undefined,
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          flexDirection: screenWidth < 1440 ? "column" : undefined,
          gap:
            screenWidth < 1440
              ? "48px"
              : screenWidth >= 1440
                ? "80px"
                : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding:
            screenWidth < 1440
              ? "64px 20px"
              : screenWidth >= 1440
                ? "112px 64px"
                : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "72px" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="column-3"
          style={{
            alignSelf: screenWidth < 1440 ? "stretch" : undefined,
            flex:
              screenWidth < 1440
                ? "0 0 auto"
                : screenWidth >= 1440
                  ? "1"
                  : undefined,
            flexGrow: screenWidth >= 1440 ? "1" : undefined,
            gap:
              screenWidth < 1440
                ? "24px"
                : screenWidth >= 1440
                  ? "32px"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <div
            className="content-2"
            style={{
              gap:
                screenWidth < 1440
                  ? "20px"
                  : screenWidth >= 1440
                    ? "24px"
                    : undefined,
            }}
          >
            <div
              className="medium-length-hero"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h1-font-family)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h1-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h1-font-size)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h1-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h1-font-style)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h1-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h1-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h1-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h1-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h1-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h1-line-height)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h1-line-height)"
                      : undefined,
              }}
            >
              未来を切り開くビジネススキルを学ぼう
            </div>

            <div
              className="lorem-ipsum-dolor"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-family)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-size)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-style)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-line-height)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-line-height)"
                      : undefined,
              }}
            >
              私たちのオンラインビジネススクールで、実践的なスキルを身につけましょう。あなたのキャリアを次のレベルへと導きます。
            </div>
          </div>

          <div className="actions-2">
            <div className="style-primary-small-2">
              <button className="button">今すぐ登録</button>
            </div>

            <div className="style-secondary">
              <button className="button-2">詳細を見る</button>
            </div>
          </div>
        </div>

        <img
          className="placeholder-image"
          style={{
            alignSelf: screenWidth < 1440 ? "stretch" : undefined,
            flex: screenWidth >= 1440 ? "1" : undefined,
            flexGrow: screenWidth >= 1440 ? "1" : undefined,
            height:
              screenWidth < 1440
                ? "348px"
                : screenWidth >= 1440
                  ? "640px"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
          alt="Placeholder image"
          src="/img/placeholder-image.png"
        />
      </div>

      <div
        className="layout"
        style={{
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          gap:
            screenWidth < 1440
              ? "48px"
              : screenWidth >= 1440
                ? "80px"
                : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding:
            screenWidth < 1440
              ? "64px 28px"
              : screenWidth >= 1440
                ? "112px 64px"
                : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "936px" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="container-3"
          style={{
            alignItems:
              screenWidth < 1440
                ? "flex-start"
                : screenWidth >= 1440
                  ? "center"
                  : undefined,
            flexDirection: screenWidth < 1440 ? "column" : undefined,
            gap:
              screenWidth < 1440
                ? "48px"
                : screenWidth >= 1440
                  ? "80px"
                  : undefined,
          }}
        >
          <div
            className="content-3"
            style={{
              alignSelf: screenWidth < 1440 ? "stretch" : undefined,
              flex:
                screenWidth < 1440
                  ? "0 0 auto"
                  : screenWidth >= 1440
                    ? "1"
                    : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              gap:
                screenWidth < 1440
                  ? "24px"
                  : screenWidth >= 1440
                    ? "32px"
                    : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
            }}
          >
            <div
              className="content-4"
              style={{
                gap:
                  screenWidth < 1440
                    ? "20px"
                    : screenWidth >= 1440
                      ? "24px"
                      : undefined,
              }}
            >
              <div
                className="heading"
                style={{
                  fontFamily:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-font-family)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-font-family)"
                        : undefined,
                  fontSize:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-font-size)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-font-size)"
                        : undefined,
                  fontStyle:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-font-style)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-font-style)"
                        : undefined,
                  fontWeight:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-font-weight)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-font-weight)"
                        : undefined,
                  letterSpacing:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-letter-spacing)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-letter-spacing)"
                        : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-line-height)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-line-height)"
                        : undefined,
                }}
              >
                オンラインビジネススクールの特長を詳しくご紹介します。
              </div>

              <div
                className="text"
                style={{
                  fontFamily:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-family)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-family)"
                        : undefined,
                  fontSize:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-size)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-size)"
                        : undefined,
                  fontStyle:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-style)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-style)"
                        : undefined,
                  fontWeight:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-weight)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-weight)"
                        : undefined,
                  letterSpacing:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-letter-spacing)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-letter-spacing)"
                        : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-line-height)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-line-height)"
                        : undefined,
                }}
              >
                私たちのビジネススクールは、実践的なスキルを身につけるための最適な環境を提供します。業界の専門家から直接学ぶことで、即戦力を養うことができます。
              </div>
            </div>

            <div
              className="list"
              style={{
                gap:
                  screenWidth < 1440
                    ? "24px"
                    : screenWidth >= 1440
                      ? "16px"
                      : undefined,
                padding: screenWidth < 1440 ? "8px 0px" : undefined,
              }}
            >
              {screenWidth < 1440 && (
                <>
                  <div className="list-item">
                    <div className="number">特徴</div>

                    <div className="text-2">最新のカリキュラムで学べます。</div>
                  </div>

                  <div className="list-item">
                    <div className="number">柔軟性</div>

                    <div className="text-2">
                      オンラインでいつでも学習可能です。
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 1440 && (
                <div className="row-2">
                  <div className="list-item-2">
                    <div className="number-2">特徴</div>

                    <div className="text-2">最新のカリキュラムで学べます。</div>
                  </div>

                  <div className="list-item-2">
                    <div className="number-2">柔軟性</div>

                    <div className="text-2">
                      オンラインでいつでも学習可能です。
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <img
            className="img"
            style={{
              alignSelf: screenWidth < 1440 ? "stretch" : undefined,
              flex: screenWidth >= 1440 ? "1" : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              height:
                screenWidth < 1440
                  ? "348px"
                  : screenWidth >= 1440
                    ? "640px"
                    : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
            }}
            alt="Placeholder image"
            src="/img/placeholder-image-1.png"
          />
        </div>
      </div>

      <div
        className="layout-2"
        style={{
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          gap:
            screenWidth < 1440
              ? "48px"
              : screenWidth >= 1440
                ? "80px"
                : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding:
            screenWidth < 1440
              ? "64px 20px"
              : screenWidth >= 1440
                ? "112px 64px"
                : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "1800px" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="section-title"
          style={{
            alignSelf: screenWidth < 1440 ? "stretch" : undefined,
            gap:
              screenWidth < 1440
                ? "12px"
                : screenWidth >= 1440
                  ? "16px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "100%"
                : screenWidth >= 1440
                  ? "768px"
                  : undefined,
          }}
        >
          <div className="tagline-wrapper">
            <div className="tagline">学び</div>
          </div>

          <div
            className="content-5"
            style={{
              gap:
                screenWidth < 1440
                  ? "20px"
                  : screenWidth >= 1440
                    ? "24px"
                    : undefined,
            }}
          >
            <div
              className="heading-2"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-font-family)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-font-size)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-font-style)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-line-height)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-line-height)"
                      : undefined,
              }}
            >
              あなたのビジネススキルを向上させる
            </div>

            <div
              className="text-3"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-family)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-size)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-style)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-line-height)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-line-height)"
                      : undefined,
              }}
            >
              私たちのオンラインビジネススクールでは、実践的な知識を提供し、あなたのキャリアを加速させます。業界の専門家による指導で、最新のビジネストレンドを学びましょう。
            </div>
          </div>
        </div>

        <div
          className="row-3"
          style={{
            alignItems:
              screenWidth < 1440
                ? "center"
                : screenWidth >= 1440
                  ? "flex-start"
                  : undefined,
            gap:
              screenWidth < 1440
                ? "48px"
                : screenWidth >= 1440
                  ? "64px"
                  : undefined,
          }}
        >
          {screenWidth < 1440 && (
            <>
              <div className="div-2">
                <IconRelume className="icon-relume" />
                <div className="div-2">
                  <div className="heading-3">多様なコースと専門家の指導</div>

                  <div className="text-4">
                    幅広い分野のコースを用意しています。
                  </div>
                </div>
              </div>

              <div className="div-2">
                <IconRelume className="icon-relume" />
                <div className="div-2">
                  <div className="heading-3">
                    フレキシブルな学習スタイルを提供
                  </div>

                  <div className="text-4">
                    自分のペースで学べる環境を整えています。
                  </div>
                </div>
              </div>

              <div className="div-2">
                <IconRelume className="icon-relume" />
                <div className="div-2">
                  <div className="heading-3">ネットワークを広げる機会</div>

                  <div className="text-4">
                    同じ志を持つ仲間とつながるチャンスです。
                  </div>
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1440 && (
            <div className="row-4">
              <div className="div-3">
                <IconRelume className="icon-relume" />
                <div className="content-6">
                  <div className="heading-4">多様なコースと専門家の指導</div>

                  <div className="text-4">
                    幅広い分野のコースを用意しています。
                  </div>
                </div>
              </div>

              <div className="div-3">
                <IconRelume className="icon-relume" />
                <div className="content-6">
                  <div className="heading-4">
                    フレキシブルな学習スタイルを提供
                  </div>

                  <div className="text-4">
                    自分のペースで学べる環境を整えています。
                  </div>
                </div>
              </div>

              <div className="div-3">
                <IconRelume className="icon-relume" />
                <div className="content-6">
                  <div className="heading-4">ネットワークを広げる機会</div>

                  <div className="text-4">
                    同じ志を持つ仲間とつながるチャンスです。
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="actions-3">
          <div className="style-secondary-2">
            <button className="button-2">詳細</button>
          </div>

          <div className="style-link-small">
            <button className="button-2">登録</button>

            <IconChevronRight className="instance-node" />
          </div>
        </div>
      </div>

      <div
        className="container-wrapper"
        style={{
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          gap:
            screenWidth < 1440
              ? "48px"
              : screenWidth >= 1440
                ? "80px"
                : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding:
            screenWidth < 1440
              ? "64px 20px"
              : screenWidth >= 1440
                ? "112px 64px"
                : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "2742px" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="container-4"
          style={{
            alignItems:
              screenWidth < 1440
                ? "flex-start"
                : screenWidth >= 1440
                  ? "center"
                  : undefined,
            flexDirection: screenWidth < 1440 ? "column" : undefined,
            gap:
              screenWidth < 1440
                ? "48px"
                : screenWidth >= 1440
                  ? "80px"
                  : undefined,
          }}
        >
          <div
            className="content-7"
            style={{
              alignSelf: screenWidth < 1440 ? "stretch" : undefined,
              flex:
                screenWidth < 1440
                  ? "0 0 auto"
                  : screenWidth >= 1440
                    ? "1"
                    : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              gap:
                screenWidth < 1440
                  ? "20px"
                  : screenWidth >= 1440
                    ? "24px"
                    : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
            }}
          >
            <IconRelume className="icon-relume" />
            <div
              className="content-8"
              style={{
                gap:
                  screenWidth < 1440
                    ? "20px"
                    : screenWidth >= 1440
                      ? "24px"
                      : undefined,
              }}
            >
              <div
                className="heading-5"
                style={{
                  fontFamily:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h3-font-family)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-font-family)"
                        : undefined,
                  fontSize:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h3-font-size)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-font-size)"
                        : undefined,
                  fontStyle:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h3-font-style)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-font-style)"
                        : undefined,
                  fontWeight:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h3-font-weight)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-font-weight)"
                        : undefined,
                  letterSpacing:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h3-letter-spacing)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-letter-spacing)"
                        : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h3-line-height)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h3-line-height)"
                        : undefined,
                }}
              >
                オンラインビジネススクールで得られるスキルと知識の重要性
              </div>

              <div
                className="text-5"
                style={{
                  fontFamily:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-family)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-family)"
                        : undefined,
                  fontSize:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-size)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-size)"
                        : undefined,
                  fontStyle:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-style)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-style)"
                        : undefined,
                  fontWeight:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-weight)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-weight)"
                        : undefined,
                  letterSpacing:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-letter-spacing)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-letter-spacing)"
                        : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-line-height)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-line-height)"
                        : undefined,
                }}
              >
                ビジネススクールに通うことで、実践的なスキルを身につけ、キャリアの幅を広げることができます。業界の専門家から直接学ぶことで、最新のトレンドや戦略を理解し、即戦力として活躍できるようになります。
              </div>
            </div>
          </div>

          <img
            className="placeholder-image-2"
            style={{
              alignSelf: screenWidth < 1440 ? "stretch" : undefined,
              flex: screenWidth >= 1440 ? "1" : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              height:
                screenWidth < 1440
                  ? "348px"
                  : screenWidth >= 1440
                    ? "640px"
                    : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
            }}
            alt="Placeholder image"
            src="/img/placeholder-image-1.png"
          />
        </div>
      </div>

      <div
        className="team"
        style={{
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          gap:
            screenWidth < 1440
              ? "48px"
              : screenWidth >= 1440
                ? "80px"
                : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding:
            screenWidth < 1440
              ? "64px 20px"
              : screenWidth >= 1440
                ? "112px 64px"
                : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "3606px" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="section-title-2"
          style={{
            alignSelf: screenWidth < 1440 ? "stretch" : undefined,
            gap:
              screenWidth < 1440
                ? "12px"
                : screenWidth >= 1440
                  ? "16px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "100%"
                : screenWidth >= 1440
                  ? "768px"
                  : undefined,
          }}
        >
          <div className="tagline-wrapper">
            <div className="tagline">チーム</div>
          </div>

          <div
            className="content-9"
            style={{
              gap:
                screenWidth < 1440
                  ? "20px"
                  : screenWidth >= 1440
                    ? "24px"
                    : undefined,
            }}
          >
            <div
              className="heading-6"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-font-family)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-font-size)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-font-style)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h2-line-height)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h2-line-height)"
                      : undefined,
              }}
            >
              私たちのチーム
            </div>

            <div
              className="lorem-ipsum-dolor-2"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-family)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-size)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-style)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-line-height)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-line-height)"
                      : undefined,
              }}
            >
              経験豊富な専門家が揃っています
            </div>
          </div>
        </div>

        <div
          className="content-10"
          style={{
            alignItems:
              screenWidth < 1440
                ? "center"
                : screenWidth >= 1440
                  ? "flex-start"
                  : undefined,
            gap:
              screenWidth < 1440
                ? "48px"
                : screenWidth >= 1440
                  ? "64px"
                  : undefined,
          }}
        >
          <div
            className="row-5"
            style={{
              alignItems:
                screenWidth < 1440
                  ? "center"
                  : screenWidth >= 1440
                    ? "flex-start"
                    : undefined,
              flexDirection: screenWidth < 1440 ? "column" : undefined,
            }}
          >
            {screenWidth < 1440 && (
              <>
                <div className="div-2">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-11">
                    <div className="title">
                      <div className="name">田中 太郎</div>

                      <div className="job-title">講師</div>
                    </div>

                    <div className="text-4">
                      教育とビジネスの両方で豊富な経験を持つ専門家です。
                    </div>
                  </div>

                  <div className="social-icons">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>

                <div className="div-2">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-11">
                    <div className="title-2">
                      <div className="name">佐藤 花子</div>

                      <div className="job-title">スタッフ</div>
                    </div>

                    <div className="text-4">
                      学生のサポートに情熱を注いでいます。
                    </div>
                  </div>

                  <div className="social-icons">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>

                <div className="div-2">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-11">
                    <div className="title-3">
                      <div className="name">鈴木 一郎</div>

                      <div className="job-title">マーケティング</div>
                    </div>

                    <div className="text-4">
                      デジタルマーケティングの専門家として活躍しています。
                    </div>
                  </div>

                  <div className="social-icons">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>

                <div className="div-2">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-11">
                    <div className="title-4">
                      <div className="name">山田 次郎</div>

                      <div className="job-title">コース開発</div>
                    </div>

                    <div className="text-4">
                      新しいコースを常に開発しています。
                    </div>
                  </div>

                  <div className="social-icons">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>

                <div className="div-2">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-11">
                    <div className="title-5">
                      <div className="name">高橋 美咲</div>

                      <div className="job-title">サポート</div>
                    </div>

                    <div className="text-4">
                      学生の成功を支えるために尽力しています。
                    </div>
                  </div>

                  <div className="social-icons">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>

                <div className="div-2">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-11">
                    <div className="title-6">
                      <div className="name">中村 健</div>

                      <div className="job-title">運営管理</div>
                    </div>

                    <div className="text-4">効率的な運営を心がけています。</div>
                  </div>

                  <div className="social-icons">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>
              </>
            )}

            {screenWidth >= 1440 && (
              <>
                <div className="div-3">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-12">
                    <div className="title-7">
                      <div className="name">田中 太郎</div>

                      <div className="job-title">講師</div>
                    </div>

                    <div className="text-4">
                      教育とビジネスの両方で豊富な経験を持つ専門家です。
                    </div>
                  </div>

                  <div className="social-icons-2">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>

                <div className="div-3">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-12">
                    <div className="title-8">
                      <div className="name">佐藤 花子</div>

                      <div className="job-title">スタッフ</div>
                    </div>

                    <div className="text-4">
                      学生のサポートに情熱を注いでいます。
                    </div>
                  </div>

                  <div className="social-icons-3">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>

                <div className="div-3">
                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />

                  <div className="content-12">
                    <div className="title-9">
                      <div className="name">鈴木 一郎</div>

                      <div className="job-title">マーケティング</div>
                    </div>

                    <div className="text-4">
                      デジタルマーケティングの専門家として活躍しています。
                    </div>
                  </div>

                  <div className="social-icons-4">
                    <IconLinkedin2 className="instance-node" />
                    <IconX1 className="instance-node" />
                    <IconDribble2 className="instance-node" />
                  </div>
                </div>
              </>
            )}
          </div>

          <div
            className="row-6"
            style={{
              alignItems:
                screenWidth < 1440
                  ? "center"
                  : screenWidth >= 1440
                    ? "flex-start"
                    : undefined,
              flexDirection: screenWidth < 1440 ? "column" : undefined,
            }}
          >
            <div
              className="card"
              style={{
                alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                flex:
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                gap:
                  screenWidth < 1440
                    ? "20px"
                    : screenWidth >= 1440
                      ? "24px"
                      : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <img
                className="placeholder-image-3"
                alt="Placeholder image"
                src="/img/placeholder-image-2.png"
              />

              <div
                className="content-13"
                style={{
                  gap:
                    screenWidth < 1440
                      ? "12px"
                      : screenWidth >= 1440
                        ? "16px"
                        : undefined,
                }}
              >
                <div className="title-10">
                  <input
                    className="input"
                    placeholder={
                      screenWidth < 1440
                        ? "Full name"
                        : screenWidth >= 1440
                          ? "山田 次郎"
                          : undefined
                    }
                  >
                    {screenWidth < 1440 && <>Full name</>}

                    {screenWidth >= 1440 && <>山田 次郎</>}
                  </input>

                  <div className="job-title">
                    {screenWidth < 1440 && <>Job title</>}

                    {screenWidth >= 1440 && <>コース開発</>}
                  </div>
                </div>

                <div className="text-4">
                  {screenWidth < 1440 && (
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </>
                  )}

                  {screenWidth >= 1440 && (
                    <>新しいコースを常に開発しています。</>
                  )}
                </div>
              </div>

              <div
                className="social-icons-5"
                style={{
                  padding: screenWidth < 1440 ? "4px 0px 0px" : undefined,
                }}
              >
                <IconLinkedin2 className="instance-node" />
                <IconX1 className="instance-node" />
                <IconDribble2 className="instance-node" />
              </div>
            </div>

            <div
              className="card-2"
              style={{
                alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                flex:
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                gap:
                  screenWidth < 1440
                    ? "20px"
                    : screenWidth >= 1440
                      ? "24px"
                      : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <img
                className="placeholder-image-3"
                alt="Placeholder image"
                src="/img/placeholder-image-2.png"
              />

              <div
                className="content-14"
                style={{
                  gap:
                    screenWidth < 1440
                      ? "12px"
                      : screenWidth >= 1440
                        ? "16px"
                        : undefined,
                }}
              >
                <div className="title-11">
                  <div className="name">
                    {screenWidth < 1440 && <>Full name</>}

                    {screenWidth >= 1440 && <>高橋 美咲</>}
                  </div>

                  <div className="job-title">
                    {screenWidth < 1440 && <>Job title</>}

                    {screenWidth >= 1440 && <>サポート</>}
                  </div>
                </div>

                <div className="text-4">
                  {screenWidth < 1440 && (
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </>
                  )}

                  {screenWidth >= 1440 && (
                    <>学生の成功を支えるために尽力しています。</>
                  )}
                </div>
              </div>

              <div
                className="social-icons-6"
                style={{
                  padding: screenWidth < 1440 ? "4px 0px 0px" : undefined,
                }}
              >
                <IconLinkedin2 className="instance-node" />
                <IconX1 className="instance-node" />
                <IconDribble2 className="instance-node" />
              </div>
            </div>

            <div
              className="card-3"
              style={{
                alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                flex:
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                gap:
                  screenWidth < 1440
                    ? "20px"
                    : screenWidth >= 1440
                      ? "24px"
                      : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <img
                className="placeholder-image-3"
                alt="Placeholder image"
                src="/img/placeholder-image-2.png"
              />

              <div
                className="content-15"
                style={{
                  gap:
                    screenWidth < 1440
                      ? "12px"
                      : screenWidth >= 1440
                        ? "16px"
                        : undefined,
                }}
              >
                <div className="title-12">
                  <div className="name">
                    {screenWidth < 1440 && <>Full name</>}

                    {screenWidth >= 1440 && <>中村 健</>}
                  </div>

                  <div className="job-title">
                    {screenWidth < 1440 && <>Job title</>}

                    {screenWidth >= 1440 && <>運営管理</>}
                  </div>
                </div>

                <div className="text-4">
                  {screenWidth < 1440 && (
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </>
                  )}

                  {screenWidth >= 1440 && <>効率的な運営を心がけています。</>}
                </div>
              </div>

              <div
                className="social-icons-7"
                style={{
                  padding: screenWidth < 1440 ? "4px 0px 0px" : undefined,
                }}
              >
                <IconLinkedin2 className="instance-node" />
                <IconX1 className="instance-node" />
                <IconDribble2 className="instance-node" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="content-16"
          style={{
            alignSelf: screenWidth < 1440 ? "stretch" : undefined,
            display:
              screenWidth < 1440
                ? "flex"
                : screenWidth >= 1440
                  ? "inline-flex"
                  : undefined,
            width: screenWidth < 1440 ? "100%" : undefined,
          }}
        >
          <div
            className="content-17"
            style={{
              alignSelf: screenWidth < 1440 ? "stretch" : undefined,
              gap:
                screenWidth < 1440
                  ? "12px"
                  : screenWidth >= 1440
                    ? "16px"
                    : undefined,
              width:
                screenWidth < 1440
                  ? "100%"
                  : screenWidth >= 1440
                    ? "768px"
                    : undefined,
            }}
          >
            <div
              className="heading-7"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h4-font-family)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h4-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h4-font-size)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h4-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h4-font-style)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h4-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h4-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h4-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h4-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h4-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--heading-mobile-h4-line-height)"
                    : screenWidth >= 1440
                      ? "var(--heading-desktop-h4-line-height)"
                      : undefined,
              }}
            >
              採用中！
            </div>

            <div
              className="text-6"
              style={{
                fontFamily:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-family)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-family)"
                      : undefined,
                fontSize:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-size)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-size)"
                      : undefined,
                fontStyle:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-style)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-style)"
                      : undefined,
                fontWeight:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-font-weight)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-font-weight)"
                      : undefined,
                letterSpacing:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-letter-spacing)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-letter-spacing)"
                      : undefined,
                lineHeight:
                  screenWidth < 1440
                    ? "var(--text-regular-normal-line-height)"
                    : screenWidth >= 1440
                      ? "var(--text-medium-normal-line-height)"
                      : undefined,
              }}
            >
              私たちのチームに参加しませんか？
            </div>
          </div>

          <div className="style-secondary-wrapper">
            <div className="style-secondary-3">
              <div className="button-3">募集職種</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="testimonial"
        style={{
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          gap:
            screenWidth < 1440
              ? "48px"
              : screenWidth >= 1440
                ? "80px"
                : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding:
            screenWidth < 1440
              ? "64px 20px"
              : screenWidth >= 1440
                ? "112px 64px"
                : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "4882px" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="section-title-3"
          style={{
            alignSelf: screenWidth < 1440 ? "stretch" : undefined,
            gap:
              screenWidth < 1440
                ? "20px"
                : screenWidth >= 1440
                  ? "24px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "100%"
                : screenWidth >= 1440
                  ? "560px"
                  : undefined,
          }}
        >
          <div
            className="heading-8"
            style={{
              fontFamily:
                screenWidth < 1440
                  ? "var(--heading-mobile-h2-font-family)"
                  : screenWidth >= 1440
                    ? "var(--heading-desktop-h2-font-family)"
                    : undefined,
              fontSize:
                screenWidth < 1440
                  ? "var(--heading-mobile-h2-font-size)"
                  : screenWidth >= 1440
                    ? "var(--heading-desktop-h2-font-size)"
                    : undefined,
              fontStyle:
                screenWidth < 1440
                  ? "var(--heading-mobile-h2-font-style)"
                  : screenWidth >= 1440
                    ? "var(--heading-desktop-h2-font-style)"
                    : undefined,
              fontWeight:
                screenWidth < 1440
                  ? "var(--heading-mobile-h2-font-weight)"
                  : screenWidth >= 1440
                    ? "var(--heading-desktop-h2-font-weight)"
                    : undefined,
              letterSpacing:
                screenWidth < 1440
                  ? "var(--heading-mobile-h2-letter-spacing)"
                  : screenWidth >= 1440
                    ? "var(--heading-desktop-h2-letter-spacing)"
                    : undefined,
              lineHeight:
                screenWidth < 1440
                  ? "var(--heading-mobile-h2-line-height)"
                  : screenWidth >= 1440
                    ? "var(--heading-desktop-h2-line-height)"
                    : undefined,
            }}
          >
            受講生の声
          </div>

          <div
            className="text-7"
            style={{
              fontFamily:
                screenWidth < 1440
                  ? "var(--text-regular-normal-font-family)"
                  : screenWidth >= 1440
                    ? "var(--text-medium-normal-font-family)"
                    : undefined,
              fontSize:
                screenWidth < 1440
                  ? "var(--text-regular-normal-font-size)"
                  : screenWidth >= 1440
                    ? "var(--text-medium-normal-font-size)"
                    : undefined,
              fontStyle:
                screenWidth < 1440
                  ? "var(--text-regular-normal-font-style)"
                  : screenWidth >= 1440
                    ? "var(--text-medium-normal-font-style)"
                    : undefined,
              fontWeight:
                screenWidth < 1440
                  ? "var(--text-regular-normal-font-weight)"
                  : screenWidth >= 1440
                    ? "var(--text-medium-normal-font-weight)"
                    : undefined,
              letterSpacing:
                screenWidth < 1440
                  ? "var(--text-regular-normal-letter-spacing)"
                  : screenWidth >= 1440
                    ? "var(--text-medium-normal-letter-spacing)"
                    : undefined,
              lineHeight:
                screenWidth < 1440
                  ? "var(--text-regular-normal-line-height)"
                  : screenWidth >= 1440
                    ? "var(--text-medium-normal-line-height)"
                    : undefined,
            }}
          >
            私のビジネスが劇的に変わりました！
          </div>
        </div>

        <div
          className="content-18"
          style={{
            gap:
              screenWidth < 1440
                ? "48px"
                : screenWidth >= 1440
                  ? "64px"
                  : undefined,
          }}
        >
          {screenWidth < 1440 && (
            <>
              <div className="column-4">
                <img className="stars" alt="Stars" src="/img/stars-3.svg" />

                <div className="quote">
                  「このスクールのおかげで、夢が実現しました。」
                </div>

                <div className="div-4">
                  <img
                    className="avatar-image"
                    alt="Avatar image"
                    src="/img/avatar-image.png"
                  />

                  <div className="avatar-content">
                    <div className="text-wrapper-2">田中 太郎</div>

                    <div className="text-8">CEO, 株式会社ABC</div>
                  </div>

                  <Logo2ColorDark4 className="logo-color-dark" />
                </div>
              </div>

              <div className="column-4">
                <img className="stars" alt="Stars" src="/img/stars-4.svg" />

                <div className="quote">
                  「学び続けることの重要性を実感しました。」
                </div>

                <div className="div-4">
                  <img
                    className="avatar-image"
                    alt="Avatar image"
                    src="/img/avatar-image.png"
                  />

                  <div className="avatar-content">
                    <div className="text-wrapper-2">佐藤 花子</div>

                    <div className="text-8">マネージャー, 株式会社XYZ</div>
                  </div>

                  <Logo2ColorDark4 className="logo-color-dark" />
                </div>
              </div>

              <div className="column-4">
                <img className="stars" alt="Stars" src="/img/stars-5.svg" />

                <div className="quote">
                  「このプログラムで自信を持てるようになりました。」
                </div>

                <div className="div-4">
                  <img
                    className="avatar-image"
                    alt="Avatar image"
                    src="/img/avatar-image.png"
                  />

                  <div className="avatar-content">
                    <div className="text-wrapper-2">鈴木 次郎</div>

                    <div className="text-8">ディレクター, 株式会社LMN</div>
                  </div>

                  <Logo2ColorDark4 className="logo-color-dark" />
                </div>
              </div>
            </>
          )}

          {screenWidth >= 1440 && (
            <div className="row-7">
              <div className="column-5">
                <img className="stars" alt="Stars" src="/img/stars.svg" />

                <div className="quote-2">
                  「このスクールのおかげで、夢が実現しました。」
                </div>

                <div className="div-4">
                  <img
                    className="avatar-image"
                    alt="Avatar image"
                    src="/img/avatar-image.png"
                  />

                  <div className="avatar-content">
                    <div className="text-wrapper-2">田中 太郎</div>

                    <div className="text-8">CEO, 株式会社ABC</div>
                  </div>

                  <Logo2ColorDark4 className="logo-color-dark" />
                </div>
              </div>

              <div className="column-5">
                <img className="stars" alt="Stars" src="/img/stars-1.svg" />

                <div className="quote-2">
                  「学び続けることの重要性を実感しました。」
                </div>

                <div className="div-4">
                  <img
                    className="avatar-image"
                    alt="Avatar image"
                    src="/img/avatar-image.png"
                  />

                  <div className="avatar-content">
                    <div className="text-wrapper-2">佐藤 花子</div>

                    <div className="text-8">マネージャー, 株式会社XYZ</div>
                  </div>

                  <Logo2ColorDark4 className="logo-color-dark" />
                </div>
              </div>

              <div className="column-5">
                <img className="stars" alt="Stars" src="/img/stars-2.svg" />

                <div className="quote-2">
                  「このプログラムで自信を持てるようになりました。」
                </div>

                <div className="div-4">
                  <img
                    className="avatar-image"
                    alt="Avatar image"
                    src="/img/avatar-image.png"
                  />

                  <div className="avatar-content">
                    <div className="text-wrapper-2">鈴木 次郎</div>

                    <div className="text-8">ディレクター, 株式会社LMN</div>
                  </div>

                  <Logo2ColorDark4 className="logo-color-dark" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="CTA"
        style={{
          alignItems:
            screenWidth < 1440
              ? "flex-start"
              : screenWidth >= 1440
                ? "center"
                : undefined,
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          gap:
            screenWidth < 1440
              ? "48px"
              : screenWidth >= 1440
                ? "80px"
                : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding:
            screenWidth < 1440
              ? "64px 20px"
              : screenWidth >= 1440
                ? "112px 64px"
                : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "5618px" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="column-wrapper"
          style={{
            alignItems:
              screenWidth < 1440
                ? "flex-start"
                : screenWidth >= 1440
                  ? "center"
                  : undefined,
            padding:
              screenWidth < 1440
                ? "32px"
                : screenWidth >= 1440
                  ? "64px"
                  : undefined,
          }}
        >
          <div
            className="column-6"
            style={{
              flex: screenWidth < 1440 ? "1" : undefined,
              flexGrow: screenWidth < 1440 ? "1" : undefined,
              gap:
                screenWidth < 1440
                  ? "24px"
                  : screenWidth >= 1440
                    ? "32px"
                    : undefined,
              width: screenWidth >= 1440 ? "768px" : undefined,
            }}
          >
            <div
              className="content-19"
              style={{
                gap:
                  screenWidth < 1440
                    ? "20px"
                    : screenWidth >= 1440
                      ? "24px"
                      : undefined,
              }}
            >
              <div
                className="heading-9"
                style={{
                  fontFamily:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-font-family)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h2-font-family)"
                        : undefined,
                  fontSize:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-font-size)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h2-font-size)"
                        : undefined,
                  fontStyle:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-font-style)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h2-font-style)"
                        : undefined,
                  fontWeight:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-font-weight)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h2-font-weight)"
                        : undefined,
                  letterSpacing:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-letter-spacing)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h2-letter-spacing)"
                        : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "var(--heading-mobile-h2-line-height)"
                      : screenWidth >= 1440
                        ? "var(--heading-desktop-h2-line-height)"
                        : undefined,
                }}
              >
                あなたの未来を切り開こう
              </div>

              <div
                className="text-9"
                style={{
                  fontFamily:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-family)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-family)"
                        : undefined,
                  fontSize:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-size)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-size)"
                        : undefined,
                  fontStyle:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-style)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-style)"
                        : undefined,
                  fontWeight:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-font-weight)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-font-weight)"
                        : undefined,
                  letterSpacing:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-letter-spacing)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-letter-spacing)"
                        : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "var(--text-regular-normal-line-height)"
                      : screenWidth >= 1440
                        ? "var(--text-medium-normal-line-height)"
                        : undefined,
                }}
              >
                今すぐ登録して、オンラインビジネスのスキルを身につけましょう。
              </div>
            </div>

            <div className="actions-2">
              <div className="style-primary-small-3">
                <div className="button-4">申し込む</div>
              </div>

              <div className="style-secondary-4">
                <div className="button-5">詳細</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer"
        style={{
          flex: screenWidth < 1440 ? "0 0 auto" : undefined,
          gap:
            screenWidth < 1440
              ? "48px"
              : screenWidth >= 1440
                ? "80px"
                : undefined,
          left: screenWidth >= 1440 ? "0" : undefined,
          padding:
            screenWidth < 1440
              ? "48px 20px"
              : screenWidth >= 1440
                ? "80px 64px"
                : undefined,
          position:
            screenWidth < 1440
              ? "relative"
              : screenWidth >= 1440
                ? "absolute"
                : undefined,
          top: screenWidth >= 1440 ? "6159px" : undefined,
          width:
            screenWidth < 1440
              ? "375px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        <div
          className="content-20"
          style={{
            flex: screenWidth < 1440 ? "0 0 auto" : undefined,
            flexDirection: screenWidth < 1440 ? "column" : undefined,
            gap:
              screenWidth < 1440
                ? "48px"
                : screenWidth >= 1440
                  ? "128px"
                  : undefined,
            height: screenWidth >= 1440 ? "248px" : undefined,
          }}
        >
          <div
            className="links"
            style={{
              alignSelf: screenWidth < 1440 ? "stretch" : undefined,
              flex:
                screenWidth < 1440
                  ? "0 0 auto"
                  : screenWidth >= 1440
                    ? "1"
                    : undefined,
              flexDirection: screenWidth < 1440 ? "column" : undefined,
              flexGrow: screenWidth >= 1440 ? "1" : undefined,
              width: screenWidth < 1440 ? "100%" : undefined,
            }}
          >
            <div
              className="color-dark-wrapper"
              style={{
                alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                flex:
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <ColorDark className="color-dark" />
            </div>

            <div
              className="column-7"
              style={{
                alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                flex:
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                gap:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "16px"
                      : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <div className="text-wrapper-3">カラム一</div>

              <div className="footer-links">
                <div className="link-4">
                  <div className="text-wrapper-4">リンク一</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク二</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク三</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク四</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク五</div>
                </div>
              </div>
            </div>

            <div
              className="column-8"
              style={{
                alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                flex:
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                gap:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "16px"
                      : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <div className="text-wrapper-3">カラム二</div>

              <div className="footer-links-2">
                <div className="link-4">
                  <div className="text-wrapper-4">リンク六</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク七</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク八</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク九</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク十</div>
                </div>
              </div>
            </div>

            <div
              className="column-9"
              style={{
                alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                flex:
                  screenWidth < 1440
                    ? "0 0 auto"
                    : screenWidth >= 1440
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                gap:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "16px"
                      : undefined,
                width: screenWidth < 1440 ? "100%" : undefined,
              }}
            >
              <div className="text-wrapper-3">カラム三</div>

              <div className="footer-links-3">
                <div className="link-4">
                  <div className="text-wrapper-4">リンク十一</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク十二</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク十三</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク十四</div>
                </div>

                <div className="link-4">
                  <div className="text-wrapper-4">リンク十五</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="newslatter"
            style={{
              alignSelf: screenWidth < 1440 ? "stretch" : undefined,
              flex: screenWidth < 1440 ? "0 0 auto" : undefined,
              gap:
                screenWidth < 1440
                  ? "16px"
                  : screenWidth >= 1440
                    ? "24px"
                    : undefined,
              width:
                screenWidth < 1440
                  ? "100%"
                  : screenWidth >= 1440
                    ? "400px"
                    : undefined,
            }}
          >
            <div
              className="frame-2"
              style={{
                gap:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "16px"
                      : undefined,
              }}
            >
              <div className="text-wrapper-3">購読</div>

              <div
                className="join-our-newsletter"
                style={{
                  fontFamily:
                    screenWidth < 1440
                      ? "var(--text-small-normal-font-family)"
                      : screenWidth >= 1440
                        ? "var(--text-regular-normal-font-family)"
                        : undefined,
                  fontSize:
                    screenWidth < 1440
                      ? "var(--text-small-normal-font-size)"
                      : screenWidth >= 1440
                        ? "var(--text-regular-normal-font-size)"
                        : undefined,
                  fontStyle:
                    screenWidth < 1440
                      ? "var(--text-small-normal-font-style)"
                      : screenWidth >= 1440
                        ? "var(--text-regular-normal-font-style)"
                        : undefined,
                  fontWeight:
                    screenWidth < 1440
                      ? "var(--text-small-normal-font-weight)"
                      : screenWidth >= 1440
                        ? "var(--text-regular-normal-font-weight)"
                        : undefined,
                  letterSpacing:
                    screenWidth < 1440
                      ? "var(--text-small-normal-letter-spacing)"
                      : screenWidth >= 1440
                        ? "var(--text-regular-normal-letter-spacing)"
                        : undefined,
                  lineHeight:
                    screenWidth < 1440
                      ? "var(--text-small-normal-line-height)"
                      : screenWidth >= 1440
                        ? "var(--text-regular-normal-line-height)"
                        : undefined,
                }}
              >
                最新の機能やリリース情報を受け取るために登録してください。
              </div>
            </div>

            <div className="actions-4">
              <div
                className="form"
                style={{
                  flexDirection: screenWidth < 1440 ? "column" : undefined,
                }}
              >
                <div
                  className="type-default"
                  style={{
                    alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                    flex:
                      screenWidth < 1440
                        ? "0 0 auto"
                        : screenWidth >= 1440
                          ? "1"
                          : undefined,
                    flexGrow: screenWidth >= 1440 ? "1" : undefined,
                    marginBottom: screenWidth >= 1440 ? "-1.00px" : undefined,
                    marginRight: screenWidth < 1440 ? "-1.00px" : undefined,
                    width: screenWidth < 1440 ? "100%" : undefined,
                  }}
                >
                  <div className="placeholder">メールアドレスを入力</div>
                </div>

                <div
                  className="style-secondary-5"
                  style={{
                    alignSelf: screenWidth < 1440 ? "stretch" : undefined,
                    flex: screenWidth < 1440 ? "0 0 auto" : undefined,
                    marginLeft: screenWidth < 1440 ? "-1.00px" : undefined,
                    marginTop: screenWidth >= 1440 ? "-1.00px" : undefined,
                    width:
                      screenWidth < 1440
                        ? "100%"
                        : screenWidth >= 1440
                          ? "121px"
                          : undefined,
                  }}
                >
                  <div className="button-3">登録</div>
                </div>
              </div>

              <div className="by-subscribing-you">
                購読することで、プライバシーポリシーに同意し、更新情報を受け取ります。
              </div>
            </div>
          </div>
        </div>

        <div
          className="credits"
          style={{
            gap:
              screenWidth < 1440
                ? "24px"
                : screenWidth >= 1440
                  ? "32px"
                  : undefined,
          }}
        >
          <div className="divider" />

          <div
            className="row-8"
            style={{
              flexDirection: screenWidth < 1440 ? "column" : undefined,
              gap: screenWidth < 1440 ? "32px" : undefined,
              justifyContent: screenWidth >= 1440 ? "space-between" : undefined,
              padding: screenWidth < 1440 ? "0px 0px 16px" : undefined,
            }}
          >
            <div
              className="social-links"
              style={{
                alignItems:
                  screenWidth < 1440
                    ? "flex-start"
                    : screenWidth >= 1440
                      ? "center"
                      : undefined,
                gap:
                  screenWidth < 1440
                    ? "12px"
                    : screenWidth >= 1440
                      ? "24px"
                      : undefined,
              }}
            >
              {screenWidth < 1440 && (
                <>
                  <IconFacebook1 className="instance-node" />
                  <IconInstagram1 className="instance-node" />
                  <IconX1 className="instance-node" />
                  <IconLinkedin2 className="instance-node" />
                  <IconYoutube1 className="instance-node" />
                </>
              )}

              {screenWidth >= 1440 && (
                <>
                  <div className="element-relume-all">
                    © 2024 Relume. 全著作権所有。
                  </div>

                  <div className="text-wrapper-5">プライバシーポリシー</div>

                  <div className="text-wrapper-5">利用規約</div>

                  <div className="text-wrapper-5">クッキー設定</div>
                </>
              )}
            </div>

            <div
              className="credits-2"
              style={{
                flexDirection: screenWidth < 1440 ? "column" : undefined,
                gap:
                  screenWidth < 1440
                    ? "32px"
                    : screenWidth >= 1440
                      ? "12px"
                      : undefined,
              }}
            >
              {screenWidth < 1440 && (
                <>
                  <div className="div-4">
                    <div className="text-wrapper-5">プライバシーポリシー</div>

                    <div className="text-wrapper-6">利用規約</div>

                    <div className="text-wrapper-6">クッキー設定</div>
                  </div>

                  <div className="element-relume-all-2">
                    © 2024 Relume. 全著作権所有。
                  </div>
                </>
              )}

              {screenWidth >= 1440 && (
                <>
                  <IconFacebook1 className="instance-node" />
                  <IconInstagram1 className="instance-node" />
                  <IconX1 className="instance-node" />
                  <IconLinkedin2 className="instance-node" />
                  <IconYoutube1 className="instance-node" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
