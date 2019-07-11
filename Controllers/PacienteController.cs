using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParcialSegundoCorteAnya.Models;
namespace ParcialSegundoCorteAnya.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class PacienteController : ControllerBase
{
private readonly PacienteContext _context;
public PacienteController(PacienteContext context)
{
_context = context;
if (_context.Pacientes.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.Pacientes.Add(new PacienteItem { cedula=123444, ValorServivcio = 20000, Salario = 30000000, Tarifa=2, ValorCopago = 4000});

_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<PacienteItem>>> GetPacienteItems()
{
return await _context.Pacientes.ToListAsync();
}


[HttpGet("{cedula}")]
public async Task<ActionResult<PacienteItem>> GetPacienteItem(int cedula)
{
var paciente = await _context.Pacientes.FindAsync(cedula);
if (paciente == null)
{
return NotFound();
}
return paciente;
}

public void calcularPaciente(PacienteItem item){
    if(item.Salario>2500000){
        item.Tarifa=0.2;
        item.ValorCopago=(item.Tarifa*item.ValorServivcio);
    }else{
        item.Tarifa=0.1;

         item.ValorCopago=(item.Tarifa*item.ValorServivcio);
    }
}
[HttpPost]
public async Task<ActionResult<PacienteItem>> PostPacienteItem(PacienteItem item)
{
   
        calcularPaciente(item);
_context.Pacientes.Add(item);
await _context.SaveChangesAsync();

  
    return CreatedAtAction(nameof(GetPacienteItem), new { cedula = item.cedula }, item);

}
// PUT: api/Task/5
/*[HttpPut("{id}")]
public async Task<IActionResult> PutTaskItem(int id, TaskItem
item)
{
if (id != item.Id)
{
return BadRequest();
}
_context.Entry(item).State = EntityState.Modified;
await _context.SaveChangesAsync();
return NoContent();
}
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteTaskItem(int id)
{
var TaskItem = await
_context.TaskItems.FindAsync(id);
if (TaskItem == null)
{
return NotFound();
}

_context.TaskItems.Remove(TaskItem);
await _context.SaveChangesAsync();
return NoContent();
}*/

}
}