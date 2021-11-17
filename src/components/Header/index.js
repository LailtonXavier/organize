import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Center } from './styled';

export default function Heade() {
  return (
    <Container>
      <Center>
        <Link to="/">
          <div className="log">
            <svg
              width="217"
              height="50"
              viewBox="0 0 217 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_469:6337"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="44"
                height="50"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H43.5359V50H0V0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_469:6337)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.0647 0.0287016L0.201257 18.849C0.0789901 18.9026 0 19.0237 0 19.1575V30.8426C0 30.9763 0.0789901 31.0974 0.201257 31.1511L43.0647 49.9713C43.2869 50.0689 43.5359 49.9058 43.5359 49.6628V38.2777C43.5359 38.144 43.4569 38.0229 43.3346 37.9692L14.4996 25.3085C14.2313 25.1907 14.2313 24.8093 14.4996 24.6915L43.3346 12.0308C43.4569 11.9771 43.5359 11.856 43.5359 11.7223V0.337224C43.5359 0.094201 43.2869 -0.068842 43.0647 0.0287016"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.0647 0.0287016L0.201257 18.849C0.0789901 18.9026 0 19.0237 0 19.1575V30.8426C0 30.9763 0.0789901 31.0974 0.201257 31.1511L43.0647 49.9713C43.2869 50.0689 43.5359 49.9058 43.5359 49.6628V38.2777C43.5359 38.144 43.4569 38.0229 43.3346 37.9692L14.4996 25.3085C14.2313 25.1907 14.2313 24.8093 14.4996 24.6915L43.3346 12.0308C43.4569 11.9771 43.5359 11.856 43.5359 11.7223V0.337224C43.5359 0.094201 43.2869 -0.068842 43.0647 0.0287016"
                  fill="#4AC959"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.7388 18.4295C64.9396 18.4295 63.4803 19.0398 62.3596 20.2593C61.239 21.4794 60.6784 23.0596 60.6784 24.9997C60.6784 26.9959 61.239 28.604 62.3596 29.8235C63.4803 31.0436 64.9396 31.6534 66.7388 31.6534C69.1506 31.6534 71.0152 30.9333 72.3324 29.4937C72.5586 29.2466 72.9352 29.2148 73.1931 29.4285L75.6215 31.4412C75.8834 31.6582 75.9245 32.046 75.7144 32.3136C74.7693 33.5173 73.5761 34.4618 72.1351 35.1462C70.5019 35.9229 68.6066 36.3109 66.4487 36.3109C64.2622 36.3109 62.3183 35.8394 60.6164 34.8971C58.9145 33.9547 57.5926 32.6304 56.6526 30.9255C55.7114 29.2205 55.2413 27.2596 55.2413 25.0411C55.2413 22.7958 55.7186 20.8143 56.6733 19.0947C57.6279 17.3763 58.9558 16.0453 60.6578 15.1029C62.3596 14.1606 64.3169 13.6891 66.5314 13.6891C68.5513 13.6891 70.3566 14.0424 71.9484 14.749C73.3441 15.3696 74.5114 16.2195 75.4497 17.2987C75.6697 17.5516 75.6506 17.9345 75.4078 18.1654L72.9935 20.4617C72.7521 20.6913 72.3756 20.6876 72.1334 20.4588C70.7013 19.1061 68.9031 18.4295 66.7388 18.4295Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.7388 18.4295C64.9396 18.4295 63.4803 19.0398 62.3596 20.2593C61.239 21.4794 60.6784 23.0596 60.6784 24.9997C60.6784 26.9959 61.239 28.604 62.3596 29.8235C63.4803 31.0436 64.9396 31.6534 66.7388 31.6534C69.1506 31.6534 71.0152 30.9333 72.3324 29.4937C72.5586 29.2466 72.9352 29.2148 73.1931 29.4285L75.6215 31.4412C75.8834 31.6582 75.9245 32.046 75.7144 32.3136C74.7693 33.5173 73.5761 34.4618 72.1351 35.1462C70.5019 35.9229 68.6066 36.3109 66.4487 36.3109C64.2622 36.3109 62.3183 35.8394 60.6164 34.8971C58.9145 33.9547 57.5926 32.6304 56.6526 30.9255C55.7114 29.2205 55.2413 27.2596 55.2413 25.0411C55.2413 22.7958 55.7186 20.8143 56.6733 19.0947C57.6279 17.3763 58.9558 16.0453 60.6578 15.1029C62.3596 14.1606 64.3169 13.6891 66.5314 13.6891C68.5513 13.6891 70.3566 14.0424 71.9484 14.749C73.3441 15.3696 74.5114 16.2195 75.4497 17.2987C75.6697 17.5516 75.6506 17.9345 75.4078 18.1654L72.9935 20.4617C72.7521 20.6913 72.3756 20.6876 72.1334 20.4588C70.7013 19.1061 68.9031 18.4295 66.7388 18.4295Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M85.0444 20.1759C83.8818 21.4234 83.3005 23.0455 83.3005 25.0411C83.3005 27.0373 83.8818 28.6594 85.0444 29.9069C86.2064 31.1545 87.7283 31.7782 89.6101 31.7782C91.4367 31.7782 92.9307 31.1545 94.0933 29.9069C95.2552 28.6594 95.8365 27.0373 95.8365 25.0411C95.8365 23.0455 95.2552 21.4234 94.0933 20.1759C92.9307 18.9283 91.4367 18.3046 89.6101 18.3046C87.7283 18.3046 86.2064 18.9283 85.0444 20.1759ZM95.6911 15.1029C97.4484 16.0453 98.8177 17.3689 99.8003 19.0739C100.782 20.7789 101.274 22.7404 101.274 24.9583C101.274 27.2036 100.782 29.1863 99.8003 30.9047C98.8177 32.6237 97.4484 33.9547 95.6911 34.897C93.9333 35.8394 91.9067 36.3109 89.6101 36.3109C87.2856 36.3109 85.2377 35.8394 83.4671 34.897C81.6953 33.9547 80.3187 32.6237 79.3367 30.9047C78.3541 29.1863 77.8634 27.2036 77.8634 24.9583C77.8634 22.7404 78.3541 20.7789 79.3367 19.0739C80.3187 17.3689 81.6953 16.0453 83.4671 15.1029C85.2377 14.1606 87.2856 13.6891 89.6101 13.6891C91.9067 13.6891 93.9333 14.1606 95.6911 15.1029Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M85.0444 20.1759C83.8818 21.4234 83.3005 23.0455 83.3005 25.0411C83.3005 27.0373 83.8818 28.6594 85.0444 29.9069C86.2064 31.1545 87.7283 31.7782 89.6101 31.7782C91.4367 31.7782 92.9307 31.1545 94.0933 29.9069C95.2552 28.6594 95.8365 27.0373 95.8365 25.0411C95.8365 23.0455 95.2552 21.4234 94.0933 20.1759C92.9307 18.9283 91.4367 18.3046 89.6101 18.3046C87.7283 18.3046 86.2064 18.9283 85.0444 20.1759ZM95.6911 15.1029C97.4484 16.0453 98.8177 17.3689 99.8003 19.0739C100.782 20.7789 101.274 22.7404 101.274 24.9583C101.274 27.2036 100.782 29.1863 99.8003 30.9047C98.8177 32.6237 97.4484 33.9547 95.6911 34.897C93.9333 35.8394 91.9067 36.3109 89.6101 36.3109C87.2856 36.3109 85.2377 35.8394 83.4671 34.897C81.6953 33.9547 80.3187 32.6237 79.3367 30.9047C78.3541 29.1863 77.8634 27.2036 77.8634 24.9583C77.8634 22.7404 78.3541 20.7789 79.3367 19.0739C80.3187 17.3689 81.6953 16.0453 83.4671 15.1029C85.2377 14.1606 87.2856 13.6891 89.6101 13.6891C91.9067 13.6891 93.9333 14.1606 95.6911 15.1029Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M111.112 20.1759C109.949 21.4234 109.368 23.0455 109.368 25.0411C109.368 27.0373 109.949 28.6594 111.112 29.9069C112.274 31.1545 113.796 31.7782 115.677 31.7782C117.504 31.7782 118.998 31.1545 120.161 29.9069C121.322 28.6594 121.904 27.0373 121.904 25.0411C121.904 23.0455 121.322 21.4234 120.161 20.1759C118.998 18.9283 117.504 18.3046 115.677 18.3046C113.796 18.3046 112.274 18.9283 111.112 20.1759ZM121.758 15.1029C123.516 16.0453 124.885 17.3689 125.868 19.0739C126.85 20.7789 127.341 22.7404 127.341 24.9583C127.341 27.2036 126.85 29.1863 125.868 30.9047C124.885 32.6237 123.516 33.9547 121.758 34.897C120.001 35.8394 117.974 36.3109 115.677 36.3109C113.353 36.3109 111.305 35.8394 109.534 34.897C107.763 33.9547 106.386 32.6237 105.404 30.9047C104.421 29.1863 103.931 27.2036 103.931 24.9583C103.931 22.7404 104.421 20.7789 105.404 19.0739C106.386 17.3689 107.763 16.0453 109.534 15.1029C111.305 14.1606 113.353 13.6891 115.677 13.6891C117.974 13.6891 120.001 14.1606 121.758 15.1029Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M111.112 20.1759C109.949 21.4234 109.368 23.0455 109.368 25.0411C109.368 27.0373 109.949 28.6594 111.112 29.9069C112.274 31.1545 113.796 31.7782 115.677 31.7782C117.504 31.7782 118.998 31.1545 120.161 29.9069C121.322 28.6594 121.904 27.0373 121.904 25.0411C121.904 23.0455 121.322 21.4234 120.161 20.1759C118.998 18.9283 117.504 18.3046 115.677 18.3046C113.796 18.3046 112.274 18.9283 111.112 20.1759ZM121.758 15.1029C123.516 16.0453 124.885 17.3689 125.868 19.0739C126.85 20.7789 127.341 22.7404 127.341 24.9583C127.341 27.2036 126.85 29.1863 125.868 30.9047C124.885 32.6237 123.516 33.9547 121.758 34.897C120.001 35.8394 117.974 36.3109 115.677 36.3109C113.353 36.3109 111.305 35.8394 109.534 34.897C107.763 33.9547 106.386 32.6237 105.404 30.9047C104.421 29.1863 103.931 27.2036 103.931 24.9583C103.931 22.7404 104.421 20.7789 105.404 19.0739C106.386 17.3689 107.763 16.0453 109.534 15.1029C111.305 14.1606 113.353 13.6891 115.677 13.6891C117.974 13.6891 120.001 14.1606 121.758 15.1029Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M174.607 23.2533C174.989 23.2533 175.275 22.9132 175.225 22.5337C175.053 21.2311 174.533 20.1679 173.664 19.3444C172.641 18.374 171.285 17.8885 169.597 17.8885C168.019 17.8885 166.698 18.3673 165.633 19.3237C164.74 20.1247 164.134 21.1736 163.815 22.4707C163.717 22.8675 164.013 23.2533 164.421 23.2533H174.607ZM177.546 16.7245C179.331 18.7487 180.223 21.5897 180.223 25.2494C180.223 25.642 180.219 25.981 180.211 26.2665C180.201 26.6044 179.924 26.871 179.586 26.871H164.612C164.184 26.871 163.881 27.2938 164.019 27.6994C164.427 28.8913 165.089 29.8563 166.006 30.5928C167.127 31.4938 168.503 31.9445 170.137 31.9445C171.271 31.9445 172.357 31.7301 173.395 31.2995C174.432 30.87 175.339 30.2536 176.114 29.4495L178.603 32.0501C178.84 32.2972 178.835 32.6905 178.592 32.9306C177.57 33.9369 176.364 34.7307 174.972 35.3125C173.38 35.9777 171.617 36.3109 169.68 36.3109C167.411 36.3109 165.411 35.8394 163.682 34.897C161.952 33.9547 160.616 32.6304 159.676 30.9254C158.735 29.2204 158.265 27.2596 158.265 25.0411C158.265 22.8238 158.742 20.8557 159.697 19.1361C160.652 17.4177 161.986 16.08 163.702 15.1237C165.418 14.1673 167.369 13.6891 169.555 13.6891C173.097 13.6891 175.761 14.7009 177.546 16.7245Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M174.607 23.2533C174.989 23.2533 175.275 22.9132 175.225 22.5337C175.053 21.2311 174.533 20.1679 173.664 19.3444C172.641 18.374 171.285 17.8885 169.597 17.8885C168.019 17.8885 166.698 18.3673 165.633 19.3237C164.74 20.1247 164.134 21.1736 163.815 22.4707C163.717 22.8675 164.013 23.2533 164.421 23.2533H174.607ZM177.546 16.7245C179.331 18.7487 180.223 21.5897 180.223 25.2494C180.223 25.642 180.219 25.981 180.211 26.2665C180.201 26.6044 179.924 26.871 179.586 26.871H164.612C164.184 26.871 163.881 27.2938 164.019 27.6994C164.427 28.8913 165.089 29.8563 166.006 30.5928C167.127 31.4938 168.503 31.9445 170.137 31.9445C171.271 31.9445 172.357 31.7301 173.395 31.2995C174.432 30.87 175.339 30.2536 176.114 29.4495L178.603 32.0501C178.84 32.2972 178.835 32.6905 178.592 32.9306C177.57 33.9369 176.364 34.7307 174.972 35.3125C173.38 35.9777 171.617 36.3109 169.68 36.3109C167.411 36.3109 165.411 35.8394 163.682 34.897C161.952 33.9547 160.616 32.6304 159.676 30.9254C158.735 29.2204 158.265 27.2596 158.265 25.0411C158.265 22.8238 158.742 20.8557 159.697 19.1361C160.652 17.4177 161.986 16.08 163.702 15.1237C165.418 14.1673 167.369 13.6891 169.555 13.6891C173.097 13.6891 175.761 14.7009 177.546 16.7245Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M211.417 18.3881C210.268 18.0281 209.21 17.8472 208.241 17.8472C207.328 17.8472 206.602 18.0074 206.062 18.3253C205.523 18.6445 205.253 19.1361 205.253 19.8019C205.253 20.4951 205.591 21.0287 206.27 21.4027C206.947 21.7768 208.019 22.1721 209.486 22.5881C211.036 23.0596 212.309 23.5238 213.306 23.9812C214.302 24.4381 215.166 25.1179 215.899 26.0188C216.633 26.9198 217 28.1051 217 29.5738C217 31.7363 216.169 33.3998 214.509 34.5639C212.849 35.7286 210.759 36.3109 208.241 36.3109C206.525 36.3109 204.851 36.0405 203.219 35.4995C201.772 35.0208 200.521 34.3621 199.465 33.5241C199.231 33.3385 199.154 33.0173 199.286 32.7495L200.593 30.1007C200.767 29.7497 201.212 29.647 201.527 29.879C202.393 30.5172 203.385 31.0324 204.505 31.4244C205.889 31.9099 207.204 32.1523 208.449 32.1523C209.445 32.1523 210.24 31.9793 210.836 31.6327C211.43 31.2861 211.728 30.7665 211.728 30.0733C211.728 29.2972 211.382 28.7149 210.69 28.3263C209.998 27.9388 208.878 27.5094 207.328 27.0373C205.834 26.5945 204.616 26.1577 203.675 25.7276C202.734 25.2982 201.918 24.6464 201.226 23.7729C200.534 22.9 200.189 21.756 200.189 20.3422C200.189 18.153 200.984 16.4821 202.575 15.3314C204.166 14.1813 206.166 13.6057 208.573 13.6057C210.04 13.6057 211.486 13.8134 212.911 14.2295C214.13 14.5855 215.233 15.0628 216.22 15.6621C216.5 15.832 216.604 16.1876 216.457 16.4806L215.051 19.2979C214.895 19.6116 214.51 19.7367 214.202 19.5701C213.297 19.0811 212.369 18.6871 211.417 18.3881Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M211.417 18.3881C210.268 18.0281 209.21 17.8472 208.241 17.8472C207.328 17.8472 206.602 18.0074 206.062 18.3253C205.523 18.6445 205.253 19.1361 205.253 19.8019C205.253 20.4951 205.591 21.0287 206.27 21.4027C206.947 21.7768 208.019 22.1721 209.486 22.5881C211.036 23.0596 212.309 23.5238 213.306 23.9812C214.302 24.4381 215.166 25.1179 215.899 26.0188C216.633 26.9198 217 28.1051 217 29.5738C217 31.7363 216.169 33.3998 214.509 34.5639C212.849 35.7286 210.759 36.3109 208.241 36.3109C206.525 36.3109 204.851 36.0405 203.219 35.4995C201.772 35.0208 200.521 34.3621 199.465 33.5241C199.231 33.3385 199.154 33.0173 199.286 32.7495L200.593 30.1007C200.767 29.7497 201.212 29.647 201.527 29.879C202.393 30.5172 203.385 31.0324 204.505 31.4244C205.889 31.9099 207.204 32.1523 208.449 32.1523C209.445 32.1523 210.24 31.9793 210.836 31.6327C211.43 31.2861 211.728 30.7665 211.728 30.0733C211.728 29.2972 211.382 28.7149 210.69 28.3263C209.998 27.9388 208.878 27.5094 207.328 27.0373C205.834 26.5945 204.616 26.1577 203.675 25.7276C202.734 25.2982 201.918 24.6464 201.226 23.7729C200.534 22.9 200.189 21.756 200.189 20.3422C200.189 18.153 200.984 16.4821 202.575 15.3314C204.166 14.1813 206.166 13.6057 208.573 13.6057C210.04 13.6057 211.486 13.8134 212.911 14.2295C214.13 14.5855 215.233 15.0628 216.22 15.6621C216.5 15.832 216.604 16.1876 216.457 16.4806L215.051 19.2979C214.895 19.6116 214.51 19.7367 214.202 19.5701C213.297 19.0811 212.369 18.6871 211.417 18.3881Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M148.386 29.7614C147.224 31.023 145.73 31.6534 143.903 31.6534C142.049 31.6534 140.541 31.0297 139.379 29.7822C138.216 28.5346 137.636 26.9125 137.636 24.9169C137.636 22.9488 138.216 21.3406 139.379 20.0931C140.541 18.8456 142.049 18.2218 143.903 18.2218C145.73 18.2218 147.224 18.8456 148.386 20.0931C149.548 21.3406 150.13 22.9488 150.13 24.9169C150.13 26.8857 149.548 28.4999 148.386 29.7614ZM154.301 19.1361C153.429 17.4177 152.197 16.08 150.607 15.1237C149.015 14.1673 147.182 13.6891 145.107 13.6891C143.447 13.6891 141.987 14.015 140.727 14.6662C139.973 15.0564 139.301 15.5532 138.711 16.1568C138.317 16.5603 137.636 16.291 137.636 15.7263V14.7976C137.636 14.3609 137.2 14.0586 136.792 14.2117L132.645 15.7672C132.401 15.8587 132.239 16.0922 132.239 16.3531V44.1701H132.301L137.23 42.3212C137.474 42.2297 137.636 41.9962 137.636 41.7353V34.2425C137.636 33.6812 138.312 33.4082 138.706 33.8073C139.318 34.4272 140.013 34.9361 140.79 35.3332C142.063 35.985 143.529 36.3109 145.19 36.3109C147.265 36.3109 149.092 35.8394 150.669 34.8971C152.246 33.9547 153.464 32.6377 154.322 30.9462C155.179 29.2558 155.609 27.301 155.609 25.0832C155.609 22.8372 155.173 20.8557 154.301 19.1361Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M148.386 29.7614C147.224 31.023 145.73 31.6534 143.903 31.6534C142.049 31.6534 140.541 31.0297 139.379 29.7822C138.216 28.5346 137.636 26.9125 137.636 24.9169C137.636 22.9488 138.216 21.3406 139.379 20.0931C140.541 18.8456 142.049 18.2218 143.903 18.2218C145.73 18.2218 147.224 18.8456 148.386 20.0931C149.548 21.3406 150.13 22.9488 150.13 24.9169C150.13 26.8857 149.548 28.4999 148.386 29.7614ZM154.301 19.1361C153.429 17.4177 152.197 16.08 150.607 15.1237C149.015 14.1673 147.182 13.6891 145.107 13.6891C143.447 13.6891 141.987 14.015 140.727 14.6662C139.973 15.0564 139.301 15.5532 138.711 16.1568C138.317 16.5603 137.636 16.291 137.636 15.7263V14.7976C137.636 14.3609 137.2 14.0586 136.792 14.2117L132.645 15.7672C132.401 15.8587 132.239 16.0922 132.239 16.3531V44.1701H132.301L137.23 42.3212C137.474 42.2297 137.636 41.9962 137.636 41.7353V34.2425C137.636 33.6812 138.312 33.4082 138.706 33.8073C139.318 34.4272 140.013 34.9361 140.79 35.3332C142.063 35.985 143.529 36.3109 145.19 36.3109C147.265 36.3109 149.092 35.8394 150.669 34.8971C152.246 33.9547 153.464 32.6377 154.322 30.9462C155.179 29.2558 155.609 27.301 155.609 25.0832C155.609 22.8372 155.173 20.8557 154.301 19.1361Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M193.319 14.8325C192.577 15.2727 191.924 15.826 191.361 16.4923C190.989 16.9323 190.268 16.6556 190.268 16.0791V14.8128C190.268 14.3762 189.833 14.0738 189.425 14.2269L185.278 15.7822C185.034 15.8737 184.872 16.1072 184.872 16.3681V36.1026H184.939L189.863 34.2561C190.106 34.1646 190.268 33.9311 190.268 33.6702V25.3737C190.268 23.3228 190.953 21.6939 192.323 20.4878C193.565 19.3939 195.189 18.8537 197.194 18.8658C197.54 18.8679 197.823 18.5891 197.823 18.2422V14.3034C197.823 13.9402 197.514 13.6503 197.153 13.6776C195.713 13.7862 194.435 14.1714 193.319 14.8325Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M193.319 14.8325C192.577 15.2727 191.924 15.826 191.361 16.4923C190.989 16.9323 190.268 16.6556 190.268 16.0791V14.8128C190.268 14.3762 189.833 14.0738 189.425 14.2269L185.278 15.7822C185.034 15.8737 184.872 16.1072 184.872 16.3681V36.1026H184.939L189.863 34.2561C190.106 34.1646 190.268 33.9311 190.268 33.6702V25.3737C190.268 23.3228 190.953 21.6939 192.323 20.4878C193.565 19.3939 195.189 18.8537 197.194 18.8658C197.54 18.8679 197.823 18.5891 197.823 18.2422V14.3034C197.823 13.9402 197.514 13.6503 197.153 13.6776C195.713 13.7862 194.435 14.1714 193.319 14.8325Z"
                fill="black"
              />
            </svg>
          </div>
        </Link>
        <div className="spaces" />
        <Link className="btn" to="/login/">
          entrar
        </Link>
      </Center>
    </Container>
  );
}
