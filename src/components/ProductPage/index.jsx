import { useState } from "react";
import styles from "./ProductPage.module.css";
import { images, data } from "./data";

export const ProductPage = () => {
  const [productImage, setProductImage] = useState(0);

  const handleClick = (id) => {
    setProductImage(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.visualsPanel}>
        <button>
          <img src={images[productImage].image} width={446}></img>
        </button>
        <div className={styles.thumbnailPanel}>
          {images.map((image) => (
            <button key={image.id} onClick={() => handleClick(image.id)}>
              <img
                className={productImage===image.id? styles.selected : ""}
                width={89}
                src={image.thumbnail}
              ></img>
              <div className={styles.overlay}></div>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.detailsPanel}>
        <div className={styles.vendor}>{data.vendor}</div>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.subtitle}>{data.subTitle}</div>
        <div className={styles.priceInfo}>
          <h1>{data.price.toFixed(2)}</h1>
          <div className={styles.discount}>{data.discount * 100}%</div>
        </div>
        <div> cart info</div>
      </div>
    </div>
  );
};
