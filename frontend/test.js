const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const credentials = {
  nombre: "Ariel",
  apellido: "serato",
  email: "ariel@gmail.com",
  password: "1234test",
  edad: "07/19/2001",
};

function singInTest() {
  describe("testeo de registro", function () {
    this.timeout(50000);
    let webDriver = new Builder().forBrowser("chrome").build();
    webDriver.manage().window().maximize();

    it("Ingreso credenciales incorrectas, sin subir archivo", async () => {
      await webDriver.get("https://luxurydrinks.herokuapp.com/");
      await webDriver
        .findElement(By.css("#root > nav > div.block > button"))
        .click();
      await webDriver.findElement(By.className("Register")).click();
      await webDriver
        .findElement(By.className("Nombre"))
        .sendKeys(credentials.nombre);
      await webDriver
        .findElement(By.className("Apellido"))
        .sendKeys(credentials.apellido);
      await webDriver
        .findElement(By.className("Email"))
        .sendKeys(credentials.email);
      await webDriver
        .findElement(By.className("Contraseña"))
        .sendKeys(credentials.password);
      await webDriver
        .findElement(By.className("Edad"))
        .sendKeys(credentials.edad);
      await webDriver.sleep(3000);
      await webDriver.findElement(By.id("register")).click();
      await webDriver.sleep(3000);
      const texto = await webDriver
        .findElement(
          By.css(
            "body > div.swal2-container.swal2-top-end.swal2-backdrop-show > div"
          )
        )
        .getText();
      assert.strictEqual(texto, "Gracias por registrarte");
    });

    it("Ingreso credenciales con edad incorrecta", async () => {
      var path = process.cwd() + "/public/assets/testAvatar.jpg";
      await webDriver.get("https://luxurydrinks.herokuapp.com/");
      await webDriver
        .findElement(By.css("#root > nav > div.block > button"))
        .click();
      await webDriver.findElement(By.className("Register")).click();
      await webDriver
        .findElement(By.className("Nombre"))
        .sendKeys(credentials.nombre);
      await webDriver
        .findElement(By.className("Apellido"))
        .sendKeys(credentials.apellido);
      await webDriver
        .findElement(By.className("Email"))
        .sendKeys(credentials.email);
      await webDriver
        .findElement(By.className("Contraseña"))
        .sendKeys(credentials.password);
      await webDriver
        .findElement(By.className("Edad"))
        .sendKeys(credentials.edad);
      await webDriver.findElement(By.id("fileupload")).sendKeys(path);
      await webDriver.sleep(10000);
      await webDriver.findElement(By.id("register")).click();
      await webDriver.sleep(10000);
      const texto = await webDriver
        .findElement(
          By.css(
            "body > div.swal2-container.swal2-top-end.swal2-backdrop-show > div"
          )
        )
        .getText();
      assert.strictEqual(texto, "Gracias por registrarte");
    });

    it("Ingreso credenciales correctas", async () => {
      var path = process.cwd() + "/public/assets/testAvatar.jpg";
      await webDriver.get("https://luxurydrinks.herokuapp.com/");
      await webDriver
        .findElement(By.css("#root > nav > div.block > button"))
        .click();
      await webDriver.findElement(By.className("Register")).click();
      await webDriver
        .findElement(By.className("Nombre"))
        .sendKeys(credentials.nombre);
      await webDriver
        .findElement(By.className("Apellido"))
        .sendKeys(credentials.apellido);
      await webDriver
        .findElement(By.className("Email"))
        .sendKeys(credentials.email);
      await webDriver
        .findElement(By.className("Contraseña"))
        .sendKeys(credentials.password);
      await webDriver
        .findElement(By.className("Edad"))
        .sendKeys(credentials.edad);
      await webDriver.findElement(By.id("fileupload")).sendKeys(path);
      await webDriver.sleep(10000);
      await webDriver.findElement(By.id("register")).click();

      await webDriver.sleep(10000);
      const texto = await webDriver
        .findElement(
          By.css(
            "body > div.swal2-container.swal2-top-end.swal2-backdrop-show > div"
          )
        )
        .getText();
      assert.strictEqual(texto, "Gracias por registrarte");
      webDriver.quit();
    });
  });
}

singInTest();
