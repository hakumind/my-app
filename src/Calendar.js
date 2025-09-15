import React from "react";

export default function Calendar({ data, setAnimationData }) {
  return (
    <div className="calendar">
      {Object.keys(data).map(day => (
        <div key={day} className="calendar-day" onClick={() => setAnimationData({ visible: true, reward: data[day].reward, rarity: data[day].reward.rarity })}>
          {day}
        </div>
      ))}
    </div>
  );
}