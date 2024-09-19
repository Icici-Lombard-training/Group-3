using Backend.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly BackendDbContext _EmpDbContext;

        public EmployeesController(BackendDbContext empDbContext)
        {
            _EmpDbContext = empDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _EmpDbContext.Employees.ToListAsync();
            return Ok(employees);
        }
    }
}
