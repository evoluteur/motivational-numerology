/*
  Motivational-Numerology
  (c) 2025 Sally Faubion & Olivier Giulieri
  http://www.sallysnumbers.com
*/

var meaning = {
  master: "Ana Sayı",

  destiny: {
    title: "Kader",
    description:
      "Bu, kişisel motivasyonlarınız, çevrenizde neyi ve kimi sevdiğiniz ve en çok arzu edeceğiniz kariyer(ler) ile ilgili en etkili sayıdır.",
    func: "Ay + Gün + Yıl",
    1: "Risk alan kişinin, girişimcinin, tamamen bağımsız iz bırakanın yolu budur.",
    2: "Ev hanımı, takım oyuncusu, bakıcı ve koleksiyoncunun yolu budur.",
    3: 'Maceracı, yaratıcı, meşhur "Peter Pan"ın ve/veya disiplinli bilimsel "Dapper Dan/Danielle"nin yolu budur.',
    4: "Çalışkan, özverili, dürüst çalışan-girişimci ve iyi kalpli, sadık dostun yolu budur.",
    5: "Enerji dolu özgürlük savaşçısının, savunucunun ve şık, dünya gezgininin yolu budur.",
    6: "Herkese karşı iyi vatandaşın, sabırlı öğretmenin, adalet ve adaletin savunucusunun ve bir kozmik ebeveynin yolu budur.",
    7: "Alimin, mükemmeliyetçinin, dahinin ve sırların koruyucusunun yolu budur.",
    8: "Aile reisi, yargıç, yapımcı-yönetmen, orkestratör ve sınıf eyleminin yolu budur.",
    9: 'Aristokrat ve kibar "yaşlı ruhun" ve evrensel insani yardımcının yolu budur.',
    11: "Sezgisel danışman, barıştırıcı ve aydınlanmış halk figürünün yolu budur.",
    22: "Aydınlanmış, sağduyulu, organize, kararlı ve ilham verici vizyonerlerin yolu budur.",
  },

  personality: {
    title: "Kişilik",
    description: "Bu numara perde arkasını veya özel sizi tanımlar.",
    func: "Gün",
    1: "Dinamik, iradeli ve doğal bir lidersiniz ve tek fikre odaklanmanız başarınıza zemin hazırlıyor.",
    2: "Barışçıl, besleyici, şefkatli, kibar ve vazgeçilmez bir arkadaş, eş, çalışan veya patronsun.",
    3: "İnanılmaz derecede yaratıcı ve eğlencelisiniz ve mükemmel bir ev sahibisiniz.",
    4: "Adanmış, detay odaklı ve yorulmak bilmeyen bir çalışansınız ve sözünüz bir altın kadar değerli.",
    5: "Zeki, coşkulu ve güler yüzlü doğanız sizi tanıyan herkese ilham verir ve motive eder.",
    6: "Sorumluluk sahibi, insan odaklı ve güzelliği, doğayı ve evi seven birisiniz.",
    7: "Analitik, araştırma odaklısınız ve bilgi arayışınız çok geniş ve sorgulanamaz.",
    8: "Hırslı, düzenli, kaliteli bir işletmeci, adalet tutkusu olan bir lider olmak için doğmuşsun.",
    9: "Çok yetenekli, yaratıcı ve yetkinsiniz ve başkalarına hizmet ederken gerçek karakterinizdesiniz.",
    10: "Bağımsız, düşünceli ve sorumluluk sahibi bir yapıya ve her durumda olumluyu bulan iyimser bir tutum sahipsiniz.",
    11: 'Hassas, zeki, özgün, ilham verici, iyi bir dinleyicisiniz ve doğal olarak birçokları için "büyük omuzlar" rolünü üstleniyorsunuz. ',
    12: "Büyüleyici, cana yakın ve yaratıcısınız. Güçlü kararlılığınız ve öngörünüz hedeflerinizi tezahür ettirmenize yardımcı oluyor. ",
    13: "Akıllı, bağımsız, gerçekçi ve dürüstsünüz ve herhangi bir kavram, durum veya çabaya olan bağlılığınız, azminiz ve dayanıklılığınız olağanüstü. ",
    14: "Sürekli olarak yeni fikirler ve yaratıcı, pratik kavramlar ve çözümler üreten çelik tuzaklı zihne sahip bir enerji deposusunuz. ",
    15: "Bağımsız, yaratıcı, sanatsal/bilimsel zihniniz, çok çeşitli konularda araştırma ve analiz yapmayı, adaleti ve adaleti savunmayı çok istiyor. ",
    16: "Eşsiz entelektüel, analitik zihniniz, bilgi için sonsuz susuzluğunuzu ayıklamak ve bu arayışta kabul edilen sınırların ötesine geçmek için yalnız zaman geçirmenizi gerektirir. ",
    17: "Zeki, hırslı, cesur, bir ülkeyi yönetmeye yetecek kadar enerji ve canlılığa sahipsin ve mükemmel bir topluluk yöneticisisin!",
    18: "İhtiyacı olanlara yardım ederken elinizden gelenin en iyisini yapan çok yetenekli bir bilgelik, güç, cesaret ve geniş kapsamlı merhamet merkezisiniz. ",
    19: "Maceracı doğanız sizi çeşitliliğe ve değişime özendiriyor; ancak ilham aldığınızda inatçı, özverili ve onurlu bir çalışan, patron, eş ve arkadaş olabilirsiniz. ",
    20: "Sıcakkanlı, yardımsever ve ihtiyatlı doğanız her çalışma ortamında takdir edilir ve hayatınız boyunca birçok arkadaş edinecek ve onları kaybetmeyeceksiniz.",
    21: "İyi huylu, iyimser, ilham verici ve cömertsiniz. Güzelliği, kaliteyi ve eğlenceyi kendinize çekiyorsunuz ve kendi yaratıcılığınız sizi ilgi odağı haline getirebilir. ",
    22: "Olağanüstü disiplin, enerji, mantık ve duyarlılık sergiliyorsunuz ve ustalaşmış, aydınlanmış ve girişimci bir vizyoner zihnine sahipsiniz. ",
    23: "Besleyici, eğlenceyi seven, özgürlüğe odaklı bir ruha sahipsiniz ve hızlı zihniniz, özgünlüğünüz ve zekanız sürekli olarak zeki ve benzersiz fikirleri ve planları ortaya çıkarır. ",
    24: 'Büyüleyici, sosyal, esprili ve bir aşıksın. Vicdanlı ve bağışlayıcı doğanız her zaman "ekstra yol" arama eğilimindedir ve siz şerefli bir arkadaş ve eşsiniz. ',
    25: "Esprili ve bilgesin. Her şeyi merak ediyorsun. Doğuştan gelen bilgelik rezervuarınız ve son derece şefkatli, cömert doğanız genel olarak insanlığa karşı doğuştan gelen sorumluluk duygunuzu doğurur. ",
    26: 'Kişiliğiniz beş yıldızlı bir generalinkine benziyor, kararlı ve komuta sahibi protokollere düşkün bir general. "Altıncı hissiniz", doğruyu yanlışı kolayca sezmenizi ve başkaları için örnek teşkil eden biri olmanızı sağlar. ',
    27: "Yaşlı bir ruhsun ve çok büyük bir içsel bilgiye ve olağanüstü bir algıya sahipsin. Seyahat ve değişim, refahınız için çok önemlidir. ",
    28: "Büyüleyici, bağımsız, doğuştan bir diplomatsınız ve karakteriniz başarılı bir liderin karakteridir. Yüksek idealleriniz ve ilkeleriniz hedeflerinize ulaşmanızı sağlar. ",
    29: 'Nazik, hassas doğanız, insanları size bir mıknatıs gibi çeken bir enerji ve karizma kombinasyonu ile tamamlanmaktadır. "Büyük omuzlarınızı" arayan birçok kişiye yardım etmenizi sağlayan bir altıncı hisse sahipsiniz. ',
    30: "Zeki, yaratıcı, eğlenceyi seven ve büyük bir mizah anlayışıyla kutsanmışsınız ve herhangi bir yaratıcı uğraşa dahil olduğunuzda olağanüstü yeteneklisiniz. Sosyal açıdan ustalaşmış olan doğanız, birçokları arasında öne çıkmanızı sağlar. ",
    31: "Yaratıcı, yenilikçi ve çok miktarda bilgiye sahipsiniz. Vicdanlı, güvenilir ve dakik, aynı zamanda alışkanlıklarına bağlı olan birisin. Kendini adamış eş ve arkadaş olabilirsin.",
  },

  attitude: {
    title: "Tavır",
    description:
      "Bu sayı, hayatınızın ilk 30-35 yılında daha etkilidir ve gençliğinizdeki koşullara nasıl ve neden tepki verdiğinizi temsil eder. ",
    func: "Ay + Gün",
    1: "Güçlü bir irade ve bağımsız bir doğayla doğdunuz. Kendi seçimlerinizi yapmayı tercih ediyorsunuz ve farklı bir yöne itildiğinizde inatçısınız. ",
    2: "Tatlı, nazik, kibar ve genç ruhlu biri olmak için doğdunuz. Yetiştirmeyi, beslenmeyi seviyor, anlayışlı ve duyarlısınız. ",
    3: "Biraz utangaç bir doğanız var ama konuşmayı öğrendiğinizde doğal bir şovmen, maceracı ve büyüleyici olabilirsiniz. ",
    4: "Hassas, inatçı bir mizacınız var ancak övgü ve teşvik ile çok tatlı ve işine saygılı olabilirsiniz. ",
    5: "Bol miktarda enerji ile doğdunuz! Sürekli zihinsel ve fiziksel uyarıma ihtiyacınız var ve sabırsız olduğunuzda öfkeniz alevleniyor. ",
    6: "Sorumlu, vicdanlı, düşünceli ve naziksiniz. Özellikle anne babanıza, kardeşlerinize, arkadaşlarınıza ve doğayla ilgili her şeye karşı şefkatli olmak için doğdunuz.",
    7: "Bilgi, geniş ilgi alanları ve entrika arayışınızı şımartmak için zamana ihtiyaç duyan parlak bir zihinle doğdunuz. ",
    8: 'Yaptığınız her şeyde örnek olmak için doğdunuz; bu sizin kontrollü hissetme ihtiyacınızdan kaynaklanır. Teşvik edildiğinde "dürüst bir öğrenci" olursun. ',
    9: "Daha çok erken yaşta yetişkin benzeri bir duyarlılıkla doğarsınız. Size en yakın olanlardan cesaret ve övgü almanız başarılarınızı körüklüyor. ",
    11: "Sen süper hassas doğdun. Son derece sezgisel, yüksek fikirli ve müzik aşığı; tatlı, nazik ve düşüncelisiniz. ilham aldığınızda yıldız malzemesisiniz. ",
    22: "İnatçı bir çizgiyle doğarsınız, ancak cesaretle çok amaçlı, girişimci ve ilham verici olabilirsiniz. ",
  },

  character: {
    title: "Karakter",
    description:
      "Bu sayı öncelikle kamusal ve sosyal niteliklerinizi temsil eder, ancak aynı zamanda kişisel ilişkilerinizde de aynısını sergilersiniz. ",
    func: "Harfler",
    1: "Özgün ve yenilikçi bir zihne sahip olmak ve de hedeflerinize kararlı bir şekilde odaklanmak, sizi lider olarak nitelendiriyor. ",
    2: "Doğal olarak diplomatik, iyi huylu ve barışçı olan kamusal kişiliğiniz, halkın elçisi niteliğindedir. ",
    3: "İyimser, coşkulu ve yaratıcı yetenekleriniz, seçtiğiniz herhangi bir işte başkalarına ilham verme ve eğlendirme kapasitesi sağlar. ",
    4: "Vicdanlı, organize, sistematik ve güvenilir kamu kişiliğiniz sizi aranan işçi veya bir yönetimin başkanı yapmada kolaylık sağlar. ",
    5: "Büyüleyici, anlaşılır, esnek ve stil bilincine sahip doğanız, sizi bir göreve odaklandığında birçok kişiyle etkileşime girebilecek ve ilham verebilecek bir trend belirleyici yapıyor ",
    6: "Doğuştan insani, toplum odaklı, seçkin bir ebeveyn/öğretmen/insan olarak her zaman diğerlerine göre fazladan yol kat eden örnek bir liderisiniz. ",
    7: "Felsefi açıdan öncü, bilgi arayan bir dahi olarak ilgi odağı olmak istemiyorsunuz; ancak üst düzey öğretmen, profesör veya kariyer uzmanısınız. ",
    8: "Komutan, örnek bir öğretmen, yargıç/jüri/yapımcı/yönetmen personanız, herhangi bir şeyde doğruyu yanlıştan kolayca ayırt etmenizi sağlayan altıncı bir hisse sahiptir. ",
    9: 'Doğuştan bilge, aristokrat, sosyal açıdan hoş bir insan olarak, "özverili hizmetçi" misyonunuzdan en çok yararlanabilecek topluma yöneliyorsunuz. ',
    11: "Empatik, aydınlanmış ve anlayışlı bir danışman veya topluluk lideri olarak ilgi odağı olacaksınız. ",
    22: "Üstün fikirli bir imparatorluk kurucusu zihnine sahip, ruhani odaklı bir organizatör olarak adanmışlığınızı ve açık tarzınızı takdir eden kamusal davalara ve şirketlere yardım etmek için en uygun kişisiniz. ",
  },

  soul: {
    title: "Ruh Dürtüsü",
    description:
      "Bu etki, sezgisel, duygusal benliğinizin bir görünümünü sunar. ",
    func: "Ünlüler",
    1: "Ruhunuzun Dürtüsü yenilikçi, yaratıcı olmak ve kitleleri herkes için şefkat uyandıran daha yüksek bir bilinç ve anlayış alemine götürmektir. ",
    2: "Ruhunuzun Dürtüsü; tanıdıklarınıza ve rahatlattıklarınıza daha besleyici ve sevgi dolu nitelikler getirmek için huzuru, uyumu ve inceliği etkilemektir. ",
    3: "Ruhunuzun Dürtüsü; tutku, keyif, coşku getirmek ve başkalarının hayal gücünü yaratıcılık ve yürekleri ısıtan kavramlar ve ilgi alanlarıyla uyandırmaktır. ",
    4: "Ruhunuzun Dürtüsü; başkalarına ve kendinize ilham verici ve aydınlatıcı sonuçlar elde etmenize yardımcı olmak için dürüstlük, güvenilirlik, pratiklik ve kararlılık sunmaktır. ",
    5: "Ruhunuzun Dürtüsü; insanlığa yüksek fikirli katkılar getirmeye yardımcı olmak için bol enerjinizi, açık fikirliliğinizi ve ilerici zihinsel niteliklerinizi kullanmaktır. ",
    6: "Ruhunuzun Dürtüsü sorumlu, vicdanlı, şefkatli ve herkese karşı nazik olmak ve bu nitelikleri kendiniz sürdürmek için öğretmek, öğüt vermek ve rahatlamaktır. ",
    7: "Ruhunuzun Dürtüsü; analitik, araştırma odaklı ve sorgulayıcı doğanızı, birkaçının aksine birçoklarına yardımcı olacak anlamlı bir şeyi keşfetmek veya ortaya çıkarmak için kullanmaktır. ",
    8: "Ruhunuzun Dürtüsü; başkalarına kalite, tutarlılık ve ilham getirmektir. Bu, doğal inceliğinizi ve başkalarının hayatına dokunuşunuzdaki kalitenizi etkilemektir. ",
    9: "Ruhunuzun Dürtüsü; aristokrat ve insani niteliklerinizi tutarlı bir şekilde kullanmaktır. Bu da başkalarının öykünmesi için zemin hazırlamaya yardımcı olur.",
    11: "Ruhunuzun Dürtüsü; herkesin takdir etmesi ve taklit etmesi için en yüksek ruhsal niteliklerinizin örnekleri olarak barış, uyum, güzellik ve onurdur. ",
    22: "Ruhunuzun Dürtüsü, ruhsal arzusu insanlığa ve dünyaya yüksek fikirlilik ve insancıllıkla yardım etmek ve hizmet etmek olan bir dürtüdür. ",
  },

  agenda: {
    title: "Gizli Gündem",
    description: "Bu gündem, doğuştan gelen (gizli) arzularınızı sunar. ",
    func: "Ünsüzler",
    1: "Bu gündem; bağımsız olma, liderlik etme, yenilik yapma ve özgün ve benzersiz kavramlar ve şeyler yaratma konusunda doğuştan gelen bir arzuyu teşvik ediyor. ",
    2: "Bu gündem; başkaları için saldırgan olmayan, işbirlikçi ve cana yakın insan doğasını etkileyerek, yaşamı barış ve uyum içinde yaşama arzusunu ortaya çıkarır. ",
    3: "Bu gündem; daha yaratıcı, eğlenceli olma ve dünyayı dolaşma arzunuza ilham veriyor. Canlandırıcı kişiliğinizle ilgilenen herkese daha fazla zevk ve neşe veriyor. ",
    4: "Bu gündem; barındırdığınız ve tuttuğunuz doğuştan gelen ihtiyaçları, arzuları ve gönül rahatlığını tezahür ettirmek için mantık, organizasyon ve azim gerektirir. ",
    5: "Bu gündem; her şeyden çok doğuştan gelen bir özgürlük arzusuna ilham verirken, mümkün olduğunca çok seyahat etme ve kısıtlanmadan yaşama becerisi kazandırıyor. ",
    6: "Bu gündem, insanlara, hayvanlara ve güzel yeryüzünün kendisine odaklanan, doğuştan gelen güçlü bir insancıllığa sahiptir.",
    7: "Bu gündem; bilim (ezoterik veya başka türlü), felsefe, sanat ve maneviyatla ilgili bilgi edinme konusunda doğuştan gelen bir açlığı kışkırtır. ",
    8: "Bu gündem; iktidar sahibi olmayı, alkışlanma ve büyük miktarlarda para biriktirme veya kitlelerin aydınlanmış bir öğretmeni olma arzusunu ifade ediyor. ",
    9: "Bu gündem; giyimden arabalara, eğlenceye kadar her şeyin en iyisine ulaşmak için doğuştan gelen bir arzuyu ya da benlik düşüncesi olmadan tamamen insani bir hayat yaşama konusundaki ihtiyacı etkiliyor. ",
    11: "Bu gündem, şifa sanatlarında birçok kişiye yardımcı olacak veya insani hizmetlerinizle tanınır hale gelecek şekilde hizmet etme, danışmanlık yapma veya katılma konusunda doğuştan gelen bir ihtiyacı teşvik ediyor. ",
    22: "Bu gündem, insanlık için büyük bir şey yapma konusunda doğuştan gelen bir arzuya ilham veriyor. Bu size derin bilgileri ölçekleme veya örnek bir ürün veya felsefik bir fikir icat etme yeteneği verir. ",
  },

  purpose: {
    title: "Kutsal Amaç",
    description:
      "Bu sizin veda numaranız. Bu, ruhsal benliğinizin yaşamınızın son yıllarında başarmayı seçtiği şeydir. ",
    func: "Kader + Karakter",
    1: "İlahi Amacınız; öncülük ettiğiniz bir şeyin mirasını geride bırakmaktır - bir konsept, bir ürün, bir temel. ",
    2: "İlahi Amacınız; dostlarınıza ve kardeşlerinize huzur, rahatlık ve uyum getirmektir. ",
    3: "İlahi Amacınız; bir ürün, bir fikir, kitap, film veya başka bir sanatsal ifade biçimi üretmek için yaratıcı hayal gücünüzü kullanmaktır. ",
    4: "İlahi Amacınız odağı insanlara yardım etmek olan istikrarlı bir temel oluşturmaktır. ",
    5: "İlahi Amacınız, gelecek nesiller için hayatı daha iyi hale getiren ilerici değişiklikleri gerçekleştirmeye yardımcı olmaktır. ",
    6: "İlahi Amacınız öğretmek, teşvik etmek ve insani amaçlara yardım etmek, eve ve aileye bakmak ve sosyal olarak sorumlu olmaktır. ",
    7: "İlahi Amacınız bir bilimde, sanatta, felsefede veya bir dinde topladığınız engin bilgiyi yaratıcı bir çaba ile yaymaktır.",
    8: "İlahi Amacınız bir lider veya yönetici olarak liderlik etmek, yönlendirmek, teşvik etmek ve hayırseverlik yoluyla daha az şanslı olanlara yardım etmektir. ",
    9: "İlahi Amacınız insanlığın evrensel iyiliği için çalışan bir insan olmaktır - iyi bir ebeveyn, iyi bir eş ve iyi bir vatandaş; bir hayırsever, bir bakan, bir politikacı. ",
    11: "İlahi Amacınız insanlara ruhsal, psikolojik ve zihinsel planlarda yardım etmektir. Başkalarını bilge sözlerler yükseltmek, dinlemek, tavsiye vermek ve başkalarının hayatlarının yolculuğunda ilerlemelerine yardımcı olmaktır. ",
    22: "İlahi Amacınız organize etmek ve inşa etmektir. Başkalarına iş sunan, topluma ve belki de dünyanın her yerine hizmet yoluyla insanlara yardım eden bir ticari girişim sürdürmek. ",
    22: "İlahi Amacınız başkalarına iş sunan ve topluma ve belki de tüm dünyaya hizmet yoluyla insanlara yardım eden bir ticari girişimi sürdürmek için organize ve inşa etmektir.",
  },
};
