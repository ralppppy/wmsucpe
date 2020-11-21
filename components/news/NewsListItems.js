import { Space, Typography, List } from "antd";
import striptags from "striptags";
import dayjs from "dayjs";
import Link from "next/link";
const { Text } = Typography;

function NewsListItems({ index, item, proxy }) {
  return (
    <List.Item
      className="w-100"
      key={index}
      actions={[
        <Text>
          <Link href={`/news/${item.newsUrlSlug}`}>Read More</Link>
        </Text>,
      ]}
      extra={
        <img
          className="rounded"
          width={200}
          height={200}
          alt="logo"
          src={proxy + "/public/image/" + item.coverImageNameMd}
        />
      }
    >
      <List.Item.Meta
        title={<Link href={"/news/" + item.newsUrlSlug}>{item.newsTitle}</Link>}
        description={
          <Space>
            <Text strong={true} type="secondary">
              Date Created:{" "}
            </Text>
            <Text type="secondary">
              {dayjs(item.createdAt).format("MMMM DD, YYYY, hh:mm a")}{" "}
            </Text>
          </Space>
        }
      />
      {striptags(item.newsContent).replace(/\&nbsp;/g, " ")}
      ...
    </List.Item>
  );
}

export default NewsListItems;
