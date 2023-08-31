import { FC, memo } from "react";
import { ColumnType, DataType } from "../../interfaces/table";
import "./Table.scss";
import { useModalContext } from "../../hooks/useModal";
import { useIdSelected } from "../../hooks/useIdSelected";

interface TableProps {
  columns: ColumnType[];
  data: DataType[];
}

const Table: FC<TableProps> = ({ columns, data }) => {
  const { setIsOpenDetailPage } = useModalContext();
  const { setIdSelected } = useIdSelected();

  const handleClickRow = (id: number) => {
    setIdSelected(id);
    console.log(id);

    setIsOpenDetailPage(true);
  };
  return (
    <table className="table__products">
      <thead className="table__header">
        <tr>
          {columns.map(({ key, title }) => (
            <th className="table__row row-header" key={key}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map((record) => (
          <tr
            key={record.id}
            onClick={() => {
              handleClickRow(record.id);
            }}
          >
            {columns.map((column) => (
              <td key={column.key} className="table__row row-body">
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
