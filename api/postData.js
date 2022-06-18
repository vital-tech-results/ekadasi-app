const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export default postData;
