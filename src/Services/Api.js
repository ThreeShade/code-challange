export async function postData(Data) {
  try {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json"
    };

    let bodyContent = JSON.stringify(Data);

    let response = await fetch(
      "https://webhook.site/1c05b9be-60b8-42b0-9590-3d0f60da82cd",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList
      }
    );

    await response.json();
    return { message: "Form subitted" };
  } catch (error) {
    console.error(error);
    return { message: "something went wrong" };
  }
}
