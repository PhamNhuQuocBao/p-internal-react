import {
  createContext,
  useContext,
  FC,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  IdProduct,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../store/product/api";
import { DataType } from "../interfaces/table";

interface ProductProvidersProps {
  children: ReactNode;
}

interface ProductContext {
  products: DataType[];
  handleCreateProduct: (product: DataType) => void;
  handleUpdateProduct: (id: IdProduct, product: DataType) => void;
  handleDeleteProduct: (id: IdProduct) => void;
}

const ProductContext = createContext<ProductContext | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProviders: FC<ProductProvidersProps> = ({ children }) => {
  const [products, setProducts] = useState<DataType[]>([]);

  useEffect(() => {
    const handleGetData = async () => {
      const data = await getProduct();
      setProducts(data);
    };

    handleGetData();
  }, [products]);

  const handleCreateProduct = useCallback(async (product: DataType) => {
    try {
      await createProduct(product);
      setProducts((prevData) => [...prevData, product]);
    } catch (error) {
      throw new Error("Failed to create data");
    }
  }, []);

  const handleUpdateProduct = useCallback(
    async (id: IdProduct, product: DataType) => {
      try {
        await updateProduct(id, product);
        setProducts((prevData) => [...prevData, product]);
      } catch (error) {
        throw new Error("Failed to update data");
      }
    },
    []
  );

  const handleDeleteProduct = useCallback(async (id: IdProduct) => {
    await deleteProduct(id);
    const productIsNotDeleted = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(productIsNotDeleted);
  }, []);

  const valueContext = useMemo(() => {
    return {
      products,
      setProducts,
      handleCreateProduct,
      handleUpdateProduct,
      handleDeleteProduct,
    };
  }, [
    products,
    setProducts,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
  ]);

  return (
    <ProductContext.Provider value={valueContext}>
      {children}
    </ProductContext.Provider>
  );
};
