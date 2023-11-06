export const environment = (version : string = "v1") => {
  return {
    production: false,
    API: "https://localhost:5000/api/" + version
  }
};
