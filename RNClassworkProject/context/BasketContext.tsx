import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface BasketProviderProps {
      basket: any[]
      setBasket(item: any): void
}

export const BasketContext = createContext<BasketProviderProps>({
      basket: [],
      setBasket: () => { }
});

export const BasketProvider = ({ children }: any) => {
      const [basket, setBasket] = useState<any[]>([]);

      const values: BasketProviderProps = {
            basket,
            setBasket
      }
      return (
            <BasketContext.Provider value={values}>
                  {children}
            </BasketContext.Provider>
      )
}