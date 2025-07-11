export const Breadcrumbs = ({title, subtitle}) => {
  return (
    <div className="mb-12">
        <p className="text-xl text-gray-400">{title}</p>
        <h1 className="text-3xl font-bold">{subtitle}</h1>
    </div>
  )
}