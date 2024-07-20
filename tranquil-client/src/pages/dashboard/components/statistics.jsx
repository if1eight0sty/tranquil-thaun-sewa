export default function Statistics() {
  return (
    <div className="mt-3 bg-gray-600 rounded dark:text-gray-100">
      <div className="container px-4 py-10 mx-auto lg:px-8 lg:py-16 xl:max-w-7xl">
        <div className="grid grid-cols-1 text-center divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-gray-300/75">
          <dl className="px-5 py-8 space-y-1">
            <dt className="text-4xl font-extrabold text-black dark:text-white">
              8,600+
            </dt>
            <dd className="text-sm font-semibold tracking-wide text-blue-600 uppercase dark:text-blue-500">
              Rooms
            </dd>
          </dl>
          <dl className="px-5 py-8 space-y-1">
            <dt className="text-4xl font-extrabold text-black dark:text-white">
              2,500+
            </dt>
            <dd className="text-sm font-semibold tracking-wide text-blue-600 uppercase dark:text-blue-500">
              Clients
            </dd>
          </dl>
          <dl className="px-5 py-8 space-y-1">
            <dt className="text-4xl font-extrabold text-black dark:text-white">
              760k+
            </dt>
            <dd className="text-sm font-semibold tracking-wide text-blue-600 uppercase dark:text-blue-500">
              Earnings
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
