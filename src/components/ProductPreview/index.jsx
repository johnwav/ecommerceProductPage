import styles from "./productPreview.module.css";
import { images } from "../../app/data.js";
import { useState } from "react";
import close from "../../assets/icon-close.svg";
import next from "../../assets/icon-next.svg";
import prev from "../../assets/icon-previous.svg";
import { toggle } from "../../features/productViewSlice";
import { useDispatch } from "react-redux";

export const ProductPreview = (props) => {
  const [productImage, setProductImage] = useState(0);
  const handleClick = (id) => {
    setProductImage(id);
  };
  const decrement = () => {
    setProductImage(Math.max(productImage - 1, 0));
  };
  const increment = () => {
    if (productImage < images.length - 1) {
      setProductImage(productImage + 1);
    }
  };

  const dispatch = useDispatch();

  return (
    <>

      <div className={styles.container}>
        <div className={styles.top}>
          <button className={styles.close} onClick={() => dispatch(toggle())}>
            <img src={close} width={20} alt="close"></img>
          </button>

          <button className={styles.left} onClick={() => decrement()}>
            <img src={prev} alt="previous"></img>
          </button>
          <button className={styles.right} onClick={() => increment()}>
            <img src={next}></img>
          </button>
          <img src={images[productImage].image} width={446} alt="next"></img>
          <div className={styles.thumbnailPan}>
            {images.map((image) => (
              <button key={image.id} onClick={() => handleClick(image.id)}>
                <img
                  className={productImage === image.id ? styles.selected : ""}
                  width={89}
                  src={image.thumbnail}
                  alt="product"
                ></img>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.backdrop}></div>
    </>
  );
};
