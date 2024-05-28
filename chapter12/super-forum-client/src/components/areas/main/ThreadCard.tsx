import { faEye, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { Thread } from "../../../models/Thread";
import { ThreadPointsBar } from "../../points/ThreadPointsBar";
import { ThreadPointsInline } from "../../points/ThreadPointsInline";
import * as css from "./ThreadCard.css";

interface ThreadCardProps {
  thread: Thread;
}

export const ThreadCard: FC<ThreadCardProps> = ({ thread }) => {
  const navigate = useNavigate();

  const { isMobile } = useWindowDimensions();

  const onShowThreadClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    navigate(`/thread/${thread.id}`);
  };

  const getResponses = (thread: Thread): React.ReactNode => {
    if (isMobile) {
      return (
        <label className={css.responsesLabel}>
          {thread?.threadItems?.length ?? null}
          <FontAwesomeIcon icon={faReplyAll} className={css.pointsIcon} />
        </label>
      );
    }
    return null;
  };

  return (
    <section className={css.container}>
      <div className={css.textContainer}>
        <div>
          <Link to={`/categoryThreads/${thread.category.id}`}>
            <strong>{thread.category.name}</strong>
          </Link>
          <span className={css.usernameHeader}>{thread.userName}</span>
        </div>
        <div className={css.question}>
          <div
            onClick={onShowThreadClick}
            data-thread-id={thread.id}
            className={css.title}
          >
            <strong>{thread.title}</strong>
          </div>
          <div
            className={css.body}
            data-thread-id={thread.id}
            onClick={onShowThreadClick}
          >
            <div>{thread.body}</div>
          </div>
          <div className={css.footer}>
            <span className={css.views}>
              <label>
                {thread.views}
                <FontAwesomeIcon icon={faEye} className={css.iconLg} />
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
