let form = {
  merchantId: 918167,
  accountId: 925331,
  description: "",
  referenceCode: "",
  amount: "",
  tax: "",
  taxReturnBase: "",
  currency: "",
  signature: "",
  test: "",
  buyerEmail: "",
  responseUrl: "",
};

let data = {
  merchantId: 508029,
  ApiKey: "4Vj8eK4rloUd272L48hsrarnUA",
  referenceCode: "TestPayU",
  accountId: "512326",
  description: "Test PAYU",
  amount: 3,
  tax: 0,
  taxReturnBase: 0,
  currency: "USD",
  signature: "ba9ffa71559580175585e45ce70b6c37",
  test: 1,
  buyerEmail: "test@test.com",
};

(<form
  method="post"
  action="https://checkout.payulatam.com/ppp-web-gateway-payu/"
>
  <input name="merchantId" type="hidden" value="918167" />
  <input name="accountId" type="hidden" value="925331" />
  <input name="description" type="hidden" value="Test PAYU" />
  <input name="referenceCode" type="hidden" value="Test1" />
  <input name="amount" type="hidden" value="20000" />
  <input name="tax" type="hidden" value="3193" />
  <input name="taxReturnBase" type="hidden" value="16806" />
  <input name="currency" type="hidden" value="COP" />
  <input
    name="signature"
    type="hidden"
    value="af7beb18dfcd82f080c52ddc295d8e59"
  />
  <input name="test" type="hidden" value="0" />
  <input name="buyerEmail" type="hidden" value="test@test.com" />
  <input
    name="responseUrl"
    type="hidden"
    value="http://www.test.com/response"
  />
  <input
    name="confirmationUrl"
    type="hidden"
    value="http://www.test.com/confirmation"
  />
  <input name="Submit" type="submit" value="Enviar" />
</form>)("Test: https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/");

("Live: https://checkout.payulatam.com/ppp-web-gateway-payu/");
