
using Microsoft.EntityFrameworkCore;
namespace ParcialSegundoCorteAnya.Models
{
public class PacienteContext : DbContext
{
public PacienteContext(DbContextOptions<PacienteContext> options) :
base(options)
{
}
public DbSet<PacienteItem> Pacientes { get; set; }
}
}