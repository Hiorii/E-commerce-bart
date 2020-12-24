/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getProductById = ({ products }, productId) => {
  const filtered = products.filter(product => product.id === productId);
  return filtered.length ? filtered[0] : { error: true };
};

export const getProductByManufacturer = ({ products }) =>
  products.map(product => product.manufacturer);

export const getProductByPrice = ({ products }) =>
  products.map(product => product.price);

export const getPromoCategory = ({ products }) =>
  products.filter(category => category.promoCategory === true);

export const getPromo = ({ promoProducts }) => promoProducts;

export const getHotDeal = ({ products }) =>
  products.filter(product => product.hotDeal === true || product.hotDeal === false);

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompared = ({ products }) =>
  products.filter(product => product.compare === true);

/* action name */
const createActionName = name => `products/${name}`;

/* action type */
export const FAVOURITE_HANDLER = createActionName('FAVOURITE_HANDLER');
export const CHANGE_HOTDEAL = createActionName('CHANGE_HOTDEAL');
export const SHINING_STAR = createActionName('SHINING_STAR');
export const CHANGE_STYLE = createActionName('CHANGE_STYLE');
export const COMPARE_HANDLER = createActionName('COMPARE_HANDLER');
export const REMOVE_HANDLER = createActionName('REMOVE_HANDLER');

/* action creator */
export const handleStar = payload => ({ payload, type: SHINING_STAR });
export const handleStyle = payload => ({ payload, type: CHANGE_STYLE });
export const handleCompare = payload => ({ payload, type: COMPARE_HANDLER });
export const changeHotDeal = payload => ({ payload, type: CHANGE_HOTDEAL });
export const handleRemove = payload => ({ payload, type: REMOVE_HANDLER });
export const handleFavourite = payload => ({ payload, type: FAVOURITE_HANDLER });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_STYLE: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload.id) {
          product.starChange = true;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    case SHINING_STAR: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload.id) {
          product.stars = action.payload.ratingValue;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    case FAVOURITE_HANDLER: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload) {
          product.heart = !product.heart;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    case CHANGE_HOTDEAL: {
      const newStatePart = statePart.map(product => {
        product.hotDeal = false;
        if (product.id === action.payload) {
          product.hotDeal = !product.hotDeal;
          return product;
        } else {
          return product;
        }
      });
      return newStatePart;
    }
    case COMPARE_HANDLER: {
      let compareCounter = 0;
      for (let product of statePart) {
        if (product.compare) {
          compareCounter++;
        }
      }
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload) {
          if (product.compare) {
            product.compare = false;
          } else if (compareCounter < 4) {
            product.compare = true;
          }
        }
        return product;
      });
      return newStatePart;
    }
    case REMOVE_HANDLER: {
      const newStatePart = statePart.map(product => {
        if (product.id === action.payload) {
          product.compare = false;
        }
        return product;
      });
      return newStatePart;
    }
    default:
      return statePart;
  }
}
