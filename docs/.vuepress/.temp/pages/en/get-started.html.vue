<template><div><h1 id="set-up" tabindex="-1"><a class="header-anchor" href="#set-up"><span>SET UP</span></a></h1>
<h2 id="_1-timya-bpm-installation" tabindex="-1"><a class="header-anchor" href="#_1-timya-bpm-installation"><span>1.Timya/BPM Installation</span></a></h2>
<p>For Timya/BPM installation, you need to install Timya BPM Web application and Timya BPM Engine.</p>
<h2 id="_2-timya-bpm-web-installation" tabindex="-1"><a class="header-anchor" href="#_2-timya-bpm-web-installation"><span>2. Timya/BPM Web Installation</span></a></h2>
<p>On Windows Server 2019 and above operating systems, IIS should be installed with the following features.</p>
<h3 id="_2-1-iis-installation" tabindex="-1"><a class="header-anchor" href="#_2-1-iis-installation"><span>2.1. IIS Installation</span></a></h3>
<p><img src="/iss.png" alt="alt text"></p>
<h3 id="_2-2-net-7-0-installations" tabindex="-1"><a class="header-anchor" href="#_2-2-net-7-0-installations"><span>2.2. (.NET 7.0 Installations)</span></a></h3>
<p>NET 7.0 Runtime (v7.0.10) - Windows x64&quot; and &quot;ASP.NET Core 7.0 Runtime (v7.0.10) - Windows Hosting Bundle&quot; should be installed. (download address: <a href="https://dotnet.microsoft.com/en-us/download/dotnet/7.0" target="_blank" rel="noopener noreferrer">https://dotnet.microsoft.com/en-us/download/dotnet/7.0</a>)</p>
<p>Where to download the installations:</p>
<p><img src="/NET7.png" alt="alt text"></p>
<p>Installations are made by saying install.</p>
<h2 id="_3-timya-bpm-web-configuration" tabindex="-1"><a class="header-anchor" href="#_3-timya-bpm-web-configuration"><span>3. Timya/BPM Web Configuration</span></a></h2>
<p>The <code v-pre>TimyaBPMWeb.zip</code> file should be extracted to the IIS default root directory (by default <code v-pre>c:\inetpup\wwwroot</code>) or to another location to be installed. The <code v-pre>appsettings.json</code> file in the directory is opened with a text editor, configuration settings are made and saved.</p>
<p><img src="/web.png" alt="IIS Kurulumu"></p>
<p>In the following link text, the database server access information must be written where ** appears (only works with SQL Server).</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"></span>
<span class="line"><span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Data Source=**; User ID=**; Password=**; Initial Catalog=**; TrustServerCertificate=True"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-iis-settings" tabindex="-1"><a class="header-anchor" href="#_3-1-iis-settings"><span>3.1. IIS Settings</span></a></h3>
<p>Windows authentication must be enabled. Right click on the website where the web application will be installed and click on &quot;Add Application&quot;. In the &quot;Alias&quot; section, type the directory name (<code v-pre>base href</code> or <code v-pre>base path</code>) in the address where the application will run (<code v-pre>http://www.timyabilisim.com/BPM</code>). The directory where the application is installed is shown as a physical path. By default &quot;BPM&quot; is used. If BPM is not used, see 3.3. It is run with &quot;Browse&quot; from the IIS screen. Different types of installations require expertise in IIS.</p>
<p><img src="/ISSayarları.png" alt="IIS Kurulumu"></p>
<h3 id="_3-2-new-database-installation" tabindex="-1"><a class="header-anchor" href="#_3-2-new-database-installation"><span>3.2. New Database Installation</span></a></h3>
<p>For a user who is granted full access to the database, the following settings must be made in the <code v-pre>appsettings.json</code> file:</p>
<p>For a user who has been granted full access to the database, the following settings must be made in the <code v-pre>appsettings.json</code> file:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Server=&lt;server_name>;Database=&lt;database_name>;Trusted_Connection=True;MultipleActiveResultSets=true"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-timya-bpm-engine-setup" tabindex="-1"><a class="header-anchor" href="#_4-timya-bpm-engine-setup"><span>4. Timya BPM Engine Setup</span></a></h2>
<p><code v-pre>TimyaBPM.setup.exe</code> or <code v-pre>TimyaBPM.setup.msi</code> is run with an authorized user on Windows. (It is recommended to install with Admin privilege.)</p>
<p><img src="/enginekurulum.png" alt="Timya BPM Engine Installation"></p>
<p>After the installation is complete, Timya BPM Engine should be listed in Windows Services opened with <code v-pre>services.msc</code> command.</p>
<h2 id="_5-timya-bpm-engine-configuration" tabindex="-1"><a class="header-anchor" href="#_5-timya-bpm-engine-configuration"><span>5. Timya BPM Engine Configuration</span></a></h2>
<p>The appsettings.json file in the directory where TimyaBPMEngine is installed is opened with a text editor and saved with configuration settings. Then the service is started and put into use.</p>
<h3 id="_5-1-database-connection-text" tabindex="-1"><a class="header-anchor" href="#_5-1-database-connection-text"><span>5.1. Database Connection Text</span></a></h3>
<p>Database server access information is written where ** is shown in the link text below. Enter the database name in ``Initial Catalog=`. (Only works with SQL Server.)</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Data Source=&lt;data_source>; User ID=&lt;user_name>; Password=&lt;password>; Initial Catalog=&lt;initial_catalog>; TrustServerCertificate=True"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-e-mail-server-information" tabindex="-1"><a class="header-anchor" href="#_5-2-e-mail-server-information"><span>5.2. E-Mail Server Information</span></a></h3>
<p>The section shown in the figure below is where the email sending settings will be made. Descriptions of the fields are shown below.</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"Email"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"Active"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"SmtpHostAddress"</span><span class="token operator">:</span> <span class="token string">"mail.email.com"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"SmtpHostPort"</span><span class="token operator">:</span> <span class="token number">587</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"From"</span><span class="token operator">:</span> <span class="token string">"sample@email.com"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"Username"</span><span class="token operator">:</span> <span class="token string">"sample@email.com"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"Password"</span><span class="token operator">:</span> <span class="token string">"***"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"EnableSsl"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">"TestMailAddress"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>Email Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Active</td>
<td>Can take true or false. If true, email sending is enabled.</td>
</tr>
<tr>
<td>SmtpHostAddress</td>
<td>SMTP Server Address</td>
</tr>
<tr>
<td>SmtpHostPort</td>
<td>SMTP Server Port number. Should be specified as a numeric value.</td>
</tr>
<tr>
<td>From</td>
<td>Email address from which emails will be sent</td>
</tr>
<tr>
<td>Username</td>
<td>Username of the email account used for sending emails</td>
</tr>
<tr>
<td>Password</td>
<td>Password of the email account used for sending emails</td>
</tr>
<tr>
<td>EnableSsl</td>
<td>Can take true or false. Should be true if SSL is enabled on the server.</td>
</tr>
<tr>
<td>TestMailAddress</td>
<td>If an email address is specified here, emails will be sent to this address for testing. Leave blank to send to intended recipients.</td>
</tr>
</tbody>
</table>
<h3 id="_5-3-server-ve-workingmodule-ayarları" tabindex="-1"><a class="header-anchor" href="#_5-3-server-ve-workingmodule-ayarları"><span>5.3. Server ve WorkingModule Ayarları</span></a></h3>
<table>
<thead>
<tr>
<th>Field Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Server</td>
<td></td>
</tr>
<tr>
<td>BaseURL</td>
<td>URL where the TimyaBPM application runs</td>
</tr>
<tr>
<td>ContentRootPath</td>
<td>Directory where the TimyaBPM application runs</td>
</tr>
<tr>
<td>SendWatchList</td>
<td>Determines whether emails are sent for Watch List items</td>
</tr>
<tr>
<td>WorkingModule</td>
<td>Enables/disables active modules</td>
</tr>
<tr>
<td>RunServiceTasks</td>
<td>If true, tasks executed by the engine in process workflows are run</td>
</tr>
<tr>
<td>SendMails</td>
<td>If true, email sending is enabled</td>
</tr>
<tr>
<td>SetMailsForDueDates</td>
<td>Emails are created for tasks with due dates</td>
</tr>
<tr>
<td>ADSync</td>
<td>Active Directory synchronization is enabled</td>
</tr>
<tr>
<td>SendMailForComments</td>
<td>Emails are created for comments on processes</td>
</tr>
</tbody>
</table>
</div></template>


