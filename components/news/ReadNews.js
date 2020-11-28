import React, { useCallback } from "react";

import Say from "react-say";

function ReadNews({ text }) {
  const selector = useCallback(
    (voices) => [...voices].find((v) => v.lang === "zh-HK"),
    []
  );

  return <Say text={text} />;
}

export default ReadNews;
