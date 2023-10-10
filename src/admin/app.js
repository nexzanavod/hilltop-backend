const config = {
  translations:{
    en:{
      "app.components.LeftMenu.navbrand.title": "Hilltop Dashboard",
      "Auth.form.welcome.title": "Welcome to Hilltop Admin!",
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
