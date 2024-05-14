import { faEye, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { Thread } from "../../../models/Thread";
import { ThreadPointsBar } from "../../points/ThreadPointsBar";
import { ThreadPointsInline } from "../../points/ThreadPointsInline";
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
              {isMobile ? (
                <ThreadPointsInline points={thread?.points || 0} />
              ) : null}
              {getResponses(thread)}
            </span>
          </div>
        </div>
      </div>
      <ThreadPointsBar
        points={thread?.points || 0}
        responseCount={thread?.threadItems?.length}
      />
    </section>
  );
};
