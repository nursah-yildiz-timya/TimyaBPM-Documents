
# Kurulum 



## 1. Timya/BPM Kurulumu
Timya/BPM kurulumu için Timya BPM Web uygulaması ve Timya BPM Engine kurulumu yapılmalıdır.

## 2. Timya/BPM Web Kurulumu
Windows Server 2019 ve yukarısı işletim sistemlerinde IIS aşağıdaki özelliklere sahip olarak kurulu olmalıdır.

### 2.1. IIS Kurulumu

![alt text](/iss.png)



### 2.2. (.NET 7.0 Kurulumları)
“NET 7.0 Runtime (v7.0.10) - Windows x64” ve “ASP.NET Core 7.0 Runtime (v7.0.10) - Windows Hosting Bundle” kurulumları yapılmalıdır. (indirme adresi: [https://dotnet.microsoft.com/en-us/download/dotnet/7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0))

 Kurulumların indirileceği yerler:

![alt text](/NET7.png)

Yükle diyerek kurulumlar yapılır.

## 3. Timya/BPM Web Konfigurasyon



`TimyaBPMWeb.zip` dosyası, IIS varsayılan kök dizinine (varsayılan olarak `c:\inetpup\wwwroot`) ya da kurulumu yapılacak başka bir yere çıkarılmalıdır. Dizinde bulunan `appsettings.json` dosyası bir metin editörü ile açılarak konfigurasyon ayarları yapılır ve kaydedilir.

![IIS Kurulumu](/web.png)

Aşağıdaki bağlantı metnindeki ** görülen yerlere veritabanı sunucusu erişim bilgileri yazılmalıdır (yalnızca SQL Server ile çalışır).

```json

"ConnectionStrings": {
    "DefaultConnection": "Data Source=**; User ID=**; Password=**; Initial Catalog=**; TrustServerCertificate=True"
}

```


### 3.1. IIS Ayarları

Windows kimlik doğrulaması etkin olmalıdır. Web uygulamasının kurulacağı web site sağ tıklanır ve "Uygulama Ekle"ye tıklanır. Açılan ekranda "Diğer ad" kısmına uygulamanın çalışacağı adresdeki dizin adı (`base href` veya `base path`) yazılır (`http://www.timyabilisim.com/BPM`). Uygulamanın kurulduğu dizin fiziksel yol olarak gösterilir. Varsayılan olarak "BPM" kullanılır. BPM kullanılmayacaksa 3.3. e bakınız. IIS ekranından "Gözat" ile çalıştırılır. Farklı türde kurulumlar IIS'de uzmanlık gerektirir.


![IIS Kurulumu](/ISSayarları.png)

### 3.2. Yeni Database Kurulumu

Veritabanına tam erişim izni verilmiş bir kullanıcı için `appsettings.json` dosyasında aşağıdaki ayarlar yapılmalıdır:

Veritabanına tam erişim izni verilmiş bir kullanıcı için `appsettings.json` dosyasında aşağıdaki ayarlar yapılmalıdır:

```json

{
  "ConnectionStrings": {
    "DefaultConnection": "Server=<server_adı>;Database=<yok_olan_veritabanı_adı>;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}

```


## 4. Timya BPM Engine Kurulumu

`TimyaBPM.setup.exe` veya `TimyaBPM.Setup.msi`, Windows üzerinde yetkili olan bir kullanıcı ile çalıştırılır. (Admin yetkisi ile kurulması tavsiye edilir.)

![Timya BPM Engine Kurulumu](/enginekurulum.png)

Kurulum tamamlandıktan sonra `services.msc` komutu ile açılan Windows Services'de Timya BPM Engine listelenmiş olmalıdır.



## 5. Timya BPM Engine Konfigurasyon	

TimyaBPMEngine in Kurulu olduğu dizinde bulunan appsettings.json dosyası bir metin editörü ile açılır ve konfigurasyon ayarları yapılarak kaydedilir. Sonrasında servis start edilerek kullanıma alınır.

### 5.1. Database Bağlantı Metni

Aşağıda görülen bağlantı metnindeki ** görülen yerlere veritabanı sunucusu erişim bilgileri yazılır. `Initial Catalog=` kısmına veritabanı adı yazılır. (Yalnızca SQL Server ile çalışır.)


```json
{
"ConnectionStrings": {
"DefaultConnection": "Data Source=<veri_kaynağı>; User ID=<kullanıcı_adı>; Password=<şifre>; Initial Catalog=<başlangıç_kataloğu>; TrustServerCertificate=True"
}
}
```

### 5.2. E-Posta Sunucusu Bilgileri

Aşağıdaki şekilde görünen kısım email gönderim ayarlarının yapılacağı yerdir. Alanların açıklamaları aşağıda gösterilmiştir.


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

| Email -> Alan Adı   | Açıklama                                                                                     |
|---------------------|----------------------------------------------------------------------------------------------|
| Active              | true veya false değer alabilir. true ise email gönderimleri yapılır.                         |
| SmtpHostAddress     | Smtp Sunucusu Adresi                                                                         |
| SmtpHostPort        | Smtp Sunucusu Port adresi. Sayısal değer olarak belirtilir.                                  |
| From                | Mail gönderimlerinin yapılacağı mail adresi                                                  |
| Username            | Mail gönderimlerinin yapılacağı mail adresinin kullanıcı adı                                 |
| Password            | Mail gönderimlerinin yapılacağı mail adresinin şifresi                                       |
| EnableSsl           | true veya false değer alabilir. SSL var ise true olmalıdır.                                  |
| TestMailAddress     | Buraya bir mail adresi yazılırsa mailler bu adrese gönderilir. Boş bırakılırsa gitmesi gereken kullanıcılara gider. |



### 5.3. Server ve WorkingModule Ayarları	


| Alan Adı               | Açıklama                                                                                       |
|------------------------|------------------------------------------------------------------------------------------------|
| Server                 |                                                                                                |
| BaseURL                | TimyaBPM uygulamasının çalıştığı URL                                                           |
| ContentRootPath        | TimyaBPM uygulamasının çalıştığı dizin                                                         |
| SendWatchList          | Watch Liste mail atılıp atılmayacağını belirler                                                |
| WorkingModule          | Çalışan modullerin aktif edilmesi                                                              |
| RunServiceTasks        | true ise iş süreçlerinde engine tarafından yürütülen kısımlar çalıştırılır.                    |
| SendMails              | True ise mail gönderimleri yapılır.                                                            |
| SetMailsForDueDates    | Termin tarihi gelen işler için mailler oluşturulur.                                            |
| ADSync                 | Active Directory senkronizasyon çalışır.                                                       |
| SendMailForComments    | Süreçlere yazılan yorumlar için mailler oluşturulur.                                            |




 
