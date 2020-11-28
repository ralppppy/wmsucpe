import { Divider, Image, Skeleton, Space, Typography, Button } from "antd";
import parse from "html-react-parser";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import striptags from "striptags";

const DynamicComponentWithNoSSR = dynamic(() => import("./ReadNews"), {
  ssr: false,
});

const { Title, Text } = Typography;
function NewsView({ props }) {
  const [read, setRead] = useState(false);
  let { singleNewsData, proxy } = props;

  useEffect(() => {
    return () => {
      setRead(false);
    };
  }, []);

  return (
    <div className="container mt-5">
      {singleNewsData.hasOwnProperty("id") ? (
        <>
          {read && (
            <DynamicComponentWithNoSSR
              text={striptags(singleNewsData?.newsContent).replace(
                /\&nbsp;/g,
                " "
              )}
            />
          )}
          <Title className="font-weight-bolder">
            {singleNewsData?.newsTitle}
          </Title>
          <Text strong={true}>Date Created: </Text>
          <Text>
            {dayjs(singleNewsData?.createdAt).format("MMMM DD, YYYY, hh:mm a")}{" "}
          </Text>
          <br /> <br />
          <Space>
            <Button type="primary" onClick={() => setRead(true)}>
              Start Reading
            </Button>
            <Button onClick={() => setRead(false)}>Stop Reading</Button>
          </Space>
          <Divider />
          <Image
            alt="news-cover"
            style={{ cursor: "pointer" }}
            src={`${proxy}/public/image/news/${singleNewsData?.coverImageNameLg}`}
          />
          <Divider />
          {parse(singleNewsData?.newsContent)}
        </>
      ) : (
        <>
          <Space direction="vertical">
            <Skeleton.Input
              style={{ width: "50vw" }}
              active={true}
              size={"large"}
            />

            <div>
              <Skeleton.Input
                style={{ width: "7vw" }}
                className="mr-1"
                active={true}
                size={"small"}
              />
              <Skeleton.Input
                style={{ width: "14vw" }}
                active={true}
                size={"small"}
              />
            </div>
          </Space>
          <Divider />

          <Skeleton.Image
            style={{ height: 411 }}
            className="w-100"
            active={true}
            size={"small"}
          />
          <Divider />
          <Skeleton active />
          <Skeleton active />
        </>
      )}
    </div>
  );
}

export default NewsView;
