import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.floor(new Date("2023-02-16:00:00") - new Date()) / 1000;
      const diffDay = Math.floor(diff / (60 * 60 * 24));
      const diffhour = Math.floor((diff % (60 * 60 * 24)) / 60 / 60);
      const diffMin = Math.floor(((diff % (60 * 60 * 24)) / 60) % 60);
      const diffSec = Math.floor((diff % (60 * 24)) % 60);
      // console.log((new Date("2023-02-16:00:00") - new Date()) / 1000 - diff);
      setTime({ day: diffDay, hour: diffhour, min: diffMin, sec: diffSec });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <span>{time.day}일</span>
      <span>{String(time.hour).padStart(2, 0)}시간</span>
      <span>{String(time.min).padStart(2, 0)}분</span>
      <span>{String(time.sec).padStart(2, 0)}초</span>
      <span> 전</span>
    </div>
  );
}
