// TODO: Why is this file not in a sub folder?
import fetch from 'isomorphic-fetch';
import { getToken } from 'app/helpers/auth';

// Seems al ittle redundant d[oAuthGet, doGet], how can I refactor?
const doPost = (url, data) => (
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
);

const doAuthPost = (url, data) => (
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${getToken()}`,
    },
    credentials: 'same-origin',
  })
);

const doGet = (url) => (
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
);

const doAuthGet = (url) => (
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${getToken()}`,
    },
    credentials: 'same-origin',
  })
);

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
