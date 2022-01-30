import React from 'react';
import { useFindAllTodosQuery } from '../../graphql/__generated__';

export const Todos = () => {
  const { data, loading, error } = useFindAllTodosQuery();

  if (!data || loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {data.todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>Completed? {todo.completed ? '😎' : '😩'}</p>
        </div>
      ))}
    </div>
  );
};
