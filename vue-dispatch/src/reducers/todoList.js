export default function(data) {
  function addTodo(todo) {
    return data.concat(todo);
  }
  function removeTodo(id) {
    return data.filter(item => item.id !== id);
  }
  function updateStatus(id) {
    return data.map(item => {
      if (item.id === id) {
        item.isCompleted ^= true;
      }
      return item;
    });
  }

  return {
    addTodo,
    removeTodo,
    updateStatus
  };
}
