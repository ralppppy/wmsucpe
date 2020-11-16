import { Divider, Image, Typography } from "antd";
import parse from "html-react-parser";
import dayjs from "dayjs";

const { Title, Text } = Typography;
function NewsView({ props }) {
  let { singleNewsData, proxy } = props;

  return (
    <div className="container mt-5">
      <Title className="font-weight-bolder">{singleNewsData?.newsTitle}</Title>

      <Text strong={true}>Date Created: </Text>
      <Text>
        {dayjs(singleNewsData?.createdAt).format("MMMM DD, YYYY, hh:mm a")}{" "}
      </Text>
      <Divider />
      <Image
        alt="news-cover"
        style={{ cursor: "pointer" }}
        src={`${proxy}/public/image/${singleNewsData?.coverImageNameLg}`}
      />
      <Divider />
      {parse(singleNewsData?.newsContent)}
    </div>
  );
}

export default NewsView;
