
class ErrorResponse extends Error {
  constructor(response) {
    super(response.statusText);
    this.response = response;
  }
}

const checkStatus = response => {
  if (!response.ok) {
    throw new ErrorResponse(response);
  }
  return response.json();
};

export { checkStatus };
