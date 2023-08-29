import { FC, memo } from "react";
import { ColumnType, DataType } from "../../interfaces/table";
import "./Table.scss";

interface TableProps {
  columns: ColumnType[];
  data: DataType[];
}

const Table: FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table__products">
      <thead>
        <tr>
          {columns.map(({ key, title }) => (
            <th key={key}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr key={record.id}>
            {columns.map((column) => (
              <td key={column.key}>
                {column.render ? column.render(record) : record[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
