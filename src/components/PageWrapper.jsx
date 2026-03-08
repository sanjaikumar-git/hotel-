function PageWrapper({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          {title}
        </h1>

        <div className="bg-white rounded-xl shadow p-6 page-animation">
          {children}
        </div>
      </div>
    </div>
 
  );
}




export default PageWrapper;
