import { getUser } from "./myservices";

export const getAllUsers = async () => {
  try {
    const userList = await getUser(
      "https://jsonplaceholder.typicode.com/users/"
    );
    return userList;
  } catch (err) {
    return err;
  }
};

export const getUserById = (id) => {
  try {
    const user = getUser(`https://jsonplaceholder.typicode.com/users/${id}`);
    return user;
  } catch (err) {
    return err;
  }
};

export const getSelectedUsers = async (arr) => {
  const promiseArray = [];
  for (let id of arr) {
    promiseArray.push(getPromise(id));
  }

  return Promise.all(promiseArray)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};



const getPromise = (id) => {
  return new Promise(async (resolve, reject) => {
    const user = await getUserById(id);
    resolve(user);
  });
};
