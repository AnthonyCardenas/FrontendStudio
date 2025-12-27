import { useState } from "react";
import "./ItemSlider.css";

export default function ItemSlider({ items, renderItem }) {
  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_PAGE = 3;

  const handleNext = () => {
    const nextIndex = startIndex + ITEMS_PER_PAGE;
    setStartIndex(nextIndex >= items.length ? 0 : nextIndex);
  };

  const visibleItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="slider-wrapper">
      <div className="slider-row">
        {visibleItems.map((item) => (
          <div key={item.id} className="slider-item">
            {renderItem(item)} {/* ← Render item using your custom JSX */}
          </div>
        ))}
      </div>
      <div>
        <button className="slider-btn" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
}
