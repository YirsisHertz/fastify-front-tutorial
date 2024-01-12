const start = async () => {
  const res = await fetch("http://localhost:3000/products");

  const data = await res.json();

  console.log(data);
};

start();
