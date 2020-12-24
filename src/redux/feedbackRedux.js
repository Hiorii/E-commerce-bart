/* selectors */
export const getAll = ({ feedback }) => feedback;
export const getCount = ({ feedback }) => feedback.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
