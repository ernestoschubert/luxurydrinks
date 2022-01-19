const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const credentials = [
  {
    nombre: "Ariel",
    apellido: "serato",
    email: "ariel@gmail.com",
    password: "1234test",
    edad: "07/19/2001",
  },
  {
    nombre: "Ariel",
    apellido: "serato",
    email: "ariel12@gmail.com",
    password: "1234test",
    edad: "07/19/2020",
  },
  {
    nombre: "Ariel",
    apellido: "serato",
    email: "ariel123@gmail.com",
    password: "1234test",
    edad: "07/19/2001",
  },
];

function singInTest() {
  describe("testeo de registro", function () {
    this.timeout(20000);
    let webDriver = new Builder().forBrowser("chrome").build();
    webDriver.manage().window().maximize();

    it("Ingreso credenciales incorrectas, sin subir archivo", async () => {
      await webDriver.get("http://localhost:3000/");
      await webDriver.findElement(By.className("Register")).click();
      await webDriver
        .findElement(By.className("Nombre"))
        .sendKeys(credentials[0].nombre);
      await webDriver
        .findElement(By.className("Apellido"))
        .sendKeys(credentials[0].apellido);
      await webDriver
        .findElement(By.className("Email"))
        .sendKeys(credentials[0].email);
      await webDriver
        .findElement(By.className("Contraseña"))
        .sendKeys(credentials[0].password);
      await webDriver
        .findElement(By.className("Edad"))
        .sendKeys(credentials[0].edad);
        await webDriver.sleep(3000);
      await webDriver.findElement(By.className("button-send")).click();
      const texto = await webDriver
      .findElement(By.css("body > div.swal2-container.swal2-top-end.swal2-backdrop-show > div"))
      .getText();
      await webDriver.sleep(5000)
      assert.strictEqual(texto, "Complete los campos porfavor!")
      console.log(texto)
    });

    it("Ingreso credenciales con edad incorrecta", async () => {
      var path = process.cwd() + "/public/assets/testAvatar.jpg";
      await webDriver.get("http://localhost:3000/");
      await webDriver.findElement(By.className("Register")).click();
      await webDriver
        .findElement(By.className("Nombre"))
        .sendKeys(credentials[1].nombre);
      await webDriver
        .findElement(By.className("Apellido"))
        .sendKeys(credentials[1].apellido);
      await webDriver
        .findElement(By.className("Email"))
        .sendKeys(credentials[1].email);
      await webDriver
        .findElement(By.className("Contraseña"))
        .sendKeys(credentials[1].password);
      await webDriver
        .findElement(By.className("Edad"))
        .sendKeys(credentials[1].edad);
      await webDriver.findElement(By.id("fileupload")).sendKeys(path);
      await webDriver.sleep(3000);
      await webDriver.findElement(By.className("button-send")).click();
      const texto = await webDriver
      .findElement(By.css("body > div.swal2-container.swal2-top-end.swal2-backdrop-show > div"))
      .getText();
      await webDriver.sleep(5000)
      assert.strictEqual(texto, "Complete los campos porfavor!")
      console.log(texto)
    });

    it("Ingreso credenciales correctas", async () => {
      var path = process.cwd() + "/public/assets/testAvatar.jpg";
      await webDriver.get("http://localhost:3000/");
      await webDriver.findElement(By.className("Register")).click();
      await webDriver
        .findElement(By.className("Nombre"))
        .sendKeys(credentials[2].nombre);
      await webDriver
        .findElement(By.className("Apellido"))
        .sendKeys(credentials[2].apellido);
      await webDriver
        .findElement(By.className("Email"))
        .sendKeys(credentials[2].email);
      await webDriver
        .findElement(By.className("Contraseña"))
        .sendKeys(credentials[2].password);
      await webDriver
        .findElement(By.className("Edad"))
        .sendKeys(credentials[2].edad);
      await webDriver.findElement(By.id("fileupload")).sendKeys(path);
      await webDriver.sleep(3000);
      await webDriver.findElement(By.className("button-send")).click();
      await webDriver.sleep(5000);
      const texto = await webDriver
        .findElement(By.css("body > div.swal2-container.swal2-top-end.swal2-backdrop-show > div"))
        .getText()
       assert.strictEqual(texto, "Gracias por registrarte"); 
      console.log(texto)
    });
  });
}

singInTest();
