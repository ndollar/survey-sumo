import fetch from 'isomorphic-fetch';
import { getToken } from 'app/helpers/auth';

const doPost = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  });
}

const doAuthPost = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${getToken()}`,
    },
    credentials: "same-origin"
  });
}

const doGet = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  });
}

const doAuthGet = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `${getToken()}`,
    },
    credentials: "same-origin"
  });
}

export const Question = {
  create({ text, choices }) {
    return doAuthPost('/api/questions', { text, choices });
  },

  findAll() {
    return doGet('/api/questions');
  },

  allWithAnswers() {
    return doAuthGet('/api/questions/withAnswers');
  },

};

export const Answer = {
  create(choiceId) {
    return doPost('/api/answers', { choiceId });
  },
};

export const Auth = {
  login(username, password) {
    return doPost('/api/login', { username, password });
  },
};

/*
.then(function(response) {
  response.status     //=> number 100–599
  response.statusText //=> String
  response.headers    //=> Headers
  response.url        //=> String
}, function(error) {
  console.log('ERROR: ', error);
})
*/
