const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);

describe("Server Root", () => {
    it("should return a success message", async() => {
        expect(true).to.be.equal(true)
        const res = await chai.request(app).get("")
        expect(res.text).to.equal("API is working")
    })
})