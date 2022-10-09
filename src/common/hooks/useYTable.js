import { useState } from "react";

const useYTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const onSelectedRowsChange = (rows) => {
    setSelectedRows(rows);
  };

  return { selectedRows, onSelectedRowsChange };
};

export default useYTable;
