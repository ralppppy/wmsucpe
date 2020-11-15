import Axios from "axios";
import { Divider, Image, Typography } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import parse from "html-react-parser";
import dayjs from "dayjs";

import { AppContext } from "../../context/AppContext";

const { Title, Text } = Typography;
function NewsView() {
  const { proxy } = useContext(AppContext);
  const [singleNewsData, setSingleNewsData] = useState({ newsContent: "" });
  const router = useRouter();

  console.log();
  useEffect(() => {
    let pageSLug = router.query.newsUrlSlug;
    Axios.get(proxy + "/api/v1/admin/news/single_View", {
      params: { newsUrlSlug: pageSLug },
    }).then((newsSingle) => {
      console.log(newsSingle);
      let data = newsSingle.data;
      setSingleNewsData(data);
    });
  }, [router.query.newsUrlSlug, proxy]);
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
