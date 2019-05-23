export const registerFormData = {
  fullname: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Fullname...',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please enter your fullname!',
  },
  username: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Username...',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please enter your username!',
  },
  password: {
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Password...',
    },
    value: '',
    validation: {
      required: true,
      minLength: 6,
      isNumeric: true,
      isPassword: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Password must be a number and have at least 6 characters!',
  },
  confirmPassword: {
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Repeat password...',
    },
    value: '',
    validation: {
      required: true,
      isNumeric: true,
      // isEqualPassword: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Please repeat exactly your password!',
  },
  phoneNumber: {
    elementType: 'input',
    elementConfig: {
      type: 'phone',
      placeholder: 'Phonenumber...',
    },
    value: '',
    validation: {
      required: true,
      maxLength: 10,
      isNumeric: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Password must be a number and have max 10 characters!',
  },
  email: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Email...',
    },
    value: '',
    validation: {
      required: true,
      isEmail: true,
    },
    valid: false,
    touched: false,
    errorMessage: 'Email invalid!',
  },
};
