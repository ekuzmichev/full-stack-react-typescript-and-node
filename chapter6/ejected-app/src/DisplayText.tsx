import React, { FC, useState } from "react";
import UserTodos from "./UserTodos";

interface DisplayTextProps {
  getUserFullName: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullName }) => {
  const [txt, setTxt] = useState("");
  const [msg, setMsg] = useState("");
  const [todoControl, setTodoControl] =
    useState<ReturnType<typeof UserTodos>>();

  const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  const onShowMsgBtnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTodoControl(null);
    setMsg(`Welcome to React testing, ${await getUserFullName(txt)}`);
    setTodoControl(<UserTodos username={txt} />);
  };

  return (
    <form>
      <div>
        <label>Please, enter your name</label>
      </div>
      <div>
        <input
          data-testid="user-input"
          value={txt}
          onChange={onTextInputChange}
        />
      </div>
      <div>
        <button data-testid="input-submit" onClick={onShowMsgBtnClick}>
          Show Message
        </button>
      </div>
      <div>
        <label data-testid="final-msg">{msg}</label>
      </div>
      {todoControl}
    </form>
  );
};

export default DisplayText;
