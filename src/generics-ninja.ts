const addUID = (obj: object) => {
  const uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
const docOne = addUID({ name: 'Joey', age: 46 });
console.log(docOne);

const addUID2 = <T extends { name: string }>(obj: T) => {
  const uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
const docTwo = addUID2({ name: 'Joshua' });
console.log(docTwo);

interface BaseError<T> {
  status: number;
  message: string;
  errors?: T;
  other: string;
}
interface AxiosError {
  data: string;
  innerMessage: string;
}

interface SubmitTransactionResponse {
  status: string; // Applied
  receiptNumber: number;
  error?: TransactionError;
}

interface TransactionError {
  message: string;
  errorType: string;
}

const errorAxiosResponse: BaseError<AxiosError> = {
  status: 404,
  message: 'The item was not found by Axios',
  errors: { data: 'Axios error data', innerMessage: 'Axios inner message' },
  other: 'Other stuff to fill in'
};
console.log(errorAxiosResponse);

const transError: BaseError<SubmitTransactionResponse> = {
  status: 400,
  message: 'Submit transaction error occurred',
  errors: {
    status: 'Declined',
    receiptNumber: 56689,
    error: {
      message: 'Failed to submit transaction - Network is down',
      errorType: 'Network'
    }
  },
  other: 'Please try again later or contact your fund for more information on the matter'
};
console.log(transError);
