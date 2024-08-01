import React from "react";

/* 
Write an abstracted component that can be used in place of InventoryTile AND ShopTile

Consider what the tiles have in common and what they do not: 
- For things that are the same, copy and pasting works just fine! 
- For things that are different, consider how you might make use of props and JSX to have the same component behave differently when rendered by different parents 
*/

function PotionTile({ potion, handleClick, children }) {
  return (
    <div
      className={`${
        handleClick.name === "addToInventory" ? "card" : "inventory-card"
      }`}
    >
      <div className="image-wrapper" onClick={() => handleClick(potion.id)}>
        <img className="image" alt={potion.name} src={potion.image_url} />
      </div>
      {children}
    </div>
  );
}

export default PotionTile;
