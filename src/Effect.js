import React, { useState, useEffect } from "react";

const EffectComponent = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setCurrentTime(newTime);
    }, 1000);

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 setInterval을 정리합니다.
  }, []); // 의존성 배열을 비워두어 최초 렌더링 시에만 실행됩니다.

  return (
    <div>
      <h2>Effect Component</h2>
      <p>Current Time: {currentTime}</p>
    </div>
  );
};

export default EffectComponent;
