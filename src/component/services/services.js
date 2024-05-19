export const formateDate = (admissionDate) => {
  const date = admissionDate.getDay();
  console.log(date);
};

export const getData = async () => {
  const res = await fetch(
    "https://yellowowlbackend-obv0.onrender.com/students"
  );
  const data = await res.json();
  console.log("data", data);
  return data;
};
