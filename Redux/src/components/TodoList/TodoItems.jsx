import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  deleteTodo,
  clearCompleted,
  openModal,
  findTodo,
} from "../../redux/slices/TodoSlice";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItems = () => {
  const { items, filterMode } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // FILTER
  // default All
  let filtered = items;

  if (filterMode == "Active") {
    filtered = items.filter((item) => !item.completed);
  } else if (filterMode == "Completed") {
    filtered = items.filter((item) => item.completed);
  }

  if (items.length == 0) {
    return <div className="text-red-600 font-bold text-xl">List Hali Qo`shilmadi...</div>
  } 
  else if (filtered.length == 0 && filterMode == "Active") {
    return <div className="text-red-600 font-bold text-xl">List Yoq</div>
  } 
  else if (filtered.length == 0 && filterMode == "Completed") {
    return <div className="text-red-600 font-bold text-xl">Malumot Kelmadi</div>
  }
  return (
    <>
      <div className="space-y-2">
        {filtered.map(({ id, text, completed }) => {
          return (
            <div key={id} className="flex items-center justify-between">
              <div className="space-x-2 flex items-center w-4/5">
                
                <label
                  htmlFor={id}
                  className={`${
                    completed ? "line-through font-medium" : "font-bold"
                  } text-[#000] dark:text-[#fff] w-4/5 overflow-hidden`}
                >
                  {text}
                </label>
              </div>
              <div className="space-x-3 flex max-w-1/6">
                <span
                  className="text-[#00f] cursor-pointer"
                  onClick={() => {
                    dispatch(openModal());
                    dispatch(findTodo(id));
                  }}
                >
                  <FaEdit />
                </span>

                <span
                  className="text-red-600 cursor-pointer"
                  onClick={() => dispatch(deleteTodo(id))}
                >
                  <MdDelete />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/* hide clear completed button in active mode */}
    
    </>
  );
};

export default TodoItems;
