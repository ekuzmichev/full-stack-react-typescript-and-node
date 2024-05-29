import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { screenRootContainer } from "../../../App.css";
import { Thread as ThreadModel } from "../../../models/Thread";
import { getThreadById } from "../../../services/DataService";
import { NavigationBar } from "../../areas/navigation-bar/NavigationBar";
import { ThreadPointsBar } from "../../points/ThreadPointsBar";
import * as css from "./Thread.css";
import { ThreadBody } from "./ThreadBody";
import { ThreadCategory } from "./ThreadCategory";
import { ThreadHeader } from "./ThreadHeader";
import { ThreadResponsesBuilder } from "./ThreadResponsesBuilder";
import { ThreadTitle } from "./ThreadTitle";

export const Thread = () => {
  const [thread, setThread] = useState<ThreadModel | undefined>();
  const { id } = useParams(); // Retrieving route path parameter

  useEffect(() => {
    console.log("Thread Id:", id);

    if (id && Number(id) > 0) {
      getThreadById(id).then((thread: ThreadModel) => {
        setThread(thread);
      });
    }
  }, [id]);

  return (
    <div className={screenRootContainer}>
      <NavigationBar />
      <div className={css.contentContainer}>
        <div className={css.contentPostContainer}>
          <ThreadHeader
            userName={thread?.userName}
            lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
            title={thread?.title}
          />
          <ThreadCategory categoryName={thread?.category?.name} />
          <ThreadTitle title={thread?.title} />
          <ThreadBody body={thread?.body} />
        </div>
        <div className={css.contentPointsContainer}>
          <ThreadPointsBar
            points={thread?.points || 0}
            responseCount={thread?.threadItems?.length}
          />
        </div>
      </div>
      <div className={css.contentResponseContainer}>
        <hr className={css.sectionDivider} />
        <ThreadResponsesBuilder threadItems={thread?.threadItems} />
      </div>
    </div>
  );
};
