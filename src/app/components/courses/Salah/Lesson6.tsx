import { Eye } from "lucide-react";

function SalahLesson6() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Eye className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Common Mistakes to Avoid
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Be aware of these common mistakes that can affect the validity or
            quality of your prayer.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Rushing Through Prayer
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Praying too quickly without proper pauses and reflection. Take
                your time with each movement and recitation to maintain khushu.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Hadith emphasizes the importance of tranquility in
                  prayer.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Not Making Proper Wudu
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Incomplete or incorrect ablution invalidates the prayer. Ensure
                all required parts are washed properly and in the correct order.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Quran 5:6 and various hadith on the importance of
                  proper wudu.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Distractions During Prayer
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Allowing worldly thoughts, phone notifications, or other
                distractions to interfere with prayer concentration.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Islamic teachings emphasize the importance of
                  focused worship.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Incorrect Posture
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Not maintaining proper posture during standing, bowing, and
                prostration. Each position has specific requirements for
                validity.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Various hadith describe the proper way to perform
                  prayer movements.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Skipping Essential Parts
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Missing obligatory parts of prayer such as Surah Al-Fatihah,
                proper takbir, or taslim. Each component is essential for prayer
                validity.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Hadith: 'There is no prayer for the one who does
                  not recite the Opening of the Book.' (Bukhari 756).
                </p>
              </blockquote>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default SalahLesson6;
