/* =====================================================================
   ΑΡΧΕΙΟ ΠΕΡΙΕΧΟΜΕΝΟΥ — εδώ αλλάζεις κείμενα, ηχητικά και εικόνες.
   Δεν χρειάζεται να πειράξεις κανένα άλλο αρχείο.

   • Κάθε στάση έχει έναν κωδικό ("01", "02"...). Ο κωδικός μπαίνει στο QR:
       player.html?id=01
   • audio:  το αρχείο ήχου μέσα στον φάκελο audio/
             Αν το "en" δεν έχει δικό του audio, παίζει το ελληνικό
             με αγγλικούς υπότιτλους (ιδανικό για τον παππού).
   • photo:  η φωτογραφία του ομιλητή μέσα στον φάκελο img/ (τετράγωνη, ~400x400)
   • didYouKnow: οι προτάσεις του «Ήξερες ότι…» (όσες θέλεις)
   • transcript: ["λεπτά:δευτερόλεπτα", "κείμενο"]
             Ο χρόνος είναι η στιγμή που ξεκινά η φράση στο ηχητικό.
             Έτσι οι υπότιτλοι εμφανίζονται την ώρα που μιλάει.
   Προσοχή: κάθε κείμενο μέσα σε "εισαγωγικά", κόμμα ανάμεσα στα στοιχεία.
   ===================================================================== */

const SETTINGS = {
  museumName: { el: "Μουσείο Ρητίνης Λέσβου", en: "Lesvos Resin Museum" },
  website: "https://lesvosresinmuseum.gr",
  autoplay: false,            // true = το ηχητικό ξεκινά μόλις επιλεγεί γλώσσα
  showAutoplaySwitch: true,   // true = ο επισκέπτης βλέπει διακόπτη «Αυτόματη έναρξη»
  rememberLanguage: true,     // θυμάται τη γλώσσα στο επόμενο QR που σκανάρει
  defaultPhoto: "img/speaker.svg",
  defaultSpeaker: { el: "Ο παππούς ρετσινάς", en: "Grandpa, the resin tapper" }
};

const STOPS = {

  "1": {
    photo: "~audio/img/Canva - download.jpg",
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Η σκληρή ζωή των ρετσινάδων",
      audio: "audio/1.m4a",
      didYouKnow: [
        "Ο συνεταιρισμός έκλεισε όταν έπεσε η τιμή της ρητίνης και πολλοί από τους ρετσινάδες έφυγαν στο εξωτερικό περίπου το 1970.",
        "Η τρίτη προσπάθεια ρητινοσυλλογής έγινε το 2008-2010, από τότε κανείς δεν συλλέγει ρητίνη στη Λέσβο.",
        "Ένας ρετσινάς μπορούσε να χτίσει 1 σπίτι σε δύο χρόνια όταν η τιμή του κολοφωνίου ήταν υψηλή."
      ],
      transcript: [
        ["0:00", "Αυτή ήταν η σκληρή ζωή του ρετσινά."],
        ["0:04", "Αυτός ο ατέλειωτος, εξαντλητικός μόχθος ανάγκασε όλους τους χωριανούς μας να αναζητήσουν αλλού ανθρώπινες συνθήκες διαβίωσης, για πολλούς η μόνη διέξοδος ήταν ο ξεριζωμός ο ζωντανός χωρισμός των γονιών από τα παιδιά τους."],
        ["0:24", "Είναι αβάσταχτα τα συναισθήματα τον γονιών, των παιδιών που έπαιρναν τον δρόμο για τα δυτική γη, με σημείο αποχωρισμού τα 'Αργάλεια'."],
	["0:36", "Σε κάθε αναχώρηση χωρίς επιστροφή αντηχούσαν οι σπαρακτικές φωνές της μάνας -Δεν θα σε ξαναδώ στην ζωή παιδί μου. Έχει περάσει πάνω από μισός αιώνας και για μας τα 'Αργάλεια' είναι τόπος συνάντησης για να μας θυμίζει τον ξεριζωμό μας."]
      ]
   },
    en: {
      title: "The hard work of resin workers",
      audio: "",   // κενό = παίζει το ελληνικό ηχητικό με αγγλικούς υπότιτλους
      didYouKnow: [
        "The cooperative closed when the price of resin fell, and many of the resin collectors went abroad around 1970.",
        "The third attempt at resin collection took place in 2008-2010; since then, no one has collected resin in Lesbos.",
        "A resin collector could build a house in two years when the price of rosin was high."
      ],
      transcript: [
        ["0:00", "This was the hard life of the resin collector."],
        ["0:04", "This endless, exhausting toil forced all our villagers to seek humane living conditions elsewhere; for many, the only way out was uprooting, the living separation of parents from their children."],
        ["0:24", "The feelings of the parents are unbearable, as are those of the children who took the road to the western lands, with 'Argaleia' as the point of separation."],
	["0:36", "At every departure with no return, the heartbreaking cries of the mother echoed: 'I will never see you again in this life, my child.' Over half a century has passed, and for us, 'Argaleia' is a meeting place to remind us of our uprooting."]
      ]
    }
  },

  "2": {   // διάρκεια ~72 δευτ.
    photo: "~audio/img/1795025083512.JPG",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Το φαγητό και η ελάχιστη ξεκούραση",
      audio: "audio/02.m4a",
      didYouKnow: ["Το 1930 η Ελλάδα ήταν στην 3η θέση παραγωγής ρητίνης από τα πεύκα, και λειτουργούσαν 35 εργοστάσια επεξεργασίας ρητίνης.",
        "Ο μαύρος ασκός βόλευε περισσότερο τους ρετσινάδες, καθώς τον φορούσαν πίσω στην πλάτη τους, ώστε να έχουν ελευθερία στην κίνηση των χεριών",
        "Η εταιρεία IRIS ήταν το πρώτο εργοστάσιο που παρήγαγε πλαστικά χρώματα από ρητίνη. Το εργοστάσιο κάηκε το 1960."
],
      transcript: [
        ["0:00", "Στην κορυφή μετά από μια ολιγόλεπτη διακοπή για λίγο ψωμί με ελιές, παίρναμε τον κατήφορο για να ανταμώσουμε όλοι στο προκαθορισμένο σημείο για το μεσημεριανό φαγητό."],
	["0:14", "Όλων μας τα χείλη ήταν ασπρογανιασμένα γιατί το λιγοστό νερό στο παγούρι το είχαμε πιει στο ανέβασμα."],
	["0:25", "Το φαγητό μας περίμενε μέσα στο ζεμπίλι από το πρωί. Ήταν κρεμασμένο σε ένα κλαδί, με σύρμα περασμένο μέσα από ένα μεταλλικό κουτί γεμάτο στάχτη, κόλπο για να σταματήσουνε την έφοδο των μυρμηγκιών. Εκτεθειμένο στον ήλιο φαγητό, μαζί με το νερό μέσα στο κουμάρι, ένα πήλινο δοχείο κρυμμένο συνήθως μέσα σε κάποιο θάμνο για λίγη δροσιά."],
	["0:57", "Μετά το φαγητό ξαπλώναμε πάνω στα πευκατσίγενα, στις πευκοβελόνες, για προσκέφαλο μια πέτρα που μας περίμενε εκεί. Η συνέχεια ίδια σκληρή μέχρι τη δύση του ηλίου."]
      ]
    },
    en: {
      title: "The launch and the rest of the day ",
      audio: "",
      didYouKnow: ["In 1930, Greece ranked 3rd in pine resin production, and 35 resin processing factories were in operation.",
	"The black sack was more convenient for the resin collectors, as they wore it on their backs to allow freedom of movement for their hands.",
	"The IRIS company was the first factory to produce plastic paints from resin. The factory burned down in 1960."
],
      transcript: [
        ["0:00", "At the top of the mountain, after a brief pause for a little bread with olives, we would take the downhill path so we could all meet at the predetermined spot for lunch."],
	["0:14", "All of our lips were parched white, because we had drunk the little water in our flask during the climb up."],
	["0:25", "Our food had been waiting in the woven basket since the morning. It was hung on a branch with a wire passed through a metal can filled with ash, a trick to stop the invasion of ants. The food was exposed to the sun, along with the water in the clay jug, which was usually hidden inside a bush for a little coolness."],
	["0:57", "After eating, we would lie down on the pine needles, using a stone that was waiting there for us as a pillow. The rest of the day was just as harsh until sunset."]
      ]
    }
  },

  "3": {   // διάρκεια ~29 δευτ.
    photo: "~audio/img/1795025398132.jpg",      // κενό = defaultPhoto
    speaker:  { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Από τις παρυφές στην κορυφή",
      audio: "audio/03.m4a",
      didYouKnow: ["Το πελέκημα ξεκινούσε από τη βάση του κορμού. Κάθε νέα χαραγή γινόταν λίγο πιο πάνω από την προηγούμενη, οπότε η πληγή στο πεύκο «ανέβαινε» χρόνο με τον χρόνο.",
	"Η πληγή έπρεπε να ανανεώνεται κάθε πέντε μέρες, γιατί η ρητίνη επουλώνει τη πληγή και η ροή σταματά."
],
      transcript: [
        ["0:00", "Το χάραγμα μας έβρισκε μπροστά στο πεύκο. Ο πατέρας λόγω ηλικίας δούλευε χαμηλά στις παρυφές του βουνού. Εμείς με  πρώτο τον Κώστα, την  Ελένη, την Ελευθερία, την Αρχοντούλα και εμένα τελευταία προχωρούσαμε πελεκώντας ο ένας διπλά στον άλλο. Κρατούσε ο καθένας την δική του λωρίδα των πεύκων, προχωρώντας προς την κορυφή ώστε να μην μείνει κανένα απελέκητο."]
      ]
    },
    en: {
      title: "From the foothills to the peak",
      audio: "",
      didYouKnow: ["The chipping started from the base of the trunk. Each new cut was made a little higher than the previous one, so the wound on the pine tree 'climbed' year after year.",
	"The wound had to be renewed every 5 days, because the resin heals the wound and the flow stops."
],
      transcript: [
        ["0:00", "Daybreak found us in front of the pine tree. Due to his age, our father worked low at the foothills of the mountain. The rest of us—with Kostas first, followed by Eleni, Eleftheria, Archontoula, and me last—moved forward, chipping side by side. Each of us kept to our own strip of pine trees, advancing toward the peak so that not a single one would be left unchipped."]
      ]
    }
  },

  "4": {   // διάρκεια ~15 δευτ.
    photo: "~audio/img/1795025667744.jpg",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Οι καλύβες",
      audio: "audio/04.m4a",
      didYouKnow: ["Ξερολιθιά: οι τοίχοι χτίζονταν μόνο με πέτρες, χωρίς λάσπη ή κονίαμα. Η τέχνη της ξερολιθιάς έχει ενταχθεί από το 2018 στον κατάλογο Άυλης Πολιτιστικής Κληρονομιάς της UNESCO, με την Ελλάδα ανάμεσα στις χώρες που την υπέβαλαν.",
"Γιατί κλαδιά πάνω στη λαμαρίνα; η λαμαρίνα στον ήλιο του καλοκαιριού καίει. Τα κλαδιά έκαναν σκιά και κρατούσαν την καλύβα πιο δροσερή."
],
      transcript: [
        ["0:00", "Οι καλύβες που μέναμε ήταν 4 τοίχοι από ξερολιθιά 2 μ. Χ 3 μ., με σκέπαστρο μια λαμαρίνα που πάνω τις ρίχναμε κλαδιά από πλατάνια και από πικροδάφνες."]
      ]
    },
    en: {
      title: "The resin huts",
      audio: "",
      didYouKnow: ["Dry stone: the walls were built using only stones, without mud or mortar. The art of dry stone walling has been included in UNESCO's Intangible Cultural Heritage list since 2018, with Greece among the countries that submitted it.",
"Why branches on the sheet metal: the sheet metal burns in the summer sun. The branches provided shade and kept the hut cooler."
],
      transcript: [
        ["0:00", "The huts we stayed in were four walls made of dry stone, 2m x 3m, roofed with a piece of sheet metal on top of which we would throw branches from plane trees and oleanders."]
      ]
    }
  },

  "5": {   // διάρκεια ~52 δευτ.
    photo: "~audio/img/πευκοδασος.jpg",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Τα μέρη που εργάζονταν οι ρετσινάδες",
      audio: "audio/05.m4a",
      didYouKnow: ["Ο συνεταιρισμός του Αμπελικού νοίκιαζε σχεδόν όλο το δάσος της Λέσβου».",
"Στην περιοχή κοντά στην Μικρή Λίμνη, όπως και στις Φεράνες κοντά στην Αγία Παρασκευή, υπάρχουν ακόμη ίχνη απο τον παλαιό οικισμό των ρετσινάδων.",
" Μέσα από τις μεγάλες δεξαμενές αποθήσευσης της ρητίνης, οι ρετσινάδες μάζευαν το ρετσινόλαδο, για την επούλωση των πληγών."
],
      transcript: [
        ["0:00", "Η οικογένεια μας με το παρατσούκλι Βοριάς εργάστηκε στις παρακάτω περιοχές της Λέσβου: που ήταν ο πατέρας τα αδέρφια μου, ο Κώστας, η Ελένη , η Ελευθερία, η Αρχοντούλα και εγώ."],
	["0:16", "Το 1959, το 1960 και το 1961 εργαστήκαμε στην Μικρή λίμνη και δουλεύαμε το τμήμα από τις 5 βρύσες και δυτικά μέχρι την αντιπυρική ζώνη και προς τα επάνω μέχρι την Άσπρη Πέτρα. "],
	["0:34", "Το 1962 εργαστήκαμε στις Νέες Κυδωνίες ή Μπαλτσίκι, το 1963 στο Καραγάτσι στο Πλωμάρι, το 1964 στην Αχλαδερή, και το 1965 στην Κράτηγο."],
      ]
    },
    en: {
      title: "The regions where the resiners worked",
      audio: "",
      didYouKnow: ["The Ampeliko cooperative rented almost the entire forest of Lesbos.",
"In the area near Mikri Limni, as well as in Feranes near Agia Paraskevi, traces of the old resin workers' settlement can still be found.",
"From the large resin storage tanks, the resin workers would collect the resin oil to heal their wounds."],
      transcript: [
        ["0:00", "Our family, bearing the nickname Vorias, worked in the following areas of Lesbos: it included our father, my siblings Kostas, Eleni, Eleftheria, Archontoula, and me."],
	["0:16", "In 1959, 1960, and 1961 we worked in Mikri Limni, and we worked the section from the '5 Vryses' (5 springs) westwards to the firebreak, and upwards to Aspri Petra."],
	["0:34", "In 1962 we worked in Nees Kydonies or Baltsiki, in 1963 in Karagatsi in Plomari, in 1964 in Achladeri, and in 1965 in Kratigos."],
      ]
    }
  },

  "6": {   // διάρκεια ~44 δευτ.
    photo: "~audio/img/koybadaki.jpg.png",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {

      title: "Κανόνες Ρητινοσυλλογής",
      audio: "audio/06.m4a",
      didYouKnow: ["Υπάρχουν 3 μέθοδοι ρητινοσυλλογής. Η συντηρητική, η εξουθενωτική και η νεκρωτική. ».", 
"Η ροή της ρητίνης γίνεται μέσω των ρητινοφόρων αγωγών, οι οποίοι συνδέονται μεταξύ τους δημιουργώντας ένα «δίκτυο συγκοινωνούντων αγγείων».", 
"Η αρχαιότερη ιστορική αναφορά παγκοσμίως είναι αυτή του Θεόφραστου στην «περί φυτών πραγματεία» του, το 300 περίπου π.χ. στην οποία αναφέρει λεπτομερώς τη μέθοδο συλλογής ρητίνης στην εποχή του καθώς και τη μέθοδο παρασκευής της κολοφώνιας πίσσας.",
"Το Αμπελικό παρήγαγε πίσσα κολοφωνίου τον 15ο αιώνα, καίγοντας δαδιά πεύκου σε πέτρινα πισσοκάμινα που διασώζονται ακόμη και σήμερα."
],
      transcript: [
        ["0:00", "Όλοι οι ρετσινάδες τηρούσαμε ευλαβικά τους κανονισμούς της ρητινοσυλλογής."],
	["0:06", "Ο πρώτος κανόνας όριζε αυστηρά τις διαστάσεις του προσώπου με συγκεκριμένο πλάτος, βάθος και ύψος."],
	["0:15", "Ο 2ος κανόνας υποχρέωνε τους ρετσινάδες για την επόμενη χρονιά να συνεχίσουν στο ίδιο πρόσωπο μέχρι αυτό να φτάσει στο ύψος του ανθρώπου. Μόνο τότε επιτρεπόταν να ανοίξουν καινούργιο πρόσωπο στην απέναντι πλευρά. Με τον δεύτερο κανόνα το πεύκο είχε τον χρόνο να αναγεννηθεί."],
	["0:37", "Στόχος ήταν το πεύκο να μπορεί να επουλώσει και να θρέψει την πληγή του με το πέρασμα του χρόνου."]
      ]
    },
    en: {
      title: "Rules of Resin Collection",
      audio: "",
      didYouKnow: ["There are 2 methods of resin collection: the conservative and the exhaustive.",
"The flow of resin occurs through the resin ducts, which are interconnected, creating a 'network of communicating vessels.",
"The oldest historical reference worldwide is that of Theophrastus in his 'Enquiry into Plants', around 300 BC, in which he details the method of resin collection in his time, as well as the method of preparing rosin pitch.",
"Ampeliko produced rosin pitch in the 15th century by burning resinous pine wood in stone pitch kilns that still survive today."
],
      transcript: [
        ["0:00","All of us resin collectors religiously followed the resin collection regulations."],
	["0:06", "The first rule strictly defined the dimensions of the face (the cut), with a specific width, depth, and height."],
	["0:15", "The 2nd rule obligated the resin collectors to continue on the same face the following year, until it reached human height. Only then were they allowed to open a new face on the opposite side. This second rule gave the pine tree time to regenerate."],
	["0:37", "The goal was for the pine tree to be able to heal and nourish its wound over time."]
      ]
    }
  },

  "7": {   // διάρκεια ~24 δευτ.
    photo: "~audio/img/1795025083556.jpg",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Διάρκεια ρητινοσυλλογής",
      audio: "audio/07.m4a",
      didYouKnow: ["Τα μεταπολεμικά χρόνια η μεγαλύτερη παραγωγή ρητίνης έγινε το 1961 όπου έφτασε τους 41.000 τόννους και η ποσότητα αυτή αντιπροσώπευε το 3% της παγκόσμιας παραγωγής.",
"Το 1935 λειτουργούσαν 32 εργοστάσια επεξεργασίας της ρητίνης, το 1991 είχαν μειωθεί σε 9 και σήμερα ουσιαστικά σε πλήρη δραστηριότητα υπάρχει μόνο ένα στη Μάνδρα Αττικής, ενώ 2 μικρότερα υπάρχουν στην Εύβοια.",
"Στη χώρα μας η ρητινοσυλλογή ρυθμίζεται από το Β.Δ 439/68 ΦΕΚ (150/Α/1968)."
],
      transcript: [
        ["0:00", "Η καλλιέργεια άρχιζε στα τέλη Απριλίου."],
	["0:05", "Στην αρχή κάναμε το πρώτο πελέκημα για να φτιάξουμε το πρόσωπο."],
	["0:10", "Η καλλιέργεια διαρκούσε μέχρι το τέλος καλοκαιριού, δηλαδή τέλος Σεπτέμβριου με αρχές Οκτωβρίου, οπότε έπρεπε να καθαρίσουμε το πρόσωπό του, δηλαδή να ξύσουμε την ρετσίνι, την ξερή."]
      ]
    },
    en: {
      title: "Duration of resin collection",
      audio: "",
      didYouKnow: ["In the post-war years, the highest resin production occurred in 1961, reaching 41,000 tons; this amount represented 3% of the global production.",
"In 1935, there were 32 resin processing factories in operation; by 1991, they had been reduced to 9, and today, practically only one remains fully active in Mandra, Attica, while two smaller ones exist in Euboea.",
"In our country, resin collection is regulated by the Royal Decree 439/68 (Government Gazette 150/A/1968)."
],
      transcript: [
        ["0:00", "The resin collection began in late April."],
 	["0:05", "At first, we did the first chipping to create the face."],
 	["0:10", "The cultivation lasted until the end of summer, meaning late September to early October, at which point we had to clean its face, that is, to scrape off the dry resin."]
      ]
    }
  },

  "8": {   // διάρκεια ~28 δευτ.
    photo: "~audio/img/1795025083528.jpg",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Η απόλυτη εμπιστοσύνη",
      audio: "audio/08.m4a",
      didYouKnow: ["Η ρητίνη Τραχείας πεύκης στη Λέσβο έχει καλύτερη ποιότητα, αλλά βγαίνει σε λιγότερη ποσότητα από το δέντρο, και η τιμή πώλησης ήταν ίδια με την ρητίνη της Χαλέπιου πεύκης.",
"Η τιμή πώλησης της ρητίνης άλλαζε από χρονιά σε χρονιά",
"Ένα δέντρο μπορούσε να βγάλει 3 κιλά ρητίνης την σεζόν."
],
      transcript: [
        ["0:00",  "Αυτό που πρέπει να τονιστεί είναι η απόλυτη εμπιστοσύνη ανάμεσα στους απλούς ανθρώπους. Χαρακτηριστικό παράδειγμα είναι η ζύγιση της ρετσίνης γινόταν χωρίς την παρουσία των ενδιαφερομένων."],
	["0:16", "Όταν οι αγωγιάτες έφερναν τα κασόνια με το ρετσίνι τα ζύγιζαν στην πλάστιγγα και γράφανε τις ποσότητες σε οκάδες και το όνομα του ρετσινά."]
      ]
    },
    en: {
      title: "The full trust",
      audio: "",
      didYouKnow: ["The resin of the Calabrian pine in Lesbos is of better quality, but yields smaller quantities per tree, and its selling price was the same as that of the Aleppo pine resin.",
"The selling price of the resin changed from year to year.",
"A tree could produce 1 kilo of resin per season."
],
      transcript: [
        ["0:00", "What must be emphasized is the absolute trust among ordinary people. A typical example is that the weighing of the resin was done without the presence of the interested parties."],
	["0:16", "When the muleteers brought the boxes of resin, they weighed them on the scale and wrote down the quantities in okes, along with the resin collector's name."]
      ]
    }
  },

  "9": {   // διάρκεια ~33 δευτ.
    photo: "~audio/img/αλμπουμ φωτογραφιων δρομενων/Επίσκεψη στον Παλίο οικισμό των ρετσινάδων.jpg",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Ο παλαιός οικισμός των ρετσινάδων",
      audio: "audio/09.m4a",
      didYouKnow: ["Στον παλιό οικισμό των ρετσινάδων στην Μικρή Λίμνη, υπήρχε και αυτοσχέδια παιδική χαρά για τα παιδιά των ρετσινάδων.",
"Οι ρετσινάδες εκείνη την εποχή όταν διέμειναν μέσα στο δάσος, έπλεναν τα παιδιά τους στο ποτάμι.",
"Κάθε βράδυ στους παλαιούς οικισμούς των ρετσινάδων υπήρχε μάζωξη, κσθώς μερικοί από αυτούς έπαιζαν διάφορα μουσικά όργανα, για να παιρνούν ευχάριστα τα βράδυα τους."
],
      transcript: [
        ["0:00", "Ο μεγαλύτερος οικισμός των ρετσινάδων του Αμπελικού, δηλαδή το 80% περίπου, ήταν στη Μικρή Λίμνη. Εκεί λειτουργούσαν τα πάντα, ακόμα θυμάμαι το μπακάλικο με τα ονομαστά μακαρόνια Ζενίθ, το καλαμάρι, το φούρνο, και ένα υποτυπώδες καφενείο."],
	["0:20", "Εκεί μπροστά, από τις δυο μεγάλες δεξαμενές της ρετσίνης, ήταν και το γραφείο, όπου συστεγάζονταν ο συνεταιρισμός των ρητινών Αμπελικού και ο εργολάβος μας ο Τάσος."]
      ]
    },
    en: {
      title: "The old settlement of the resin workers",
      audio: "",
      didYouKnow: ["In the old resin workers settlement in Mikri Limni, there was also a makeshift playground for the resin workers children.",
"In those days, when the resin workers lived in the forest, they would wash their children in the river.",
"Every evening in the old resin workers settlements there was a gathering, as some of them played various musical instruments to pass their evenings pleasantly."
],
      transcript: [
        ["0:00", "The largest settlement of the Ampeliko resin workers, accounting for about 80%, was in Mikri Limni. Everything operated there. I still remember the grocery store with the famous Zenith pasta, the squid, the bakery, and a rudimentary coffeehouse."],
	["0:20", "Right in front, by the two large resin tanks, was the office, which housed both the Ampeliko resin workers cooperative and our contractor, Tasos."]
      ]
    }
  },

  "10": {   // διάρκεια ~31 δευτ.
    photo: "/audio/img/το Αμπελικο χιονισμένο.jpg",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Αναμνήσεις",
      audio: "audio/10.m4a",
      didYouKnow: ["Το Αμπελικό αρχικά λεγόταν Βακχέον από το Βάκχο, τον θεό Διόνυσο, λόγω της καλλιέργειας πολλών αμπελιών που υπήρχαν κάποτε στο χωριό και έναν ναό του Βάκχου πάνω απο την σημερινή θέση του Αμπελικού. Έπειτα πήρε περί το 1400 την ονομασία Αμπελικόν",
"Στο Αμπελικό ήταν παράδοση να φοράνε για στέφανα γάμου κλήματα αμπελιού, καθώς συμβολίζουν την ευκαρπία"
],
      transcript: [
        ["0:00", "Θυμάμαι, όταν εργαζόμασταν στην Κράτηγο, ο γείτονάς μας, ο κύριος Αγιοκατσίκας, ζήτησε από τον πατέρα να φτιάξουν το κρασί. Με εντολή του πατέρα, μάζεψα καμιά δεκαριά κουβαδάκια καθαρή άσπρη ρετσίνη, χασέ. Η διαδικασία ήταν μια ιεροτελεστία. Ένας έριχνε με την κανάτα το κρασί πάνω στα χέρια μου και εγώ με το κρασί ανά κιλά έτριβα και διέλυα το ρετσίνι μέσα στις παλάμες μου."],
	["0:18", "Η διαδικασία ήταν μια ιεροτελεστία. Ένας έριχνε με την κανάτα το κρασί πάνω στα χέρια μου και εγώ με το κρασί να κυλάει έτριβα και διέλυα το ρετσίνι μέσα στις παλάμες μου."]
      ]
    },
    en: {
      title: "Old memories",
      audio: "",
      didYouKnow: ["Ampeliko was originally called Vakcheon after Bacchus, the god Dionysus, due to the cultivation of many vineyards that once existed in the village and a temple of Bacchus above the current location of Ampeliko. Around 1400, it took the name Ampelikon.",
"In Ampeliko, it was a tradition to wear grapevine branches as wedding crowns, as they symbolize fertility."
],
      transcript: [
        ["I remember, when we were working in Kratigos, our neighbor, Mr. Agiokatsikas, asked my father to make the wine. On my father's orders, I collected about ten small buckets of pure, spotless white resin."],
	["0:18", "The process was a ritual. One person poured the wine from a pitcher over my hands, and as the wine flowed, I rubbed and dissolved the resin between my palms."]
      ]
    }
  },

  "11": {   // διάρκεια ~8 δευτ.
    photo: "~audio/img/Ανώνυμο σχέδιο (2).png",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Ο Ρετσινάς Παναγιώτης Σίμος",
      audio: "audio/11.m4a",
      didYouKnow: ["Στο Αμπελικό εργάστηκαν 300-400 άτομα στην ρητινοσυλλογή.",
"Μερικές απο τις οικογένειες που εργάστηκαν ήταν οι εξής: Αγιοπαρασκευιώτης, Αϊβαλιώτη, Βαλάκου, Βερβέρη, Γερακέλλη, Δεσποτέλλη,Ευαγγελέλλη, Καμπούρη, Καρλαγάννη, Κουτσουραδή,Κουρουλή, Θαλασέλλη, Μελιγωνίτη, Μεταξή, Μπαρή, Παλαιολόγου, Πανταζή, Σίμου, Σιταρά, Σουλακέλλη, Σωτήρχου, Στραβογιώργη, Τσισμετζή, Χατζηγιάννη, Χονδρή, Ψωμαδέλλη κ.α."
],
      transcript: [
        ["0:00", "Το όνομά μου είναι Παναγιώτης Σίμος του Νικολάου και της Θεραπείας. Κατάγομαι από το Αμπελικό Λέσβου και είμαι το δέκατοπέμπτο από τα 16 παιδιά της οικογένειάς μας. "],
 	["0:12", "Το σπιτικό μας ήταν πάντοτε γεμάτο φωνές, ζωντάνια, αλλά και μεγάλες ευθύνες. Για να ζήσουν τόσα στόματα, δεν περίσσευαν χέρια."],
	["0:23", "Από μικρά παιδιά μπαίναμε στη βιοπάλη, μαθαίνοντας δίπλα στους γονείς μας την αξία του τίμιου ιδρώτα."],
	["0:30", "Όπως όλες οι οικογένειες του χωριού μας, έτσι και η δική μας η πολυμελής, είχαμε ως κύριο επάγγελμα την ρητινοσυλλογή."]
      ]
    },
    en: {
      title: "The resin worker Panagiotis Simos",
      audio: "",
      didYouKnow: ["In Ampeliko, 300-400 people worked in resin collection.",
"Some of the families that worked in it were: Agioparaskeviotis, Aivalioti, Valakou, Ververi, Gerakelli, Despotelli, Evangelelli, Kampouri, Karlaganni, Koutsouradi, Kourouli, Thalaselli, Meligoniti, Metaxi, Bari, Palaiologou, Pantazi, Simou, Sitara, Soulakelli, Sotirchou, Stravogiorgi, Tsismetzi, Chatzigianni, Chondri, Psomadelli, and others."
],
      transcript: [
        ["0:00", "My name is Panagiotis Simos, son of Nikolaos and Therapeia. I come from Ampeliko, Lesbos, and I am the fifteenth of the 16 children in our family."],
 	["0:12", "Our home was always full of voices and liveliness, but also great responsibilities. With so many mouths to feed, no pair of hands could be spared."],
 	["0:23", "From a young age, we entered the struggle for a living, learning beside our parents the value of honest sweat."],
 	["0:30", "Like all the families in our village, our large family also had resin collection as its main occupation."]
      ]
    }
  },

  "12": {   // διάρκεια ~19 δευτ.
    photo: "~audio/img/images.jpg",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Παραγωγή Μαστίχας",
      audio: "audio/12.m4a",
      didYouKnow: ["Η μαστίχα που παράγεται απο την ρητίνη πεύκου, παραγοταν σύμφωνα με μία πραδοσιακή συνταγή στο Αμπελικό, βράζοντας την καια αλλαζωντας το νερό για αρκετές φορές, σε συγκεκριμένη θερμοκρασία.",
"Οι κατοικοί του Αμπελικού, μασούσαν την ρητίνη καθώς τους βοηθούσε στην χώνεψη, την παλινδρόμηση και τον στομαχόπονο."
],
      transcript: [
        ["0:00", "Είχαμε την τύχη να γνωρίσουμε το Βασιλκούδι, την κυρία Βασιλική Γερακέλλη, η οποία ήξερε τα μυστικά για την παραγωγή της μαστίχας. Και η οποία φτιαχνότανε μόνο από ένα είδος ρετσινιού, από την άσπρη ρετσίνη, το χασέ, που έβγαινε μόνο από ορισμένες πευκαρούδες."]
      ]
    },
    en: {
      title: "Mastic Production",
      audio: "",
      didYouKnow: ["The mastic produced from pine resin was made according to a traditional recipe in Ampeliko, by boiling it and changing the water several times at a specific temperature.",
"The residents of Ampeliko chewed the resin as it helped them with digestion, acid reflux, and stomachaches."
],
      transcript: [
        ["0:00", "We were fortunate to meet Vasilkoudi, Mrs. Vasiliki Gerakelli, who knew the secrets of mastic production. It was made from only one kind of resin, the pure white resin, which came only from certain large pine trees."]
      ]
    }
  },

  "13": {   // διάρκεια ~48 δευτ.
    photo: "~audio/img/8c404085ad0e18ac4051528f2fb44122.jpg",      // κενό = defaultPhoto
    speaker: { el: "Ο ρετσινάς Π. Σίμος", en: "The resiner P. Simos" },
    el: {
      title: "Τα παράγωγα και οι χρήσεις της ρητίνης",
      audio: "audio/13.m4a",
      didYouKnow: ["Σήμερα χρησιμοποιείται ως πρώτη ύλη παραγωγής ποικιλίας βιομηχανικών προϊόντων.",
"Το κολοφώνιο -το στερεό απόσταγμα της ρητίνης- χρησιμοποιείται στην τυπογραφία, υφαντουργία, μεταλλουργία, καθώς και στην παρασκευή ποικιλίας προϊόντων όπως, αντιδιαβρωτικά, αρωματικά κεριά, αδιάβροχα υλικά, τεχνητά δόντια, έμπλαστρα, συντηρητικά, προσθετικά γεύσης, χρώματα, φάρμακα, χαρτόκολλες, διάφορα γαλακτώματα, τσίχλες κλπ.",
"Το τερεβινθέλαιο (κοινώς νέφτι) -το υγρό απόσταγμα της ρητίνης- χρησιμοποιείται κυρίως ως διαλυτικό στην παρασκευή χρωμάτων, αρωμάτων, καλλυντικών, φαρμάκων, κλπ."
],
      transcript: [
        ["0:00", "Τα παραγόμενα προϊόντα από το ρετσίνι, όπως το νέφτι, το κολοφώνιο, η χρησιμοποίηση της ρητίνης στην φαρμακευτική επιστήμη και στην τροφική αλυσίδα, οι απλοί άνθρωποι τη χρησιμοποιούσαν με θαυμαστούς τρόπους."],
	["0:16", "Πρώτον, για άμεση επούλωση πληγών. Μία-δύο μικρές επαλείψεις, όπως έβγαινε από το πεύκο, αρκούσαν για να κλείσει το τραύμα."],
	["0:28", "Δεύτερον, επίσης συγκεντρώναμε ρετσινόλαδο για τις πληγές. Τρίτον, φτιάχναμε μαστίχα."],
	["0:37", "Τέταρτον, επίσης τη χρησιμοποιούσανε και σαν συντηρητικό προκειμένου να διατηρηθεί το κρασί."]
      ]
    },
    en: {
      title: "Derivatives and uses of resin",
      audio: "",
      didYouKnow: ["Today it is used as a raw material for the production of a variety of industrial products.",
"Rosin—the solid distillate of resin—is used in printing, textiles, and metallurgy, as well as in the manufacture of a variety of products such as anti-corrosives, scented candles, waterproof materials, artificial teeth, plasters, preservatives, flavorings, paints, pharmaceuticals, paper glues, various emulsions, chewing gums, etc.",
"Turpentine oil (commonly known as turpentine)—the liquid distillate of resin—is mainly used as a solvent in the production of paints, perfumes, cosmetics, pharmaceuticals, etc."
],
      transcript: [
        ["0:00", "From the products derived from resin, such as turpentine and rosin, to the use of resin in pharmaceutical science and the food chain, ordinary people used it in remarkable ways."],
	["0:16", "First, for the immediate healing of wounds. One or two small applications, straight from the pine tree, were enough to close the wound."],
	["0:28", "Second, we also collected resin oil for wounds. Third, we made mastic."],
	["0:37", "Fourth, they also used it as a preservative to keep the wine from spoiling."]
      ]
    }
  },

  

};
