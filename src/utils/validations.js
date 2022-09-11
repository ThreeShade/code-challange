import { Regex } from "./Regex";

const invalidMessage = (name) => {
  return {
    [name]: `Please enter a valid ${name}`
  };
};
const valid = (name) => {
  return {
    [name]: true
  };
};
export function validate(name, value) {
  switch (name) {
    case "weight": {
      let weight = +value;
      if (Number.isInteger(weight) && weight > 2 && value < 120) {
        return valid(name);
      } else {
        return invalidMessage(name);
      }
    }
    case "height": {
      let height = +value;
      if (Number.isInteger(height) && height > 50 && height < 300) {
        return valid(name);
      } else {
        return invalidMessage(name);
      }
    }
    case "age": {
      let age = +value;
      if (Number.isInteger(age) && age > 1 && age < 110) {
        return valid(name);
      } else {
        return invalidMessage(name);
      }
    }
    case "email":
    case "phoneNumber":
    case "pinCode": {
      if (Regex[name].test(value)) {
        return valid(name);
      } else {
        return invalidMessage(name);
      }
    }
    case "fullName":
    case "country":
    case "city":
      if (!!value) {
        return valid(name);
      } else {
        return invalidMessage(name);
      }

    default:
      return valid(name);
  }
}
