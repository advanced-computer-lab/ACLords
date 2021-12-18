const app = require("./app");
const request= require("supertest");

describe("get user", () => {
test("get user", (done) => {
    request(app).
    get('/ViewUsers').
    expect("Content-Type", /json/).
    expect(200).
    expect((res)=>{
      res.body[0].LastName ="Admin"
    }).
    end((err,end)=>{
        if(err) return done(err);
        return done();
        
    })
})
})