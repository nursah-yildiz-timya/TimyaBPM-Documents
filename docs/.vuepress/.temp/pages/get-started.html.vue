<template><div><h1 id="kurulum" tabindex="-1"><a class="header-anchor" href="#kurulum"><span>Kurulum</span></a></h1>
<h2 id="_1-timya-bpm-kurulumu" tabindex="-1"><a class="header-anchor" href="#_1-timya-bpm-kurulumu"><span>1. Timya/BPM Kurulumu</span></a></h2>
<p>Timya/BPM kurulumu için Timya BPM Web uygulaması ve Timya BPM Engine kurulumu yapılmalıdır.</p>
<h2 id="_2-timya-bpm-web-kurulumu" tabindex="-1"><a class="header-anchor" href="#_2-timya-bpm-web-kurulumu"><span>2. Timya/BPM Web Kurulumu</span></a></h2>
<p>Windows Server 2019 ve yukarısı işletim sistemlerinde IIS aşağıdaki özelliklere sahip olarak kurulu olmalıdır.</p>
<h3 id="_2-1-iis-kurulumu" tabindex="-1"><a class="header-anchor" href="#_2-1-iis-kurulumu"><span>2.1. IIS Kurulumu</span></a></h3>
<p><img src="/iss.png" alt="alt text"></p>
<h3 id="_2-2-net-7-0-kurulumları" tabindex="-1"><a class="header-anchor" href="#_2-2-net-7-0-kurulumları"><span>2.2. (.NET 7.0 Kurulumları)</span></a></h3>
<p>“NET 7.0 Runtime (v7.0.10) - Windows x64” ve “ASP.NET Core 7.0 Runtime (v7.0.10) - Windows Hosting Bundle” kurulumları yapılmalıdır. (indirme adresi: <a href="https://dotnet.microsoft.com/en-us/download/dotnet/7.0" target="_blank" rel="noopener noreferrer">https://dotnet.microsoft.com/en-us/download/dotnet/7.0</a>)</p>
<p>Kurulumların indirileceği yerler:</p>
<p><img src="/NET7.png" alt="alt text"></p>
<p>Yükle diyerek kurulumlar yapılır.</p>
<h2 id="_3-timya-bpm-web-konfigurasyon" tabindex="-1"><a class="header-anchor" href="#_3-timya-bpm-web-konfigurasyon"><span>3. Timya/BPM Web Konfigurasyon</span></a></h2>
<p><code v-pre>TimyaBPMWeb.zip</code> dosyası, IIS varsayılan kök dizinine (varsayılan olarak <code v-pre>c:\inetpup\wwwroot</code>) ya da kurulumu yapılacak başka bir yere çıkarılmalıdır. Dizinde bulunan <code v-pre>appsettings.json</code> dosyası bir metin editörü ile açılarak konfigurasyon ayarları yapılır ve kaydedilir.</p>
<p><img src="/web.png" alt="IIS Kurulumu"></p>
<p>Aşağıdaki bağlantı metnindeki ** görülen yerlere veritabanı sunucusu erişim bilgileri yazılmalıdır (yalnızca SQL Server ile çalışır).</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"></span>
<span class="line"><span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Data Source=**; User ID=**; Password=**; Initial Catalog=**; TrustServerCertificate=True"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-iis-ayarları" tabindex="-1"><a class="header-anchor" href="#_3-1-iis-ayarları"><span>3.1. IIS Ayarları</span></a></h3>
<p>Windows kimlik doğrulaması etkin olmalıdır. Web uygulamasının kurulacağı web site sağ tıklanır ve &quot;Uygulama Ekle&quot;ye tıklanır. Açılan ekranda &quot;Diğer ad&quot; kısmına uygulamanın çalışacağı adresdeki dizin adı (<code v-pre>base href</code> veya <code v-pre>base path</code>) yazılır (<code v-pre>http://www.timyabilisim.com/BPM</code>). Uygulamanın kurulduğu dizin fiziksel yol olarak gösterilir. Varsayılan olarak &quot;BPM&quot; kullanılır. BPM kullanılmayacaksa 3.3. e bakınız. IIS ekranından &quot;Gözat&quot; ile çalıştırılır. Farklı türde kurulumlar IIS'de uzmanlık gerektirir.</p>
<p><img src="/ISSayarları.png" alt="IIS Kurulumu"></p>
<h3 id="_3-2-yeni-database-kurulumu" tabindex="-1"><a class="header-anchor" href="#_3-2-yeni-database-kurulumu"><span>3.2. Yeni Database Kurulumu</span></a></h3>
<p>Veritabanına tam erişim izni verilmiş bir kullanıcı için <code v-pre>appsettings.json</code> dosyasında aşağıdaki ayarlar yapılmalıdır:</p>
<p>Veritabanına tam erişim izni verilmiş bir kullanıcı için <code v-pre>appsettings.json</code> dosyasında aşağıdaki ayarlar yapılmalıdır:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Server=&lt;server_adı>;Database=&lt;yok_olan_veritabanı_adı>;Trusted_Connection=True;MultipleActiveResultSets=true"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-timya-bpm-engine-kurulumu" tabindex="-1"><a class="header-anchor" href="#_4-timya-bpm-engine-kurulumu"><span>4. Timya BPM Engine Kurulumu</span></a></h2>
<p><code v-pre>TimyaBPM.setup.exe</code> veya <code v-pre>TimyaBPM.Setup.msi</code>, Windows üzerinde yetkili olan bir kullanıcı ile çalıştırılır. (Admin yetkisi ile kurulması tavsiye edilir.)</p>
<p><img src="/enginekurulum.png" alt="Timya BPM Engine Kurulumu"></p>
<p>Kurulum tamamlandıktan sonra <code v-pre>services.msc</code> komutu ile açılan Windows Services'de Timya BPM Engine listelenmiş olmalıdır.</p>
<h2 id="_5-timya-bpm-engine-konfigurasyon" tabindex="-1"><a class="header-anchor" href="#_5-timya-bpm-engine-konfigurasyon"><span>5. Timya BPM Engine Konfigurasyon</span></a></h2>
<p>TimyaBPMEngine in Kurulu olduğu dizinde bulunan appsettings.json dosyası bir metin editörü ile açılır ve konfigurasyon ayarları yapılarak kaydedilir. Sonrasında servis start edilerek kullanıma alınır.</p>
<h3 id="_5-1-database-baglantı-metni" tabindex="-1"><a class="header-anchor" href="#_5-1-database-baglantı-metni"><span>5.1. Database Bağlantı Metni</span></a></h3>
<p>Aşağıda görülen bağlantı metnindeki ** görülen yerlere veritabanı sunucusu erişim bilgileri yazılır. <code v-pre>Initial Catalog=</code> kısmına veritabanı adı yazılır. (Yalnızca SQL Server ile çalışır.)</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"ConnectionStrings"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"DefaultConnection"</span><span class="token operator">:</span> <span class="token string">"Data Source=&lt;veri_kaynağı>; User ID=&lt;kullanıcı_adı>; Password=&lt;şifre>; Initial Catalog=&lt;başlangıç_kataloğu>; TrustServerCertificate=True"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-e-posta-sunucusu-bilgileri" tabindex="-1"><a class="header-anchor" href="#_5-2-e-posta-sunucusu-bilgileri"><span>5.2. E-Posta Sunucusu Bilgileri</span></a></h3>
<p>Aşağıdaki şekilde görünen kısım email gönderim ayarlarının yapılacağı yerdir. Alanların açıklamaları aşağıda gösterilmiştir.</p>
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
<th>Email -&gt; Alan Adı</th>
<th>Açıklama</th>
</tr>
</thead>
<tbody>
<tr>
<td>Active</td>
<td>true veya false değer alabilir. true ise email gönderimleri yapılır.</td>
</tr>
<tr>
<td>SmtpHostAddress</td>
<td>Smtp Sunucusu Adresi</td>
</tr>
<tr>
<td>SmtpHostPort</td>
<td>Smtp Sunucusu Port adresi. Sayısal değer olarak belirtilir.</td>
</tr>
<tr>
<td>From</td>
<td>Mail gönderimlerinin yapılacağı mail adresi</td>
</tr>
<tr>
<td>Username</td>
<td>Mail gönderimlerinin yapılacağı mail adresinin kullanıcı adı</td>
</tr>
<tr>
<td>Password</td>
<td>Mail gönderimlerinin yapılacağı mail adresinin şifresi</td>
</tr>
<tr>
<td>EnableSsl</td>
<td>true veya false değer alabilir. SSL var ise true olmalıdır.</td>
</tr>
<tr>
<td>TestMailAddress</td>
<td>Buraya bir mail adresi yazılırsa mailler bu adrese gönderilir. Boş bırakılırsa gitmesi gereken kullanıcılara gider.</td>
</tr>
</tbody>
</table>
<h3 id="_5-3-server-ve-workingmodule-ayarları" tabindex="-1"><a class="header-anchor" href="#_5-3-server-ve-workingmodule-ayarları"><span>5.3. Server ve WorkingModule Ayarları</span></a></h3>
<table>
<thead>
<tr>
<th>Alan Adı</th>
<th>Açıklama</th>
</tr>
</thead>
<tbody>
<tr>
<td>Server</td>
<td></td>
</tr>
<tr>
<td>BaseURL</td>
<td>TimyaBPM uygulamasının çalıştığı URL</td>
</tr>
<tr>
<td>ContentRootPath</td>
<td>TimyaBPM uygulamasının çalıştığı dizin</td>
</tr>
<tr>
<td>SendWatchList</td>
<td>Watch Liste mail atılıp atılmayacağını belirler</td>
</tr>
<tr>
<td>WorkingModule</td>
<td>Çalışan modullerin aktif edilmesi</td>
</tr>
<tr>
<td>RunServiceTasks</td>
<td>true ise iş süreçlerinde engine tarafından yürütülen kısımlar çalıştırılır.</td>
</tr>
<tr>
<td>SendMails</td>
<td>True ise mail gönderimleri yapılır.</td>
</tr>
<tr>
<td>SetMailsForDueDates</td>
<td>Termin tarihi gelen işler için mailler oluşturulur.</td>
</tr>
<tr>
<td>ADSync</td>
<td>Active Directory senkronizasyon çalışır.</td>
</tr>
<tr>
<td>SendMailForComments</td>
<td>Süreçlere yazılan yorumlar için mailler oluşturulur.</td>
</tr>
</tbody>
</table>
</div></template>


