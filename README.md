# Task Tracker project

This application was developed for Web Application module, as coursework portfolio project @ WIUT by student ID: 00016180.
StudentId:
```bash
00016180
```

## How to run project

### Clone repository

1. Open your terminal.
2. Enter below codes in order:

Go C disk from terminal
``` bash 
cd C:/
```

Clone public repository
```bash
git clone https://github.com/00016180/WAD.CODEBASE.00016180.git
```

### Start ASP.NET backend
1. Open cloned project from file explorer
2. Go to WAD.BACKEND.00016180 folder
3. Open WAD.BACKEND.00016180.sln file in Visual Studio
4. Update Connection String: open appsetting.jon file and put you sql server name instead of "YOUR_SERVER_NAME":
```bash
"ConnectionStrings": {
  "SqlServerConnection": "Data Source=YOUR_SERVER_NAME; Initial Catalog=TaskTrackerDb00016180;Integrated Security=True;"
}
```
5. Open Package Manager Console from Visual Studio and enter below codes in order:
```bash
dotnet restore
```

Add migration
```bash
add-migration
```
then terminal requires you to enter migration name, so enter:
```bash
TaskTrackerDb00016180
```

Update database:
```bash
update-database
```

6. Click green run button

### Start Angular Frontend

1. Open your terminal and enter below code:
```bash
cd C:/WAD.CODEBASE.00016180/WAD.FRONTEND.00016180
```

2. Install packages
```bash
npm i
```

3. Run project
```bash
ng serve -o
```
