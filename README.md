# iefesel.github.io

İbrahim Efe Sel'in kişisel sitesi. Site, GitHub'ın kendi sistemiyle (Jekyll) otomatik oluşturulur. Bir dosyayı değiştirip **Commit changes** dediğinde site 1–2 dakika içinde güncellenir.

## Neyi nereden değiştiririm?

| Ne değiştirmek istiyorsun? | Hangi dosya? |
|---|---|
| İsim, fotoğraf, tanıtım cümlesi, şehir, sosyal medya linkleri | `_data/profil.yml` |
| "Hakkımda" metni | `_data/profil.yml` → `hakkimda:` kısmı |
| İletişim bilgileri | `_data/profil.yml` → `iletisim:` kısmı |
| Eğitim, ilgi alanları, dersler, beceriler, deneyim | `_data/ozgecmis.yml` |
| Projeler | `_data/projeler.yml` |
| Linkler sayfası | `_data/linkler.yml` |
| PDF başlıkları ve kategorileri (isteğe bağlı) | `_data/belgeler.yml` |
| Blog yazıları | `_posts/` klasörü, her yazı ayrı bir dosya |
| PDF'ler | `belgeler/` klasörü |
| Fotoğraf | `assets/foto.jpg` (aynı adla yeni fotoğraf yükle) |
| Renkler ve görünüm | `assets/style.css` |

## Yeni blog yazısı eklemek

1. `_posts` klasörüne gir, `2026-10-09-ornek-yazi-sablonu.md` dosyasını aç ve içeriğini kopyala.
2. `_posts` klasöründe **Add file → Create new file** de.
3. Dosya adını şöyle ver: `YIL-AY-GÜN-yazi-adi.md` (örnek: `2026-11-02-standart-model.md`).
   - Sadece küçük harf, rakam ve tire kullan. Türkçe karakter kullanma.
4. Kopyaladığın şablonu yapıştır, `published: false` satırını sil, başlığı ve metni yaz.
5. **Commit changes** de.

Yazının adresi `iefesel.github.io/blog/yazi-adi/` olur. Tarihi bugünden ileri bir gün olan yazılar o gün gelene kadar görünmez.

### Yazıda biçimlendirme (Markdown)

```
### Ara başlık
**kalın**  *italik*
[link metni](https://adres.com)
- madde
> alıntı
![resim açıklaması](/assets/resim.jpg)
[PDF'i aç](/belgeler/dosya-adi.pdf)
```

## PDF eklemek

1. `belgeler` klasörüne gir, **Add file → Upload files** de.
2. PDF'i sürükle bırak, **Commit changes** de.

PDF, **Belgeler** sayfasında otomatik görünür. Başka bir şeyi düzenlemene gerek yok.

- Dosya adında Türkçe karakter ve boşluk kullanma: `kuantum-mekanigi-notlar.pdf` gibi.
- Sayfada görünen adı, açıklamayı ya da kategoriyi değiştirmek istersen `_data/belgeler.yml` dosyasına ekle.
- Bir PDF'e blog yazısından ya da projeden link vermek için adresi: `/belgeler/dosya-adi.pdf`

## Bir şeyi gizlemek

- Yazı: başına `published: false` ekle.
- Proje: altına `taslak: true` ekle.

## Dikkat edilecekler

- `.yml` dosyalarında satır başındaki **boşluklar önemli**. Bir satırı kopyalarken girintisini aynı tut. Tab tuşu kullanma, boşluk kullan.
- Metinleri tırnak `" "` içinde bırak. Metnin içinde tırnak kullanman gerekirse `'` kullan.
- `_layouts`, `_includes` klasörlerine ve `_config.yml` dosyasına genelde dokunman gerekmez.
- Bir şey bozulursa: repo sayfasında **Actions** sekmesine bak. Kırmızı çarpı varsa son değişikliğe tıklayıp hatayı görebilirsin. Dosyanın **History** kısmından eski haline dönebilirsin.
