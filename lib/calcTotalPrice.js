export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product)
      // product can be deleted but still be in your cart
      return tally;
    return tally + cartItem.product.price * cartItem.quantity;
  }, 0 /* acc */);
}
