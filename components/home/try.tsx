import React from "react";
import styles from "./host-details.module.css"; // Import your CSS module

type Props = {
  session:boolean;
};

function HostDetail({session}: Props) {
  return (
    <div className={styles.fullwidth}>
      <div className={styles["coach-container"]}>
        <div className={styles.profile}>
          <div className={styles["profile-cover"]}>
            <div className={styles.overlay}>
              <div
                className={styles["header-content-container"]}
                data-page-cover-padding
              >
                <div className={styles["header-content"]}>
                  <div className={styles["profile-name-container"]}>
                    <h1 className={styles["profile-name"]}>Anjit Suhag</h1>
                    <ul className={styles.social}>
                      <li className={styles.facebook}>
                        <a
                          className={styles["social-icon"]}
                          target="_blank"
                          href=""
                        >
                          <svg
                            className={styles.codicon}
                            viewBox="0 0 22 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g
                              id="Symbols"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="Facebook-Copy"
                                fill="#fff"
                                fillRule="nonzero"
                              >
                                <g
                                  id="Group-4-Copy"
                                  transform="translate(0.100458, 0.161569)"
                                >
                                  <g id="Group-3">
                                    <path
                                      d="M12.236,36.6626 L12.236,20.6606 L18.4101296,20.6606 L18.6267676,16.1126 L12.236,16.1126 L12.236,10.6706 C12.236,8.38588464 13.105736,7.3726 15.394,7.3726 C16.1822368,7.3726 17.1245207,7.37648545 18.1492286,7.38313155 C18.2711812,7.38392252 18.3904595,7.38472566 18.5068623,7.38553649 L18.610562,3.17778233 C18.4630098,3.16433087 18.3098972,3.15102516 18.1521379,3.13805983 C17.0963971,3.0512946 16.0713066,3.0006 15.146,3.0006 C9.98098257,3.0006 7.346,5.91538385 7.346,9.9366 L7.346,16.1106 L3,16.1106 L3,20.6606 L7.346,20.6606 L7.346,36.6626 L12.236,36.6626 Z M19.8945533,3.31334018 C19.8866433,3.31236548 19.8786774,3.31138744 19.8706563,3.31040615 C19.8784389,3.31157754 19.886484,3.31249334 19.8945533,3.31334018 Z M18.6436978,1.83325228 C18.6426637,1.85496924 18.6421331,1.87662922 18.6420967,1.89821857 L18.6436978,1.83325228 Z M15.236,23.6606 L15.236,38.0826 C15.236,38.9601429 14.5214316,39.6626 13.656,39.6626 L5.926,39.6626 C5.0463671,39.6626 4.346,38.9499458 4.346,38.0826 L4.346,23.6606 L1.58,23.6606 C0.695132976,23.6606 0,22.9410764 0,22.0806 L0,14.6886 C0,13.8171729 0.706572875,13.1106 1.58,13.1106 L4.346,13.1106 L4.346,9.9366 C4.346,4.32227567 8.25282144,0.0006 15.146,0.0006 C16.163172,0.0006 17.2666127,0.0551693091 18.3978621,0.148140168 C19.1396883,0.209106574 19.7865042,0.277336099 20.2350272,0.332841821 C21.0844375,0.42225343 21.6791934,1.15923355 21.6415468,1.94147055 L21.4704528,8.88671149 C21.4324336,9.72313494 20.7469423,10.3966 19.878487,10.3965391 C19.3906673,10.3921444 18.8008427,10.3874209 18.1297714,10.3830685 C17.1109969,10.3764608 16.1746825,10.3726 15.394,10.3726 C15.3384607,10.3726 15.2872079,10.373237 15.2401851,10.3744169 C15.2374281,10.4590805 15.236,10.5573018 15.236,10.6706 L15.236,13.1126 L20.114,13.1126 C20.9948108,13.1126 21.7345722,13.8400321 21.6943013,14.765967 L21.3423022,22.1559477 C21.3024209,22.9934558 20.6110169,23.6606 19.766,23.6606 L15.236,23.6606 Z M15.2636941,10.0502534 C15.2659392,10.0453203 15.266999,10.0425094 15.2670776,10.0420596 C15.2670056,10.0424716 15.2658778,10.0452029 15.2636941,10.0502534 Z"
                                      id="Stroke-9"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <svg
                            className="codicon codicon-fb-white"
                            viewBox="0 0 22 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g
                              id="Facebook/White"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <path
                                d="M13.3364578,21.8221695 L13.3364578,37.8241695 L12.3364578,37.8241695 L7.44645784,37.8241695 L6.44645784,37.8241695 L6.44645784,21.8221695 L2.10045784,21.8221695 L2.10045784,15.2721695 L6.44645784,15.2721695 L6.44645784,10.0981695 C6.44645784,5.29771622 9.76795752,2.1621695 15.2464578,2.1621695 C16.1706875,2.1621695 17.2129745,2.21081743 18.3345038,2.30298944 C18.4920523,2.31593744 18.6480688,2.32946611 18.8018074,2.34348155 L19.7337727,2.42844333 L19.5828108,8.5539252 L18.6003546,8.54708172 C18.4245512,8.54587097 18.4245512,8.54587097 18.2432007,8.54468001 C17.1796326,8.53778187 16.2531707,8.5341695 15.4944578,8.5341695 C13.8127084,8.5341695 13.3364578,9.04394758 13.3364578,10.8321695 L13.3364578,15.2741695 L19.7759929,15.2741695 L19.4640876,21.8221695 L13.3364578,21.8221695 Z"
                                id="Path-Copy"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                              />
                            </g>
                          </svg>
                          <svg
                            className={styles["codicon-fb-white"]}
                            viewBox="0 0 22 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            {/* White Facebook icon content */}
                          </svg>
                        </a>
                      </li>
                      <li className={styles.instagram}>
                        <a
                          className={styles["social-icon"]}
                          target="_blank"
                          href=""
                        >
                          <svg
                            className={styles.codicon}
                            viewBox="0 0 40 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            {/* Instagram icon content */}
                          </svg>
                          <svg
                            className={styles["codicon-ig-white"]}
                            viewBox="0 0 40 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            {/* White Instagram icon content */}
                          </svg>
                        </a>
                      </li>
                      <li className={styles["coach-web"]}>
                        <a
                          className={styles["social-icon"]}
                          target="_blank"
                          href=""
                        >
                          <svg
                            className={styles["globe-codicon"]}
                            viewBox="0 0 39 39"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            {/* Globe icon content */}
                          </svg>
                          <svg
                            className={styles["codicon-globe-white"]}
                            viewBox="0 0 44 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            {/* White Globe icon content */}
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["profile-header"]}>
          <div className={styles["profile-table"]}>
            <div className={styles["profile-table-left"]}>
              <div className={styles["profile-photo"]}>
                <img
                  alt="Anjit"
                  className={styles["profile-photo-image"]}
                  src="anjit.jpg"
                />
              </div>
            </div>
            <div className={styles["profile-table-right"]}>
              <div className={styles["profile-bio-container"]}>
                <div>
                  <div className={styles["profile-bio"]}>
                    <p>
                      Anjit Suhag is an accomplished yoga instructor who has
                      trained approximately 200,000 people in yoga over the
                      course of 2-3 years. His fitness journey began in 2017 as
                      a runner, and his love for fitness has only grown since
                      then.
                    </p>
                    <p>
                      In 2020, Anjit discovered the practice of Mudgar and began
                      to learn it. During his journey, he realized that there
                      were issues with the way Mudgar was being taught. Many
                      people were unaware of this ancient art, and those who
                      were aware were charging exorbitant amounts for the
                      practice and selling Mudgars at unaffordable prices.
                    </p>
                    <p>
                      Anjit decided to start his own teaching journey, making
                      the practice of Mudgar more accessible and affordable. He
                      began to manufacture and sell premium quality Mudgars made
                      of Mahaghani wood at a reasonable price. This gave Anjit a
                      purpose to start his Har-Ghar Mudgar journey, where he
                      aims to teach Mudgar to every household and spread this
                      practice as far as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostDetail;
