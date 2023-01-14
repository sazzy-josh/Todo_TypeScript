import * as React from "react";
import { BsPlus } from "react-icons/bs";

interface AddtodoProps {
  handleAdd: (todotext: string) => void;
  errorMessage: React.Dispatch<React.SetStateAction<string>>;
  handleError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Addtodo: React.FunctionComponent<AddtodoProps> = ({
  handleAdd,
  errorMessage,
  handleError,
}) => {
  const [todotext, settodoText] = React.useState<string>("");

  /**
   *  returns void
   * @param e prevents Default refresh onClick of button
   */

  const submitTodo = (e: any): void => {
    e.preventDefault();
    if (todotext.trim().length === 0) {
      errorMessage("Please enter task for the day");
      handleError(true);
    } else {
      handleError(false);
      handleAdd(todotext);
      settodoText("");
    }
  };

  return (
    <form onSubmit={submitTodo} className="w-full">
      <span className="relative flex items-center w-full">
        <input
          type="text"
          placeholder="✍🏻 Add item..."
          value={todotext}
          onChange={(e) => settodoText(e.target.value)}
          className="flex items-center outline-none placeholder:opacity-60 text-sm p-2 w-full"
        />
        <BsPlus
          className="absolute right-2 cursor-pointer"
          onClick={submitTodo}
        />
      </span>
    </form>
  );
};

export default Addtodo;
