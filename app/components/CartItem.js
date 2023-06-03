import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
export default function CartItem({ item }) {
  const { libelle, imagearticle, quantity, prix } = item;
  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex items-center gap-4 mb-3">
      <p>
        <img src={imagearticle} width={40} height={40} alt={libelle} />
      </p>
      <div>
        {libelle} <span className="text-xs">({quantity})</span>
      </div>
      <div className="ml-auto">{prix}dt</div>
      <button
        onClick={() => removeItemFromCart()}
        className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
      >
        <Image
          alt="delete icon"
          src="/images/trash.png"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
}
