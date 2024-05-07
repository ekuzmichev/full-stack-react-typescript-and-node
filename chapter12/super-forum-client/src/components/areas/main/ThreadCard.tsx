import { faEye, faHeart, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { Thread } from "../../../models/Thread";
import "./ThreadCard.css";

interface ThreadCardProps {
  thread: Thread;
}

export const ThreadCard: FC<ThreadCardProps> = ({ thread }) => {
  const navigate = useNavigate();

  const { width } = useWindowDimensions();

  const isMobile: boolean = width <= MIN_DESKTOP_WINDOW_WIDTH;

  const onShowThreadClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    navigate(`/thread/${thread.id}`);
  };

  const getPoints = (thread: Thread): React.ReactNode => {
    if (isMobile) {
      return (
        <label style={{ marginRight: ".75em", marginTop: ".25em" }}>
          {thread.points ?? 0}
          <FontAwesomeIcon
            icon={faHeart}
            className="points-icon"
            style={{ marginLeft: ".2em" }}
          />
        </label>
      );
    }
    return null;
  };

  const getResponses = (thread: Thread): React.ReactNode => {
    if (isMobile) {
      return (
        <label style={{ marginRight: ".5em" }}>
          {thread?.threadItems?.length ?? null}
          <FontAwesomeIcon
            icon={faReplyAll}
            className="points-icon"
            style={{ marginLeft: ".25em", marginTop: "-.25em" }}
          />
        </label>
      );
    }
    return null;
  };

  const getPointsNonMobile = (): React.ReactNode => {
    if (!isMobile) {
      return (
        <div className="threadcard-points">
          <div className="threadcard-points-item">
            {thread.points ?? 0}
            <br />
            <FontAwesomeIcon icon={faHeart} className="points-icon" />
          </div>
          <div
            className="threadcard-points-item"
            style={{ marginBottom: ".75em" }}
          >
            {thread?.threadItems?.length ?? null}
            <FontAwesomeIcon icon={faReplyAll} className="points-icon" />
          </div>
        </div>
      );
    }
  };

  return (
    <section className="panel threadcard-container">
      <div className="threadcard-txt-container">
        <div className="content-header">
          <Link
            to={`/categotyThreads/${thread.category.id}`}
            className="link-txt"
          >
            <strong>{thread.category.name}</strong>
          </Link>
          <span className="username-header" style={{ marginLeft: ".5em" }}>
            {thread.userName}
          </span>
        </div>
        <div className="quesiton">
          <div
            onClick={onShowThreadClick}
            data-thread-id={thread.id}
            style={{ marginBottom: ".4em" }}
          >
            <strong>{thread.title}</strong>
          </div>
          <div
            className="threadcard-body"
            data-thread-id={thread.id}
            onClick={onShowThreadClick}
          >
            <div>{thread.body}</div>
          </div>
          <div className="threadcard-footer">
            <span style={{ marginRight: ".5em" }}>
              <label>
                {thread.views}
                <FontAwesomeIcon icon={faEye} className="icon-lg" />
              </label>
            </span>
            <span>
              {getPoints(thread)}
              {getResponses(thread)}
            </span>
          </div>
        </div>
      </div>
      {getPointsNonMobile()}
    </section>
  );
};
