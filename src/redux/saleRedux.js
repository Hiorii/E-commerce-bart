/* selectors */
export const getBargain = ({ saleContent }) => saleContent.bargain;
export const getGoldenChair = ({ saleContent }) => saleContent.yellowChair;
export const getYellowChair = ({ saleContent }) => saleContent.yellowChair;
export const getBed = ({ saleContent }) => saleContent.bed;
export const getContent1 = ({ saleContent }) => saleContent.content1;
export const getContent2 = ({ saleContent }) => saleContent.content2;
export const getContent3 = ({ saleContent }) => saleContent.content3;
export const getPrice = ({ saleContent }) => saleContent.price;
export const getInfo = ({ saleContent }) => saleContent.info;
export const getSofa = ({ saleContent }) => saleContent.sofa;

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
