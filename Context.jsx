import { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [ShowAllProducts, setShowAllProducts ] = useState(false) 
    const [points, setPoints] = useState(0)
    const [myData, setMyData] = useState(null);
    const updateMyData = async () => {
        const response = await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
        const data = await response.json();
        setMyData(data);
      };
      get_not_redemption_products
      const get_not_redemption_products = async () => {
        const response = await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
        const data = await response.json();
        const redemptionTrueList = data.filter(product => product.is_redemption === false);
        console.log(redemptionTrueList)
        setMyData(redemptionTrueList);
        setShowAllProducts(true)
      };
      const get_redemption_products = async () => {
        const response = await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
        const data = await response.json();
        const redemptionFalseList = data.filter(product => product.is_redemption === true);

        setMyData(redemptionFalseList);
        setShowAllProducts(true)
      };
      
      useEffect(() => {
          const getPoints = async () => {
            const response = await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
            const data = await response.json();
            const totalPointsWithoutRedemptions = data.reduce((acc, item) => {
                if (!item.is_redemption) {
                  return acc + item.points;
                }
                return acc;
              }, 0);
              setPoints(totalPointsWithoutRedemptions)
          }
          const updateMyData = async () => {
          const response = await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
          const data = await response.json();
          setMyData(data);
        };
        updateMyData()
        setShowAllProducts(false)
        getPoints()
        
    }, [])
    return (
      <MyContext.Provider value={{ myData, updateMyData, get_not_redemption_products, get_redemption_products, ShowAllProducts, setShowAllProducts, points }}>
        {children}
      </MyContext.Provider>
    );
  };