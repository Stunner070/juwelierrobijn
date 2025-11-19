# GitHub Pages Setup met Custom Domain

Deze handleiding helpt u om de Juwelier Robijn website te hosten op GitHub Pages met uw eigen custom domain.

## Stap 1: GitHub Pages Activeren

1. Ga naar uw GitHub repository: `https://github.com/Stunner070/juwelierrobijn`
2. Klik op **Settings** (Instellingen)
3. Scroll naar beneden naar de **Pages** sectie in het linkermenu
4. Onder **Source**, selecteer de branch `main` (of `master`)
5. Laat de folder op **/ (root)** staan
6. Klik op **Save**

GitHub Pages zal nu uw website bouwen en beschikbaar maken op:
`https://stunner070.github.io/juwelierrobijn/`

## Stap 2: Custom Domain Configureren

### In GitHub:

1. Blijf in de **Settings > Pages** sectie
2. Onder **Custom domain**, voer uw domeinnaam in (bijvoorbeeld: `www.juwelierrobijn.nl`)
3. Klik op **Save**
4. Wacht tot de DNS check compleet is (dit kan een paar minuten duren)
5. ✅ Vink **Enforce HTTPS** aan voor een beveiligde verbinding (sterk aanbevolen!)

### CNAME File:

De `CNAME` file in de root van de repository moet uw domeinnaam bevatten. Update het bestand `/CNAME` met uw daadwerkelijke domeinnaam:

```
www.juwelierrobijn.nl
```

of

```
juwelierrobijn.nl
```

**Let op:** Gebruik ALLEEN één domeinnaam in dit bestand (zonder `http://` of `https://`).

## Stap 3: DNS Configuratie bij Uw Domain Provider

U moet DNS records toevoegen bij uw domain provider (bijvoorbeeld TransIP, Mijndomein.nl, GoDaddy, etc.).

### Optie A: Apex Domain (bijvoorbeeld: juwelierrobijn.nl)

Als u uw website op het hoofddomein wilt hosten:

Voeg de volgende **A records** toe:

```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

En een **AAAA record** voor IPv6 (optioneel maar aanbevolen):

```
Type: AAAA
Name: @
Value: 2606:50c0:8000::153
TTL: 3600

Type: AAAA
Name: @
Value: 2606:50c0:8001::153
TTL: 3600

Type: AAAA
Name: @
Value: 2606:50c0:8002::153
TTL: 3600

Type: AAAA
Name: @
Value: 2606:50c0:8003::153
TTL: 3600
```

### Optie B: Subdomain (bijvoorbeeld: www.juwelierrobijn.nl)

Als u uw website op www wilt hosten:

Voeg een **CNAME record** toe:

```
Type: CNAME
Name: www
Value: stunner070.github.io
TTL: 3600
```

### Beste Praktijk: Beide Configureren

Voor de beste gebruikerservaring, configureer zowel apex domain als www subdomain:

1. Volg **Optie A** voor het hoofddomein
2. Voeg ook de CNAME record toe uit **Optie B**

Dit zorgt ervoor dat bezoekers op beide `juwelierrobijn.nl` EN `www.juwelierrobijn.nl` uw website kunnen bereiken.

## Stap 4: Wachten op DNS Propagatie

- DNS wijzigingen kunnen **tot 48 uur** duren om volledig door te voeren (meestal binnen 1-4 uur)
- U kunt de status checken met tools zoals:
  - https://dnschecker.org/
  - https://www.whatsmydns.net/

## Stap 5: HTTPS Certificaat

Zodra de DNS correct is geconfigureerd:

1. Ga terug naar GitHub **Settings > Pages**
2. Vink **Enforce HTTPS** aan
3. GitHub genereert automatisch een gratis SSL certificaat via Let's Encrypt

Dit kan enkele minuten tot een uur duren na het opslaan van uw custom domain.

## Veelvoorkomende Problemen

### "Domain is not properly configured"
- ✅ Controleer of uw DNS records correct zijn ingesteld
- ✅ Wacht tot DNS propagatie compleet is
- ✅ Zorg dat de CNAME file de juiste domeinnaam bevat

### "HTTPS niet beschikbaar"
- ✅ Wacht 24 uur na het configureren van uw custom domain
- ✅ Probeer "Enforce HTTPS" uit te vinken, opslaan, en dan weer aan te vinken

### Website laadt niet
- ✅ Controleer of GitHub Pages is geactiveerd in Settings
- ✅ Controleer of de branch correct is geselecteerd
- ✅ Kijk in de Actions tab of er build errors zijn

## Testen

Test uw website op:
- `http://yourdomain.com`
- `https://yourdomain.com`
- `http://www.yourdomain.com`
- `https://www.yourdomain.com`

Alle varianten zouden moeten werken en automatisch redirecten naar HTTPS.

## Extra: GitHub Actions Workflow (Optioneel)

GitHub Pages bouwt automatisch uw website bij elke push naar de main branch. U hoeft geen extra configuratie te doen!

## Support

Voor meer informatie over GitHub Pages en custom domains:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Laatste update:** November 2025
**Website:** Juwelier Robijn
**Developer:** Stunner070
