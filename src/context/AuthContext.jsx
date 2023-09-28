import { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  /*-------------------- Skip line --------------------*/

  const categoryData = [
    {
      name: "Starter",
      image: "https://www.themealdb.com/images/category/starter.png",
    },
    {
      name: "Beef",
      image: "https://themealdb.com/images/category/beef.png",
    },
    {
      name: "Dessert",
      image: "https://themealdb.com/images/category/dessert.png",
    },
  ];
  const mealData = [
    {
      name: "Shakshuka",
      image:
        "https://www.themealdb.com/images/media/meals/g373701551450225.jpg",
    },
    {
      name: "Beef Banh Mi Bowls with Sriracha Mayo",
      image:
        "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    },
    {
      name: "Chickpea Fajitas",
      image:
        "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
    },
    {
      name: "Smoky Lentil Chili with Squash",
      image:
        "https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg",
    },
    {
      name: "Braised Beef Chilli",
      image:
        "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg",
    },
  ];

  /*-------------------- Skip line --------------------*/

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      // console.log('got categories: ',response.data);
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };

  /*-------------------- Skip line --------------------*/

  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      // console.log('got recipes: ',response.data);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log("error: ", err.message);
    }
  };

  /*-------------------- Skip line --------------------*/

  return (
    <>
      <AuthContext.Provider
        value={{
          navigation,
          getCategories,
          getRecipes,
          activeCategory,
          setActiveCategory,
          categories,
          setCategories,
          meals,
          setMeals,
          categoryData,
          mealData,
          isFavourite,
          setIsFavourite,
          meal,
          setMeal,
          loading,
          setLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
