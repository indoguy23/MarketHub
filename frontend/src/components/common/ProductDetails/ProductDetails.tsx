import { Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react";

import ProductImageGallery from "@/components/common/ProductImageGallery";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import { cn } from "@/utils/cn";

import { productDetailsStyles } from "./ProductDetails.styles";
import type { ProductDetailsProps } from "./ProductDetails.types";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const calculateDiscount = (price: number, originalPrice?: number) => {
  if (!originalPrice || originalPrice <= price) {
    return null;
  }

  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

const ProductDetails = ({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  loading = false,
  className,
}: ProductDetailsProps) => {
  const isOutOfStock = product.stock <= 0;

  const maxQuantity = product.maxQuantity ?? product.stock;

  const discount = calculateDiscount(product.price, product.originalPrice);

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      return;
    }

    onQuantityChange(quantity - 1);
  };

  const increaseQuantity = () => {
    if (isOutOfStock || quantity >= maxQuantity) {
      return;
    }

    onQuantityChange(quantity + 1);
  };

  if (loading) {
    return (
      <div className={cn(productDetailsStyles.root, className)}>
        <Skeleton className="aspect-square w-full rounded-2xl" />

        <div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-4 h-10 w-3/4" />
          <Skeleton className="mt-3 h-10 w-1/2" />

          <Skeleton className="mt-6 h-8 w-40" />

          <div className="mt-6 space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <Skeleton className="mt-8 h-12 w-full" />
        </div>
      </div>
    );
  }

  return (
    <section className={cn(productDetailsStyles.root, className)}>
      <ProductImageGallery images={product.images} />

      <div className={productDetailsStyles.content}>
        <p className={productDetailsStyles.category}>{product.category}</p>

        <h1 className={productDetailsStyles.title}>{product.name}</h1>

        <div className={productDetailsStyles.ratingRow}>
          {typeof product.rating === "number" && (
            <div className="flex items-center gap-1">
              <Star
                aria-hidden="true"
                className="h-4 w-4 fill-current text-warning"
              />

              <span className="font-medium text-foreground">
                {product.rating.toFixed(1)}
              </span>
            </div>
          )}

          {typeof product.reviewCount === "number" && (
            <span className="text-muted-foreground">
              {product.reviewCount} reviews
            </span>
          )}

          {isOutOfStock ? (
            <Badge variant="destructive">Out of Stock</Badge>
          ) : product.stock <= 5 ? (
            <Badge variant="warning">Only {product.stock} left</Badge>
          ) : (
            <Badge variant="success">In Stock</Badge>
          )}
        </div>

        <div className={productDetailsStyles.priceRow}>
          <span className={productDetailsStyles.price}>
            {currencyFormatter.format(product.price)}
          </span>

          {product.originalPrice && product.originalPrice > product.price && (
            <span className={productDetailsStyles.originalPrice}>
              {currencyFormatter.format(product.originalPrice)}
            </span>
          )}

          {discount !== null && (
            <Badge variant="destructive">{discount}% Off</Badge>
          )}
        </div>

        {product.description && (
          <p className={productDetailsStyles.description}>
            {product.description}
          </p>
        )}

        <div className={productDetailsStyles.divider} />

        <div className={productDetailsStyles.quantitySection}>
          <span className="text-sm font-medium text-foreground">Quantity</span>

          <div className={productDetailsStyles.quantityControl}>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Decrease quantity"
              disabled={isOutOfStock || quantity <= 1}
              onClick={decreaseQuantity}
            >
              <Minus aria-hidden="true" className="h-4 w-4" />
            </Button>

            <span
              aria-live="polite"
              className={productDetailsStyles.quantityValue}
            >
              {quantity}
            </span>

            <Button
              size="icon"
              variant="ghost"
              aria-label="Increase quantity"
              disabled={isOutOfStock || quantity >= maxQuantity}
              onClick={increaseQuantity}
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>

          {!isOutOfStock && (
            <span className="text-sm text-muted-foreground">
              {product.stock} available
            </span>
          )}
        </div>

        <div className={productDetailsStyles.actions}>
          <Button
            size="lg"
            className="flex-1"
            disabled={isOutOfStock}
            leftIcon={<ShoppingCart className="h-5 w-5" />}
            onClick={() => onAddToCart?.(product, quantity)}
          >
            {isOutOfStock ? "Unavailable" : "Add to Cart"}
          </Button>

          <Button
            size="lg"
            variant="outline"
            aria-pressed={isWishlisted}
            leftIcon={
              <Heart
                className={cn(
                  "h-5 w-5",
                  isWishlisted && "fill-current text-destructive",
                )}
              />
            }
            onClick={() => onToggleWishlist?.(product)}
          >
            {isWishlisted ? "Wishlisted" : "Wishlist"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
