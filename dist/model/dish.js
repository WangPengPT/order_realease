class Dish {
  constructor({ dishid, name, price, deliveryPrice, quantity, notes, orderId: orderIds, dishNote, orderType, discount, deliveryDiscount }) {
    this.dishid = dishid
    this.name = name
    this.price = parseFloat(price) || 0
    this.deliveryPrice = parseFloat(deliveryPrice) || 0
    this.quantity = parseInt(quantity) || 0
    this.notes = Array.isArray(notes) ? notes : [];
    this.orderIds = Array.isArray(orderIds) ? orderIds : [];
    this.dishNote = dishNote
    this.orderType = orderType
    this.discount = discount || 0
    this.deliveryDiscount = deliveryDiscount || 0
  }

  toJSON() {
    return {
      dishid: this.dishid,
      name: this.name,
      price: this.price,
      deliveryPrice: this.deliveryPrice,
      quantity: this.quantity,
      notes: this.notes,
      orderIds: this.orderIds,
      dishNote: this.dishNote,
      orderType: this.orderType,
      discount: this.discount,
      deliveryDiscount: this.deliveryDiscount,
    }
  }

  static fromJSON(data) {
    return new Dish(data)
  }
}

module.exports = { Dish }