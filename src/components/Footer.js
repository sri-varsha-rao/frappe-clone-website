import React from "react";
import logo from "../pics/frappe-logo-type.png";
import { Nav, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="container mt-5 mb-3">
      <div className="row">
        <div className="col-lg-2 mb-2 py-1">
          <img src={logo} className="img-fluid" alt="logo here" />
        </div>
        <div className="vw-100"></div>
        <div className="col-lg-5 col-sm-12">
          <Navbar>
            <Nav className="mr-auto mt-2 text-secondary font-plus">
              <Nav.Link href="#home">Company</Nav.Link>
              <Nav.Link href="#features">ERPNext</Nav.Link>
              <Nav.Link href="#pricing">Team</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div className="col-5 d-flex justify-content-end col-sm-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11 20"
            height="20"
            className="px-4"
          >
            <path
              fill="#7f878a"
              d="M3.33147273,20 L3.33147273,10.8770682 L0.261413636,10.8770682 L0.261413636,7.32167273 L3.33147273,7.32167273 L3.33147273,4.69967727 C3.33147273,1.65686818 5.18991818,0 7.90431364,0 C9.20453636,0 10.3220136,0.0968045455 10.6476727,0.140072727 L10.6476727,3.31998636 L8.76509545,3.32084091 C7.28885455,3.32084091 7.00301818,4.02232727 7.00301818,5.05171364 L7.00301818,7.32167273 L10.5237136,7.32167273 L10.0653045,10.8770682 L7.00301364,10.8770682 L7.00301364,20 L3.33147273,20 Z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 19"
            height="20"
            className="px-4"
          >
            <path
              fill="#7f878a"
              d="M22,2.3375 C21.175,2.70416667 20.3041667,2.93333333 19.3875,3.07083333 C20.3041667,2.52083333 21.0375,1.65 21.3583333,0.595833333 C20.4875,1.1 19.525,1.46666667 18.4708333,1.69583333 C17.6458333,0.825 16.4541667,0.275 15.1708333,0.275 C12.6958333,0.275 10.6791667,2.29166667 10.6791667,4.76666667 C10.6791667,5.13333333 10.725,5.45416667 10.8166667,5.775 C7.10416667,5.59166667 3.75833333,3.80416667 1.5125,1.05416667 C1.14583333,1.74166667 0.916666667,2.475 0.916666667,3.3 C0.916666667,4.85833333 1.69583333,6.23333333 2.93333333,7.05833333 C2.2,7.0125 1.5125,6.82916667 0.870833333,6.50833333 C0.870833333,6.50833333 0.870833333,6.55416667 0.870833333,6.55416667 C0.870833333,8.75416667 2.42916667,10.5875 4.49166667,11 C4.125,11.0916667 3.7125,11.1375 3.3,11.1375 C3.025,11.1375 2.70416667,11.0916667 2.42916667,11.0458333 C3.025,12.8333333 4.675,14.1625 6.64583333,14.1625 C5.0875,15.3541667 3.1625,16.0875 1.05416667,16.0875 C0.6875,16.0875 0.320833333,16.0875 0,16.0416667 C2.01666667,17.325 4.35416667,18.0583333 6.92083333,18.0583333 C15.2166667,18.0583333 19.7541667,11.1833333 19.7541667,5.225 C19.7541667,5.04166667 19.7541667,4.8125 19.7541667,4.62916667 C20.625,4.03333333 21.4041667,3.25416667 22,2.3375 Z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 20"
            height="20"
            className="px-4"
          >
            <g fill="none">
              <path
                fill="#D0D2D3"
                d="M15.3626044,0.0234543578 C15.2453326,-0.0312724771 15.1515152,0.0234543578 15.1515152,0.156362385 L15.1515152,16.0193264 L22.1018232,19.4905713 C22.4458204,19.66257 22.7272727,19.4905713 22.7272727,19.0996654 L22.7272727,3.83087844 C22.7272727,3.75269725 22.6881821,3.68233418 22.6178191,3.6510617 L15.3626044,0.0234543578 Z"
              ></path>
              <path
                fill="#BABDBE"
                d="M7.57575758,12.2353567 L15.0264252,0.125089908 C15.0967883,0.0156362385 15.2453326,-0.0312724771 15.3626044,0.0312724771 L22.5630922,3.62760734 C22.6490915,3.67451606 22.6881821,3.78396973 22.6334553,3.86996904 L15.1515152,16.0193264 L7.57575758,12.2353567 Z"
              ></path>
              <path
                fill="#9FA5A8"
                d="M0.836538762,0.343997248 C0.375269725,0.10945367 0.21890734,0.281452294 0.492541514,0.727085092 L7.57575758,12.2353567 L15.1515152,16.0271445 L7.62266629,3.79178785 C7.59139381,3.73706101 7.5444851,3.69797042 7.48975826,3.66669794 L0.836538762,0.343997248 Z"
              ></path>
              <path
                fill="#7F878A"
                d="M7.57575758,19.1074835 C7.57575758,19.4905713 7.29430528,19.6703881 6.95030803,19.4983895 L0.422178441,16.2304156 C0.187634863,16.1131438 0,15.8082372 0,15.5502392 L0,0.390905964 C0,0.132908028 0.187634863,0.0156362385 0.422178441,0.132908028 L7.48194014,3.66669794 C7.53666698,3.69797042 7.57575758,3.75269725 7.57575758,3.81524221 L7.57575758,19.1074835 Z"
              ></path>
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            height="20"
            className="px-4"
          >
            <path
              fill="#7f878a"
              d="M9.79166667,0 C4.38166667,0 0,4.38166667 0,9.79166667 C0,14.3933333 3.1575,18.2125 7.4175,19.2891667 C7.36833333,19.1666667 7.34416667,18.995 7.34416667,18.8241667 L7.34416667,17.1591667 L6.12,17.1591667 C5.45916667,17.1591667 4.84666667,16.8658333 4.5775,16.3266667 C4.25916667,15.7391667 4.21,14.8333333 3.4025,14.27 C3.1575,14.0741667 3.35333333,13.8783333 3.6225,13.9025 C4.13666667,14.0491667 4.5525,14.3925 4.94416667,14.9058333 C5.33583333,15.42 5.5075,15.5425 6.24166667,15.5425 C6.58416667,15.5425 7.1225,15.5183333 7.6125,15.4441667 C7.88166667,14.7583333 8.34666667,14.1466667 8.91,13.8533333 C5.63,13.4616667 4.06333333,11.8458333 4.06333333,9.6425 C4.06333333,8.6875 4.47916667,7.78166667 5.165,6.99833333 C4.945,6.23916667 4.65083333,4.6725 5.26333333,4.06083333 C6.7325,4.06083333 7.61333333,5.01583333 7.83333333,5.26 C8.5675,5.015 9.37583333,4.86833333 10.2075,4.86833333 C11.0641667,4.86833333 11.8475,5.015 12.5816667,5.26 C12.8016667,5.015 13.6833333,4.06083333 15.1516667,4.06083333 C15.7391667,4.64833333 15.47,6.23916667 15.225,6.99833333 C15.9108333,7.7575 16.3025,8.6875 16.3025,9.6425 C16.3025,11.8458333 14.76,13.4616667 11.505,13.8041667 C12.4108333,14.2691667 13.0475,15.5908333 13.0475,16.57 L13.0475,18.8 C13.0475,18.8733333 13.0233333,18.9466667 13.0233333,19.02 C16.8416667,17.6983333 19.5833333,14.0758333 19.5833333,9.79166667 C19.5833333,4.38166667 15.2016667,0 9.79166667,0 Z"
            ></path>
          </svg>
        </div>
      </div>
      <hr />
      <div className="row pl-4 py-2 text-secondary font-plus">
        CopyRights @ Varsha
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-heart"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1 mx-2"
        >
          <path
            fill-rule="evenodd"
            d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
          />
        </svg>
        <span>Built Using React</span>
      </div>
    </div>
  );
}