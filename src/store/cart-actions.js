import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCardData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://react-http-7de36-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");
            
            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
              items: cartData.items || [],
              totalQuantity: cartData.totalQuantity
            }));

        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching cart data faild!",
                })
              );
        }

    };
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data!",
        })
      );
      const sendRequest = async () => {
        const response = await fetch(
          "https://react-http-7de36-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          },
          [cart]
        );
        if (!response.ok) {
          throw new Error("Sending cart data faild");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Sent cart data successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data faild!",
          })
        );
      }
    };
  };
  