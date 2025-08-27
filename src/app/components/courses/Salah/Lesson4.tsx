/* eslint-disable react/no-unescaped-entities */
import { Sparkles } from "lucide-react";

function SalahLesson4() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Sparkles
                className="text-gray-600 dark:text-gray-400"
                size={24}
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Post-Prayer Adhkar
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            After completing the obligatory prayer, it is a Sunnah to engage in
            these remembrances of Allah.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Initial Supplication
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ
                  يَا ذَا الْجَلَالِ وَالْإِكْرَامِ
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Allāhumma anta-s-salām, wa minka-s-salām, tabārakta yā
                  dhā-l-jalāli wa-l-ikrām.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "O Allah, You are Peace and from You comes peace. Blessed are
                  You, O Owner of Majesty and Honor."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Muslim: 592
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Ayat al-Kursi
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Recite Ayat al-Kursi (Quran 2:255) once.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: An-Nasa'i, verified in Sahih al-Jami' 6464
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Tasbeeh-e-Fathimi
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Recite the following remembrances:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  سُبْحَانَ اللّٰهِ (33)
                  <br />
                  الْحَمْدُ لِلَّهِ (33)
                  <br />
                  اللَّهُ أَكْبَرُ (34)
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Subḥānallāh (33 times)
                  <br />
                  Alḥamdulillāh (33 times)
                  <br />
                  Allāhu Akbar (34 times)
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "Glory be to Allah (33 times)
                  <br />
                  Praise be to Allah (33 times)
                  <br />
                  Allah is the Greatest (34 times)"
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Muslim: 596
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Three Quls
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Recite Surah Al-Ikhlas, Surah Al-Falaq, and Surah An-Nas. Recite
                them three times each after Fajr and Maghrib prayers.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Ahmad: 5082
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              For Protection
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Recite the following three times, especially after Fajr and
                Maghrib:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي
                  الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Bismi-llāhi-lladhī lā yaḍurru maʿa-smihi shayʾun fi-l-arḍi wa
                  lā fi-s-samāʾi wa huwa-s-samīʿu-l-ʿalīm.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "In the name of Allah, with whose name nothing on earth or in
                  the heavens can cause harm, and He is the All-Hearing, the
                  All-Knowing."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Abu Dawood: 5088
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Seeking Refuge from Hellfire
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Recite the following seven times after Fajr and Maghrib prayers:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Allāhumma ajirnī mina-n-nār.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "O Allah, protect me from the Fire."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Abu Dawood: 5079
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default SalahLesson4;
