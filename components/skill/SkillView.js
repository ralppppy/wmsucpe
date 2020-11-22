import { Card, Divider, Skeleton, Typography } from "antd";
import parse from "html-react-parser";

const { Title } = Typography;

function SkillView({ props }) {
  let { singleSkillData } = props;

  return (
    <div className="container mt-5">
      {singleSkillData.hasOwnProperty("id") ? (
        <>
          <Title>{singleSkillData?.skillTitle}</Title>
          <Divider />
          {parse(singleSkillData?.skillContent)}
        </>
      ) : (
        <>
          <Skeleton.Input
            size="large"
            active={true}
            style={{ width: "40vw" }}
          />
          <Divider />

          <Skeleton paragraph={{ rows: 6 }} />
        </>
      )}
    </div>
  );
}

export default SkillView;
