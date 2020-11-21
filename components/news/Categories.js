import { Space, Typography, Avatar, List, Checkbox } from "antd";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const { Title, Text } = Typography;

function Categories({ proxy, setIsFetchingNews }) {
  const [categories, setCategories] = useState([]);

  const router = useRouter(0);

  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/news/get_category_list")
      .then((categoryResponse) => {
        let data = categoryResponse.data;

        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, [proxy, setCategories]);

  const handleChooseCategories = (e) => {
    setIsFetchingNews(true);
    let value = e.target.value;

    let category = router.query.category;
    let buildCategory = {};

    //If the query category already have category ID then remove it else Concant
    if (category) {
      if (category.includes(value) && !category.includes(",")) {
        category = category.replace(value, "");

        delete router.query.category;
      } else {
        if (category.includes(`${value},`)) {
          category = category.replace(`${value},`, "");
        } else {
          if (category.includes(`,${value}`)) {
            category = category.replace(`,${value}`, "");
          } else {
            category += "," + value;
          }
        }

        buildCategory.category = category;
      }
      router.push({
        pathname: "/news/all",
        query: {
          ...router.query,
          ...buildCategory,
        },
      });
    } else {
      router.push({
        pathname: "/news/all",
        query: {
          ...router.query,
          category: value,
        },
      });
    }
  };

  return (
    <Space className="w-100" direction="vertical">
      <Title level={3}>Categories</Title>
      <List
        size="small"
        className="w-100"
        itemLayout="horizontal"
        dataSource={categories}
        renderItem={(item) => (
          <List.Item>
            <Checkbox
              checked={
                router.query.category
                  ? router.query.category.includes(item.id)
                    ? true
                    : false
                  : false
              }
              value={item.id}
              onChange={handleChooseCategories}
            >
              {item.categoryName}
            </Checkbox>
          </List.Item>
        )}
      />
    </Space>
  );
}

export default Categories;
