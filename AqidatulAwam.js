/* ISI KITAB: Aqidatul Awam (عَقِيدَةُ الْعَوَامِّ) karya Sayyid Ahmad al-Marzuqi (1205-1281 H).
   Unggah file ini ke: https://teamkeringat.github.io/KitabKuning/AqidatulAwam.js
   Katalog (KitabKuning2.js) akan memuatnya otomatis saat kitab ini dipilih.

   ATURAN PENULISAN (berlaku untuk semua kitab):
   1. Nama di window.KITAB["..."] HARUS sama persis dengan nama kitab di katalog.
   2. Nama file = nama kitab tanpa spasi/tanda baca, tiap kata berhuruf besar awal + ".js"
      (Aqidatul Awam -> AqidatulAwam.js).
   3. Satu kitab = daftar "bab". Setiap bab berisi daftar "isi" (potongan teks) dan "penjelasan".
   Isian yang boleh dikosongkan/dihapus: sebutan, catatan, arab, pengantar, no, lt, ket, penjelasan.
   Teks Arab dua baris pada satu bait dipisah dengan \n. Terjemah dan penjelasan adalah tulisan sendiri. */
window.KITAB = window.KITAB || {};
window.KITAB["Aqidatul Awam"] = {
  sebutan: "Bab",
  catatan: "Nazham 57 bait tentang pokok akidah Ahlussunnah. Pembagian bab di bawah adalah pengelompokan tema untuk memudahkan belajar, bukan judul asli dari penazham. Periksa kembali Arab dan harakat dengan cetakan yang Anda pegang.",
  bab: [
    {
      judul: "Pembukaan",
      arab: "الْمُقَدِّمَةُ",
      pengantar: "Bait 1-4: basmalah, pujian kepada Allah, shalawat, dan doa untuk keluarga serta sahabat Nabi.",
      isi: [
        { no: 1, ar: "أَبْدَأُ بِاسْمِ اللهِ وَالرَّحْمَنِ\nوَبِالرَّحِيمِ دَائِمِ الْإِحْسَانِ", tr: "Aku memulai dengan nama Allah, Yang Maha Pengasih, dan dengan nama Yang Maha Penyayang, yang kebaikan-Nya selalu terus-menerus." },
        { no: 2, ar: "فَالْحَمْدُ لِلهِ الْقَدِيمِ الْأَوَّلِ\nالْآخِرِ الْبَاقِي بِلَا تَحَوُّلِ", tr: "Maka segala puji bagi Allah Yang Qadim lagi Awal, Yang Akhir dan Kekal tanpa berubah-ubah." },
        { no: 3, ar: "ثُمَّ الصَّلَاةُ وَالسَّلَامُ سَرْمَدَا\nعَلَى النَّبِيِّ خَيْرِ مَنْ قَدْ وَحَّدَا", tr: "Kemudian shalawat dan salam senantiasa tercurah kepada Nabi, sebaik-baik orang yang telah mengesakan Allah." },
        { no: 4, ar: "وَآلِهِ وَصَحْبِهِ وَمَنْ تَبِعْ\nسَبِيلَ دِينِ الْحَقِّ غَيْرَ مُبْتَدِعْ", tr: "Juga kepada keluarga dan sahabat beliau, serta siapa pun yang mengikuti jalan agama yang benar, bukan pelaku bid'ah." }
      ],
      penjelasan: "Penazham memulai dengan basmalah, hamdalah, dan shalawat sebagaimana adab para ulama dalam menulis. Pada bait kedua beliau sudah menyisipkan empat sifat Allah: Qadim (tidak bermula), Awwal, Akhir, dan Baqi (kekal). Kata \"tanpa berubah\" menegaskan bahwa Allah tidak mengalami perubahan keadaan seperti makhluk. Bait keempat menyebut ciri pengikut yang selamat: mengikuti jalan agama yang benar dan tidak membuat-buat ajaran baru."
    },
    {
      judul: "Dua Puluh Sifat Wajib bagi Allah",
      arab: "الصِّفَاتُ الْوَاجِبَةُ لِلَّهِ",
      pengantar: "Bait 5-9: ilmu tauhid dimulai dengan mengenal Allah melalui sifat-sifat yang wajib bagi-Nya.",
      isi: [
        { no: 5, ar: "وَبَعْدُ فَاعْلَمْ بِوُجُوبِ الْمَعْرِفَهْ\nمِنْ وَاجِبٍ لِلهِ عِشْرِينَ صِفَهْ", tr: "Amma ba'du, ketahuilah wajibnya mengenal dua puluh sifat yang wajib bagi Allah." },
        { no: 6, ar: "فَاللهُ مَوْجُودٌ قَدِيمٌ بَاقِي\nمُخَالِفٌ لِلْخَلْقِ بِالْإِطْلَاقِ", tr: "Allah itu ada, tidak bermula, kekal, dan berbeda dari makhluk dalam segala hal." },
        { no: 7, ar: "وَقَائِمٌ غَنِيٌّ وَوَاحِدٌ وَحَيّْ\nقَادِرٌ مُرِيدٌ عَالِمٌ بِكُلِّ شَيّْ", tr: "Berdiri dengan Zat-Nya sendiri, Maha Kaya, Maha Esa, dan Maha Hidup; Maha Kuasa, Maha Berkehendak, dan Maha Mengetahui segala sesuatu." },
        { no: 8, ar: "سَمِيعٌ الْبَصِيرُ وَالْمُتَكَلِّمُ\nلَهُ صِفَاتٌ سَبْعَةٌ تَنْتَظِمُ", tr: "Maha Mendengar, Maha Melihat, dan Maha Berfirman. Allah memiliki tujuh sifat yang tersusun (sifat Ma'ani)." },
        { no: 9, ar: "فَقُدْرَةٌ إِرَادَةٌ سَمْعٌ بَصَرْ\nحَيَاةٌ الْعِلْمُ كَلَامٌ اسْتَمَرّْ", tr: "Yaitu Qudrah (kuasa), Iradah (kehendak), Sama' (mendengar), Bashar (melihat), Hayah (hidup), Ilmu, dan Kalam (berfirman) yang terus berlangsung." }
      ],
      penjelasan: "Dua puluh sifat wajib dikelompokkan menjadi empat:\n1. Nafsiyyah (1): Wujud (ada).\n2. Salbiyyah (5): Qidam (tidak bermula), Baqa' (kekal), Mukhalafatu lil hawadits (berbeda dari makhluk), Qiyamuhu binafsihi (berdiri sendiri, tidak butuh tempat atau pencipta), dan Wahdaniyyah (esa dalam Zat, sifat, dan perbuatan).\n3. Ma'ani (7): Qudrah, Iradah, Ilmu, Hayah, Sama', Bashar, Kalam.\n4. Ma'nawiyyah (7): Kaunuhu Qadiran, Muridan, 'Aliman, Hayyan, Sami'an, Bashiran, Mutakalliman, yaitu keadaan Allah sebagai Yang Maha Kuasa, Berkehendak, dan seterusnya, yang lahir dari tujuh sifat Ma'ani.\nMengenal sifat-sifat ini wajib bagi setiap mukallaf, supaya imannya benar dan Allah tidak disifati dengan sifat kekurangan."
    },
    {
      judul: "Sifat Jaiz bagi Allah",
      arab: "الْجَائِزُ فِي حَقِّ اللهِ",
      pengantar: "Bait 10: satu sifat jaiz (boleh) bagi Allah.",
      isi: [
        { no: 10, ar: "وَجَائِزٌ بِفَضْلِهِ وَعَدْلِهِ\nتَرْكٌ لِكُلِّ مُمْكِنٍ كَفِعْلِهِ", tr: "Dan boleh bagi Allah, atas dasar karunia dan keadilan-Nya, meninggalkan setiap hal yang mungkin sebagaimana boleh pula melakukannya." }
      ],
      penjelasan: "Hal yang mungkin (mumkin) adalah sesuatu yang bisa ada dan bisa tidak ada. Allah bebas menciptakan atau tidak menciptakannya; tidak ada yang mewajibkan sesuatu atas Allah. Pahala bagi yang taat adalah karunia-Nya, dan siksa bagi yang durhaka adalah keadilan-Nya."
    },
    {
      judul: "Sifat Para Rasul",
      arab: "صِفَاتُ الرُّسُلِ",
      pengantar: "Bait 11-13: empat sifat wajib, sifat jaiz, dan keterjagaan (ishmah) para nabi dan rasul.",
      isi: [
        { no: 11, ar: "أَرْسَلَ أَنْبِيَا ذَوِي فَطَانَهْ\nبِالصِّدْقِ وَالتَّبْلِيغِ وَالْأَمَانَهْ", tr: "Allah mengutus para nabi yang cerdas, dengan sifat jujur, menyampaikan wahyu, dan dapat dipercaya." },
        { no: 12, ar: "وَجَائِزٌ فِي حَقِّهِمْ مِنْ عَرَضِ\nبِغَيْرِ نَقْصٍ كَخَفِيفِ الْمَرَضِ", tr: "Dan boleh terjadi pada mereka hal-hal manusiawi yang tidak mengurangi kemuliaan, seperti sakit ringan." },
        { no: 13, ar: "عِصْمَتُهُمْ كَسَائِرِ الْمَلَائِكَهْ\nوَاجِبَةٌ وَفَاضَلُوا الْمَلَائِكَهْ", tr: "Keterjagaan mereka dari dosa, seperti halnya para malaikat, adalah wajib; dan mereka lebih utama daripada para malaikat." }
      ],
      penjelasan: "Empat sifat wajib rasul: Shidq (jujur), Amanah (dapat dipercaya, terjaga dari dosa lahir dan batin), Tabligh (menyampaikan semua yang diperintahkan), dan Fathanah (cerdas, mampu membantah lawan dengan hujjah). Lawannya mustahil: Kidzb, Khiyanah, Kitman, dan Baladah. Sifat jaiz berupa 'arad basyariyyah, yaitu keadaan manusiawi seperti makan, tidur, sakit ringan, dan menikah, yang tidak menurunkan martabat mereka. Bait ke-13 menyebut keutamaan para nabi atas malaikat; dalam syarah ada perincian pendapat ulama tentang keutamaan malaikat dan manusia, sehingga bagian ini sebaiknya dikaji bersama guru."
    },
    {
      judul: "Sifat Mustahil dan Dua Puluh Lima Rasul",
      arab: "الْمُسْتَحِيلُ وَالرُّسُلُ الْخَمْسَةُ وَالْعِشْرُونَ",
      pengantar: "Bait 14-20: sifat mustahil, jumlah akidah lima puluh, dan nama-nama 25 rasul yang wajib diimani.",
      isi: [
        { no: 14, ar: "وَالْمُسْتَحِيلُ ضِدُّ كُلِّ وَاجِبِ\nفَاحْفَظْ لِخَمْسِينَ بِحُكْمٍ وَاجِبِ", tr: "Yang mustahil adalah lawan dari setiap yang wajib. Maka hafalkanlah lima puluh akidah dengan hukum wajib." },
        { no: 15, ar: "تَفْصِيلُ خَمْسَةٍ وَعِشْرِينَ لَزِمْ\nكُلَّ مُكَلَّفٍ فَحَقِّقْ وَاغْتَنِمْ", tr: "Mengetahui secara terperinci dua puluh lima rasul itu wajib bagi setiap mukallaf; maka yakinilah dan ambillah manfaatnya." },
        { no: 16, ar: "هُمْ آدَمُ إِدْرِيسُ نُوحٌ هُودُ مَعْ\nصَالِحْ وَإِبْرَاهِيمُ كُلٌّ مُتَّبَعْ", tr: "Mereka adalah Adam, Idris, Nuh, Hud, bersama Shalih dan Ibrahim; masing-masing wajib diikuti." },
        { no: 17, ar: "لُوطٌ وَإِسْمَاعِيلُ إِسْحَاقُ كَذَا\nيَعْقُوبُ يُوسُفٌ وَأَيُّوبُ احْتَذَى", tr: "Luth, Ismail, Ishaq, demikian pula Ya'qub, Yusuf, dan Ayyub, yang diteladani." },
        { no: 18, ar: "شُعَيْبُ هَارُونُ وَمُوسَى وَالْيَسَعْ\nذُو الْكِفْلِ دَاوُدُ سُلَيْمَانُ اتَّبَعْ", tr: "Syu'aib, Harun, Musa, dan Alyasa'; Dzulkifli, Dawud, dan Sulaiman, ikutilah mereka." },
        { no: 19, ar: "إِلْيَاسُ يُونُسُ زَكَرِيَّا يَحْيَى\nعِيسَى وَطَهَ خَاتِمٌ دَعْ غَيَّا", tr: "Ilyas, Yunus, Zakariya, Yahya, Isa, dan Thaha (Muhammad) sebagai penutup; tinggalkanlah kesesatan." },
        { no: 20, ar: "عَلَيْهِمُ الصَّلَاةُ وَالسَّلَامُ\nوَآلِهِمْ مَا دَامَتِ الْأَيَّامُ", tr: "Semoga shalawat dan salam tercurah atas mereka dan keluarga mereka selama masih ada hari-hari." }
      ],
      penjelasan: "Dua puluh sifat wajib + dua puluh sifat mustahil + satu sifat jaiz bagi Allah = 41 akidah. Ditambah empat wajib + empat mustahil + satu jaiz bagi rasul = 9 akidah. Jumlahnya 50 akidah, itulah \"lima puluh\" pada bait 14.\nDua puluh lima rasul yang wajib diimani secara terperinci: Adam, Idris, Nuh, Hud, Shalih, Ibrahim, Luth, Ismail, Ishaq, Ya'qub, Yusuf, Ayyub, Syu'aib, Harun, Musa, Alyasa', Dzulkifli, Dawud, Sulaiman, Ilyas, Yunus, Zakariya, Yahya, Isa, dan Muhammad ﷺ. Rasul-rasul selain mereka diimani secara garis besar. \"Thaha\" adalah salah satu nama Nabi Muhammad ﷺ."
    },
    {
      judul: "Malaikat",
      arab: "الْمَلَائِكَةُ",
      pengantar: "Bait 21-23: sifat malaikat dan sepuluh malaikat yang wajib diketahui namanya.",
      isi: [
        { no: 21, ar: "وَالْمَلَكُ الَّذِي بِلَا أَبٍ وَأُمّْ\nلَا أَكْلَ لَا شُرْبَ وَلَا نَوْمَ لَهُمْ", tr: "Malaikat tidak berayah dan beribu; mereka tidak makan, tidak minum, dan tidak tidur." },
        { no: 22, ar: "تَفْصِيلُ عَشْرٍ مِنْهُمُ جِبْرِيلُ\nمِيكَالُ إِسْرَافِيلُ عِزْرَائِيلُ", tr: "Sepuluh di antara mereka yang diperinci: Jibril, Mikail, Israfil, dan Izrail." },
        { no: 23, ar: "مُنْكَرْ نَكِيرٌ وَرَقِيبٌ وَكَذَا\nعَتِيدُ مَالِكٌ وَرِضْوَانُ احْتَذَى", tr: "Munkar, Nakir, dan Raqib; demikian pula Atid, Malik, dan Ridwan." }
      ],
      penjelasan: "Malaikat adalah makhluk Allah yang diciptakan dari cahaya, taat penuh, dan tidak bersifat laki-laki maupun perempuan. Tugas sepuluh malaikat yang disebut: Jibril menyampaikan wahyu, Mikail mengatur rezeki dan hujan, Israfil meniup sangkakala, Izrail mencabut nyawa, Munkar dan Nakir menanyai penghuni kubur, Raqib dan Atid mencatat amal baik dan buruk, Malik menjaga neraka, dan Ridwan menjaga surga."
    },
    {
      judul: "Kitab-kitab Allah",
      arab: "الْكُتُبُ الْمُنَزَّلَةُ",
      pengantar: "Bait 24-26: empat kitab dan lembaran-lembaran para nabi.",
      isi: [
        { no: 24, ar: "أَرْبَعَةٌ مِنْ كُتُبٍ تَفْصِيلُهَا\nتَوْرَاةُ مُوسَى بِالْهُدَى تَنْزِيلُهَا", tr: "Empat kitab yang wajib diketahui secara terperinci: Taurat untuk Musa, diturunkan membawa petunjuk." },
        { no: 25, ar: "زَبُورُ دَاوُدَ وَإِنْجِيلٌ عَلَى\nعِيسَى وَفُرْقَانٌ عَلَى خَيْرِ الْمَلَا", tr: "Zabur untuk Dawud, Injil atas Isa, dan Al-Furqan (Al-Qur'an) atas sebaik-baik manusia, yaitu Nabi Muhammad." },
        { no: 26, ar: "وَصُحُفُ الْخَلِيلِ وَالْكَلِيمِ\nفِيهَا كَلَامُ الْحَكَمِ الْعَلِيمِ", tr: "Dan lembaran-lembaran Nabi Ibrahim al-Khalil dan Nabi Musa al-Kalim; di dalamnya terdapat firman Allah Yang Maha Bijaksana lagi Maha Mengetahui." }
      ],
      penjelasan: "Wajib mengimani bahwa seluruh kitab adalah firman Allah yang diturunkan kepada para rasul-Nya. Al-Qur'an adalah penutup dan penyempurna, serta terjaga dari perubahan. Al-Khalil adalah gelar Nabi Ibrahim, dan al-Kalim gelar Nabi Musa 'alaihimassalam."
    },
    {
      judul: "Menerima Ajaran Rasul dan Hari Akhir",
      arab: "التَّسْلِيمُ وَالْيَوْمُ الْآخِرُ",
      pengantar: "Bait 27-28: kewajiban membenarkan apa yang dibawa Rasul dan beriman kepada hari akhir.",
      isi: [
        { no: 27, ar: "وَكُلُّ مَا أَتَى بِهِ الرَّسُولُ\nفَحَقُّهُ التَّسْلِيمُ وَالْقَبُولُ", tr: "Segala yang dibawa oleh Rasul, hak atasnya adalah dipasrahkan dan diterima." },
        { no: 28, ar: "إِيمَانُنَا بِيَوْمِ آخِرٍ وَجَبْ\nوَكُلِّ مَا كَانَ بِهِ مِنَ الْعَجَبْ", tr: "Iman kita kepada hari akhir adalah wajib, juga kepada segala hal menakjubkan yang terjadi di dalamnya." }
      ],
      penjelasan: "Seseorang tidak sempurna imannya bila menolak sebagian dari apa yang pasti dibawa Nabi ﷺ. Termasuk perkara hari akhir yang wajib diimani: nikmat dan siksa kubur, kebangkitan, padang mahsyar, hisab, timbangan amal (mizan), shirath, telaga, syafaat, surga, dan neraka. Hal-hal ini ditetapkan oleh dalil Al-Qur'an dan hadis, sehingga diterima apa adanya tanpa mempertanyakan hakikat bentuknya."
    },
    {
      judul: "Khatimah: Nasab dan Keluarga Nabi",
      arab: "خَاتِمَةٌ فِي نَسَبِ النَّبِيِّ وَأَهْلِهِ",
      pengantar: "Bait 29-45: pasal penutup tentang sebagian hal yang perlu diketahui seputar Nabi Muhammad ﷺ.",
      isi: [
        { no: 29, ar: "خَاتِمَةٌ فِي ذِكْرِ بَاقِي الْوَاجِبِ\nمِمَّا عَلَى مُكَلَّفٍ مِنْ وَاجِبِ", tr: "Penutup: menyebutkan sisa hal yang wajib bagi mukallaf." },
        { no: 30, ar: "نَبِيُّنَا مُحَمَّدٌ قَدْ أُرْسِلَا\nلِلْعَالَمِينَ رَحْمَةً وَفُضِّلَا", tr: "Nabi kita Muhammad diutus untuk seluruh alam sebagai rahmat, dan dilebihkan atas semua makhluk." },
        { no: 31, ar: "أَبُوهُ عَبْدُ اللهِ عَبْدُ الْمُطَّلِبْ\nوَهَاشِمٌ عَبْدُ مَنَافٍ يَنْتَسِبْ", tr: "Ayah beliau Abdullah bin Abdul Muththalib, dan nasabnya bersambung kepada Hasyim, lalu Abdu Manaf." },
        { no: 32, ar: "وَأُمُّهُ آمِنَةُ الزُّهْرِيَّهْ\nأَرْضَعَهُ حَلِيمَةُ السَّعْدِيَّهْ", tr: "Ibu beliau Aminah dari Bani Zuhrah; yang menyusui beliau adalah Halimah as-Sa'diyyah." },
        { no: 33, ar: "مَوْلِدُهُ بِمَكَّةَ الْأَمِينَهْ\nوَفَاتُهُ بِطَيْبَةَ الْمَدِينَهْ", tr: "Beliau lahir di Makkah yang aman, dan wafat di Thaibah, yaitu Madinah." },
        { no: 34, ar: "أَتَمَّ قَبْلَ الْوَحْيِ أَرْبَعِينَا\nوَعُمْرُهُ قَدْ جَاوَزَ السِّتِّينَا", tr: "Beliau menyempurnakan empat puluh tahun sebelum wahyu turun, dan usia beliau melewati enam puluh tahun." },
        { no: 35, ar: "سَبْعَةٌ أَوْلَادُهُ فَمِنْهُمُ\nثَلَاثَةٌ مِنَ الذُّكُورِ تُفْهَمُ", tr: "Putra-putri beliau berjumlah tujuh; di antaranya tiga adalah laki-laki." },
        { no: 36, ar: "قَاسِمٌ وَعَبْدُ اللهِ وَهْوَ الطَّيِّبُ\nوَطَاهِرٌ بِذَيْنِ ذَا يُلَقَّبُ", tr: "Qasim dan Abdullah, yaitu ath-Thayyib; dan ath-Thahir, dengan dua gelar itu Abdullah dijuluki." },
        { no: 37, ar: "أَتَاهُ إِبْرَاهِيمُ مِنْ سَرِيَّهْ\nفَأُمُّهُ مَارِيَةُ الْقِبْطِيَّهْ", tr: "Ibrahim lahir dari seorang sariyyah (budak yang dinikahi), ibunya Mariyah al-Qibthiyyah." },
        { no: 38, ar: "وَغَيْرُ إِبْرَاهِيمَ مِنْ خَدِيجَهْ\nهُمْ سِتَّةٌ فَخُذْ بِهِمْ وَلِيجَهْ", tr: "Selain Ibrahim, semuanya dari Khadijah, berjumlah enam; jadikanlah mereka sebagai orang dekat yang kamu cintai." },
        { no: 39, ar: "وَأَرْبَعٌ مِنَ الْإِنَاثِ تُذْكَرُ\nرِضْوَانُ رَبِّي لِلْجَمِيعِ يُذْكَرُ", tr: "Dan empat yang perempuan akan disebutkan; semoga keridhaan Tuhanku bagi mereka semua." },
        { no: 40, ar: "فَاطِمَةُ الزَّهْرَاءُ بَعْلُهَا عَلِي\nوَابْنَاهُمَا السِّبْطَانِ فَضْلُهُمْ جَلِي", tr: "Fathimah az-Zahra, suaminya Ali, dan kedua putra mereka (Hasan dan Husain), dua cucu Nabi yang keutamaannya jelas." },
        { no: 41, ar: "فَزَيْنَبٌ وَبَعْدَهَا رُقَيَّهْ\nوَأُمُّ كُلْثُومٍ زَكَتْ رَضِيَّهْ", tr: "Lalu Zainab, sesudahnya Ruqayyah, dan Ummu Kultsum, yang bersih lagi diridhai." },
        { no: 42, ar: "عَنْ تِسْعِ نِسْوَةٍ وَفَاةُ الْمُصْطَفَى\nخُيِّرْنَ فَاخْتَرْنَ النَّبِيَّ الْمُقْتَفَى", tr: "Nabi terpilih wafat dengan meninggalkan sembilan istri. Mereka diberi pilihan, lalu memilih Nabi yang diikuti." },
        { no: 43, ar: "عَائِشَةٌ وَحَفْصَةٌ وَسَوْدَةُ\nصَفِيَّةٌ مَيْمُونَةٌ وَرَمْلَةُ", tr: "Aisyah, Hafshah, dan Saudah; Shafiyyah, Maimunah, dan Ramlah." },
        { no: 44, ar: "هِنْدٌ وَزَيْنَبٌ كَذَا جُوَيْرِيَهْ\nلِلْمُؤْمِنِينَ أُمَّهَاتٌ مَرْضِيَّهْ", tr: "Hindun, Zainab, dan Juwairiyah; mereka adalah ibu-ibu orang beriman yang diridhai." },
        { no: 45, ar: "حَمْزَةُ عَمُّهُ وَعَبَّاسٌ كَذَا\nعَمَّتُهُ صَفِيَّةٌ ذَاتُ احْتِذَا", tr: "Hamzah adalah paman beliau, demikian pula Abbas; bibi beliau Shafiyyah, yang patut diteladani." }
      ],
      penjelasan: "Pasal ini mengajarkan hal-hal pokok tentang pribadi Nabi ﷺ.\nNasab: Muhammad bin Abdullah bin Abdul Muththalib bin Hasyim bin Abdu Manaf. Ibunda: Aminah binti Wahb dari Bani Zuhrah. Nabi lahir di Makkah dan wafat di Madinah (nama lainnya Thaibah dan Thabah).\nPutra-putri: tujuh orang. Qasim, Abdullah (digelari ath-Thayyib dan ath-Thahir), dan empat putri (Zainab, Ruqayyah, Ummu Kultsum, Fathimah) lahir dari Khadijah; Ibrahim lahir dari Mariyah al-Qibthiyyah.\nSembilan istri yang masih hidup saat beliau wafat: Aisyah, Hafshah, Saudah, Shafiyyah, Maimunah, Ramlah (Ummu Habibah), Hindun (Ummu Salamah), Zainab binti Jahsy, dan Juwairiyah. Khadijah dan Zainab binti Khuzaimah telah wafat lebih dahulu. Nama-nama dalam bait ini adalah yang dimaksud penazham; sebagian punya nama atau julukan lain.\nPaman dan bibi yang disebut: Hamzah, Abbas, dan Shafiyyah radhiyallahu 'anhum."
    },
    {
      judul: "Isra' dan Mi'raj",
      arab: "الْإِسْرَاءُ وَالْمِعْرَاجُ",
      pengantar: "Bait 46-50: perjalanan malam Nabi dari Makkah ke Baitul Maqdis, naik ke langit, dan kewajiban shalat lima waktu.",
      isi: [
        { no: 46, ar: "وَقَبْلَ هِجْرَةِ النَّبِيِّ الْإِسْرَا\nمِنْ مَكَّةٍ لَيْلًا لِقُدْسٍ يُدْرَى", tr: "Sebelum hijrah Nabi terjadi Isra', yaitu perjalanan malam dari Makkah menuju Baitul Maqdis yang dikenal." },
        { no: 47, ar: "وَبَعْدَ إِسْرَاءٍ عُرُوجٌ لِلسَّمَا\nحَتَّى رَأَى النَّبِيُّ رَبًّا كَلَّمَا", tr: "Setelah Isra' terjadi Mi'raj ke langit, hingga Nabi melihat Tuhan yang berbicara kepadanya." },
        { no: 48, ar: "مِنْ غَيْرِ كَيْفٍ وَانْحِصَارٍ وَافْتَرَضْ\nعَلَيْهِ خَمْسًا بَعْدَ خَمْسِينَ فَرَضْ", tr: "Tanpa bentuk dan tanpa batasan arah. Lalu Allah mewajibkan shalat lima waktu kepadanya setelah sebelumnya lima puluh." },
        { no: 49, ar: "وَبَلَّغَ الْأُمَّةَ بِالْإِسْرَاءِ\nوَفَرْضِ خَمْسَةٍ بِلَا امْتِرَاءِ", tr: "Nabi menyampaikan kepada umat tentang Isra' dan kewajiban lima shalat tanpa keraguan." },
        { no: 50, ar: "قَدْ فَازَ صِدِّيقٌ بِتَصْدِيقٍ لَهُ\nوَبِالْعُرُوجِ الصِّدْقُ وَافَى أَهْلَهُ", tr: "Abu Bakar ash-Shiddiq beruntung karena membenarkan beliau, dan dengan Mi'raj itu kejujuran mendatangi pemiliknya." }
      ],
      penjelasan: "Isra' ialah perjalanan Nabi ﷺ pada malam hari dari Masjidil Haram ke Masjidil Aqsha, dan Mi'raj ialah naiknya beliau dari sana ke langit hingga Sidratul Muntaha. Dalam peristiwa ini shalat lima waktu diwajibkan, setelah semula lima puluh waktu lalu diringankan atas permohonan Nabi Muhammad ﷺ kepada Allah. Kata \"melihat Tuhan\" pada bait 47 adalah pendapat yang dipegang penazham; para ulama berbeda pendapat tentang hakikatnya (dengan mata kepala atau dengan hati), dan semuanya sepakat bahwa itu tanpa penyerupaan, tanpa kaifiyyat, dan tanpa arah (bait 48). Abu Bakar digelari ash-Shiddiq karena segera membenarkan kabar Isra' Mi'raj saat sebagian orang meragukannya."
    },
    {
      judul: "Penutup",
      arab: "الْخَاتِمَةُ",
      pengantar: "Bait 51-57: ringkasan, doa, dan keterangan nama serta tahun penyusunan nazham.",
      isi: [
        { no: 51, ar: "وَهَذِهِ عَقِيدَةٌ مُخْتَصَرَهْ\nوَلِلْعَوَامِ سَهْلَةٌ مُيَسَّرَهْ", tr: "Inilah akidah yang ringkas, mudah dan dimudahkan bagi orang awam." },
        { no: 52, ar: "نَاظِمُ تِلْكَ أَحْمَدُ الْمَرْزُوقِي\nمَنْ يَنْتَمِي لِلصَّادِقِ الْمَصْدُوقِ", tr: "Penazhamnya adalah Ahmad al-Marzuqi, yang bernasab kepada Nabi yang jujur lagi dibenarkan." },
        { no: 53, ar: "وَالْحَمْدُ لِلهِ وَصَلَّى سَلَّمَا\nعَلَى النَّبِيِّ خَيْرِ مَنْ قَدْ عَلَّمَا", tr: "Segala puji bagi Allah, semoga shalawat dan salam atas Nabi, sebaik-baik pengajar." },
        { no: 54, ar: "وَالْآلِ وَالصَّحْبِ وَكُلِّ مُرْشِدِ\nوَكُلِّ مَنْ بِخَيْرِ هَدْيٍ يَقْتَدِي", tr: "Juga atas keluarga, para sahabat, setiap pemberi petunjuk, dan siapa pun yang mengikuti petunjuk terbaik." },
        { no: 55, ar: "وَأَسْأَلُ الْكَرِيمَ إِخْلَاصَ الْعَمَلْ\nوَنَفْعَ كُلِّ مَنْ بِهَا قَدِ اشْتَغَلْ", tr: "Aku memohon kepada Yang Maha Mulia keikhlasan dalam beramal, dan manfaat bagi setiap orang yang menekuni nazham ini." },
        { no: 56, ar: "أَبْيَاتُهَا (مَيْزٌ) بِعَدِّ الْجُمَّلِ\nتَارِيخُهَا (لِي حَيُّ غُرٍّ) جُمَّلِ", tr: "Jumlah baitnya \"Maiz\" menurut hitungan huruf abjad, dan tahun penyusunannya \"Li Hayyu Ghurr\" menurut hitungan yang sama." },
        { no: 57, ar: "سَمَّيْتُهَا عَقِيدَةَ الْعَوَامِّ\nمِنْ وَاجِبٍ فِي الدِّينِ بِالتَّمَامِ", tr: "Aku namakan nazham ini Aqidatul Awam, berisi hal-hal wajib dalam agama secara lengkap." }
      ],
      penjelasan: "Hitungan abjad (hisab jummal): م = 40, ي = 10, ز = 7, jumlahnya 57 bait. Untuk tahun: ل = 30, ي = 10, ح = 8, ي = 10, غ = 1000, ر = 200, jumlahnya 1258 H. Ahmad al-Marzuqi adalah ulama Mazhab Maliki yang lama mengajar di Makkah. Nazham ini ditulis dalam bahasa sederhana agar mudah dihafal oleh anak-anak dan orang awam, dan sampai sekarang menjadi hafalan awal di banyak pesantren dan madrasah."
    }
  ]
};


