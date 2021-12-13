import { browser, element, by } from "protractor";

describe('Mi Prueba', ()=>{
    //cod de config
    beforeEach(()=>{
        browser.get("/");
    });

    //test
    it("La Login se muestra por defecto",()=>{
        expect(element(by.buttonText("Iniciar Sesion")).getText()).toContain("Iniciar Sesion");
    });
   

});