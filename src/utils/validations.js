export function validate(name, value) {
  switch (name) {
    case "fullName":
      if (true && !!value) {
        return {
          error: true,
          message: "inValidName"
        };
      } else {
        return {
          error: false,
          message: ""
        };
      }

    default:
      return {
        error: false,
        message: ""
      };
  }
}
