import { List, Skeleton } from "antd";
import React from "react";

function BlankNewsLoader({ index }) {
  return (
    <List.Item
      className="w-100"
      key={index}
      actions={[
        <Skeleton.Input style={{ width: "10vw" }} active={true} size="small" />,
      ]}
      extra={
        <Skeleton.Image
          className="rounded"
          style={{ width: 200, height: 200 }}
          active={true}
          size="small"
        />
      }
    >
      <List.Item.Meta
        className="w-100"
        title={<Skeleton.Input className="w-75" active={true} size="default" />}
        description={
          <>
            <Skeleton.Input
              className="mr-1"
              style={{ width: "5vw" }}
              active={true}
              size="small"
            />
            <Skeleton.Input
              style={{ width: "13vw" }}
              active={true}
              size="small"
            />
          </>
        }
      />
      <Skeleton
        className="w-100"
        paragraph={{ rows: 2 }}
        active={true}
        size="small"
      />
    </List.Item>
  );
}

export default BlankNewsLoader;
