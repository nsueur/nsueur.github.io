(this["webpackJsonpcommerces-boulonnais"]=this["webpackJsonpcommerces-boulonnais"]||[]).push([[0],{22:function(e,s,t){},30:function(e,s,t){},31:function(e,s,t){"use strict";t.r(s);var n=t(2),i=t.n(n),r=t(15),o=t.n(r),l=(t(22),t(23),t(1)),a=t(3),c=t(17),u=t(0);var d=function(){return Object(u.jsxs)("div",{className:"container mt-5 mb-5",children:[Object(u.jsx)("p",{children:"Votre commerce vient d'ouvrir ? "}),Object(u.jsx)("p",{children:" Ou vous connaissez un commerce non pr\xe9sent sur cette carte ?"}),Object(u.jsx)("p",{children:"Contactez moi !!!"}),Object(u.jsxs)("p",{children:["Via Facebook : ",Object(u.jsx)("a",{href:"https://www.facebook.com/NicolasCreationDeSitesWeb",children:" Cliquez ici"})]})]})},p=[{town:"Boulogne-Sur-Mer",sourceTown:"//umap.openstreetmap.fr/fr/map/les-commerces-du-boulonnais_633440",url:"//umap.openstreetmap.fr/fr/map/les-commerces-du-boulonnais_633440"},{town:"Le Portel",sourceTown:"//umap.openstreetmap.fr/fr/map/les-commerces-du-portel_633738",url:"//umap.openstreetmap.fr/fr/map/les-commerces-du-portel_633738"},{town:"Saint-Martin-Boulogne",sourceTown:"//umap.openstreetmap.fr/fr/map/les-commerces-de-saint-martin-boulogne_633755",url:"//umap.openstreetmap.fr/fr/map/les-commerces-de-saint-martin-boulogne_633755"}];var m=function(){var e=Object(n.useState)("Boulogne-Sur-Mer"),s=Object(c.a)(e,2),t=s[0],i=s[1];function r(e){i(e.target.dataset.name);var s=document.getElementById("MyMap"),t=s.offsetTop+s.offsetHeight;window.scrollTo(0,t)}return Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsx)("p",{id:"test",children:"Choisissez une carte :"}),Object(u.jsx)("div",{className:"ListTown",children:p.map((function(e,s){return e.town===t?Object(u.jsx)("div",{"data-name":e.town,className:"town-btn selectedTown",href:"#",onClick:r,children:e.town}):Object(u.jsx)("div",{"data-name":e.town,className:"town-btn",href:"#",onClick:r,children:e.town})}))}),Object(u.jsxs)("h1",{children:["Carte ",null!==t?t:"Boulogne-Sur-Mer"]}),Object(u.jsx)(d,{}),Object(u.jsx)("div",{children:p.filter((function(e){return e.town===t})).map((function(e){return Object(u.jsx)("div",{id:"MyMap",children:Object(u.jsx)("iframe",{frameborder:"0",allowfullscreen:!0,src:"https:"+e.sourceTown+"?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=false&datalayersControl=true&onLoadPanel=databrowser&captionBar=false&fullscreenControl=false&locateControl=false&editinosmControl=false"})})}))}),Object(u.jsx)("div",{id:"Top",onClick:function(){window.scrollTo(0,0)},children:Object(u.jsx)("i",{class:"fas fa-arrow-circle-up fa-3x"})})]})};var b=function(){return Object(u.jsxs)("div",{class:"container mt-5",children:[Object(u.jsx)("h1",{children:"Mentions l\xe9gales"}),Object(u.jsx)("h2",{children:"D\xe9finitions"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Client :"}),"\xa0tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des pr\xe9sentes conditions g\xe9n\xe9rales.",Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"Prestations et Services :"}),"\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0met \xe0 disposition des Clients :"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Contenu :"}),"\xa0Ensemble des \xe9l\xe9ments constituants l\u2019information pr\xe9sente sur le Site, notamment textes \u2013 images \u2013 vid\xe9os."]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Informations clients :"}),"\xa0Ci apr\xe8s d\xe9nomm\xe9 \xab Information (s) \xbb qui correspondent \xe0 l\u2019ensemble des donn\xe9es personnelles susceptibles d\u2019\xeatre d\xe9tenues par\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0pour la gestion de votre compte, de la gestion de la relation client et \xe0 des fins d\u2019analyses et de statistiques."]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Utilisateur :"}),"\xa0Internaute se connectant, utilisant le site susnomm\xe9."]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Informations personnelles :"}),"\xa0\xab Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent \xbb (article 4 de la loi n\xb0 78-17 du 6 janvier 1978)."]}),Object(u.jsx)("p",{children:"Les termes \xab donn\xe9es \xe0 caract\xe8re personnel \xbb, \xab personne concern\xe9e \xbb, \xab sous traitant \xbb et \xab donn\xe9es sensibles \xbb ont le sens d\xe9fini par le R\xe8glement G\xe9n\xe9ral sur la Protection des Donn\xe9es (RGPD : n\xb0 2016-679)"}),Object(u.jsx)("h2",{children:"1. Pr\xe9sentation du site internet."}),Object(u.jsxs)("p",{children:["En vertu de l'article 6 de la loi n\xb0 2004-575 du 21 juin 2004 pour la confiance dans l'\xe9conomie num\xe9rique, il est pr\xe9cis\xe9 aux utilisateurs du site internet\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0l'identit\xe9 des diff\xe9rents intervenants dans le cadre de sa r\xe9alisation et de son suivi:"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Propri\xe9taire"}),"\xa0: EI Nicolas Cr\xe9ation de sites Web \u2013 15 rue de l'Epissotte, Le Mont Lambert 62280 Saint Martin Boulogne",Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"Responsable publication"}),"\xa0: Nicolas SUEUR \u2013 nicolas.sueur.pro@gmail.com",Object(u.jsx)("br",{}),"Le responsable publication est une personne physique ou une personne morale.",Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"Webmaster"}),"\xa0: Nicolas SUEUR \u2013 nicolas.sueur.pro@gmail.com",Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"H\xe9bergeur"}),"\xa0: ovh \u2013 2 rue Kellermann 59100 Roubaix 1007",Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"D\xe9l\xe9gu\xe9 \xe0 la protection des donn\xe9es"}),"\xa0: SUEUR \u2013 nicolas.sueur.pro@gmail.com"]}),Object(u.jsx)("p",{children:"Les mentions l\xe9gales sont issues du mod\xe8le propos\xe9 par le\xa0g\xe9n\xe9rateur de mentions l\xe9gales RGPD d'Orson.io"}),Object(u.jsx)("h2",{children:"2. Conditions g\xe9n\xe9rales d\u2019utilisation du site et des services propos\xe9s."}),Object(u.jsx)("p",{children:"Le Site constitue une \u0153uvre de l\u2019esprit prot\xe9g\xe9e par les dispositions du Code de la Propri\xe9t\xe9 Intellectuelle et des R\xe9glementations Internationales applicables. Le Client ne peut en aucune mani\xe8re r\xe9utiliser, c\xe9der ou exploiter pour son propre compte tout ou partie des \xe9l\xe9ments ou travaux du Site."}),Object(u.jsxs)("p",{children:["L\u2019utilisation du site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0implique l\u2019acceptation pleine et enti\xe8re des conditions g\xe9n\xe9rales d\u2019utilisation ci-apr\xe8s d\xe9crites. Ces conditions d\u2019utilisation sont susceptibles d\u2019\xeatre modifi\xe9es ou compl\xe9t\xe9es \xe0 tout moment, les utilisateurs du site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0sont donc invit\xe9s \xe0 les consulter de mani\xe8re r\xe9guli\xe8re."]}),Object(u.jsxs)("p",{children:["Ce site internet est normalement accessible \xe0 tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut \xeatre toutefois d\xe9cid\xe9e par\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),", qui s\u2019efforcera alors de communiquer pr\xe9alablement aux utilisateurs les dates et heures de l\u2019intervention. Le site web\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0est mis \xe0 jour r\xe9guli\xe8rement par\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0responsable. De la m\xeame fa\xe7on, les mentions l\xe9gales peuvent \xeatre modifi\xe9es \xe0 tout moment : elles s\u2019imposent n\xe9anmoins \xe0 l\u2019utilisateur qui est invit\xe9 \xe0 s\u2019y r\xe9f\xe9rer le plus souvent possible afin d\u2019en prendre connaissance."]}),Object(u.jsx)("h2",{children:"3. Description des services fournis."}),Object(u.jsxs)("p",{children:["Le site internet\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0a pour objet de fournir une information concernant l\u2019ensemble des activit\xe9s de la soci\xe9t\xe9.\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0s\u2019efforce de fournir sur le site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0des informations aussi pr\xe9cises que possible. Toutefois, il ne pourra \xeatre tenu responsable des oublis, des inexactitudes et des carences dans la mise \xe0 jour, qu\u2019elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations."]}),Object(u.jsxs)("p",{children:["Toutes les informations indiqu\xe9es sur le site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0sont donn\xe9es \xe0 titre indicatif, et sont susceptibles d\u2019\xe9voluer. Par ailleurs, les renseignements figurant sur le site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0ne sont pas exhaustifs. Ils sont donn\xe9s sous r\xe9serve de modifications ayant \xe9t\xe9 apport\xe9es depuis leur mise en ligne."]}),Object(u.jsx)("h2",{children:"4. Limitations contractuelles sur les donn\xe9es techniques."}),Object(u.jsxs)("p",{children:["Le site utilise la technologie JavaScript. Le site Internet ne pourra \xeatre tenu responsable de dommages mat\xe9riels li\xe9s \xe0 l\u2019utilisation du site. De plus, l\u2019utilisateur du site s\u2019engage \xe0 acc\xe9der au site en utilisant un mat\xe9riel r\xe9cent, ne contenant pas de virus et avec un navigateur de derni\xe8re g\xe9n\xe9ration mis-\xe0-jour Le site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0est h\xe9berg\xe9 chez un prestataire sur le territoire de l\u2019Union Europ\xe9enne conform\xe9ment aux dispositions du R\xe8glement G\xe9n\xe9ral sur la Protection des Donn\xe9es (RGPD : n\xb0 2016-679)"]}),Object(u.jsx)("p",{children:"L\u2019objectif est d\u2019apporter une prestation qui assure le meilleur taux d\u2019accessibilit\xe9. L\u2019h\xe9bergeur assure la continuit\xe9 de son service 24 Heures sur 24, tous les jours de l\u2019ann\xe9e. Il se r\xe9serve n\xe9anmoins la possibilit\xe9 d\u2019interrompre le service d\u2019h\xe9bergement pour les dur\xe9es les plus courtes possibles notamment \xe0 des fins de maintenance, d\u2019am\xe9lioration de ses infrastructures, de d\xe9faillance de ses infrastructures ou si les Prestations et Services g\xe9n\xe8rent un trafic r\xe9put\xe9 anormal."}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0et l\u2019h\xe9bergeur ne pourront \xeatre tenus responsables en cas de dysfonctionnement du r\xe9seau Internet, des lignes t\xe9l\xe9phoniques ou du mat\xe9riel informatique et de t\xe9l\xe9phonie li\xe9 notamment \xe0 l\u2019encombrement du r\xe9seau emp\xeachant l\u2019acc\xe8s au serveur."]}),Object(u.jsx)("h2",{children:"5. Propri\xe9t\xe9 intellectuelle et contrefa\xe7ons."}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0est propri\xe9taire des droits de propri\xe9t\xe9 intellectuelle et d\xe9tient les droits d\u2019usage sur tous les \xe9l\xe9ments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vid\xe9os, ic\xf4nes et sons. Toute reproduction, repr\xe9sentation, modification, publication, adaptation de tout ou partie des \xe9l\xe9ments du site, quel que soit le moyen ou le proc\xe9d\xe9 utilis\xe9, est interdite, sauf autorisation \xe9crite pr\xe9alable de :\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"."]}),Object(u.jsx)("p",{children:"Toute exploitation non autoris\xe9e du site ou de l\u2019un quelconque des \xe9l\xe9ments qu\u2019il contient sera consid\xe9r\xe9e comme constitutive d\u2019une contrefa\xe7on et poursuivie conform\xe9ment aux dispositions des articles L.335-2 et suivants du Code de Propri\xe9t\xe9 Intellectuelle."}),Object(u.jsx)("h2",{children:"6. Limitations de responsabilit\xe9."}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0agit en tant qu\u2019\xe9diteur du site.\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0est responsable de la qualit\xe9 et de la v\xe9racit\xe9 du Contenu qu\u2019il publie."]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0ne pourra \xeatre tenu responsable des dommages directs et indirects caus\xe9s au mat\xe9riel de l\u2019utilisateur, lors de l\u2019acc\xe8s au site internet\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),", et r\xe9sultant soit de l\u2019utilisation d\u2019un mat\xe9riel ne r\xe9pondant pas aux sp\xe9cifications indiqu\xe9es au point 4, soit de l\u2019apparition d\u2019un bug ou d\u2019une incompatibilit\xe9."]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0ne pourra \xe9galement \xeatre tenu responsable des dommages indirects (tels par exemple qu\u2019une perte de march\xe9 ou perte d\u2019une chance) cons\xe9cutifs \xe0 l\u2019utilisation du site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),". Des espaces interactifs (possibilit\xe9 de poser des questions dans l\u2019espace contact) sont \xe0 la disposition des utilisateurs.\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0se r\xe9serve le droit de supprimer, sans mise en demeure pr\xe9alable, tout contenu d\xe9pos\xe9 dans cet espace qui contreviendrait \xe0 la l\xe9gislation applicable en France, en particulier aux dispositions relatives \xe0 la protection des donn\xe9es. Le cas \xe9ch\xe9ant,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0se r\xe9serve \xe9galement la possibilit\xe9 de mettre en cause la responsabilit\xe9 civile et/ou p\xe9nale de l\u2019utilisateur, notamment en cas de message \xe0 caract\xe8re raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilis\xe9 (texte, photographie \u2026)."]}),Object(u.jsx)("h2",{children:"7. Gestion des donn\xe9es personnelles."}),Object(u.jsx)("p",{children:"Le Client est inform\xe9 des r\xe9glementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l\u2019Economie Num\xe9rique, la Loi Informatique et Libert\xe9 du 06 Ao\xfbt 2004 ainsi que du R\xe8glement G\xe9n\xe9ral sur la Protection des Donn\xe9es (RGPD : n\xb0 2016-679)."}),Object(u.jsx)("h3",{children:"7.1 Responsables de la collecte des donn\xe9es personnelles"}),Object(u.jsxs)("p",{children:["Pour les Donn\xe9es Personnelles collect\xe9es dans le cadre de la cr\xe9ation du compte personnel de l\u2019Utilisateur et de sa navigation sur le Site, le responsable du traitement des Donn\xe9es Personnelles est : Nicolas Cr\xe9ation de sites Web.\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"est repr\xe9sent\xe9 par SUEUR, son repr\xe9sentant l\xe9gal"]}),Object(u.jsxs)("p",{children:["En tant que responsable du traitement des donn\xe9es qu\u2019il collecte,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0s\u2019engage \xe0 respecter le cadre des dispositions l\xe9gales en vigueur. Il lui appartient notamment au Client d\u2019\xe9tablir les finalit\xe9s de ses traitements de donn\xe9es, de fournir \xe0 ses prospects et clients, \xe0 partir de la collecte de leurs consentements, une information compl\xe8te sur le traitement de leurs donn\xe9es personnelles et de maintenir un registre des traitements conforme \xe0 la r\xe9alit\xe9. Chaque fois que\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0traite des Donn\xe9es Personnelles,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0prend toutes les mesures raisonnables pour s\u2019assurer de l\u2019exactitude et de la pertinence des Donn\xe9es Personnelles au regard des finalit\xe9s pour lesquelles\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0les traite."]}),Object(u.jsx)("h3",{children:"7.2 Finalit\xe9 des donn\xe9es collect\xe9es"}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0est susceptible de traiter tout ou partie des donn\xe9es :"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"pour permettre la navigation sur le Site et la gestion et la tra\xe7abilit\xe9 des prestations et services command\xe9s par l\u2019utilisateur : donn\xe9es de connexion et d\u2019utilisation du Site, facturation, historique des commandes, etc."}),Object(u.jsx)("li",{children:"pour pr\xe9venir et lutter contre la fraude informatique (spamming, hacking\u2026) : mat\xe9riel informatique utilis\xe9 pour la navigation, l\u2019adresse IP, le mot de passe (hash\xe9)"}),Object(u.jsx)("li",{children:"pour am\xe9liorer la navigation sur le Site : donn\xe9es de connexion et d\u2019utilisation"}),Object(u.jsxs)("li",{children:["pour mener des enqu\xeates de satisfaction facultatives sur\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0: adresse email"]}),Object(u.jsx)("li",{children:"pour mener des campagnes de communication (sms, mail) : num\xe9ro de t\xe9l\xe9phone, adresse email"})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0ne commercialise pas vos donn\xe9es personnelles qui sont donc uniquement utilis\xe9es par n\xe9cessit\xe9 ou \xe0 des fins statistiques et d\u2019analyses."]}),Object(u.jsx)("h3",{children:"7.3 Droit d\u2019acc\xe8s, de rectification et d\u2019opposition"}),Object(u.jsxs)("p",{children:["Conform\xe9ment \xe0 la r\xe9glementation europ\xe9enne en vigueur, les Utilisateurs de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0disposent des droits suivants :"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"droit d'acc\xe8s (article 15 RGPD) et de rectification (article 16 RGPD), de mise \xe0 jour, de compl\xe9tude des donn\xe9es des Utilisateurs droit de verrouillage ou d\u2019effacement des donn\xe9es des Utilisateurs \xe0 caract\xe8re personnel (article 17 du RGPD), lorsqu\u2019elles sont inexactes, incompl\xe8tes, \xe9quivoques, p\xe9rim\xe9es, ou dont la collecte, l'utilisation, la communication ou la conservation est interdite"}),Object(u.jsx)("li",{children:"droit de retirer \xe0 tout moment un consentement (article 13-2c RGPD)"}),Object(u.jsx)("li",{children:"droit \xe0 la limitation du traitement des donn\xe9es des Utilisateurs (article 18 RGPD)"}),Object(u.jsx)("li",{children:"droit d\u2019opposition au traitement des donn\xe9es des Utilisateurs (article 21 RGPD)"}),Object(u.jsx)("li",{children:"droit \xe0 la portabilit\xe9 des donn\xe9es que les Utilisateurs auront fournies, lorsque ces donn\xe9es font l\u2019objet de traitements automatis\xe9s fond\xe9s sur leur consentement ou sur un contrat (article 20 RGPD)"}),Object(u.jsxs)("li",{children:["droit de d\xe9finir le sort des donn\xe9es des Utilisateurs apr\xe8s leur mort et de choisir \xe0 qui\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0devra communiquer (ou non) ses donn\xe9es \xe0 un tiers qu\u2019ils aura pr\xe9alablement d\xe9sign\xe9"]})]}),Object(u.jsxs)("p",{children:["D\xe8s que\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0a connaissance du d\xe9c\xe8s d\u2019un Utilisateur et \xe0 d\xe9faut d\u2019instructions de sa part,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0s\u2019engage \xe0 d\xe9truire ses donn\xe9es, sauf si leur conservation s\u2019av\xe8re n\xe9cessaire \xe0 des fins probatoires ou pour r\xe9pondre \xe0 une obligation l\xe9gale."]}),Object(u.jsxs)("p",{children:["Si l\u2019Utilisateur souhaite savoir comment\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0utilise ses Donn\xe9es Personnelles, demander \xe0 les rectifier ou s\u2019oppose \xe0 leur traitement, l\u2019Utilisateur peut contacter\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0par \xe9crit \xe0 l\u2019adresse suivante :"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Nicolas Cr\xe9ation de sites Web \u2013 DPO, Nicolas SUEUR"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"15 rue de l'Epissotte, Le Mont Lambert 62280 Saint Martin Boulogne."})]}),Object(u.jsxs)("p",{children:["Dans ce cas, l\u2019Utilisateur doit indiquer les Donn\xe9es Personnelles qu\u2019il souhaiterait que\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0corrige, mette \xe0 jour ou supprime, en s\u2019identifiant pr\xe9cis\xe9ment avec une copie d\u2019une pi\xe8ce d\u2019identit\xe9 (carte d\u2019identit\xe9 ou passeport)."]}),Object(u.jsxs)("p",{children:["Les demandes de suppression de Donn\xe9es Personnelles seront soumises aux obligations qui sont impos\xe9es \xe0\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0par la loi, notamment en mati\xe8re de conservation ou d\u2019archivage des documents. Enfin, les Utilisateurs de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0peuvent d\xe9poser une r\xe9clamation aupr\xe8s des autorit\xe9s de contr\xf4le, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes)."]}),Object(u.jsx)("h3",{children:"7.4 Non-communication des donn\xe9es personnelles"}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0s\u2019interdit de traiter, h\xe9berger ou transf\xe9rer les Informations collect\xe9es sur ses Clients vers un pays situ\xe9 en dehors de l\u2019Union europ\xe9enne ou reconnu comme \xab non ad\xe9quat \xbb par la Commission europ\xe9enne sans en informer pr\xe9alablement le client. Pour autant,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0reste libre du choix de ses sous-traitants techniques et commerciaux \xe0 la condition qu\u2019il pr\xe9sentent les garanties suffisantes au regard des exigences du R\xe8glement G\xe9n\xe9ral sur la Protection des Donn\xe9es (RGPD : n\xb0 2016-679)."]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0s\u2019engage \xe0 prendre toutes les pr\xe9cautions n\xe9cessaires afin de pr\xe9server la s\xe9curit\xe9 des Informations et notamment qu\u2019elles ne soient pas communiqu\xe9es \xe0 des personnes non autoris\xe9es. Cependant, si un incident impactant l\u2019int\xe9grit\xe9 ou la confidentialit\xe9 des Informations du Client est port\xe9e \xe0 la connaissance de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),", celle-ci devra dans les meilleurs d\xe9lais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0ne collecte aucune \xab donn\xe9es sensibles \xbb."]}),Object(u.jsxs)("p",{children:["Les Donn\xe9es Personnelles de l\u2019Utilisateur peuvent \xeatre trait\xe9es par des filiales de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0et des sous-traitants (prestataires de services), exclusivement afin de r\xe9aliser les finalit\xe9s de la pr\xe9sente politique."]}),Object(u.jsxs)("p",{children:["Dans la limite de leurs attributions respectives et pour les finalit\xe9s rappel\xe9es ci-dessus, les principales personnes susceptibles d\u2019avoir acc\xe8s aux donn\xe9es des Utilisateurs de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0sont principalement les agents de notre service client."]}),Object(u.jsx)("h2",{children:"8. Notification d\u2019incident"}),Object(u.jsx)("p",{children:"Quels que soient les efforts fournis, aucune m\xe9thode de transmission sur Internet et aucune m\xe9thode de stockage \xe9lectronique n'est compl\xe8tement s\xfbre. Nous ne pouvons en cons\xe9quence pas garantir une s\xe9curit\xe9 absolue. Si nous prenions connaissance d'une br\xe8che de la s\xe9curit\xe9, nous avertirions les utilisateurs concern\xe9s afin qu'ils puissent prendre les mesures appropri\xe9es. Nos proc\xe9dures de notification d\u2019incident tiennent compte de nos obligations l\xe9gales, qu'elles se situent au niveau national ou europ\xe9en. Nous nous engageons \xe0 informer pleinement nos clients de toutes les questions relevant de la s\xe9curit\xe9 de leur compte et \xe0 leur fournir toutes les informations n\xe9cessaires pour les aider \xe0 respecter leurs propres obligations r\xe9glementaires en mati\xe8re de reporting."}),Object(u.jsxs)("p",{children:["Aucune information personnelle de l'utilisateur du site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0n'est publi\xe9e \xe0 l'insu de l'utilisateur, \xe9chang\xe9e, transf\xe9r\xe9e, c\xe9d\xe9e ou vendue sur un support quelconque \xe0 des tiers. Seule l'hypoth\xe8se du rachat de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0et de ses droits permettrait la transmission des dites informations \xe0 l'\xe9ventuel acqu\xe9reur qui serait \xe0 son tour tenu de la m\xeame obligation de conservation et de modification des donn\xe9es vis \xe0 vis de l'utilisateur du site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"."]}),Object(u.jsx)("h3",{children:"S\xe9curit\xe9"}),Object(u.jsxs)("p",{children:["Pour assurer la s\xe9curit\xe9 et la confidentialit\xe9 des Donn\xe9es Personnelles et des Donn\xe9es Personnelles de Sant\xe9,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0utilise des r\xe9seaux prot\xe9g\xe9s par des dispositifs standards tels que par pare-feu, la pseudonymisation, l\u2019encryption et mot de passe."]}),Object(u.jsxs)("p",{children:["Lors du traitement des Donn\xe9es Personnelles,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"prend toutes les mesures raisonnables visant \xe0 les prot\xe9ger contre toute perte, utilisation d\xe9tourn\xe9e, acc\xe8s non autoris\xe9, divulgation, alt\xe9ration ou destruction."]}),Object(u.jsx)("h2",{children:"9. Liens hypertextes \xab cookies \xbb et balises (\u201ctags\u201d) internet"}),Object(u.jsxs)("p",{children:["Le site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0contient un certain nombre de liens hypertextes vers d\u2019autres sites, mis en place avec l\u2019autorisation de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),". Cependant,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0n\u2019a pas la possibilit\xe9 de v\xe9rifier le contenu des sites ainsi visit\xe9s, et n\u2019assumera en cons\xe9quence aucune responsabilit\xe9 de ce fait."]}),Object(u.jsx)("p",{children:Object(u.jsx)("span",{children:"Sauf si vous d\xe9cidez de d\xe9sactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez \xe0 tout moment d\xe9sactiver ces cookies et ce gratuitement \xe0 partir des possibilit\xe9s de d\xe9sactivation qui vous sont offertes et rappel\xe9es ci-apr\xe8s, sachant que cela peut r\xe9duire ou emp\xeacher l\u2019accessibilit\xe9 \xe0 tout ou partie des Services propos\xe9s par le site."})}),Object(u.jsx)("p",{children:"\xa0"}),Object(u.jsx)("h3",{children:"9.1. \xab COOKIES \xbb"}),Object(u.jsx)("p",{children:"Un \xab cookie \xbb est un petit fichier d\u2019information envoy\xe9 sur le navigateur de l\u2019Utilisateur et enregistr\xe9 au sein du terminal de l\u2019Utilisateur (ex : ordinateur, smartphone), (ci-apr\xe8s \xab Cookies \xbb). Ce fichier comprend des informations telles que le nom de domaine de l\u2019Utilisateur, le fournisseur d\u2019acc\xe8s Internet de l\u2019Utilisateur, le syst\xe8me d\u2019exploitation de l\u2019Utilisateur, ainsi que la date et l\u2019heure d\u2019acc\xe8s. Les Cookies ne risquent en aucun cas d\u2019endommager le terminal de l\u2019Utilisateur."}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0est susceptible de traiter les informations de l\u2019Utilisateur concernant sa visite du Site, telles que les pages consult\xe9es, les recherches effectu\xe9es. Ces informations permettent \xe0\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0d\u2019am\xe9liorer le contenu du Site, de la navigation de l\u2019Utilisateur."]}),Object(u.jsxs)("p",{children:["Les Cookies facilitant la navigation et/ou la fourniture des services propos\xe9s par le Site, l\u2019Utilisateur peut configurer son navigateur pour qu\u2019il lui permette de d\xe9cider s\u2019il souhaite ou non les accepter de mani\xe8re \xe0 ce que des Cookies soient enregistr\xe9s dans le terminal ou, au contraire, qu\u2019ils soient rejet\xe9s, soit syst\xe9matiquement, soit selon leur \xe9metteur. L\u2019Utilisateur peut \xe9galement configurer son logiciel de navigation de mani\xe8re \xe0 ce que l\u2019acceptation ou le refus des Cookies lui soient propos\xe9s ponctuellement, avant qu\u2019un Cookie soit susceptible d\u2019\xeatre enregistr\xe9 dans son terminal.\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0informe l\u2019Utilisateur que, dans ce cas, il se peut que les fonctionnalit\xe9s de son logiciel de navigation ne soient pas toutes disponibles."]}),Object(u.jsxs)("p",{children:["Si l\u2019Utilisateur refuse l\u2019enregistrement de Cookies dans son terminal ou son navigateur, ou si l\u2019Utilisateur supprime ceux qui y sont enregistr\xe9s, l\u2019Utilisateur est inform\xe9 que sa navigation et son exp\xe9rience sur le Site peuvent \xeatre limit\xe9es. Cela pourrait \xe9galement \xeatre le cas lorsque\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0ou l\u2019un de ses prestataires ne peut pas reconna\xeetre, \xe0 des fins de compatibilit\xe9 technique, le type de navigateur utilis\xe9 par le terminal, les param\xe8tres de langue et d\u2019affichage ou le pays depuis lequel le terminal semble connect\xe9 \xe0 Internet."]}),Object(u.jsxs)("p",{children:["Le cas \xe9ch\xe9ant,\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0d\xe9cline toute responsabilit\xe9 pour les cons\xe9quences li\xe9es au fonctionnement d\xe9grad\xe9 du Site et des services \xe9ventuellement propos\xe9s par\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),", r\xe9sultant (i) du refus de Cookies par l\u2019Utilisateur (ii) de l\u2019impossibilit\xe9 pour\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0d\u2019enregistrer ou de consulter les Cookies n\xe9cessaires \xe0 leur fonctionnement du fait du choix de l\u2019Utilisateur. Pour la gestion des Cookies et des choix de l\u2019Utilisateur, la configuration de chaque navigateur est diff\xe9rente. Elle est d\xe9crite dans le menu d\u2019aide du navigateur, qui permettra de savoir de quelle mani\xe8re l\u2019Utilisateur peut modifier ses souhaits en mati\xe8re de Cookies."]}),Object(u.jsxs)("p",{children:["\xc0 tout moment, l\u2019Utilisateur peut faire le choix d\u2019exprimer et de modifier ses souhaits en mati\xe8re de Cookies.\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0pourra en outre faire appel aux services de prestataires externes pour l\u2019aider \xe0 recueillir et traiter les informations d\xe9crites dans cette section."]}),Object(u.jsxs)("p",{children:["Enfin, en cliquant sur les ic\xf4nes d\xe9di\xe9es aux r\xe9seaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0ou dans son application mobile et si l\u2019Utilisateur a accept\xe9 le d\xe9p\xf4t de cookies en poursuivant sa navigation sur le Site Internet ou l\u2019application mobile de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),", Twitter, Facebook, Linkedin et Google Plus peuvent \xe9galement d\xe9poser des cookies sur vos terminaux (ordinateur, tablette, t\xe9l\xe9phone portable)."]}),Object(u.jsxs)("p",{children:["Ces types de cookies ne sont d\xe9pos\xe9s sur vos terminaux qu\u2019\xe0 condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l\u2019application mobile de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),". \xc0 tout moment, l\u2019Utilisateur peut n\xe9anmoins revenir sur son consentement \xe0 ce que\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0d\xe9pose ce type de cookies."]}),Object(u.jsx)("h3",{children:"Article 9.2. BALISES (\u201cTAGS\u201d) INTERNET"}),Object(u.jsxs)("p",{children:[Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0peut employer occasionnellement des balises Internet (\xe9galement appel\xe9es \xab tags \xbb, ou balises d\u2019action, GIF \xe0 un pixel, GIF transparents, GIF invisibles et GIF un \xe0 un) et les d\xe9ployer par l\u2019interm\xe9diaire d\u2019un partenaire sp\xe9cialiste d\u2019analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l\u2019adresse IP de l\u2019Utilisateur) dans un pays \xe9tranger."]}),Object(u.jsx)("p",{children:"Ces balises sont plac\xe9es \xe0 la fois dans les publicit\xe9s en ligne permettant aux internautes d\u2019acc\xe9der au Site, et sur les diff\xe9rentes pages de celui-ci."}),Object(u.jsxs)("p",{children:["Cette technologie permet \xe0\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),"\xa0d\u2019\xe9valuer les r\xe9ponses des visiteurs face au Site et l\u2019efficacit\xe9 de ses actions (par exemple, le nombre de fois o\xf9 une page est ouverte et les informations consult\xe9es), ainsi que l\u2019utilisation de ce Site par l\u2019Utilisateur."]}),Object(u.jsxs)("p",{children:["Le prestataire externe pourra \xe9ventuellement recueillir des informations sur les visiteurs du Site et d\u2019autres sites Internet gr\xe2ce \xe0 ces balises, constituer des rapports sur l\u2019activit\xe9 du Site \xe0 l\u2019attention de\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"}),", et fournir d\u2019autres services relatifs \xe0 l\u2019utilisation de celui-ci et d\u2019Internet."]}),Object(u.jsx)("p",{children:"\xa0"}),Object(u.jsx)("h2",{children:"10. Droit applicable et attribution de juridiction."}),Object(u.jsxs)("p",{children:["Tout litige en relation avec l\u2019utilisation du site\xa0",Object(u.jsx)(l.b,{to:"/",children:"https://lescommercesduboulonnais.nicolas-sueur.fr"})," est soumis au droit fran\xe7ais. En dehors des cas o\xf9 la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux comp\xe9tents de Boulogne-sur-Mer."]})]})};var j=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Les commerces du boulonnais"}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav"})]})})}),Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/mentions-legales",component:b}),Object(u.jsx)(a.a,{path:"/",component:m})]}),Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{class:"container text-center",children:[Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://www.nicolas-sueur.fr/",children:"R\xe9alis\xe9 par Nicolas - Cr\xe9ation de Sites Web"})}),Object(u.jsx)("p",{children:Object(u.jsx)(l.b,{to:"/mentions-legales",children:"Mentions L\xe9gales"})})]})})]})};t(30);var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j,{})})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(s){var t=s.getCLS,n=s.getFID,i=s.getFCP,r=s.getLCP,o=s.getTTFB;t(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),f()}},[[31,1,2]]]);
//# sourceMappingURL=main.f3ad325f.chunk.js.map