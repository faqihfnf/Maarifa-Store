document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Madu Moringa", img: "madu-moringa-mesir.jpg", price: 50000 },
      { id: 2, name: "Madu Mesir", img: "madu-moringa-mesir.jpg", price: 75000 },
      { id: 3, name: "Madu Yaman", img: "madu-moringa-mesir.jpg", price: 65000 },
      { id: 4, name: "Madu Moringa", img: "madu-moringa-mesir.jpg", price: 55000 },
      { id: 5, name: "Madu Moringa", img: "madu-moringa-mesir.jpg", price: 90000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // ? cek apakah ada barang yang sama di cart?
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // ? jika belum ada / cart masih kosong

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //? jika barang sudah ada di cart, cek apakah barang sama atau berbeda dengan yang ada di cart
        this.items = this.items.map((item) => {
          //todo jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            //todo jika barang sudah ada di cart, tambah qty dan total harganya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      //? ambil item yang mau di remove berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      //todo jika item lebih dari 1
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});
//? konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
