import { useEffect } from "react";
import axios from "axios";
const AxiosTestPost = () => {
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    // axios
    //   .post(
    //     `https://jsonplaceholder.typicode.com/posts`,
    //     {
    //       title: "avy",
    //       body: "axios",
    //       userId: 10,
    //     },
    //     {
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     console.log("Finally block of Axios Post");
    //   });

    // axios api
    /* a better guide:
    https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
    */
    axios({
      method: "post",
      url: `https://jsonplaceholder.typicode.com/posts`,
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    }).then(function (response) {
      console.log(response);
    });
  }, []);
};

export default AxiosTestPost;
