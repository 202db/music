
202.sql est un robot musical Discord élégant et puissant conçu pour apporter facilement de la musique sur votre serveur. Avec une gamme de fonctionnalités et une interface conviviale, Muzio est votre robot incontournable pour tous vos besoins musicaux sur Discord.

## Caractéristiques

- **Lecture de musique** : écoutez vos morceaux préférés depuis YouTube, Spotify et plus encore.
- **Playlists** : à venir.
- **Commandes de contrôle** : contrôlez facilement la lecture, le volume et bien plus encore avec des commandes simples.
- **Paroles** : Récupérez les paroles de la chanson en cours de lecture.
- **Préfixe personnalisable** : définissez un préfixe qui convient au style de votre serveur.
- **Installation facile** : Obtenez Muzio opérationnel en quelques étapes seulement.


### Hébergement de votre propre instance

Pour héberger votre propre instance de Muzio, procédez comme suit :

1. **Clonez le référentiel** : 
   ```bash
   clone git https://github.com/202db/music.git
   ```
2. **Installer les dépendances** : 
   ```bash
   npm install
   ```

3. **Configurer la configuration** :
   - Ajoutez votre token et d'autres variables dans le fichier `src\settings\config.js` ou dans `.env` (Secrets For Replit Users).
   - `.env` devrait ressembler à ceci (uniquement pour ceux qui utilisent .env)
```texte brut
TOKEN=TOKEN DE VOTRE BOT
PRÉFIXE=/
EMBED_COLOR=#FF0004
OWNER_ID=ID DE L'OWNER
GUILD_LOGS=ID DU SALON DES LOGS JOIN/LEAVE DES VOCAUX
LEAVE_TIMEOUT=100 000
DISABLE_YOUTUBE=faux
PLAY_SOURCE=ytrecherche
DEFAULT_SOURCE=ytrecherche
SPOTIFY_ID=IDCLIENT
SPOTIFY_SECRET=CLIENTSECRET
NODE_NAME1=Nœud 1
NODE_HOST1=
NODE_PORT1=
NODE_PASSWORD1=
NODE_SECURE1=faux
NODE_REGIONS1=
NODE_NAME2=Nœud 2
NODE_HOST2=
NODE_PORT2=
NODE_PASSWORD2=
NODE_SECURE2=faux
NODE_REGIONS2=
MONGO_URI=VOTRE URL MONGODB
SUPPORT_URL=SUPPORT LINK
VOTE_URL=
INVITE_URL=INVITE BOT URL
```
   - Ouvrez `/src/settings/config.js` et remplissez votre token de bot Discord et d'autres détails nécessaires.

4. **Démarrez le bot** :
   ```bash
   node src/sharder.js
   ```

5. **Invitez votre bot sur votre serveur** : 
   - Générez un lien d'invitation pour votre bot avec les autorisations nécessaires.
   - Collez le lien d'invitation dans votre navigateur et sélectionnez le serveur auquel vous souhaitez ajouter le bot.
6. **Configurer le préfixe** :
   - Une fois le bot sur votre serveur, vous pouvez l'utiliser en `@pingant` le bot ou `/help`.

7. **Profitez de votre musique** :
   - Commencez à jouer de la musique en utilisant la commande `/play <nom de la musique>`.

## Changer les émojis

Pour les emojis Chaingin, allez dans `src/settings/emojis.js` et modifiez les emojis 
```texte brut
module.exports = {
    bouton: {
        pause : "⏸️",
        CV : "▶️",
        arrêter : "◻️",
        sauter : "⏭️",
        précédent : "⏮️",
        replay : "🔄",
        voldown : "<:volume_down:1209067410968027148>",
        volup : "<:Volume_up:1209067299194146858>",
        mélanger : "🔀",
        informations : "<:icons_info:1123546062263681054>",
        boucle: {
            aucun : "🔁",
            piste : "🔂",
            file d'attente : "<:muzio_queue:1124936366116065341>",
        },
    },
file d'attente: {
        retour : "<:back7:1209067515204993077>",
        suivant : "<:music_next:1209067702379872286>",
        annuler : "◻️",
    },

    emoji_personnalisé : {
        cochez : "<:muzio_tick:1124936298545807493>",
        prime : "<:premium:1209019542446018592>",
        croix : "<:muzio_cross:1124936294557032590>",
        propriétaire : "<:muzio_owner:1124936290379497563>",
        flèche : "<:muzio_arrow:1124936288001327286>",
        administrateur : "<:muzio_admin:1124936283991593050>",
        ping : "<:muzio_ping:1124936279591755836>",
        disponibilité : "<:muzio_uptime:1124936385720234095>",
        heure : "<:muzio_time:1124936381282656286>",
        auteur : "<:muzio_author:1124936375867801630>",
        utilisateurs : "<:muzio_users:1124936371405082624>",
        file d'attente: {
        retour : "<:back7:1209067515204993077>",
        suivant : "<:music_next:1209067702379872286>",
        annuler : "◻️",
    },

    file d'attente : "<:muzio_queue:1124936366116065341>",
        développeur : "<:muzio_dev:1124936361892384898>",
        codev : "<:muzio_codev:1124936357396107324>",
        personnel : "<:muzio_staff:1124936353092751381>",
        mod : "<:muzio_mod:1124936343852683315>",
        ami : "<:muzio_friend:1124936338685296700>",
        vip : "<:muzio_vip:1124936333777965066>",
        domicile : "<:muzio_home:1124936328925171712>",
        bug : "<:muzio_bug:1124936322499498068>",
        électeur : "<:muzio_voter:1124936315729870848>",
        muzio : "<:muzio_muzio:1124936311573323837>",
        partisan : "<:muzio_supporter:1124936307219628112>",
        musique : "<:icons_headphone:1123546129129275514>",
        filtres : "<:icons_audioenable:1123545966335762462>",
        liste de lecture : "<:icons_linked:1123546272842907779>",
        modération : "<:icons_stagemoderator:1123546376677117992>",
        informations : "<:icons_info:1123546062263681054>",
        paramètres : "<:icons_settings:1123546294036742205>",
        dj : "<:djs:1135172314061885501>",
        nœud : "<:node_js:1135172213931262012>",
        allCommands : "<:muzio_cmds:1124936303256027216>"
    }
} ;
```

Téléchargez le formulaire d'emojis ici [Emojis.zip](https://github.com/ScienceGear/muzio/raw/main/Muzio_Emojis.zip)

## Soutien

Si vous rencontrez des problèmes ou avez des questions sur Muzio, n'hésitez pas à rejoindre notre serveur d'assistance : [Serveur Support](discord.gg/WzQGA8A5).

## Contribuer

Si vous souhaitez contribuer à la musique 202.sql, n'hésitez pas à créer ce référentiel et à soumettre une pull request avec vos modifications. Nous apprécions les contributions de la communauté !

 * @INFO
 * Coder  en francais par 202.sql
 * @INFO
 *  Support | https://discord.gg/WzQGA8A5
 * @INFO
 * N'enlever pas les crédits
 * @INFO
 */