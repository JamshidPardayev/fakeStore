const saveWishlistToStorage =
  JSON.parse(localStorage.getItem("wishlist")) || [];

export const initialState = {
  count: 0,
  wishlist: saveWishlistToStorage,
  token: null,
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LIKED": {
      const isExist = state.wishlist.some(({ id }) => id === action.payload.id);

      const updatedWishlist = isExist
        ? state.wishlist.filter((item) => item.id !== action.payload.id)
        : [...state.wishlist, action.payload];

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return {
        ...state,
        wishlist: updatedWishlist,
      };
    }

    default:
      return state;
  }
};
