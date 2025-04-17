export const metadata = {
  title: "Search Results",
  description: "Buscador de Google",
};
import React from "react";
import Header from "../components/Header";

async function getResults(query) {
  const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
  const contextKey = process.env.GOOGLE_CONTEXT_KEY;

  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${query}`).then(res => res.json());

  return res;
}

const Search = async ({searchParams}) => {
  const query = searchParams.q;
  // console.log("QUERY RECIBIDO", query);
  
  const res = await getResults(query);
  const results = res.items;
  console.log(results);
  

  
 
  return (
    <div>
      {/* Header */}
      <Header />
      {results?.length > 0 ? (
        <div className="max-w-3xl mx-auto px-4 mt-6">
          {results.map((result, index) => (
            <div key={index} className="mb-8">
              <div className="text-sm text-gray-600">
                {result.displayLink}
              </div>
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl text-blue-800 hover:underline"
              >
                {result.title}
              </a>
              <p className="text-sm text-gray-700 mt-1">
                {result.snippet}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-500">No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default Search;

/*   export async function getServerSideProps(context) {
    const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
    const contextKey = process.env.GOOGLE_CONTEXT_KEY;
    const useDummyData = false;

    const data = await fetch(`https://www.google.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${context.query.term}`
    ).then(res => res.json()); // resultados del server

    // ahora pasamos el res al cliente
    return {
      props:{
        res: data,
      }
    }
  } */
