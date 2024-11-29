using Microsoft.EntityFrameworkCore;
using WAD.BACKEND._00016180.Data;
using WAD.BACKEND._00016180.Controllers;
using WAD.BACKEND._00016180.Models;
using WAD.BACKEND._00016180.Repositories;
using Task = WAD.BACKEND._00016180.Models.Task;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins,
               policy =>
               {
                   policy.WithOrigins("http://localhost:4200")
                           .AllowAnyHeader()
                           .AllowAnyMethod()
                           .AllowAnyOrigin();
               });
});

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<TaskTrackerDbContext>(
  o => o.UseSqlServer(
    builder.Configuration.GetConnectionString("SqlServerConnection")));

builder.Services.AddScoped<IRepository<Task>, TaskRepository>();
builder.Services.AddScoped<IRepository<Category>, CategoryRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();