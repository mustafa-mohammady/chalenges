const data = null;

switch (typeof data) {
  case "number":
    console.log("number!");
    break;
  case "null":
    console.log("null!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "array":
    console.log("Array!");
    break;
  case "object":
    console.log("Object!");
    break;
  default:
    "I have no idea!";
}
