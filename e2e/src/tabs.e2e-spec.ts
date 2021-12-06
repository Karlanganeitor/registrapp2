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
    //test2 
    //*t("El usuario puede navegar a la pagina de inicio",async()=>{
       // await  element(by.css("[login=pag-inicio]")).click();
        //browser.driver.sleep(500);
        //expect(element(by.buttonText("Iniciar Sesion")).getText()).toContain("Iniciar Sesion");
    //})

});