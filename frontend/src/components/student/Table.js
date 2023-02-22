import React, { useState } from "react";
import "../../styles/Table.css";
import "../../styles/Home.css";
import axios from "axios";

const Table = ({ data, column, gecCode }) => {
  console.log(gecCode);
  let user = JSON.parse(localStorage.getItem("user"));
  const { userId } = user;
  const [gecData, setGecData] = useState({
    userId: userId,
    gecCode: gecCode,
  });
  console.log(gecData);

  const submitHandler = async (event) => {
    event.preventDefault();
    axios
      .post("http://192.168.43.37:8000/choose-gec", JSON.stringify(gecData))
      .then((res) => {
        alert("Gec Saved Successfully");
        console.log(res);
        setGecData(res);
      })
      .catch((err) => console.log(err));
  };

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
