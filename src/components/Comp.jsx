import React from "react";

export default function Component() {
  return (
    <>
      <section
        className="intro"
        style={{
          padding: "0px",
          margin: "0px",
          boxSizing: "border-box",
          marginBottom: "419px",
          marginTop: "261px",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            padding: "0px 15px",
            margin: "0px auto",
            width: "100%",
            maxWidth: "1536px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img
            className="picture"
            src="https://myrothedog.com/assets/img/intro_picture.png"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              maxWidth: "813px",
              width: "100%",
              position: "absolute",
              right: "-50px",
              pointerEvents: "none",
              top: "-324px",
              zIndex: -1,
            }}
          />
          <h2
            className="wow animate__bounceIn"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              animationDuration: "calc(1s*0.75)",
              gap: "30px",
              color: "var(--f-8-f-7-ff, #f8f6ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "72px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              marginBottom: "9px",
              visibility: "visible",
              animationName: "bounceIn",
            }}
          >
            {"Welcome to"}
            <svg
              height="75"
              width="108"
              fill="none"
              viewBox="0 0 108 75"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                width: "106px",
                marginBottom: "10px",
              }}
            >
              <path
                d="M9.93817 23.0581C9.81908 21.6088 8.86262 20.7144 8.39197 19.5985C5.0813 11.7601 9.2609 2.83293 17.2759 0.698433C24.3399 -1.18554 30.8158 2.79146 32.3578 9.94257C32.91 12.5026 32.874 15.0976 32.7094 17.6717C32.5646 19.9033 33.4275 21.3759 35.3214 22.5387C39.0181 24.8059 42.9531 26.5317 46.9569 28.1234C54.9593 31.3122 62.9776 34.4742 71.0117 37.588C75.1386 39.1845 79.0484 41.2581 83.0428 43.1174C84.0384 42.0695 83.8717 40.7328 84.2997 39.6019C86.1972 34.6123 89.7897 31.7386 95.0845 31.3716C100.213 31.0214 104.161 33.2286 106.638 37.802C109.569 43.2186 107.123 49.9121 101.113 53.0859C100.27 53.5285 99.2271 53.5922 98.4289 54.5054C98.9883 56.3058 100.077 57.9806 100.204 60.0023C100.649 67.089 94.6141 74.0078 87.3197 74.6303C80.1428 75.2415 73.295 69.5221 73.1429 62.1291C73.0811 59.2137 71.8736 58.3901 69.6493 57.5284C59.5517 53.6164 49.8032 48.8467 39.5839 45.2082C34.8252 43.5183 30.0455 41.9035 25.1656 40.594C23.6871 40.1943 22.7301 40.3218 21.8598 41.856C17.949 48.7489 6.27032 48.83 1.47602 40.6294C-0.788953 36.7665 -0.176098 32.8047 2.27847 29.1232C4.17515 26.2735 6.97031 24.5057 9.94355 23.0634L9.93817 23.0581ZM22.6955 36.3469C24.2281 38.025 24.2386 37.9929 26.3272 38.4433C39.9833 41.365 53.1013 45.9263 65.6858 51.9507C68.7796 53.429 71.6668 55.3522 74.5963 57.1576C75.9377 57.9859 76.6754 59.0044 77.0051 60.8753C77.8401 65.5687 80.9308 69.8236 86.0899 70.1955C90.473 70.5122 94.9624 67.2278 96.2839 62.626C97.0524 59.9367 97.3077 57.3033 94.458 55.4067C93.2022 54.5672 93.406 53.5123 94.7727 52.8961C97.031 51.8744 99.1599 50.65 101.084 49.1056C104.117 46.6787 105.184 43.6777 104.169 40.6918C103.117 37.5723 100.138 35.398 96.5521 35.19C93.8549 35.0314 91.4509 35.7808 89.405 37.5987C87.7053 39.0992 86.3385 40.8443 85.7602 43.0405C85.224 45.076 84.0812 45.5307 82.2165 44.8974C81.2841 44.5807 80.3095 44.3927 79.3614 44.1349C72.6922 42.3095 66.3612 39.5945 60.0249 36.8848C51.4264 33.2119 42.8439 29.5229 34.2243 25.9036C30.1932 24.2104 28.3555 21.3246 28.6453 16.9362C28.795 14.6136 28.8804 12.2593 28.34 9.94522C27.1718 4.95377 22.6008 2.20375 17.6528 3.51077C11.1125 5.2425 8.26067 13.2273 12.1398 19.0514C12.6785 19.8621 13.3881 20.5757 14.0548 21.2895C16.684 24.1074 16.4587 25.1196 12.8796 26.2811C10.7536 26.9758 8.75141 27.8572 7.12181 29.4698C3.47386 33.0766 3.29835 37.8977 6.83753 40.8077C10.8225 44.0848 17.151 43.9858 19.6037 39.8977C20.3682 38.6315 21.1703 37.3919 22.6848 36.347L22.6955 36.3469Z"
                fill="white"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                }}
              />
            </svg>
          </h2>
          <h1
            className="wow animate__bounceIn"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              animationDuration: "calc(1s*0.75)",
              marginBottom: "32px",
              visibility: "visible",
              animationName: "bounceIn",
            }}
          >
            <img
              src="https://myrothedog.com/assets/img/miro_text.png"
              style={{
                padding: "0px",
                margin: "0px",
                boxSizing: "border-box",
                maxWidth: "524px",
                width: "100%",
              }}
            />
          </h1>
          <h3
            className="wow animate__bounceIn"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              animationDuration: "calc(1s*0.75)",
              color: "var(--f-8-f-7-ff, #f8f6ff)",
              fontFamily: "Grandstander",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "140%",
              marginBottom: "32px",
              visibility: "visible",
              animationName: "bounceIn",
            }}
          >
            {"Myro the dog: Named after Solana Co-Founder Raj"}
            <br
              style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}
            />
            {"Gokal’s dog Myro."}
          </h3>
          <div
            className="intro__links wow animate__bounceIn"
            style={{
              padding: "0px",
              margin: "0px",
              boxSizing: "border-box",
              animationDuration: "calc(1s*0.75)",
              gap: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              visibility: "visible",
              animationName: "bounceIn",
            }}
          >
            <a
              className="links__link white"
              href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4&fixed=in"
              target="_blank"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                textDecoration: "none",
                padding: "14px 20px",
                gap: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "140%",
                borderRadius: "24px",
                background: "var(--f-8-f-7-ff, #f8f6ff)",
                transition: "all 0.3s ease 0s",
                color: "var(--292933, #050505)",
              }}
            >
              {"Buy on Raydium"}
              <svg
                height="25"
                width="24"
                fill="none"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  padding: "0px",
                  margin: "0px",
                  boxSizing: "border-box",
                  width: "24px",
                }}
              >
                <path
                  d="M6.25 5.44702C5.56 5.44702 5 6.00702 5 6.69702V18.197C5 18.887 5.56 19.447 6.25 19.447H17.75C18.44 19.447 19 18.887 19 18.197V14.447C19 14.1818 19.1054 13.9275 19.2929 13.7399C19.4804 13.5524 19.7348 13.447 20 13.447C20.2652 13.447 20.5196 13.5524 20.7071 13.7399C20.8946 13.9275 21 14.1818 21 14.447V18.197C21 19.059 20.6576 19.8856 20.0481 20.4951C19.4386 21.1046 18.612 21.447 17.75 21.447H6.25C5.38805 21.447 4.5614 21.1046 3.9519 20.4951C3.34241 19.8856 3 19.059 3 18.197V6.69702C3 5.83507 3.34241 5.00842 3.9519 4.39892C4.5614 3.78943 5.38805 3.44702 6.25 3.44702H10C10.2652 3.44702 10.5196 3.55238 10.7071 3.73991C10.8946 3.92745 11 4.18181 11 4.44702C11 4.71224 10.8946 4.96659 10.7071 5.15413C10.5196 5.34166 10.2652 5.44702 10 5.44702H6.25ZM14 5.44702C13.7348 5.44702 13.4804 5.34166 13.2929 5.15413C13.1054 4.96659 13 4.71224 13 4.44702C13 4.18181 13.1054 3.92745 13.2929 3.73991C13.4804 3.55238 13.7348 3.44702 14 3.44702H20C20.2652 3.44702 20.5196 3.55238 20.7071 3.73991C20.8946 3.92745 21 4.18181 21 4.44702V10.447C21 10.7122 20.8946 10.9666 20.7071 11.1541C20.5196 11.3417 20.2652 11.447 20 11.447C19.7348 11.447 19.4804 11.3417 19.2929 11.1541C19.1054 10.9666 19 10.7122 19 10.447V6.86102L14.707 11.154C14.5184 11.3362 14.2658 11.437 14.0036 11.4347C13.7414 11.4324 13.4906 11.3272 13.3052 11.1418C13.1198 10.9564 13.0146 10.7056 13.0123 10.4434C13.01 10.1812 13.1108 9.92862 13.293 9.74002L17.586 5.44702H14Z"
                  fill="#050505"
                  style={{
                    padding: "0px",
                    margin: "0px",
                    boxSizing: "border-box",
                  }}
                />
              </svg>
            </a>
            <a
              className="links__link border"
              href="https://t.me/myroSOL"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                textDecoration: "none",
                padding: "14px 20px",
                gap: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "140%",
                borderRadius: "24px",
                border: "2px solid var(--f-8-f-7-ff, #f8f6ff)",
                color: "var(--f-8-f-7-ff, #f8f6ff)",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      
    </>
  );
}
