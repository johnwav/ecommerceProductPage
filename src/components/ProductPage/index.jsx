import React from "react";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import cart from "../../assets/icon-cart.svg";
import close from "../../assets/icon-close.svg";
import { useState } from "react";
import styles from "./ProductPage.module.css";
import { images, data } from "../../app/data.js";
import { incrementByAmout } from "../../features/itemsInCart/itemsInCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductPreview } from "../ProductPreview";

export const ProductPage = (props) => {
  const [productImage, setProductImage] = useState(0);
  const [toggle, setTogle] = useState(false);
  const count = useSelector((state) => state.itemsInCart.value);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(1);

  const increment = () => {
    setItemCount(itemCount + 1);
  };
  const decrement = () => {
    setItemCount(Math.max(itemCount - 1, 0));
  };

  const handleaddToCart = (count) => {
    const cartCount = +count;
    {
      console.log({ cartCount });
    }
    return cartCount;
  };

  const handleClick = (id) => {
    setProductImage(id);
  };
  const handleToggle = (event) => {
    setTogle((current) => !current);
  };

  return (
    <div className={styles.ProductPage}>
      <div className={styles.container}>
        <div className={styles.visualsPanel}>
          <button onClick={handleToggle}>
            <img src={images[productImage].image} width={446}></img>
          </button>
          <button>
            <img src={close} className={styles.close}></img>
          </button>
          <div className={styles.thumbnailPanel}>
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
        <div className={styles.detailsPanel}>
          <div className={styles.vendor}>{data.vendor}</div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.subtitle}>{data.subTitle}</div>
          <div className={styles.priceInfo}>
            <h1>{data.price.toFixed(2)}</h1>
            <div className={styles.discount}>{data.discount * 100}%</div>
          </div>
          <div className={styles.cartinfo}>
            <div className={styles.itemsincart}>
              <button onClick={() => decrement()}>
                <img src={minus}></img>
              </button>

              <div>{itemCount}</div>

              <button onClick={() => increment()}>
                <img src={plus}></img>
              </button>
            </div>
            <button
              className={styles.addToCart}
              onClick={() => dispatch(incrementByAmout(itemCount))}
            >
              <img src={cart}></img>
              <div>Add to cart</div>
            </button>
          </div>
        </div>
      </div>
      {toggle ? (
        <div className={styles.preview}>
          <ProductPreview toggle={toggle} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
