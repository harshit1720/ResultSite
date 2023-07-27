import React from "react";
import Link from "next/link";
import style from "./desctable.module.css"
const DescTable = ({ heading, rows }) => {
  return (
    <table className={style.table}>
      <tbody>
        <tr className={style.tr}>
          <th colSpan="2" className={style.tableHeading}>
            <h3 align="center" >{heading}</h3>
          </th>
        </tr>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.label}</td>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DescTable;
