export class Endpoint {
  public static readonly BASE_URL = "http://localhost:8080";
  public static readonly VERSION_1 = "/api/v1";
  public static readonly VERSION_2 = "/api/v2";
  public static readonly VERSION_3 = "/api/v3";
  public static readonly VERSION = Endpoint.BASE_URL + Endpoint.VERSION_1;
  public static readonly COMPETITION = Endpoint.VERSION + "/competitions";
}
