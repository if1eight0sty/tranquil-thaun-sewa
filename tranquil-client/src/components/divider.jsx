export default function Divider({ title }) {
  return (
    <>
      <h3 className="flex items-center my-8">
        <span
          aria-hidden="true"
          className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
        />
        <span className="mx-3 text-lg font-medium">{title}</span>
        <span
          aria-hidden="true"
          className="h-0.5 grow rounded bg-gray-200 dark:bg-gray-700/75"
        />
      </h3>
    </>
  );
}
