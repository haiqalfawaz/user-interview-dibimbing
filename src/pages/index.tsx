import Navbar from "@/components/layout/navbar";
import TitlePage from "@/components/tittle";
import FilterBar from "@/components/filterBar";
import useProduct from "@/hooks/useProduct";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const { products, isLoading } = useProduct();
  return (
    <>
      <Navbar />
      <div className="py-6 px-9 space-y-3">
        <div className="flex justify-start items-center gap-1.5">
          <TitlePage />
          <p>({products.length})</p>
        </div>
        <div>
          <FilterBar />
        </div>
        <div className="grid grid-cols-5 gap-5">
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </>
  );
}
