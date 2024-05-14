import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Thread as ThreadModel } from "../../../models/Thread";
import { getThreadById } from "../../../services/DataService";
import { Nav } from "../../areas/nav/Nav";
// import { ThreadPointsBar } from "../../points/ThreadPointsBar";
import "./Thread.css";
import { ThreadBody } from "./ThreadBody";
import { ThreadCategory } from "./ThreadCategory";
import { ThreadHeader } from "./ThreadHeader";
import { ThreadResponsesBuilder } from "./ThreadResponsesBuilder";
import { ThreadTitle } from "./ThreadTitle";

export const Thread = () => {
  const [thread, setThread] = useState<ThreadModel | undefined>();
  const { id } = useParams(); // Retrieving route path parameter

  useEffect(() => {
    console.log("Thread id:", id);

    if (id && Number(id) > 0) {
      getThreadById(id).then((thread: ThreadModel) => {
        setThread(thread);
      });
    }
  }, [id]);

  return (
    <div className="screen-root-container">
      <div className="thread-nav-container">
        <Nav />
      </div>
      <div className="thread-content-container">
        <div className="thread-content-post-container">
          <ThreadHeader
            userName={thread?.userName}
            lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
            title={thread?.title}
          />
          <ThreadCategory categoryName={thread?.category?.name} />
          <ThreadTitle title={thread?.title} />
          <ThreadBody body={thread?.body} />
        </div>
        <div className="thread-content-points-container">
          {/* <ThreadPointsBar
            points={thread?.points || 0}
            responseCount={thread?.threadItems?.length}
          /> */}
        </div>
      </div>
      <div className="thread-content-response-container">
        <hr className="thread-section-divider" />
        <ThreadResponsesBuilder threadItems={thread?.threadItems} />
      </div>
    </div>
  );
};
