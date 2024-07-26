import React from "react";

export default function Getstrd() {
  return (
    <>
      <div
        className="header-inner d-flex align-items-center justify-content-between"
        style={{
          boxSizing: "border-box",
          unicodeBidi: "isolate",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="header-left d-flex align-items-center"
          style={{
            boxSizing: "border-box",
            unicodeBidi: "isolate",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="logo-wrapper"
            style={{
              boxSizing: "border-box",
              display: "block",
              unicodeBidi: "isolate",
            }}
          >
            <a
              className="logo logo-light"
              href="https://gapxbit.com/"
              style={{
                boxSizing: "border-box",
                transition: "0.3s",
                color: "rgba(255, 255, 255, 0.75)",
                textDecoration: "none",
                cursor: "pointer",
                display: "block",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  unicodeBidi: "isolate",
                  margin: "0px",
                  height: "50px",
                  width: "100px",
                }}
              >
                <img
                  alt="brand"
                  src="https://gapxbit.com/images/new_gapx_logo.png"
                  style={{
                    boxSizing: "border-box",
                    maxHeight: "fit-content",
                    maxWidth: "100%",
                    verticalAlign: "middle",
                    overflow: "clip",
                    overflowClipMargin: "content-box",
                    transition: "0.3s",
                    width: "auto",
                    height: "3rem",
                  }}
                />
              </div>
            </a>
            <a
              className="logo logo-dark"
              href="https://gapxbit.com/"
              style={{
                boxSizing: "border-box",
                transition: "0.3s",
                color: "rgba(255, 255, 255, 0.75)",
                textDecoration: "none",
                cursor: "pointer",
                display: "none",
              }}
            >
              <img
                alt="brand"
                src="https://gapxbit.com/images/new_gapx_logo.png"
                style={{
                  boxSizing: "border-box",
                  maxHeight: "fit-content",
                  maxWidth: "100%",
                  verticalAlign: "middle",
                  overflow: "clip",
                  overflowClipMargin: "content-box",
                  transition: "0.3s",
                  width: "100px",
                  height: "3rem",
                }}
              />
            </a>
          </div>
          <div
            className="mainmenu-wrapper ms-md-3"
            style={{
              boxSizing: "border-box",
              display: "block",
              unicodeBidi: "isolate",
            }}
          >
            <nav
              id="sideNav"
              className="mainmenu-nav d-none d-xl-block"
              style={{ boxSizing: "border-box", display: "none" }}
            >
              <ul
                className="mainmenu"
                style={{
                  boxSizing: "border-box",
                  listStyle: "none",
                  padding: "0px",
                  margin: "0px",
                  display: "flex",
                  paddingLeft: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <li
                  className="custom_dropdown"
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    paddingLeft: "0px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    margin: "0px 7px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://gapxbit.com/MarketPage"
                    style={{
                      boxSizing: "border-box",
                      transition: "0.3s",
                      textDecoration: "none",
                      cursor: "pointer",
                      padding: "28px 12px",
                      borderRadius: "3px",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 600,
                      fontSize: "16px",
                      display: "block",
                    }}
                  >
                    Buy Crypto{" "}
                    <i
                      className="ri-arrow-down-s-line ms-1"
                      style={{
                        boxSizing: "border-box",
                        fontStyle: "normal",
                        WebkitFontSmoothing: "antialiased",
                        transition: "0.3s",
                        marginLeft: "0.25rem",
                        fontFamily: "remixicon",
                        transform: "rotateX(0deg)",
                      }}
                    />{" "}
                  </a>
                  <ul
                    className="submenu"
                    style={{
                      boxSizing: "border-box",
                      listStyle: "none",
                      marginTop: "0px",
                      marginBottom: "0px",
                      width: "320px",
                      transition: "0.3s",
                      borderRadius: "10px",
                      border: "0px solid rgb(51, 51, 51)",
                      overflow: "hidden",
                      padding: "0px",
                      minWidth: "230px",
                      position: "absolute",
                      top: "90%",
                      left: "0px",
                      zIndex: 90,
                      opacity: 0,
                      visibility: "hidden",
                      textAlign: "left",
                      backgroundColor: "rgb(17, 17, 17)",
                      height: "-webkit-fill-available",
                      paddingLeft: "0px",
                    }}
                  >
                    <li
                      style={{
                        boxSizing: "border-box",
                        listStyle: "none",
                        paddingLeft: "0px",
                        fontSize: "16px",
                        lineHeight: "24px",
                        position: "relative",
                        margin: "0px",
                      }}
                    >
                      <a
                        href="https://gapxbit.com/BuySell"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          cursor: "pointer",
                          opacity: 0.8,
                          margin: "0px 10px",
                          borderRadius: "7px",
                          transition: "0.3s",
                          fontWeight: 500,
                          fontSize: "15px",
                          color: "rgb(218, 218, 218)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 16px",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          className="d-flex align-items-center"
                          style={{
                            boxSizing: "border-box",
                            unicodeBidi: "isolate",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="ri-arrow-up-down-line me-4"
                            style={{
                              boxSizing: "border-box",
                              fontStyle: "normal",
                              WebkitFontSmoothing: "antialiased",
                              fontSize: "22px",
                              color: "currentcolor",
                              background: "transparent",
                              padding: "2px",
                              borderRadius: "2px",
                              transition: "0.3s",
                              margin: "0px -3px",
                              strokeWidth: "2px",
                              height: "auto",
                              width: "22px",
                              marginRight: "1.5rem",
                              fontFamily: "remixicon",
                              transform: "rotateX(0deg)",
                              opacity: 1,
                              position: "relative",
                              top: "0px",
                              left: "0px",
                            }}
                          />
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              unicodeBidi: "isolate",
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "100%",
                                fontWeight: 600,
                                lineHeight: 1.5,
                                marginBottom: "2px",
                              }}
                            >
                              Quick Buy/Sell
                            </span>
                            <small
                              style={{
                                boxSizing: "border-box",
                                fontSize: "0.875em",
                                display: "block",
                                width: "100%",
                                opacity: 0.7,
                                lineHeight: 1.1,
                              }}
                            >
                              Fast and secure digital asset transactions
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "border-box",
                        listStyle: "none",
                        paddingLeft: "0px",
                        fontSize: "16px",
                        lineHeight: "24px",
                        position: "relative",
                        margin: "0px",
                      }}
                    >
                      <a
                        href="https://gapxbit.com/comingsoon"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          cursor: "pointer",
                          opacity: 0.8,
                          margin: "0px 10px",
                          borderRadius: "7px",
                          transition: "0.3s",
                          fontWeight: 500,
                          fontSize: "15px",
                          color: "rgb(218, 218, 218)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 16px",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          className="d-flex align-items-center"
                          style={{
                            boxSizing: "border-box",
                            unicodeBidi: "isolate",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="ri-group-fill me-4"
                            style={{
                              boxSizing: "border-box",
                              fontStyle: "normal",
                              WebkitFontSmoothing: "antialiased",
                              fontSize: "22px",
                              color: "currentcolor",
                              background: "transparent",
                              padding: "2px",
                              borderRadius: "2px",
                              transition: "0.3s",
                              margin: "0px -3px",
                              strokeWidth: "2px",
                              height: "auto",
                              width: "22px",
                              marginRight: "1.5rem",
                              fontFamily: "remixicon",
                              transform: "rotateX(0deg)",
                              opacity: 1,
                              position: "relative",
                              top: "0px",
                              left: "0px",
                            }}
                          />
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              unicodeBidi: "isolate",
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "100%",
                                fontWeight: 600,
                                lineHeight: 1.5,
                                marginBottom: "2px",
                              }}
                            >
                              P2P Trading
                            </span>
                            <small
                              style={{
                                boxSizing: "border-box",
                                fontSize: "0.875em",
                                display: "block",
                                width: "100%",
                                opacity: 0.7,
                                lineHeight: 1.1,
                              }}
                            >
                              Bank transfer and more options
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    paddingLeft: "0px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    margin: "0px 7px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://gapxbit.com/MarketPage"
                    style={{
                      boxSizing: "border-box",
                      transition: "0.3s",
                      textDecoration: "none",
                      cursor: "pointer",
                      padding: "28px 12px",
                      borderRadius: "3px",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 600,
                      fontSize: "16px",
                      display: "block",
                    }}
                  >
                    Market
                  </a>
                </li>
                <li
                  className="custom_dropdown"
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    paddingLeft: "0px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    margin: "0px 7px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://gapxbit.com/trade/Header"
                    style={{
                      boxSizing: "border-box",
                      transition: "0.3s",
                      textDecoration: "none",
                      cursor: "pointer",
                      padding: "28px 12px",
                      borderRadius: "3px",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 600,
                      fontSize: "16px",
                      display: "block",
                    }}
                  >
                    Trade{" "}
                    <i
                      className="ri-arrow-down-s-line ms-1"
                      style={{
                        boxSizing: "border-box",
                        fontStyle: "normal",
                        WebkitFontSmoothing: "antialiased",
                        transition: "0.3s",
                        marginLeft: "0.25rem",
                        fontFamily: "remixicon",
                        transform: "rotateX(0deg)",
                      }}
                    />{" "}
                  </a>
                  <ul
                    className="submenu"
                    style={{
                      boxSizing: "border-box",
                      listStyle: "none",
                      marginTop: "0px",
                      marginBottom: "0px",
                      width: "320px",
                      transition: "0.3s",
                      borderRadius: "10px",
                      border: "0px solid rgb(51, 51, 51)",
                      overflow: "hidden",
                      padding: "0px",
                      minWidth: "230px",
                      position: "absolute",
                      top: "90%",
                      left: "0px",
                      zIndex: 90,
                      opacity: 0,
                      visibility: "hidden",
                      textAlign: "left",
                      backgroundColor: "rgb(17, 17, 17)",
                      height: "-webkit-fill-available",
                      paddingLeft: "0px",
                    }}
                  >
                    <li
                      style={{
                        boxSizing: "border-box",
                        listStyle: "none",
                        paddingLeft: "0px",
                        fontSize: "16px",
                        lineHeight: "24px",
                        position: "relative",
                        margin: "0px",
                      }}
                    >
                      <a
                        href="https://gapxbit.com/trade/Header"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          cursor: "pointer",
                          opacity: 0.8,
                          margin: "0px 10px",
                          borderRadius: "7px",
                          transition: "0.3s",
                          fontWeight: 500,
                          fontSize: "15px",
                          color: "rgb(218, 218, 218)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 16px",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          className="d-flex align-items-center"
                          style={{
                            boxSizing: "border-box",
                            unicodeBidi: "isolate",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="ri-line-chart-line me-4"
                            style={{
                              boxSizing: "border-box",
                              fontStyle: "normal",
                              WebkitFontSmoothing: "antialiased",
                              fontSize: "22px",
                              color: "currentcolor",
                              background: "transparent",
                              padding: "2px",
                              borderRadius: "2px",
                              transition: "0.3s",
                              margin: "0px -3px",
                              strokeWidth: "2px",
                              height: "auto",
                              width: "22px",
                              marginRight: "1.5rem",
                              fontFamily: "remixicon",
                              transform: "rotateX(0deg)",
                              opacity: 1,
                              position: "relative",
                              top: "0px",
                              left: "0px",
                            }}
                          />
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              unicodeBidi: "isolate",
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "100%",
                                fontWeight: 600,
                                lineHeight: 1.5,
                                marginBottom: "2px",
                              }}
                            >
                              {" "}
                              Trade{" "}
                            </span>
                            <small
                              style={{
                                boxSizing: "border-box",
                                fontSize: "0.875em",
                                display: "block",
                                width: "100%",
                                opacity: 0.7,
                                lineHeight: 1.1,
                              }}
                            >
                              {" "}
                              Trade on GapXbit platform{" "}
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "border-box",
                        listStyle: "none",
                        paddingLeft: "0px",
                        fontSize: "16px",
                        lineHeight: "24px",
                        position: "relative",
                        margin: "0px",
                      }}
                    >
                      <a
                        href="https://gapxbit.com/Launchpad"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          cursor: "pointer",
                          opacity: 0.8,
                          margin: "0px 10px",
                          borderRadius: "7px",
                          transition: "0.3s",
                          fontWeight: 500,
                          fontSize: "15px",
                          color: "rgb(218, 218, 218)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 16px",
                          marginLeft: "10px",
                        }}
                      >
                        <div
                          className="d-flex align-items-center"
                          style={{
                            boxSizing: "border-box",
                            unicodeBidi: "isolate",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="ri-rocket-fill me-4"
                            style={{
                              boxSizing: "border-box",
                              fontStyle: "normal",
                              WebkitFontSmoothing: "antialiased",
                              fontSize: "22px",
                              color: "currentcolor",
                              background: "transparent",
                              padding: "2px",
                              borderRadius: "2px",
                              transition: "0.3s",
                              margin: "0px -3px",
                              strokeWidth: "2px",
                              height: "auto",
                              width: "22px",
                              marginRight: "1.5rem",
                              fontFamily: "remixicon",
                              transform: "rotateX(0deg)",
                              opacity: 1,
                              position: "relative",
                              top: "0px",
                              left: "0px",
                            }}
                          />
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              unicodeBidi: "isolate",
                            }}
                          >
                            <span
                              style={{
                                boxSizing: "border-box",
                                display: "block",
                                width: "100%",
                                fontWeight: 600,
                                lineHeight: 1.5,
                                marginBottom: "2px",
                              }}
                            >
                              Launchpad{" "}
                            </span>
                            <small
                              style={{
                                boxSizing: "border-box",
                                fontSize: "0.875em",
                                display: "block",
                                width: "100%",
                                opacity: 0.7,
                                lineHeight: 1.1,
                              }}
                            >
                              {" "}
                              Hold GapXbit and Earn New Token{" "}
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    paddingLeft: "0px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    margin: "0px 7px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://gapxbit.com/Staking"
                    style={{
                      boxSizing: "border-box",
                      transition: "0.3s",
                      textDecoration: "none",
                      cursor: "pointer",
                      padding: "28px 12px",
                      borderRadius: "3px",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 600,
                      fontSize: "16px",
                      display: "block",
                    }}
                  >
                    Staking
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    paddingLeft: "0px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    margin: "0px 7px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://gapxbit.com/FundPage"
                    style={{
                      boxSizing: "border-box",
                      transition: "0.3s",
                      textDecoration: "none",
                      cursor: "pointer",
                      padding: "28px 12px",
                      borderRadius: "3px",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 600,
                      fontSize: "16px",
                      display: "block",
                    }}
                  >
                    Wallet
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    listStyle: "none",
                    paddingLeft: "0px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    margin: "0px 7px",
                    position: "relative",
                  }}
                >
                  <a
                    href="https://gapxbit.com/listingcoin"
                    style={{
                      boxSizing: "border-box",
                      transition: "0.3s",
                      textDecoration: "none",
                      cursor: "pointer",
                      padding: "28px 12px",
                      borderRadius: "3px",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 600,
                      fontSize: "16px",
                      display: "block",
                    }}
                  >
                    Listing
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          className="header-right d-flex align-items-center"
          style={{
            boxSizing: "border-box",
            unicodeBidi: "isolate",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul
            className="header-right-inner"
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              paddingLeft: "0px",
              marginTop: "0px",
              display: "flex",
              alignItems: "center",
              marginBottom: "0px",
            }}
          >
            <li
              className="header_search d-none d-md-block mx-0"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                paddingLeft: "0px",
                fontSize: "16px",
                lineHeight: "24px",
                position: "relative",
                display: "none",
                marginLeft: "0px",
                marginRight: "0px",
              }}
            >
              <div
                className="searchBar custom-tabs mt-0"
                style={{
                  boxSizing: "border-box",
                  unicodeBidi: "isolate",
                  borderRadius: "6px",
                  color: "rgb(255, 255, 255)",
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "8.5px 5px 8.5px 15px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  background: "rgb(52, 58, 52)",
                  borderColor: "rgb(52, 58, 52)",
                  maxWidth: "170px",
                  boxShadow: "none",
                  marginTop: "0px",
                }}
              >
                <i
                  className="ri-search-2-line serachBar"
                  style={{
                    boxSizing: "border-box",
                    transition: "0.3s",
                    fontStyle: "normal",
                    WebkitFontSmoothing: "antialiased",
                    marginRight: "8px",
                    color: "currentcolor",
                    fontFamily: "remixicon",
                  }}
                />
                <input
                  className="custom_search serachBar"
                  type="search"
                  placeholder="Search"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    width: "100%",
                    outlineOffset: "-2px",
                    appearance: "textfield",
                    background: "transparent",
                    color: "rgb(255, 255, 255)",
                    border: "0px",
                  }}
                />
              </div>
              <div
                id="serachBar2"
                className="search_result dropdown-menu scroll_y serachBar"
                style={{
                  boxSizing: "border-box",
                  unicodeBidi: "isolate",
                  margin: "0px",
                  listStyle: "none",
                  zIndex: 1000,
                  display: "none",
                  minWidth: "10rem",
                  fontSize: "1rem",
                  color: "rgb(33, 37, 41)",
                  textAlign: "left",
                  backgroundClip: "padding-box",
                  overflow: "hidden auto",
                  height: "240px",
                  borderRadius: "8px",
                  padding: "12px 0px",
                  border: "1px solid rgb(51, 51, 51)",
                  position: "absolute",
                  right: "0px",
                  backgroundColor: "rgb(17, 17, 17)",
                  width: "420px",
                  maxHeight: "600px",
                  minHeight: "400px",
                  top: "calc(100% + 10px)",
                  overflowY: "auto",
                }}
              >
                <div
                  className="search_tabs serachBar"
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    unicodeBidi: "isolate",
                  }}
                >
                  <div
                    className="trade_tabs buy_sell_cards py-0 serachBar"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      unicodeBidi: "isolate",
                      padding: "10px",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                    }}
                  >
                    <ul
                      className="nav custom-tabs nav_order scroll_x justify-content-between serachBar"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        listStyle: "none",
                        flexWrap: "wrap",
                        marginBottom: "0px",
                        color: "rgb(255, 255, 255)",
                        fontSize: "16px",
                        fontWeight: 500,
                        padding: "0px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "0px",
                        borderBottom: "1px solid rgb(51, 51, 51)",
                        borderRadius: "0px",
                        justifyContent: "space-between",
                        width: "auto",
                        background: "transparent",
                        boxShadow: "none",
                      }}
                    >
                      <li
                        className="all-tab serachBar"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          lineHeight: "24px",
                          fontSize: "14px",
                          padding: "0px 20px 0px 0px",
                          maxWidth: "fit-content",
                          paddingLeft: "0px",
                          flex: "1 1 auto",
                          textAlign: "left",
                        }}
                      >
                        <a
                          className="active serachBar"
                          href="https://gapxbit.com/#topSearches"
                          style={{
                            boxSizing: "border-box",
                            transition: "0.3s",
                            textDecoration: "none",
                            cursor: "pointer",
                            fontWeight: 600,
                            background: "rgb(14, 233, 160)",
                            borderRadius: "6px",
                            display: "block",
                            textAlign: "center",
                            position: "relative",
                            padding: "7px 0px",
                            fontSize: "14px",
                            backgroundColor: "transparent",
                            color: "rgb(14, 233, 160)",
                          }}
                        >
                          Top Searches{" "}
                        </a>
                      </li>
                      <li
                        className="all-tab serachBar"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          lineHeight: "24px",
                          fontSize: "14px",
                          padding: "0px 20px 0px 0px",
                          maxWidth: "fit-content",
                          paddingLeft: "0px",
                          flex: "1 1 auto",
                          textAlign: "left",
                        }}
                      >
                        <a
                          className="serachBar"
                          href="https://gapxbit.com/#hotEvents"
                          style={{
                            boxSizing: "border-box",
                            transition: "0.3s",
                            textDecoration: "none",
                            cursor: "pointer",
                            fontWeight: 600,
                            borderRadius: "6px",
                            display: "block",
                            textAlign: "center",
                            color: "rgba(255, 255, 255, 0.65)",
                            position: "relative",
                            padding: "7px 0px",
                            fontSize: "14px",
                          }}
                        >
                          <i
                            className="ri-close-line"
                            style={{
                              boxSizing: "border-box",
                              transition: "0.3s",
                              fontStyle: "normal",
                              WebkitFontSmoothing: "antialiased",
                              fontFamily: "remixicon",
                            }}
                          />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-content serachBar"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      unicodeBidi: "isolate",
                    }}
                  >
                    <div
                      id="topSearches"
                      className="tab-pane px-0 active serachBar"
                      style={{
                        boxSizing: "border-box",
                        unicodeBidi: "isolate",
                        display: "block",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      <div
                        className="text-center no-data h-100 mb-0 serachBar"
                        style={{
                          boxSizing: "border-box",
                          unicodeBidi: "isolate",
                          padding: "50px 0px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          height: "100%",
                          marginBottom: "0px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          className="loading-wave serachBar"
                          style={{
                            boxSizing: "border-box",
                            unicodeBidi: "isolate",
                            width: "300px",
                            height: "100px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-end",
                          }}
                        >
                          {" "}
                          <p
                            className="text-center serachBar"
                            style={{
                              boxSizing: "border-box",
                              marginTop: "0px",
                              marginBottom: "1rem",
                              color: "rgb(255, 255, 255)",
                              fontSize: "16px",
                              lineHeight: 1.9,
                              textAlign: "center",
                            }}
                          >
                            No data Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="wallet-button"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                paddingLeft: "0px",
                fontSize: "16px",
                lineHeight: "24px",
                position: "relative",
                display: "flex",
                marginRight: "5px",
              }}
            >
              <a
                className="btn btn-link text-white"
                href="https://gapxbit.com/login"
                style={{
                  boxSizing: "border-box",
                  textAlign: "center",
                  verticalAlign: "middle",
                  userSelect: "none",
                  transition: "0.5s",
                  overflow: "hidden",
                  border: "0px",
                  position: "relative",
                  cursor: "pointer",
                  minHeight: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontWeight: 600,
                  width: "unset",
                  borderRadius: "5px",
                  marginLeft: "auto",
                  fontSize: "13px",
                  lineHeight: 1,
                  height: "auto",
                  background: "transparent",
                  backgroundColor: "transparent",
                  color: "rgb(255, 255, 255)",
                  padding: "8px 10px",
                  paddingLeft: "10px",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-flex",
                    zIndex: 1,
                  }}
                >
                  Log In
                </span>
              </a>
              <div
                className="btn-group"
                style={{
                  boxSizing: "border-box",
                  unicodeBidi: "isolate",
                  position: "relative",
                  verticalAlign: "middle",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(51, 51, 51, 0.2)",
                  padding: "0px 5px 0px 0px",
                  margin: "0px auto 0px 0px",
                }}
              >
                <a
                  className="u-join-now"
                  href="https://gapxbit.com/signup"
                  style={{
                    boxSizing: "border-box",
                    padding: "2px 0px",
                    transition: "color 0.2s",
                    borderRadius: "0px",
                    marginRight: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textTransform: "uppercase",
                    fontFamily: "Roboto, sans-serif",
                    color: "rgb(23, 160, 117)",
                    fontWeight: 500,
                    fontSize: "10px",
                    lineHeight: 1,
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="u-join-now__icon"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      unicodeBidi: "isolate",
                    }}
                  >
                    <svg
                      className="icon-user"
                      height="20"
                      width="20"
                      fill="none"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        boxSizing: "border-box",
                        verticalAlign: "middle",
                        color: "rgb(23, 160, 117)",
                      }}
                    >
                      <path
                        d="M16.3639 3.63604C19.8787 7.15076 19.8787 12.8492 16.3639 16.3639C12.8492 19.8787 7.15074 19.8787 3.63604 16.3639C0.12132 12.8492 0.12132 7.15074 3.63604 3.63604C7.15076 0.12132 12.8492 0.12132 16.3639 3.63604"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        style={{ boxSizing: "border-box" }}
                      />
                      <path
                        d="M11.9891 6.3239C13.0876 7.42244 13.0876 9.20354 11.9891 10.3021C10.8906 11.4006 9.10946 11.4006 8.01092 10.3021C6.91238 9.20354 6.91238 7.42244 8.01092 6.3239C9.10946 5.22537 10.8906 5.22537 11.9891 6.3239"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        style={{ boxSizing: "border-box" }}
                      />
                      <path
                        d="M15.707 16.958C14.272 15.447 12.248 14.5 9.99997 14.5C7.75197 14.5 5.72797 15.447 4.29297 16.959"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        style={{ boxSizing: "border-box" }}
                      />
                    </svg>
                  </div>
                  <div
                    className="u-join-now-name"
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      unicodeBidi: "isolate",
                    }}
                  >
                    <i
                      style={{
                        boxSizing: "border-box",
                        transition: "0.3s",
                        margin: "5px 2px 2px",
                        right: "0px",
                        fontStyle: "normal",
                      }}
                    >
                      join now
                    </i>
                    <strong
                      style={{
                        boxSizing: "border-box",
                        padding: "2px 4px",
                        background:
                          "linear-gradient(97.53deg, rgb(26, 167, 115) 0%, rgb(31, 204, 152) 100%)",
                        borderRadius: "0px",
                        height: "13px",
                        fontSize: "10px",
                        lineHeight: "11px",
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontFamily: "Roboto, sans-serif",
                        color: "rgb(29, 30, 31)",
                      }}
                    >
                      rewards
                    </strong>
                  </div>
                </a>
              </div>
            </li>
            <li
              className="setting-option mobile-menu-bar d-block d-xl-none"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                paddingLeft: "0px",
                fontSize: "16px",
                lineHeight: "24px",
                position: "relative",
                marginRight: "0px",
                display: "block",
              }}
            >
              <button
                className="hamberger-button"
                type="button"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "0px",
                  margin: "0px",
                  fontFamily: "inherit",
                  transition: "0.5s",
                  textRendering: "auto",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textTransform: "none",
                  textIndent: "0px",
                  textShadow: "none",
                  textAlign: "center",
                  appearance: "button",
                  background: "transparent",
                  border: "none",
                  color: "rgb(255, 255, 255)",
                  fontSize: "24px",
                  lineHeight: "35px",
                  display: "flex",
                  padding: "0px",
                  cursor: "pointer",
                }}
              >
                <i
                  className="ri-menu-2-fill"
                  style={{
                    boxSizing: "border-box",
                    transition: "0.3s",
                    fontStyle: "normal",
                    WebkitFontSmoothing: "antialiased",
                    fontFamily: "remixicon",
                  }}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
}
