import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ITrainRecord } from "../../../../features/trains/types";
import { Button, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table";

export type TrainListTableProps = {
  items: ITrainRecord[];
  onEditTrain: (record: ITrainRecord) => void;
  onDeleteTrain: (record: ITrainRecord) => void;
};

export const TrainListTable: React.FC<TrainListTableProps> = (props) => {
  const { items, onEditTrain, onDeleteTrain } = props;

  const columns: ColumnsType<ITrainRecord> = [
    {
      title: "Наименование",
      dataIndex: "name",
    },
    {
      title: "Серия",
      dataIndex: "serial",
    },
    {
      title: "Кол-во секций",
      dataIndex: "sectionsNum",
    },
    {
      title: "Координаты",
      render(_, record) {
        return `(${record.coords.lat}, ${record.coords.lng})`;
      },
    },
    {
      align: "right",
      render(_, record) {
        const onEditHandler = () => {
          onEditTrain(record);
        };

        const onDeleteHandler = () => {
          onDeleteTrain(record);
        };
        return (
          <Space>
            <Button icon={<EditOutlined />} onClick={onEditHandler} />
            <Button
              icon={<DeleteOutlined />}
              danger
              onClick={onDeleteHandler}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      rowKey={"id"}
      columns={columns}
      dataSource={items}
      pagination={false}
    />
  );
};
