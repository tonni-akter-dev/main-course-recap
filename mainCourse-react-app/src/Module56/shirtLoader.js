const shirtLoader = async () => {
  const loadedData = await fetch("http://localhost:3000/phones");
  const data =await loadedData.json();
  console.log(data)
  return data;
};

export default shirtLoader