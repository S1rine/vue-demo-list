import todoListReducer from "@/reducers/todoList";

import { ADDTODO, REMOVETODO, UPDATESTATUS } from "@/actions/todoList";

export default function(ctx) {
  const { addTodo, removeTodo, updateStatus } = todoListReducer(ctx.list);

  return function(type, ...args) {
    switch (type) {
      case ADDTODO:
        ctx.list = addTodo(...args);
        break;
      case REMOVETODO:
        ctx.list = removeTodo(...args);
        break;
      case UPDATESTATUS:
        ctx.list = updateStatus(...args);
        break;
      default:
        break;
    }
  };
}
