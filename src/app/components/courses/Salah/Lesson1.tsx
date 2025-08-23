import { Hand } from "lucide-react";

function SalahLesson1() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Hand className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Preparation for Prayer
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Before beginning the prayer, ensure you have completed these
            essential preparations that set the foundation for a meaningful
            connection with Allah.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              1. Ensure Ritual Purity (Tahara)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Perform Wudu (ablution) if you are not in a state of ritual
                purity. Wudu involves washing specific body parts with water.
                Ensure your body, clothes, and the place of prayer are clean
                (Tahir) and free from impurities (Najasah).
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Quran 5:6 (on Wudu); Fiqh principles on Taharah.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              2. Covering the Awrah (Proper Attire)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Men: Cover the area from the navel to the knees at a minimum. It
                is preferable to wear clean and modest clothing that also covers
                the shoulders. Women: Cover the entire body except for the face
                and hands. Clothing should be loose-fitting and not transparent.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Based on Quran 7:31, Quran 24:31; Hadith such as
                  Abu Dawud 641.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              3. Face the Qiblah (Direction of Prayer)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Turn to face the direction of the Ka'bah in Makkah. If unsure,
                make your best estimation.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Quran 2:144, Quran 2:149-150.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              4. Make the Intention (Niyyah)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Silently make the intention in your heart for the specific
                prayer you are about to perform (e.g., "I intend to pray the
                obligatory Dhuhr prayer for Allah"). The intention does not need
                to be uttered verbally.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Hadith: 'Actions are (judged) by intentions...'
                  (Sahih al-Bukhari 1, Sahih Muslim 1907).
                </p>
              </blockquote>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default SalahLesson1;
