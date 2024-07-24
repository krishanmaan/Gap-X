import React from "react";

export default function Component() {
  return (
    <>
      <div
        id="chart"
        className="chart-area pt-140"
        style={{ boxSizing: "border-box", paddingTop: "140px" }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1320px",
            paddingLeft: "15px",
            paddingRight: "15px",
           
          }}
        >
          <div
            className="chart-inner-wrap"
            style={{ boxSizing: "border-box", position: "relative" }}
          >
            <div
              className="row align-items-center"
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexWrap: "wrap",
                marginTop: "calc(-1 * 0)",
                marginRight: "calc(-.5 * 30px)",
                marginLeft: "calc(-.5 * 30px)",
                alignItems: "center",
              }}
            >
              <div
                className="col-lg-6"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  paddingRight: "calc(30px * .5)",
                  paddingLeft: "calc(30px * .5)",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "50%",
                }}
              >
                <div
                  className="chart-wrap"
                  style={{ boxSizing: "border-box", marginLeft: "30px" }}
                >
                  <div
                    className="chart"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px 0px 50px 60px",
                      height: "340px",
                      width: "unset",
                    }}
                  >
                    <div id="doughnutChart" style={{ boxSizing: "border-box" }}>
                      <img
                        src="assets/img/images/tokenallocation.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          transition: "all 0.3s ease-out 0s",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="chart-tab"
                    style={{ boxSizing: "border-box" }}
                  >
                    <ul
                      id="myTab"
                      className="nav nav-tabs"
                      role="tablist"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        listStyle: "none",
                        flexWrap: "wrap",
                        borderBottom: "none",
                        background: "rgb(28, 29, 52)",
                        borderRadius: "30px",
                        padding: "10px",
                        paddingLeft: "10px",
                        justifyContent: "center",
                        marginBottom: "50px",
                        display: "none",
                      }}
                    >
                      <li
                        className="nav-item"
                        style={{ boxSizing: "border-box" }}
                      >
                        <button
                          className="nav-link active"
                          style={{
                            boxSizing: "border-box",
                            margin: "0px",
                            fontFamily: "inherit",
                            lineHeight: "inherit",
                            textTransform: "none",
                            appearance: "button",
                            outline: "none medium",
                            textDecoration: "none",
                            transition:
                              "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s",
                            display: "block",
                            cursor: "pointer",
                            borderColor:
                              "rgb(222, 226, 230) rgb(222, 226, 230) rgb(255, 255, 255)",
                            border: "none",
                            borderRadius: "30px",
                            padding: "8px 35px",
                            marginBottom: "0px",
                            fontSize: "14px",
                            fontWeight: 700,
                            borderTopLeftRadius: "30px",
                            borderTopRightRadius: "30px",
                            background: "#ffffff",
                            backgroundColor: "",
                            color: "rgb(1, 3, 20)",
                          }}
                        >
                          Total Supply and Allocation
                        </button>
                      </li>
                    </ul>
                    <div
                      id="myTabContent"
                      className="tab-content"
                      style={{ boxSizing: "border-box" }}
                    >
                      <div
                        id="description"
                        className="tab-pane fade show active"
                        style={{
                          boxSizing: "border-box",
                          transition: "opacity 0.15s linear 0s",
                          display: "block",
                        }}
                      >
                        <div
                          className="chart-list"
                          style={{ boxSizing: "border-box" }}
                        >
                          <ul
                            className="list-wrap"
                            style={{
                              boxSizing: "border-box",
                              margin: "0px",
                              padding: "0px",
                              marginTop: "0px",
                              marginBottom: "0px",
                              paddingLeft: "0px",
                              gap: "15px 0px",
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <li
                              style={{
                                boxSizing: "border-box",
                                listStyle: "none",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: 500,
                                letterSpacing: "0.48px",
                                width: "50%",
                                position: "relative",
                                paddingLeft: "30px",
                              }}
                            >
                              Launchpad: 10%
                            </li>
                            <li
                              style={{
                                boxSizing: "border-box",
                                listStyle: "none",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: 500,
                                letterSpacing: "0.48px",
                                width: "50%",
                                position: "relative",
                                paddingLeft: "30px",
                              }}
                            >
                              Presale: 40%
                            </li>
                            <li
                              style={{
                                boxSizing: "border-box",
                                listStyle: "none",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: 500,
                                letterSpacing: "0.48px",
                                width: "50%",
                                position: "relative",
                                paddingLeft: "30px",
                              }}
                            >
                              Development : 15%
                            </li>
                            <li
                              style={{
                                boxSizing: "border-box",
                                listStyle: "none",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: 500,
                                letterSpacing: "0.48px",
                                width: "50%",
                                position: "relative",
                                paddingLeft: "30px",
                              }}
                            >
                              Team: 15%
                            </li>
                            <li
                              style={{
                                boxSizing: "border-box",
                                listStyle: "none",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: 500,
                                letterSpacing: "0.48px",
                                width: "50%",
                                position: "relative",
                                paddingLeft: "30px",
                              }}
                            >
                              Staking Partners Bonus : 10%
                            </li>
                            <li
                              style={{
                                boxSizing: "border-box",
                                listStyle: "none",
                                color: "#ffffff",
                                fontSize: "16px",
                                fontWeight: 500,
                                letterSpacing: "0.48px",
                                width: "50%",
                                position: "relative",
                                paddingLeft: "30px",
                              }}
                            >
                              Reserve : 10%
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                style={{
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  paddingRight: "calc(30px * .5)",
                  paddingLeft: "calc(30px * .5)",
                  marginTop: "0",
                  flex: "0 0 auto",
                  flexShrink: 0,
                  width: "50%",
                }}
              >
                <div
                  className="right-side-content"
                  style={{ boxSizing: "border-box", marginLeft: "190px" }}
                >
                  <img
                    src="assets/img/banner/banner_1.png"
                    style={{
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      transition: "all 0.3s ease-out 0s",
                      maxWidth: "100%",
                      marginBottom: "30px",
                    }}
                  />
                  <p
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: 1.62,
                      color: "#92939E",
                      marginBottom: "25px",
                      marginLeft: "20px",
                    }}
                  >
                    BNB Smart Chain is a decentralized, open-source{" "}
                    <br style={{ boxSizing: "border-box" }} /> blockchain with
                    smart contract
                  </p>
                  <ul
                    className="list-wrap"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      paddingLeft: "0px",
                    }}
                  >
                    <li
                      style={{
                        boxSizing: "border-box",
                        listStyle: "none",
                        gap: "10px",
                        borderRadius: "5px",
                        padding: "9px 20px",
                        transition: "all 0.3s ease-in-out 0s",
                        display: "flex",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#ffffff",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                        }}
                      >
                        1
                      </span>
                      Symbol: Gapx
                    </li>
                    <li
                      style={{
                        boxSizing: "border-box",
                        listStyle: "none",
                        gap: "10px",
                        borderRadius: "5px",
                        padding: "9px 20px",
                        transition: "all 0.3s ease-in-out 0s",
                        display: "flex",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#ffffff",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                        }}
                      >
                        2
                      </span>
                      Initial Value : 1 GAPX = 0.000099 USDT
                    </li>
                    <li
                      style={{
                        boxSizing: "border-box",
                        listStyle: "none",
                        gap: "10px",
                        borderRadius: "5px",
                        padding: "9px 20px",
                        transition: "all 0.3s ease-in-out 0s",
                        display: "flex",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#ffffff",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                        }}
                      >
                        3
                      </span>
                      Type : - BEP20{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
