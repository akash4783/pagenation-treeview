 export const renderData = (data) => {
    return (
      <ul>
        {data.map((todo, index) => {
          return (<>
            <li key={index}>{todo.title}</li></>);
        })}
      </ul>
    );
  };