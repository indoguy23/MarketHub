import { Minus, Plus, Trash2 } from "lucide-react";

import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

import { cartStyles } from "./Cart.styles";
import type { CartItemProps } from "./Cart.types";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const CartItem = ({
  item,
  onQuantityChange,
  onRemove,
  className,
}: CartItemProps) => {
  const decreaseQuantity = () => {
    if (item.quantity <= 1) {
      return;
    }

    onQuantityChange?.(item, item.quantity - 1);
  };

  const increaseQuantity = () => {
    if (item.quantity >= item.stock) {
      return;
    }

    onQuantityChange?.(item, item.quantity + 1);
  };

  return (
    <article className={cn(cartStyles.item, className)}>
      <img src={item.image} alt={item.name} className={cartStyles.image} />

      <div className={cartStyles.itemContent}>
        <h3 className={cartStyles.itemName}>{item.name}</h3>

        <div className={cartStyles.priceRow}>
          <span className={cartStyles.price}>
            {currencyFormatter.format(item.price)}
          </span>

          {item.originalPrice && item.originalPrice > item.price && (
            <span className={cartStyles.originalPrice}>
              {currencyFormatter.format(item.originalPrice)}
            </span>
          )}
        </div>

        <div className={cartStyles.itemActions}>
          <div className={cartStyles.quantity}>
            <Button
              size="icon"
              variant="ghost"
              aria-label={`Decrease quantity of ${item.name}`}
              disabled={item.quantity <= 1}
              onClick={decreaseQuantity}
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span aria-live="polite" className={cartStyles.quantityValue}>
              {item.quantity}
            </span>

            <Button
              size="icon"
              variant="ghost"
              aria-label={`Increase quantity of ${item.name}`}
              disabled={item.quantity >= item.stock}
              onClick={increaseQuantity}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            size="sm"
            variant="ghost"
            leftIcon={<Trash2 className="h-4 w-4" />}
            onClick={() => onRemove?.(item)}
          >
            Remove
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
