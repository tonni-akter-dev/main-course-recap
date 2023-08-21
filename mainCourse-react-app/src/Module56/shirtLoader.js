const shirtLoader = async () => {
  const loadedData = await fetch("/fakeData/tshirts.json");
  const data =await loadedData.json();
  console.log(data)
  return data;
};

export default shirtLoader