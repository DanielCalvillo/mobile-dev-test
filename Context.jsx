import { createContext, useState, useEffect } from 'react';
import { getProducts } from './helpers/api'

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [showAllProducts, setShowAllProducts ] = useState([]) 
    const [points, setPoints] = useState(0)
    const [myData, setMyData] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    
    const updateMyData = async () => {
      setLoading(true)
      const { err, data} = await getProducts()
      if(err) {
        setError(err)
        setLoading(false)
      } else {
        setMyData(data);
        setLoading(false)
      }
    };

    const getNotRedemptionProducts = async () => {
      setLoading(true)

      const { err, data} = await getProducts()
      if(err) {
        setError(err)
        setLoading(false)
      } else {
        const redemptionTrueList = data.filter(product => !product.is_redemption);
        setMyData(redemptionTrueList);
        setShowAllProducts(true)
        setLoading(false)
      }
    };

    const getRedemptionProducts = async () => {
      setLoading(true)

      const { err, data} = await getProducts()
      if(err) {
        setError(err)
        setLoading(false)
      } else {
        const redemptionFalseList = data.filter(product => product.is_redemption);
        setMyData(redemptionFalseList);
        setShowAllProducts(true)
        setLoading(false)
      }
    };
      
    useEffect(() => {
        const getPoints = async () => {
          setLoading(true)
          const { err, data} = await getProducts()
          if(err) {
            setError(err)
            setLoading(false)
          } else {
            const totalPointsWithoutRedemptions = data.reduce((acc, item) => {
                if (!item.is_redemption) {
                  return acc + item.points;
                }
                return acc;
              }, 0);
              setPoints(totalPointsWithoutRedemptions)
              setLoading(false)
          }
        }
      updateMyData()
      setShowAllProducts(false)
      getPoints()
    }, [])
    return (
      <MyContext.Provider 
        value={{
          myData, 
          updateMyData, 
          getNotRedemptionProducts, 
          getRedemptionProducts, 
          showAllProducts, 
          setShowAllProducts, 
          points,
          error,
          loading
        }}>
        {children}
      </MyContext.Provider>
    );
  };