import Link from "next/link";
import { Product } from "@prisma/client";

import { formatDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductOperations } from "@/app/dashboard/products/_components/product-oprations";

interface ProductItemProps {
  product: Pick<Product, "id" | "name" | "createdAt">;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-md">
      <div className="grid gap-1">
        <Link
          href={`/editor/${product.id}`}
          className="font-semibold hover:underline"
        >
          {product.name}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {formatDate(product.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <ProductOperations product={{ id: product.id, name: product.name }} />
    </div>
  );
}

ProductItem.Skeleton = function productItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
};
