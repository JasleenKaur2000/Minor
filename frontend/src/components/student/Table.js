import React from "react";
import "../../styles/Table.css";
import "../../styles/Home.css";

const Table = ({ data, column }) => {
  const submitHandler = () => {};

  const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
        return <td>{item[`${columnItem.value}`]}</td>;
      })}
      <td>
        <input type="submit" value="submit" onClick={submitHandler} />
      </td>
    </tr>
  );

  return (
    <>
      <div className="forsubmit">
        <table>
          <thead>
            <tr>
              {column.map((item, index) => (
                <TableHeadItem item={item} />
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow item={item} column={column} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
