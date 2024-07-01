import React, { useState } from 'react';
import UseMemoComponent from './UseMemoComponent';

const UseMemoApp = () => {
  const [data, setData] = useState<number>(0);

  const changeData = () => {
    setData(prevData => prevData + 1);
  };

  return (
    <div>
      <h1>useMemo Example</h1>
      <div>
        <button onClick={changeData}>Add count</button>
      </div>
        <UseMemoComponent data={data} />
    </div>
  );
};

export default UseMemoApp;


