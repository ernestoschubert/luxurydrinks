const { Builder, By } = require("selenium-webdriver");
const assert = require('assert')

const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const credentials = [
    {id:1,username:'test@test.com.ar',password:'1234test'},
    {id:1,username:'test@test.com.ar',password:'1234tes'}
]

function singInTest(){
    describe('testeo de singin', function(){
        this.timeout(20000)
        let webDriver = new Builder().forBrowser('chrome').build()
        webDriver.manage().window().maximize()

        it('Ingreso credenciales incorrectas/correctas',async () => {
            await webDriver.get('http://localhost:3000/')
           
        })
    })
}