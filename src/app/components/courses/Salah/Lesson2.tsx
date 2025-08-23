import { Book } from "lucide-react";

function SalahLesson2() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Book className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Prayer Steps - Part 1
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Follow these steps carefully to perform the prayer. This lesson
            covers the beginning of the prayer from Takbir to Ruku.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              1. Takbir al-Ihram (Opening Takbir)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Begin the prayer by raising both hands to the shoulders or
                earlobes and saying 'Allāhu Akbar'. This signifies the start of
                the prayer.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-3xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  اللهُ أَكْبَر
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Allāhu Akbar
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "Allah is the Greatest"
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Sahih al-Bukhari 735-739
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              2. Opening Supplication (Tawjeeh / Sanaa)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                After the opening Takbir, place your right hand over your left
                on your chest and recite an opening supplication. The following
                are recited based on the school of thought.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Shafi'i School:
                  </h3>
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ
                    حَنِيفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ
                    صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ
                    الْعَالَمِينَ، لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا
                    مِنَ الْمُسْلِمِينَ.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Wajjahtu wajhiya lilladhī faṭara s-samāwāti wa-l-arḍa
                    ḥanīfan musliman wa mā ana mina-l-mushrikīn. Inna ṣalātī wa
                    nusukī wa maḥyāya wa mamātī lillāhi rabbi-l-ʿālamīn. Lā
                    sharīka lahū wa bidhālika umirtu wa ana mina-l-muslimīn.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "I have turned my face towards the One who created the
                    heavens and the earth, as a monotheist, a Muslim, and I am
                    not of the polytheists. Indeed, my prayer, my rites of
                    sacrifice, my living and my dying are for Allah, Lord of the
                    worlds. No partner has He. And this I have been commanded,
                    and I am of the Muslims."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    Reference: Muslim: 201, Abu Dawood: 760
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Hanafi School:
                  </h3>
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ،
                    وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Subḥānaka Allāhumma wa biḥamdika, wa tabāraka ismuka, wa
                    ta'ālā jadduka, wa lā ilāha ghayruk.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "Glory be to You, O Allah, and all praise is Yours, and
                    blessed is Your name, and exalted is Your majesty, and there
                    is no deity worthy of worship except You."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    Reference: Abu Dawood: 776
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              3. Recitation of Surah Al-Fatihah
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                After seeking refuge with Allah from Satan (Ta'awwudh), recite
                Surah Al-Fatihah. It is a pillar of the prayer.
              </p>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Bismi-llāhi r-raḥmāni r-raḥīm
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "In the Name of Allah, the Most Beneficent, the Most
                    Merciful."
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Al-ḥamdu li-llāhi rabbi l-ʿālamīn
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "All Praise be to Allah, the Lord of the worlds."
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    الرَّحْمَنِ الرَّحِيمِ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Ar-raḥmāni r-raḥīm
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "The Most Beneficent, the Most Merciful."
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    مَالِكِ يَوْمِ الدِّينِ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Māliki yawmi d-dīn
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "Master of the Day of Resurrection."
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Iyyāka naʿbudu wa iyyāka nastaʿīn
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "You (alone) we worship, and you (alone) we ask for help."
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Ihdinā ṣ-ṣirāṭa l-mustaqīm
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "Guide us to the straight way."
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Ṣirāṭa lladhīna anʿamta ʿalayhim
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "The way of those on whom you have bestowed your grace,"
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Ghayri l-maghḍūbi ʿalayhim walā ḍ-ḍāllīn
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "Not (the way) of those who earned your anger, nor of those
                    who went astray."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              4. Ruku (Bowing)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Say 'Allāhu Akbar' and bow, keeping your back straight and
                placing your hands on your knees. Recite the following:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-3xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Subḥāna rabbī l-ʿaẓīmi wa biḥamdihi
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "Glory be to my Lord, the Exalted; and praise be to Him."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Muslim: 320, Abu Dawood: 870
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default SalahLesson2;
