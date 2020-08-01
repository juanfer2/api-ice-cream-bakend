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
    expect(iceCreams.status).toEqual(500);
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

  it("Debe de actualizar un helado", async () => {
    const data = {
      name: "Negro",
      image_url:
        "https://i.pinimg.com/564x/a5/70/61/a57061bdb12a50e04fdb7da634787ea5.jpg",
    };

    await request(app)
      .put("/v1/ice_creams/5ef29d59b6dcd524c6102367")
      .send(data)
      .expect(200)
      .set("Accept", "aplication/json");
  });

  it("Debe eliminar un helado", async () => {
    await request(app)
      .delete("/v1/ice_creams/5ef29d59b6dcd524c6102367")
      .expect(200)
      .set("Accept", "aplication/json");
  });
});
