import type { AppDispatch } from "../store"

export const setSelectedMenuItemName = itemName => dispatch => {
  dispatch({
    type: "SET_SELECTED_MENU_ITEM_NAME",
    payload: itemName,
  })
};