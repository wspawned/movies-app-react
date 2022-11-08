import type { AppDispatch, RootState } from "../store"

//@ts-ignore

export const setSelectedMenuItemName = itemName => dispatch => {
  dispatch({
    type: "SET_SELECTED_MENU_ITEM_NAME",
    payload: itemName,
  })
};