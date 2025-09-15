import React from "react";
import "./RewardAnimation.css";

export default function RewardAnimation({ animationData }) {
  if (!animationData.visible) return null;
  return (
    <div className={`reward-animation ${animationData.rarity}`}>
      🎁 {animationData.reward.points}pt
    </div>
  );
}