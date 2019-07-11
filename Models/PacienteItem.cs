
using Newtonsoft.Json;

namespace ParcialSegundoCorteAnya.Models
{
public class PacienteItem
{
 [JsonProperty("id")]
public int id { get; set; }
[JsonProperty("cedula")]
public double cedula { get; set; }

[JsonProperty("valorServivcio")]
public double ValorServivcio { get; set; }

[JsonProperty("salario")]
public double Salario { get; set; }

[JsonProperty("tarifa")]
public double Tarifa { get; set; }

[JsonProperty("valorCopago")]
public double ValorCopago { get; set; }


}
}