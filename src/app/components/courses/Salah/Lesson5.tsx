import { Heart } from "lucide-react";

function SalahLesson5() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Heart className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Achieving Khushu (Humility and Concentration)
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Khushu is the state of humility, concentration, and mindfulness
            during prayer. Here are some tips to help you achieve it.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Prepare Your Heart Before Prayer
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Take a moment before starting to remember that you are about to
                stand before Allah. Clear your mind of worldly thoughts and
                focus on the purpose of prayer.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Inspired by Quran 2:45 on prayer with patience and
                  humility.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Understand What You Are Reciting
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Learn the meanings of the Quranic verses and supplications you
                recite in prayer. Understanding enhances concentration and
                connection.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Quran 47:24 encourages reflection upon the Quran.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Pray in a Clean, Quiet Environment
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Choose a clean, distraction-free space for prayer. Remove visual
                and auditory distractions that might divert your attention.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Islamic principles on creating appropriate prayer
                  environments.
                </p>
              </blockquote>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Make Sincere Dua
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                During Sujud (prostration), make personal supplications to
                Allah. This is one of the times when duas are most likely to be
                accepted.
              </p>
              <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 py-2 my-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Reference: Hadith: 'The closest that a person is to his Lord
                  is when he is prostrating...' (Sahih Muslim 482).
                </p>
              </blockquote>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default SalahLesson5;
