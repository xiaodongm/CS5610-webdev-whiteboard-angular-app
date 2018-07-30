export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  update(user) {
    return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/profile', {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  delete() {
    return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/profile', {
      method: 'delete',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://whiteboard-nodejs-server.herokuapp.com/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
