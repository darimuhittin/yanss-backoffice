class API {
  static url = "http://localhost:8080";
  static async get(path) {
    const res = await fetch(this.url + path);
    const json = res.json();
    return json;
  }

  static async post(path, body) {
    const res = await fetch(this.url + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = res.json();
    return json;
  }

  static async postForm(path, data) {
    const formData = new FormData();
    for (const key in data) {
      if (key === "images") {
        for (const image of data[key]) {
          console.log(image);
          formData.append("images", image);
        }
      } else {
        formData.append(key, data[key]);
      }
    }
    const res = await fetch(this.url + path, {
      method: "POST",
      body: formData,
    });
    const json = res.json();
    return json;
  }
  static async put(path, body) {
    const res = await fetch(this.url + path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = res.json();
    return json;
  }

  static async delete(path, body) {
    const res = await fetch(this.url + path, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = res.json();
    return json;
  }
}

export default API;
