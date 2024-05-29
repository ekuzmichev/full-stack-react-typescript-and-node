import { FC, useEffect, useState } from "react";
import { ThreadItem } from "../../../models/ThreadItem";
import { ThreadResponse } from "./ThreadResponse";
import * as css from "./ThreadResponsesBuilder.css";

interface ThreadResponsesBuilderProps {
  threadItems?: ThreadItem[];
}

export const ThreadResponsesBuilder: FC<ThreadResponsesBuilderProps> = ({
  threadItems,
}) => {
  const [responseElements, setResponseElements] = useState<
    JSX.Element | undefined
  >();

  useEffect(() => {
    if (threadItems) {
      const thResponses: JSX.Element[] = threadItems.map(
        (threadItem: ThreadItem) => {
          return (
            <li key={`thr-${threadItem.id}`}>
              <ThreadResponse
                body={threadItem.body}
                userName={threadItem.userName}
                lastModifiedOn={threadItem.createdOn}
                points={threadItem.points}
              />
            </li>
          );
        }
      );
      setResponseElements(<ul>{thResponses}</ul>);
    }
  }, [threadItems]);

  return (
    <div className={css.threadBodyContainer}>
      <strong className={css.title}>Responses</strong>
      {responseElements}
    </div>
  );
};
