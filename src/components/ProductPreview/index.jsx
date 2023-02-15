import styles from "./productPreview.module.css";
import { images } from "../../app/data.js";
import { useState } from "react";

export const ProductPreview = (props) => {
  const [productImage, setProductImage] = useState(0);
  const handleClick = (id) => {
    setProductImage(id);
  };


  return (
    <>
      <div className={styles.container}>
      
        <img src={images[productImage].image} width={446}></img>
        <div className={styles.thumbnailPan}>
          {images.map((image) => (
            <button key={image.id} onClick={() => handleClick(image.id)}>
              <img
                className={productImage === image.id ? styles.selected : ""}
                width={89}
                src={image.thumbnail}
              ></img>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.backdrop}></div>
    </>
  );
};
