import React from "react";
import styles from "./host-details.module.css";
import content from "../../config/host-details.json";

type Props = {};

function HostDetail({}: Props) {
  return (
    <div className={styles.fullwidth}>
      <div className={styles["coach-container"]}>
        <div className={styles.profile}>
          <div
            className={`${styles.profilecover} ${styles.headercovercontainer}`}
          >
            <div className={styles["overlay"]}>
              <div className={styles["header-content-container"]}>
                <div className={styles["header-content"]}>
                  <div className={styles["profile-name-container"]}>
                    <h1 className={styles["profile-name"]}>{content.name}</h1>
                    <ul className={styles["social"]}>
                      <li className={styles["facebook"]}>
                        <a
                          className={styles["social-icon"]}
                          target="_blank"
                          href=""
                        >
                          <svg
                            className={styles["codicon-facebook"]}
                            viewBox="0 0 22 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          ></svg>
                          <svg
                            className={styles["codicon-fb-white"]}
                            viewBox="0 0 22 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          ></svg>
                        </a>
                      </li>
                      <li className={styles["instagram"]}>
                        <a
                          className={styles["social-icon"]}
                          target="_blank"
                          href=""
                        >
                          <svg
                            className={styles["codicon-instagram"]}
                            viewBox="0 0 40 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          ></svg>
                          <svg
                            className={styles["codicon-ig-white"]}
                            viewBox="0 0 40 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          ></svg>
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
                          ></svg>
                          <svg
                            className={styles["codicon-globe-white"]}
                            viewBox="0 0 44 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          ></svg>
                        </a>
                      </li>
                    </ul>
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
                    src="/img/profile-desktop-min.jpg"
                  />
                </div>
              </div>
              <div className={styles["profile-table-right"]}>
                <div className={styles["profile-bio-container"]}>
                  <div>
                    <div className={styles["profile-bio"]}>
                      {content.bio.map(
                        (
                          paragraph:
                            | string
                            | number
                            | boolean
                            | React.ReactElement<
                                any,
                                string | React.JSXElementConstructor<any>
                              >
                            | Iterable<React.ReactNode>
                            | React.ReactPortal
                            | React.PromiseLikeOfReactNode
                            | null
                            | undefined,
                          index: React.Key | null | undefined
                        ) => (
                          <p key={index} className="pad-1">
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
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
