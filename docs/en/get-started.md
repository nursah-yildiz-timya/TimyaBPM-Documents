
# SET UP 

## 1.Timya/BPM Installation
For Timya/BPM installation, you need to install Timya BPM Web application and Timya BPM Engine.

## 2. Timya/BPM Web Installation
On Windows Server 2019 and above operating systems, IIS should be installed with the following features.

### 2.1. IIS Installation

![alt text](/iss.png)

### 2.2. (.NET 7.0 Installations)
NET 7.0 Runtime (v7.0.10) - Windows x64" and "ASP.NET Core 7.0 Runtime (v7.0.10) - Windows Hosting Bundle" should be installed. (download address: [https://dotnet.microsoft.com/en-us/download/dotnet/7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0))

Where to download the installations:

![alt text](/NET7.png)

Installations are made by saying install.

## 3. Timya/BPM Web Configuration

The `TimyaBPMWeb.zip` file should be extracted to the IIS default root directory (by default `c:\inetpup\wwwroot`) or to another location to be installed. The `appsettings.json` file in the directory is opened with a text editor, configuration settings are made and saved.

![IIS Kurulumu](/web.png)

In the following link text, the database server access information must be written where ** appears (only works with SQL Server).

```json

"ConnectionStrings": {
    "DefaultConnection": "Data Source=**; User ID=**; Password=**; Initial Catalog=**; TrustServerCertificate=True"
}

```


### 3.1. IIS Settings

Windows authentication must be enabled. Right click on the website where the web application will be installed and click on "Add Application". In the "Alias" section, type the directory name (`base href` or `base path`) in the address where the application will run (`http://www.timyabilisim.com/BPM`). The directory where the application is installed is shown as a physical path. By default "BPM" is used. If BPM is not used, see 3.3. It is run with "Browse" from the IIS screen. Different types of installations require expertise in IIS.


![IIS Kurulumu](/ISSayarları.png)


### 3.2. New Database Installation

For a user who is granted full access to the database, the following settings must be made in the `appsettings.json` file:

For a user who has been granted full access to the database, the following settings must be made in the `appsettings.json` file:

```json

{
  "ConnectionStrings": {
    "DefaultConnection": "Server=<server_name>;Database=<database_name>;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}

```


## 4. Timya BPM Engine Setup

`TimyaBPM.setup.exe` or `TimyaBPM.setup.msi` is run with an authorized user on Windows. (It is recommended to install with Admin privilege.)

![Timya BPM Engine Installation](/enginekurulum.png)

After the installation is complete, Timya BPM Engine should be listed in Windows Services opened with `services.msc` command.

## 5. Timya BPM Engine Configuration	

The appsettings.json file in the directory where TimyaBPMEngine is installed is opened with a text editor and saved with configuration settings. Then the service is started and put into use.

### 5.1. Database Connection Text

Database server access information is written where ** is shown in the link text below. Enter the database name in ``Initial Catalog=`. (Only works with SQL Server.)


```json
{
"ConnectionStrings": {
"DefaultConnection": "Data Source=<data_source>; User ID=<user_name>; Password=<password>; Initial Catalog=<initial_catalog>; TrustServerCertificate=True"
}
}
```

### 5.2. E-Mail Server Information

The section shown in the figure below is where the email sending settings will be made. Descriptions of the fields are shown below.


```json
{
"Email": {
"Active": true,
"SmtpHostAddress": "mail.email.com",
"SmtpHostPort": 587,
"From": "sample@email.com",
"Username": "sample@email.com",
"Password": "***",
"EnableSsl": false,
"TestMailAddress": ""
}
}
```


| Email Field         | Description                                                                                   |
|---------------------|----------------------------------------------------------------------------------------------|
| Active              | Can take true or false. If true, email sending is enabled.                                     |
| SmtpHostAddress     | SMTP Server Address                                                                           |
| SmtpHostPort        | SMTP Server Port number. Should be specified as a numeric value.                               |
| From                | Email address from which emails will be sent                                                  |
| Username            | Username of the email account used for sending emails                                          |
| Password            | Password of the email account used for sending emails                                          |
| EnableSsl           | Can take true or false. Should be true if SSL is enabled on the server.                        |
| TestMailAddress     | If an email address is specified here, emails will be sent to this address for testing. Leave blank to send to intended recipients. |




### 5.3. Server ve WorkingModule Ayarları	


| Field Name             | Description                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------------|
| Server                 |                                                                                                   |
| BaseURL                | URL where the TimyaBPM application runs                                                          |
| ContentRootPath        | Directory where the TimyaBPM application runs                                                     |
| SendWatchList          | Determines whether emails are sent for Watch List items                                           |
| WorkingModule          | Enables/disables active modules                                                                   |
| RunServiceTasks        | If true, tasks executed by the engine in process workflows are run                                 |
| SendMails              | If true, email sending is enabled                                                                 |
| SetMailsForDueDates    | Emails are created for tasks with due dates                                                       |
| ADSync                 | Active Directory synchronization is enabled                                                      |
| SendMailForComments    | Emails are created for comments on processes                                                      |





 
