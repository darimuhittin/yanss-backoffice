export const columns = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Image",
    accessor: "images",
    Cell: ({ value }) => {
      return (
        <div className="ytable__image">
          <img
            src={process.env.REACT_APP_BACKEND_ADDRESS + value[0]}
            alt="product"
          />
        </div>
      );
    },
  },
  {
    Header: "Name",
    accessor: "name", // accessor is the "key" in the data
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Description",
    accessor: "desc",
  },
  { Header: "Stock", accessor: "stock" },
];
