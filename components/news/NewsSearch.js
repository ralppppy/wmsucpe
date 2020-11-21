import { Button, Input, Space, Form } from "antd";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

function NewsSearch() {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();
  const ref = useRef();

  const tabOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    setIsTabletOrMobile(tabOrMobile);
  }, [tabOrMobile]);

  useEffect(() => {
    setSearchValue(router.query.search);
  }, [router.query]);

  const handleClick = () => {
    if (searchValue) {
      router.push({
        pathname: "/news/all",
        query: { search: searchValue.toLowerCase() },
      });
    } else {
      router.push({
        pathname: "/news/all",
      });
    }
  };

  const handleSearchChange = (e) => {
    let value = e.currentTarget.value;
    setSearchValue(value);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleClick}
      //onFinishFailed={onFinishFailed}
    >
      <Space className="float-right ml-4">
        <Input
          value={searchValue}
          ref={ref}
          onChange={handleSearchChange}
          style={{ width: isTabletOrMobile ? "100%" : "30vw" }}
          className="rounded "
          placeholder="Search  News"
        />
        <Button
          onClick={handleClick}
          className="rounded text-right"
          type="primary"
        >
          Search
        </Button>
      </Space>
    </Form>
  );
}

export default NewsSearch;
