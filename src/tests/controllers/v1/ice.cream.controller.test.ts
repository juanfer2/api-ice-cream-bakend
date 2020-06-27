import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { app } from "../../test.config";

describe("Prueba de listar helados", () => {
  beforeAll(async () => {
    await createConnection();
  });
  afterAll(() => {
    getConnection().close();
    app.close();
  });

  it("Debe retornar la lista de helados", async () => {
    const iceCreams = await request(app).get("/v1/ice_creams");
    expect(iceCreams.status).toEqual(200);
  });

  it("Debe crear un helado", async () => {
    const data = {
      name: "Chicle",
      imageUrl:
        "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/03/CONO-DE-HELADO-SABOR-CHICLE.jpg",
    };
    await request(app)
      .post("/v1/ice_creams")
      .send(data)
      .expect(200)
      .set("Accept", "application/json");
  });
});
