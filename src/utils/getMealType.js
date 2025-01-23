const getMealType = (hour) => {
    if (hour >= 5 && hour < 11) return "breakfast";
    if (hour >= 11 && hour < 17) return "lunch";
    if (hour >= 17 || hour < 5) return "dinner";
  };
  
export default getMealType;
  